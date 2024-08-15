import { MdAdd } from "react-icons/md";
import { useState, useEffect } from "react";
import UsersTable from "./components/usersTable";
import AddUser from "./components/addUser/addUser";
import useRefetch from "../../../hooks/server/useRefetch";
import TypeSelect from "../../../componets/fields/typeSelect/typeSelect";
import RoleUpdateModal from "./components/roleUpdate/roleUpdateModal";
import TypeSearch from "../../../componets/fields/typeSearch/typeSearch";

const Users = () => {
  const [page, setPage] = useState(1);
  const [user, setUser] = useState(null);
  const [filterBy, setFilterBy] = useState("");
  const [isAddOpen, setAddOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditOpen, setEditOpen] = useState(false);
  const { data, loading, refetch } = useRefetch(
    `/users?name=${searchTerm}&role=${filterBy}&page=${page}&limit=${10}`
  );

  useEffect(() => {
    refetch();
  }, [searchTerm, filterBy, page, refetch]);

  const handleRefetch = async () => {
    setSearchTerm("");
    setFilterBy("");
    setPage(1);
    refetch();
  };

  const headers = [
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Role", accessor: "role" },
    { header: "Actions", accessor: "actions" },
  ];

  const handleEditClick = (user) => {
    setUser(user);
    setEditOpen(true);
  };

  const modifiedusers = data
    ? data.users.map((user) => ({
        ...user,
        role: (
          <span className="px-3 py-1 bg-red-50 font-semibold text-sm">
            {user?.role}
          </span>
        ),
        actions: (
          <button
            onClick={() => handleEditClick(user)}
            className="font-montserrat font-semibold text-xs px-3 py-1 rounded bg-yellow-300 hover:bg-yellow-400 transition-all duration-300"
          >
            Edit
          </button>
        ),
      }))
    : [];

  return (
    <>
      <div className="relative py-5 shadow-md bg-white rounded-sm border border-opacity-25">
        <div className="absolute top-3 h-10 w-[2px] bg-blue-600" />
        <h1 className="px-3 md:px-5 text-xl font-montserrat font-semibold">
          User Management Table
        </h1>
        <hr className="my-3 w-full" />
        <div className="flex flex-wrap items-start md:items-center justify-normal md:justify-between px-3 md:px-5 gap-2">
          <div className="flex flex-col sm:flex-row items-start gap-2">
            <TypeSearch
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              handleRefetch={handleRefetch}
            />
            <TypeSelect
              value={filterBy}
              onSelect={setFilterBy}
              options={["admin", "user"]}
              placeholder="Filter by role"
              className="w-full sm:w-auto"
            />
          </div>
          <button
            onClick={() => setAddOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded bg-blue-200 hover:bg-blue-400 font-montserrat font-semibold text-blue-700 hover:text-white text-xs sm:text-sm transition-all duration-300"
          >
            <MdAdd className="text-lg sm:text-xl" />
            Add User
          </button>
        </div>
        <UsersTable
          headers={headers}
          modifiedusers={modifiedusers}
          loading={loading}
          totalPages={data?.totalPages || 1}
          currentPage={page}
          onPageChange={setPage}
        />
      </div>
      {isAddOpen && (
        <AddUser
          isOpen={isAddOpen}
          onClose={() => setAddOpen(false)}
          refetch={handleRefetch}
        />
      )}
      {isEditOpen && (
        <RoleUpdateModal
          isOpen={isEditOpen}
          onClose={() => setEditOpen(false)}
          user={user}
          refetch={handleRefetch}
        />
      )}
    </>
  );
};

export default Users;
