import React from "react";
import { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { AUTHCONTEXTAPI } from "../../../Context/AuthContext";
import { USERCONTEXTAPI } from "../../../Context/UserContext";
import { useNavigate } from "react-router-dom";

const UserProfilePictureUpdate = () => {
  let navigate = useNavigate();
  let { isAuth } = useContext(AUTHCONTEXTAPI);
  let [previewImage, setPreviewImage] = useState(null);
  let [ProfilePictureFile, setProfilePictureFile] = useState(null);

  let { updateProfilePicture } = useContext(USERCONTEXTAPI);

  let handleChange = (e) => {
    let imageFile = e.target.files[0];
    if (imageFile) {
      let url = URL.createObjectURL(imageFile);
      setProfilePictureFile(imageFile);
      setPreviewImage(url);
    }
  };

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let formData = new FormData();

      formData.append("file", ProfilePictureFile);
      formData.append("upload_preset", "resume_builder");
      formData.append("cloud_name", "dnjhjtdgk");

      let { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/dnjhjtdgk/image/upload",
        formData
      );

      updateProfilePicture({ userImage: data?.url });

      toast.success("Image uploaded Successfully");

      navigate("/user_profile");
    } catch (err) {
      toast.error("Image not Uploaded");
    }
  };
  return (
    <section>
      <article className="h-[520px] w-[410px] bg-white rounded-lg flex flex-col justify-between items-center py-6">
        <header>
          <h1 className="text-center text-[20px] font-semibold">
            Update Picture
          </h1>
        </header>
        <main>
          <div className="h-[300px] w-[300px]  rounded-full">
            <img
              src={previewImage != null ? previewImage : isAuth?.userImage}
              alt=""
              className="h-[100%] w-[100%] rounded-full "
            />
          </div>
        </main>
        <footer>
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
          >
            <div>
              <input
                type="file"
                className="border py-1 px-2 rounded-lg file:bg-blue-600 file:text-white file:px-2 file:py-1 file:rounded-lg"
                onChange={handleChange}
              />
            </div>

            <div>
              <button className="bg-blue-600 py-1 w-full text-white rounded-lg">
                Upload picture
              </button>
            </div>
          </form>
        </footer>
      </article>
    </section>
  );
};

export default UserProfilePictureUpdate;
