import PrimaryBtn from '../../../../componets/common/buttons/primaryBtn/primaryBtn';
import TypeTextArea from '../../../../componets/fields/typeTextArea/typeTextArea';
import TypeText from '../../../../componets/fields/typeText/typeText';
import useAuth from '../../../../hooks/providers/useAuth';
import PropTypes from 'prop-types';
import { useState } from 'react';

const AccountSettings = ({ user = {}, setTab }) => {
  const { updateUser } = useAuth();
  const [formData, setFormData] = useState({
    id: user?._id || '',
    name: user?.name || '',
    phoneNumber: user?.phoneNumber || '',
    bio: user?.bio || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      await updateUser(formData);
      console.log('Update successful');
      setTab(0)
    } catch (error) {
      console.error('Failed to update user:', error);
      // Optionally, handle error (e.g., show an error message)
    }
  };
  

  return (
    <div className="w-full shadow-sm border border-gray-200/75 p-5">
      <h1 className="text-3xl font-montserrat font-bold text-blue-500 mb-5">
        Account Settings
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TypeText
          name="name"
          value={formData.name}
          onChange={handleChange}
          label="Name"
        />
        <TypeText
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          label="Phone Number"
        />
        <div className="col-span-2">
          <TypeTextArea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            label="Bio"
          />
        </div>
        <PrimaryBtn
          type="button"
          onClick={handleUpdate}
          className="bg-blue-400 text-white text-sm px-8 py-3 rounded-lg transition duration-300 hover:bg-blue-500"
        >
          Save Changes
        </PrimaryBtn>
      </div>
    </div>
  );
};

AccountSettings.propTypes = {
  user: PropTypes.object,
  setTab: PropTypes.func
};

export default AccountSettings;
