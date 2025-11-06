import React from 'react'
import FormBlock from '../../../Utilities/FormBlock';

const UserProfileUpdate = () => {
   let initialProfileState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isSubscribe: false,

    address: {
      city: "",
      state: "",
      country: "",
      completeAddress: "",
    },
    contact: "",
    dob: "",
    gender: "",
    resume: {
      linkedIn: "",
      gitHub: "",
      profile: "",
      expereince: [],
      projects: [],
      certificates: [],
      education: {
        degree: "",
        secondary: "",
        primary: "",
        diploma: "",
      },
      skills: [],
      hobbies: [],
      achievements: [],
    },
    oath: "",
  };
  return (
   <section className="w-full flex justify-center">
      <article className="h-[550px] w-[60%] bg-white rounded-lg py-4 px-5">
        <header>
          <h1 className="text-center text-[24px] font-semibold">
            Personal Info
          </h1>
          <div className="h-[2px] bg-blue-600 my-4"></div>
        </header>

        <main>
          <form action="" className="flex flex-wrap justify-between gap-4">
            <FormBlock
              name={"username"}
              label={"User Name"}
              type={"text"}
              placeholder={"Enter your name "}
            />

            {/* ? Email */}
            <FormBlock
              name={"email"}
              label={"Email"}
              type={"text"}
              placeholder={"Enter your email "}
            />

            {/* ? Contact */}
            <FormBlock
              name={"contact"}
              label={"Contact"}
              type={"tel"}
              placeholder={"contact"}
            />

            {/* ? dob */}
            <FormBlock
              name={"dob"}
              label={"DOB"}
              type={"Date"}
              placeholder={"Date of birth "}
            />

            {/* ? Gender */}

            <FormBlock
              name={"Gender"}
              label={"Gender"}
              type={"text"}
              placeholder={"Gender "}
            />

            {/* ? Country */}
            <FormBlock
              name={"country"}
              label={"Country"}
              type={"text"}
              placeholder={"Country"}
            />

            {/* ? State */}
            <FormBlock
              name={"state"}
              label={"state"}
              type={"text"}
              placeholder={"state "}
            />

            {/* ? City */}

            <FormBlock
              name={"city"}
              label={"City"}
              type={"text"}
              placeholder={"city "}
            />

            {/* ? Complete Address */}

            <div className="w-full  flex flex-col gap-1">
              <label htmlFor="">Complete Address</label>
              <textarea  name="" className="border-2 border-[#e1d9d9] h-[60px] rounded-md resize-none outline-none py-1.5 px-2"  id=""></textarea>
           </div>
          </form>
        </main>
      </article>
    </section>
  )
}

export default UserProfileUpdate
