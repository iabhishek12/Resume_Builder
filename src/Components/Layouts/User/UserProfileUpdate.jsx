import React, { useContext, useState } from "react";
import FormBlock from "../../../Utilities/FormBlock";
import { MdDeleteForever } from "react-icons/md";
import { USERCONTEXTAPI } from "../../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { AUTHCONTEXTAPI } from "../../../Context/AuthContext";

const UserProfileUpdate = () => {
  let { isAuth } = useContext(AUTHCONTEXTAPI);
  let navigate = useNavigate();
  let { handleUpdateUserdetails } = useContext(USERCONTEXTAPI);
  const initialProfileState = {
    username: "",
    email: "",

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
      expereince: [],
      projects: [],
      certificates: [],
      education: {
        degree: "",
        degpercentage: "",
        degreeyop: "",
        college: "",
        secondarypercentage: "",
        secondaryYop: "",
        primarypercentage: "",
        primaryYop: "",
      },
      skills: [],
    },
    oath: "",
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [profile, setProfile] = useState(initialProfileState);
  const [skills, setSkills] = useState("");
  const [skillsArray, setSkillsArray] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value,
      },
    }));
  };

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      resume: {
        ...prev.resume,
        education: {
          ...prev.resume.education,
          [name]: value,
        },
      },
    }));
  };

  const handleExperienceChange = (index, field, value) => {
    const updated = [...profile.resume.expereince];
    updated[index][field] = value;
    setProfile((prev) => ({
      ...prev,
      resume: {
        ...prev.resume,
        expereince: updated,
      },
    }));
  };

  const handleRemoveExperience = (index) => {
    const updated = profile.resume.expereince.filter((_, i) => i !== index);
    setProfile((prev) => ({
      ...prev,
      resume: {
        ...prev.resume,
        expereince: updated,
      },
    }));
  };

  const handleProjectChange = (index, field, value) => {
    const updated = [...profile.resume.projects];
    updated[index][field] = value;
    setProfile((prev) => ({
      ...prev,
      resume: {
        ...prev.resume,
        projects: updated,
      },
    }));
  };

  const handleRemoveProject = (index) => {
    const updated = profile.resume.projects.filter((_, i) => i !== index);
    setProfile((prev) => ({
      ...prev,
      resume: {
        ...prev.resume,
        projects: updated,
      },
    }));
  };

  const handleSkillsOnchange = (e) => {
    setSkills(e.target.value);
  };

  const handleAddSkill = () => {
    if (skills.trim() !== "") {
      setSkillsArray((prev) => [...prev, skills]);
      setSkills("");
    }
  };

  const handleDeleteSkill = (ind) => {
    setSkillsArray((prev) => prev.filter((_, index) => index !== ind));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalProfile = {
      ...profile,
      resume: {
        ...profile.resume,
        skills: skillsArray,
      },
    };

    if (await handleUpdateUserdetails(finalProfile)) {
      setProfile(initialProfileState);
      navigate("/user_profile");
    }
  };

  return (
    <section className="w-full flex justify-center">
      <article className="w-[60%] bg-white rounded-lg py-4 px-5 flex flex-col">
        <header>
          <h1 className="text-center text-[24px] font-semibold">
            {currentPage === 1 && "Personal Info"}
            {currentPage === 2 && "Education Details"}
            {currentPage === 3 && "Resume Info"}
            {currentPage === 4 && "Projects"}
            {currentPage === 5 && "Skills"}
          </h1>

          <div
            className={`h-[2px] bg-blue-600 my-4 transition-all duration-500 ${
              currentPage === 1
                ? "w-[20%]"
                : currentPage === 2
                ? "w-[40%]"
                : currentPage === 3
                ? "w-[60%]"
                : currentPage === 4
                ? "w-[80%]"
                : "w-[100%]"
            }`}
          ></div>
        </header>

        <main>
          <form
            onSubmit={handleSubmit}
            className="flex flex-wrap justify-between gap-4"
          >
            {/* ✅ Page 1: Personal Info */}
            {currentPage === 1 && (
              <>
                <FormBlock
                  name="username"
                  label="Username"
                  type="text"
                  placeholder="Enter name"
                  value={profile.username || isAuth?.username}
                  onChange={handleInputChange}
                />
                <FormBlock
                  name="email"
                  label="Email"
                  type="text"
                  placeholder="Enter email"
                  value={profile.email || isAuth?.email}
                  onChange={handleInputChange}
                />
                <FormBlock
                  name="contact"
                  label="Mobile No."
                  type="text"
                  placeholder="Enter mobile number"
                  value={profile.contact || isAuth?.contact}
                  onChange={handleInputChange}
                />
                <FormBlock
                  name="dob"
                  label="Date of Birth"
                  type="date"
                  value={profile.dob || isAuth?.dob}
                  onChange={handleInputChange}
                />

                {/* Gender */}
                <div className="w-[48%] flex flex-col gap-1">
                  <label>Gender</label>
                  <div className="border-2 border-[#e6e4e4] py-1.5 px-2 rounded-md flex gap-2">
                    {["male", "female", "others"].map((g) => (
                      <label key={g} className="flex items-center gap-1">
                        <input
                          type="radio"
                          name="gender"
                          value={g}
                          checked={profile.gender === g || isAuth?.gender === g}
                          onChange={handleInputChange}
                        />
                        {g}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Address */}
                <FormBlock
                  name="country"
                  label="Country"
                  type="text"
                  placeholder="Enter country"
                  value={profile.address.country || isAuth?.address.country}
                  onChange={handleAddressChange}
                />
                <FormBlock
                  name="state"
                  label="State"
                  type="text"
                  placeholder="Enter state"
                  value={profile.address.state || isAuth?.address.state}
                  onChange={handleAddressChange}
                />
                <FormBlock
                  name="city"
                  label="City"
                  type="text"
                  placeholder="Enter city"
                  value={profile.address.city || isAuth?.address.city}
                  onChange={handleAddressChange}
                />
                <div className="w-full flex flex-col gap-1">
                  <label>Complete Address</label>
                  <textarea
                    name="completeAddress"
                    placeholder="Enter full address"
                    className="border-2 border-[#e1d9d9] h-[60px] rounded-md resize-none outline-none py-1.5 px-2"
                    value={
                      profile.address.completeAddress ||
                      isAuth?.address.completeAddress
                    }
                    onChange={handleAddressChange}
                  ></textarea>
                </div>
              </>
            )}

            {/* ✅ Page 2: Education */}
            {currentPage === 2 && (
              <>
                <FormBlock
                  name="degree"
                  label="Degree"
                  placeholder="Enter highest degree"
                  value={
                    profile.resume.education.degree ||
                    isAuth?.resume?.education?.degree
                  }
                  onChange={handleEducationChange}
                />
                <FormBlock
                  name="degpercentage"
                  label="Degree %"
                  placeholder="Enter percentage"
                  value={
                    profile.resume.education.degpercentage ||
                    isAuth?.resume?.education?.degpercentage
                  }
                  onChange={handleEducationChange}
                />
                <FormBlock
                  name="degreeyop"
                  label="Year of Passout"
                  placeholder="Enter YOP"
                  value={
                    profile.resume.education.degreeyop ||
                    isAuth?.resume?.education?.degreeyop
                  }
                  onChange={handleEducationChange}
                />
                <FormBlock
                  name="college"
                  label="College/University"
                  placeholder="Enter college name"
                  value={
                    profile.resume.education.college ||
                    isAuth?.resume?.education?.college
                  }
                  onChange={handleEducationChange}
                />
                <h2 className="w-full text-blue-600 font-semibold mt-4">
                  Secondary
                </h2>
                <FormBlock
                  name="secondarypercentage"
                  label="Percentage %"
                  placeholder="Enter percentage"
                  value={
                    profile.resume.education.secondarypercentage ||
                    isAuth?.resume.education.secondarypercentage
                  }
                  onChange={handleEducationChange}
                />
                <FormBlock
                  name="secondaryYop"
                  label="Year of Passout"
                  placeholder="Enter YOP"
                  value={profile.resume.education.secondaryYop}
                  onChange={handleEducationChange}
                />
                <h2 className="w-full text-blue-600 font-semibold mt-4">
                  Primary
                </h2>
                <FormBlock
                  name="primarypercentage"
                  label="Percentage %"
                  placeholder="Enter percentage"
                  value={profile.resume.education.primarypercentage}
                  onChange={handleEducationChange}
                />
                <FormBlock
                  name="primaryYop"
                  label="Year of Passout"
                  placeholder="Enter YOP"
                  value={profile.resume.education.primaryYop}
                  onChange={handleEducationChange}
                />
              </>
            )}

            {/* ✅ Page 3: Resume Info */}
            {currentPage === 3 && (
              <>
                <FormBlock
                  name="linkedIn"
                  label="LinkedIn"
                  placeholder="https://www.linkedin.com"
                  value={profile.resume.linkedIn}
                  onChange={(e) =>
                    setProfile((prev) => ({
                      ...prev,
                      resume: { ...prev.resume, linkedIn: e.target.value },
                    }))
                  }
                />
                <FormBlock
                  name="gitHub"
                  label="GitHub"
                  placeholder="https://www.github.com"
                  value={profile.resume.gitHub}
                  onChange={(e) =>
                    setProfile((prev) => ({
                      ...prev,
                      resume: { ...prev.resume, gitHub: e.target.value },
                    }))
                  }
                />

                <div className="w-full flex justify-between items-center mt-4">
                  <h2 className="text-blue-600 font-semibold">Experience</h2>
                  {profile.resume.expereince.length < 3 && (
                    <button
                      type="button"
                      className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                      onClick={() =>
                        setProfile((prev) => ({
                          ...prev,
                          resume: {
                            ...prev.resume,
                            expereince: [
                              ...prev.resume.expereince,
                              { company: "", years: "", role: "" },
                            ],
                          },
                        }))
                      }
                    >
                      + Add
                    </button>
                  )}
                </div>

                {profile.resume.expereince.map((exp, index) => (
                  <div
                    key={index}
                    className="border-2 border-gray-200 rounded-lg p-3 flex flex-col gap-2 w-full"
                  >
                    <input
                      type="text"
                      placeholder="Company"
                      value={exp.company}
                      onChange={(e) =>
                        handleExperienceChange(index, "company", e.target.value)
                      }
                      className="border-2 border-gray-200 rounded-md px-2 py-1"
                    />
                    <input
                      type="text"
                      placeholder="Years"
                      value={exp.years}
                      onChange={(e) =>
                        handleExperienceChange(index, "years", e.target.value)
                      }
                      className="border-2 border-gray-200 rounded-md px-2 py-1"
                    />
                    <textarea
                      placeholder="Role / Work Description"
                      value={exp.role}
                      onChange={(e) =>
                        handleExperienceChange(index, "role", e.target.value)
                      }
                      className="border-2 border-gray-200 rounded-md px-2 py-1 resize-none h-16"
                    ></textarea>
                    <button
                      type="button"
                      onClick={() => handleRemoveExperience(index)}
                      className="bg-red-600 text-white text-sm px-3 py-1 rounded-md self-end"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </>
            )}

            {/* ✅ Page 4: Projects */}
            {currentPage === 4 && (
              <>
                <div className="w-full flex justify-between items-center">
                  <h2 className="text-blue-600 font-semibold">Projects</h2>
                  {profile.resume.projects.length < 3 && (
                    <button
                      type="button"
                      className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                      onClick={() =>
                        setProfile((prev) => ({
                          ...prev,
                          resume: {
                            ...prev.resume,
                            projects: [
                              ...prev.resume.projects,
                              { name: "", technologies: "", description: "" },
                            ],
                          },
                        }))
                      }
                    >
                      + Add
                    </button>
                  )}
                </div>

                {profile.resume.projects.map((project, index) => (
                  <div
                    key={index}
                    className="border-2 border-gray-200 rounded-lg p-3 flex flex-col gap-2 w-full"
                  >
                    <input
                      type="text"
                      placeholder="Project Name"
                      value={project.name}
                      onChange={(e) =>
                        handleProjectChange(index, "name", e.target.value)
                      }
                      className="border-2 border-gray-200 rounded-md px-2 py-1"
                    />
                    <input
                      type="text"
                      placeholder="Technologies"
                      value={project.technologies}
                      onChange={(e) =>
                        handleProjectChange(
                          index,
                          "technologies",
                          e.target.value
                        )
                      }
                      className="border-2 border-gray-200 rounded-md px-2 py-1"
                    />
                    <textarea
                      placeholder="Description"
                      value={project.description}
                      onChange={(e) =>
                        handleProjectChange(
                          index,
                          "description",
                          e.target.value
                        )
                      }
                      className="border-2 border-gray-200 rounded-md px-2 py-1 resize-none h-16"
                    ></textarea>
                    <button
                      type="button"
                      onClick={() => handleRemoveProject(index)}
                      className="bg-red-600 text-white text-sm px-3 py-1 rounded-md self-end"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </>
            )}

            {/* ✅ Page 5: Skills */}
            {currentPage === 5 && (
              <article className="w-full my-4">
                <label>Skills</label>
                <input
                  type="text"
                  placeholder="Enter skill and press Enter"
                  className="border-2 border-[#eee] outline-0 py-2 px-4 w-full rounded-md"
                  onChange={handleSkillsOnchange}
                  value={skills}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddSkill();
                    }
                  }}
                />

                <div className="flex gap-3 mt-7 flex-wrap">
                  {skillsArray.map((skill, ind) => (
                    <div
                      key={ind}
                      className="bg-blue-500 py-1 px-3 rounded-md text-white flex items-center gap-2"
                    >
                      <span>{skill}</span>
                      <MdDeleteForever
                        className="cursor-pointer"
                        onClick={() => handleDeleteSkill(ind)}
                      />
                    </div>
                  ))}
                </div>
              </article>
            )}
          </form>
        </main>

        {/* ✅ Footer */}
        <footer className="flex justify-between py-5">
          {currentPage > 1 && (
            <button
              type="button"
              onClick={() => setCurrentPage((p) => p - 1)}
              className="bg-blue-600 text-white px-6 py-1 rounded-md"
            >
              Back
            </button>
          )}

          {currentPage < 5 && (
            <button
              type="button"
              onClick={() => setCurrentPage((p) => p + 1)}
              className="bg-blue-600 text-white px-6 py-1 rounded-md"
            >
              Next
            </button>
          )}

          {currentPage === 5 && (
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-green-500 text-white px-6 py-1 rounded-md"
            >
              Submit
            </button>
          )}
        </footer>
      </article>
    </section>
  );
};

export default UserProfileUpdate;
