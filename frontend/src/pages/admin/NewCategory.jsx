import React, { useState } from "react";
import uploadImage from "../../utils/cloudinary";
import { BASE_URL } from "../../config";
import { toast } from "react-toastify";

const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));

      try {
        const uploadData = await uploadImage(file);
        console.log("Uploaded Image Data:", uploadData);
        if (uploadData && uploadData.url) {
          setUploadedImageUrl(uploadData.url) ;
        } else {
          throw new Error("Image URL not received from Cloudinary.");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Error uploading image. Please try again.");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!uploadedImageUrl) {
      toast.error("Image is required.");
      return;
    }

    const formData = {
      name: productName,
      image: uploadedImageUrl,
    };

    console.log("Form Data Submitted:", formData);
    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/category`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message);
      }

      toast.success("Successfully Added!");
      setProductName("");
      setImagePreview(null);
      setUploadedImageUrl(null);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[75%] mx-auto bg-white p-8 rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="product-name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Category Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="product-name"
            placeholder="Enter category name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="image-upload"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Upload Image <span className="text-red-500">*</span>
          </label>
          <div
            className="border-2 border-dashed border-gray-300 p-4 rounded-lg text-center cursor-pointer hover:border-primary h-40 flex items-center justify-center"
            onClick={() => document.getElementById("image-upload").click()}
          >
            {imagePreview ? (
              <img src={imagePreview} alt="Selected" className="max-h-full" />
            ) : (
              <p className="text-black">
                Drop your image here or click to browse
              </p>
            )}
          </div>
          <input
            type="file"
            id="image-upload"
            className="hidden"
            onChange={handleImageChange}
            accept="image/*"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
