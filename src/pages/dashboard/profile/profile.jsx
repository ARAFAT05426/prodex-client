import { useState } from "react";
import AccountSettings from "./components/accountSetting";
import ProfileCard from "./components/profileCard";
import useAuth from "../../../hooks/providers/useAuth";
import { RiImageAddLine } from "react-icons/ri";

const Profile = () => {
  const [tab, setTab] = useState(0);
  const { user } = useAuth();
  return (
    <div className="relative mx-3 my-10">
      {/* Top Section */}
      <div className="relative bg-zinc-50 min-h-96 shadow rounded-sm overflow-hidden">
        <div
          className="min-h-80 flex flex-wrap items-end gap-3 bg-cover bg-no-repeat bg-center px-5"
          style={{ backgroundImage: `url('/profilebg.png')` }}
        >
          <div className="relative flex items-end gap-3 mb-5 md:-mb-7">
            <div className="relative w-32 h-32 md:w-48 md:h-48 ">
              <img
                src={user?.profilePicture}
                alt="Profile"
                className="h-full object-cover border-2 border-blue-400 rounded-sm"
              />
              <RiImageAddLine className="absolute z-10 right-0 bottom-0 m-2 text-4xl p-2 rounded-full bg-blue-400 text-current" />
            </div>
            <div className="mb-5 sm:mb-10 font-montserrat space-y-1 text-white">
              <h1 className="font-semibold text-xl sm:text-2xl">
                {user?.name || "User Name"}
              </h1>
              <span className="font-medium text-sm sm:text-lg">
                {user?.role}
              </span>
            </div>
          </div>
        </div>
        {/* Tab Buttons */}
        <div className="absolute bottom-0 inset-x-1/2 flex lg:inset-x-[14%] items-start font-montserrat font-semibold">
          <button
            onClick={() => setTab(0)}
            className={`px-3 py-2 border-b-2 ${
              tab === 0 ? "border-b-blue-400" : "border-b-transparent"
            } border-b-blue-400 transition duration-300`}
          >
            Infos
          </button>
          <button
            onClick={() => setTab(1)}
            className={`px-3 py-2 border-b-2 ${
              tab === 1 ? "border-b-blue-400" : "border-b-transparent"
            } border-b-blue-400 transition duration-300`}
          >
            Edit
          </button>
        </div>
      </div>
      {/* Tabs Container */}
      <div className="mt-5">
        {tab === 0 && <ProfileCard user={user} />}
        {/* <AccountSettings /> */}
        {tab === 1 && <AccountSettings user={user} setTab={setTab} />}
      </div>
    </div>
  );
};

export default Profile;
