const upload_preset = process.env.REACT_APP_PRESET_NAME || "Multi-Shop";
const cloud_name = "dnzobt3pg";

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", upload_preset);
  formData.append("crop", "fill, pad");
  formData.append("gravity", "center");
  formData.append("width", 500);
  formData.append("height", 500);

  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error?.message || "Failed to upload image");
    }

    return {
      url: data.secure_url,
      public_id: data.public_id,
      formData,
    };
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

export default uploadImage;
