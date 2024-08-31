<<<<<<< HEAD
const upload_preset = process.env.REACT_APP_PRESET_NAME || "Multi-Shop";
const cloud_name = "dnzobt3pg";
const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", upload_preset);
  formData.append("crop", "fill, pad");
  formData.append("remove_background", "true");
  formData.append("gravity", "center");
  formData.append("width", 500);
  formData.append("height", 500);
=======
const upload_preset = process.env.REACT_APP_PRESET_NAME || 'Multi-Shop';
const cloud_name = 'dnzobt3pg';

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', upload_preset);
  formData.append('crop');
  formData.append('remove_background', 'true');
  formData.append('gravity', 'center');
  formData.append('width', 500);
  formData.append('height', 500);

>>>>>>> f58b326401fe472e2d3d1fce456ceae9521dc86b
  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload/e_background_removal/docs/rmv_bgd/dog_couch_orig`,
      {
        method: 'POST',
        body: formData,
      }
    );
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error?.message || 'Failed to upload image');
    }
    return {
      url: data.secure_url, // Debugging
      public_id: data.public_id,
      formData,
    };
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};
export default uploadImage;
