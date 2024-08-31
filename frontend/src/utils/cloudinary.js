 const cloud_name = 'dnzobt3pg';

const uploadImage = async (file) => {
  if (!file) {
    throw new Error('No file provided for upload');
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'Multi-Shop');

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      {
        method: 'POST',
        body: formData,
      },
      {
        params: {
          transformation: [{ effect: 'remove_bg' }],
        },
      }
    );
    const data = await response.json();

    return {
      url: data.secure_url,
      public_id: data.public_id,
      formData,
    };
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

export default uploadImage;
