import React, { useContext, useState } from "react";
import { AUTHCONTEXTAPI } from "../../../Context/AuthContext";
import { USERCONTEXTAPI } from "../../../Context/UserContext";
import toast from "react-hot-toast";

const DeleteAccount = () => {
  let [inputState, setInputState] = useState("");
  let { isAuth, setIsAuth } = useContext(AUTHCONTEXTAPI);
  let { handleDeleteAccount } = useContext(USERCONTEXTAPI);
  let handleSubmit = async (e) => {
    e.preventDefault();

    if (inputState === isAuth?.username.toUpperCase()) {
      if (await handleDeleteAccount(isAuth?.id)) {
        toast.success("User deleted Successfully");
        window.location.assign("/");
      }
    }
  };
  return (
    <section className="h-full w-full flex justify-center items-center bg-gray-50">
      <article className="w-[60%] bg-white shadow-md rounded-md p-6 flex flex-col gap-6 border border-gray-200">
        <header>
          <h1 className="text-[28px] font-semibold text-blue-600">
            Delete Account
          </h1>
        </header>

        <main>
          <p className="text-gray-700 leading-relaxed">
            Deleting your account will remove <b>all information</b> from our
            database, and <b>this action cannot be reversed.</b>
          </p>
        </main>

        <footer>
          <form
            onSubmit={handleSubmit}
            className="flex justify-between items-end flex-wrap gap-4"
          >
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-700">
                To confirm, type{" "}
                <b className="text-blue-600">
                  {isAuth?.username.toUpperCase()}
                </b>{" "}
                below:
              </label>
              <input
                onChange={(e) => setInputState(e.target.value)}
                type="text"
                placeholder="Type NAME"
                className="outline-none border border-gray-300 py-2 px-3 rounded-md bg-white text-red-600 w-[260px] font-semibold focus:ring-2 focus:ring-red-400"
              />
            </div>

            <button className="px-8 py-2 cursor-pointer bg-red-600  rounded-md text-white font-medium    transition-all">
              Delete Account
            </button>
          </form>
        </footer>
      </article>
    </section>
  );
};

export default DeleteAccount;
