import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { AUTHCONTEXTAPI } from '../../../Context/AuthContext';
import { USERCONTEXTAPI } from '../../../Context/UserContext';

const UserProfilePictureUpdate = () => {
    let { isAuth } = useContext(AUTHCONTEXTAPI);
  let [previewImage, setPreviewImage] = useState(null);

  let { updateProfilePicture } = useContext(USERCONTEXTAPI);

  let handleChange = (e) => {
    let imageFile = e.target.files[0];
    if (imageFile) {
      let url = URL.createObjectURL(imageFile);
      setPreviewImage(url);
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit function");
    updateProfilePicture({ userImage: previewImage });
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
  )
}

export default UserProfilePictureUpdate
