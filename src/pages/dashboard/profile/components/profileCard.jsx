import PropTypes from "prop-types";
import { HiSortDescending } from "react-icons/hi";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiUserListBold } from "react-icons/pi";
import { RiCalendarEventLine } from "react-icons/ri";
import { SlEnergy } from "react-icons/sl";
import { TbPhoneCall } from "react-icons/tb";

const ProfileCard = ({ user = {} }) => {
  // Function to format the date
  const formatDate = (dateString) => {
    if (!dateString) return "Date not available";
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="w-full border rounded p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5 font-montserrat font-medium bg-white">
      <h1 className="text-3xl font-semibold col-span-1 md:col-span-3 lg:col-span-3 text-blue-600">
        Personal Infos
      </h1>
      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded border border-gray-200 shadow-sm">
        <PiUserListBold className="text-4xl text-blue-500" />
        <div>
          <h2 className="font-semibold">Name:</h2>
          <span className="font-medium text-sm text-gray-700">
            {user?.name || "User Name"}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded border border-gray-200 shadow-sm">
        <MdOutlineMailOutline className="text-4xl text-blue-500" />
        <div>
          <h2 className="font-semibold">Email:</h2>
          <span className="font-medium text-sm text-gray-700">
            {user?.email || "user@admin.com"}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded border border-gray-200 shadow-sm">
        <SlEnergy className="text-4xl text-blue-500" />
        <div>
          <h2 className="font-semibold">Role:</h2>
          <span className="font-medium text-sm text-gray-700">
            {user?.role || "User"}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded border border-gray-200 shadow-sm">
        <TbPhoneCall className="text-4xl text-blue-500" />
        <div>
          <h2 className="font-semibold">Phone Number:</h2>
          <span className="font-medium text-sm text-gray-700">
            {user?.phoneNumber || "01918348942"}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded border border-gray-200 shadow-sm">
        <HiSortDescending className="text-4xl text-blue-500" />
        <div>
          <h2 className="font-semibold">Status:</h2>
          <span className="font-medium text-sm text-gray-700">
            {user?.accountStatus || "Active"}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded border border-gray-200 shadow-sm">
        <RiCalendarEventLine className="text-4xl text-blue-500" />
        <div>
          <h2 className="font-semibold">Joined:</h2>
          <span className="font-medium text-sm text-gray-700">
            {formatDate(user?.createdAt) || "28 May 1996"}
          </span>
        </div>
      </div>
      <div className="col-span-1 md:col-span-3 p-4 bg-gray-50 rounded border border-gray-200 shadow-sm">
        <h2 className="font-semibold mb-2 flex items-center">
          <HiSortDescending className="text-3xl text-blue-500" /> Bio:
        </h2>
        <p className="font-medium text-sm text-gray-700">
          {user?.bio || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia fugiat autem vero est deleniti quo neque magnam eos, asperiores laborum saepe doloribus aperiam sapiente, in hic dicta nihil aspernatur vel perferendis sequi. Laborum dolorum animi tempora placeat doloribus voluptate asperiores quam neque, odit quidem corporis tenetur? Rem aliquid eum facilis laboriosam nesciunt, ea atque, accusantium ducimus, consequatur animi officia provident iure esse harum hic exercitationem dolores. Accusamus laboriosam qui dolore deleniti debitis corporis praesentium laudantium iusto. Iusto molestias similique deleniti provident possimus accusamus non aut distinctio officia consequuntur veritatis vitae quam odit eveniet assumenda, enim saepe excepturi, quo blanditiis fugiat ex consectetur impedit! Tempore tempora animi ex, veniam explicabo aperiam. Dolore saepe voluptatibus eius doloribus facilis explicabo deserunt excepturi nostrum totam quas in neque minus maiores molestias blanditiis possimus ullam repellat delectus, voluptate, tempora eos nesciunt nisi laudantium dignissimos. Error eum odio, omnis voluptatem at odit non et incidunt debitis voluptate expedita eos nesciunt ullam aliquam temporibus nihil veritatis unde necessitatibus repellat quo animi ab nobis. Mollitia nesciunt, ad perferendis voluptas tenetur repellat pariatur odit."}
        </p>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  user: PropTypes.object,
};

export default ProfileCard;
