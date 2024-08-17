import { useState } from "react";
import ProfileCard from "./components/profileCard";
import useAuth from "../../../hooks/providers/useAuth";
import { RiImageAddLine } from "react-icons/ri";
import useImageUpload from "../../../hooks/server/useImageUpload";
import { FaSpinner } from "react-icons/fa";

const Profile = () => {
  const { user, updateUserProfile } = useAuth();
  const { uploadImage, loading: imageUploadLoading } = useImageUpload();
  const [localUser, setLocalUser] = useState(user);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const imageUrl = await uploadImage(file);
        await updateUserProfile({ photoURL: imageUrl });
        setLocalUser((prevUser) => ({
          ...prevUser,
          photoURL: imageUrl,
        }));
        console.log("Image URL updated:", imageUrl);
      } catch (error) {
        console.error("Failed to upload image:", error);
      }
    }
  };

  return (
    <div className="relative mx-3 my-10">
      {/* Top Section */}
      <div className="relative bg-zinc-50/75 min-h-96 shadow rounded-sm overflow-hidden">
        <div
          className="min-h-80 flex flex-wrap items-end gap-3 bg-cover bg-no-repeat bg-center px-5"
          style={{ backgroundImage: `url('/profilebg.png')` }}
        >
          <div className="relative flex items-end gap-3 mb-5 md:-mb-7">
            <div className="relative w-32 h-32 md:w-48 md:h-48">
              <img
                src={localUser?.photoURL || "/default-profile.png"}
                alt="Profile"
                className="h-full object-cover border-2 border-blue-400 rounded-sm"
              />
              <label className="absolute z-10 right-0 bottom-0 m-2 text-xl p-2 rounded-full bg-blue-400 text-white cursor-pointer">
                <RiImageAddLine />
                <input
                  type="file"
                  className="hidden"
                  onChange={handleImageUpload}
                  accept="image/*"
                />
              </label>
              {imageUploadLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                  <FaSpinner className="animate-spin text-white text-3xl" />
                  <span className="text-white ml-2">Uploading...</span>
                </div>
              )}
            </div>
            <div className="mb-5 sm:mb-10 font-montserrat space-y-1 text-white">
              <h1 className="font-semibold text-xl sm:text-2xl">
                {localUser?.displayName || "User Name"}
              </h1>
              <span className="font-medium text-sm sm:text-lg">
                {localUser?.role}
              </span>
            </div>
          </div>
        </div>
      </div>
      <ProfileCard user={localUser} />
    </div>
  );
};

export default Profile;
