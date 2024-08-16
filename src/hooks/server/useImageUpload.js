import { useState } from 'react';
import axios from 'axios';

const useImageUpload = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const uploadImage = async (file) => {
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('image', file);

      const apiKey = import.meta.env.VITE_IMGBB;
      if (!apiKey) throw new Error('API key is not set');

      const response = await axios.post(`https://api.imgbb.com/1/upload?key=${apiKey}`, formData);
      setLoading(false);
      return response.data.data.display_url;
    } catch (err) {
      setLoading(false);
      setError(err.message || 'Failed to upload image.');
      console.log(err);
      throw err;
    }
  };

  return { uploadImage, loading, error };
};

export default useImageUpload;
