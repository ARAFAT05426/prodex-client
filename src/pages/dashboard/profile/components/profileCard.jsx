import { useEffect, useState } from "react";
import { HiSortDescending } from "react-icons/hi";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiUserListBold } from "react-icons/pi";
import { RiCalendarEventLine } from "react-icons/ri";
import { SlEnergy } from "react-icons/sl";
import { TbPhoneCall } from "react-icons/tb";
import useAuth from "../../../../hooks/providers/useAuth";

const ProfileCard = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState({
    displayName: "",
    email: "",
    role: "",
    phoneNumber: "",
    creationTime: "",
    bio: "",
  });
  useEffect(() => {
    if (user) {
      setProfile({
        displayName: user.displayName || "User Name",
        email: user.email || "user@admin.com",
        role: user.role || "N/A",
        phoneNumber: user.phoneNumber || "N/A",
        creationTime: user.metadata?.creationTime || "Date not available",
        bio: user.bio || "N/A....",
      });
    }
  }, [user]);

  const formatDate = (dateString) => {
    if (!dateString) return "Date not available";
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="w-full mt-3 border rounded p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5 font-montserrat font-medium bg-white">
      <h1 className="text-3xl font-semibold col-span-1 md:col-span-3 lg:col-span-3 text-blue-600">
        Personal Infos
      </h1>
      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded border border-gray-200 shadow-sm">
        <PiUserListBold className="text-4xl text-blue-500" />
        <div>
          <h2 className="font-semibold">Name:</h2>
          <span className="font-medium text-sm text-gray-700">
            {profile.displayName}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded border border-gray-200 shadow-sm">
        <MdOutlineMailOutline className="text-4xl text-blue-500" />
        <div>
          <h2 className="font-semibold">Email:</h2>
          <span className="font-medium text-sm text-gray-700">
            {profile.email}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded border border-gray-200 shadow-sm">
        <SlEnergy className="text-4xl text-blue-500" />
        <div>
          <h2 className="font-semibold">Role:</h2>
          <span className="font-medium text-sm text-gray-700">
            {profile.role}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded border border-gray-200 shadow-sm">
        <TbPhoneCall className="text-4xl text-blue-500" />
        <div>
          <h2 className="font-semibold">Phone Number:</h2>
          <span className="font-medium text-sm text-gray-700">
            {profile.phoneNumber}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded border border-gray-200 shadow-sm">
        <RiCalendarEventLine className="text-4xl text-blue-500" />
        <div>
          <h2 className="font-semibold">Joined:</h2>
          <span className="font-medium text-sm text-gray-700">
            {formatDate(profile.creationTime)}
          </span>
        </div>
      </div>
      <div className="col-span-1 md:col-span-3 p-4 bg-gray-50 rounded border border-gray-200 shadow-sm">
        <h2 className="font-semibold mb-2 flex items-center">
          <HiSortDescending className="text-3xl text-blue-500" /> Bio:
        </h2>
        <p className="font-medium text-sm text-gray-700">{profile.bio}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
