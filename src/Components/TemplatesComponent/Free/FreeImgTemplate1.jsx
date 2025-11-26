import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdCall } from "react-icons/md";

const FreeImgTemplate1 = () => {
  return (
    <div className="h-[86vh]  w-[34vw]  bg-white flex justify-center items-center overflow-hidden">
      <div className="h-full w-full">
        <section className="flex justify-center items-center h-full w-full">
          <article className="w-full h-full bg-white rounded-lg shadow font-sans">
            {/* MAIN CONTAINER */}
            <main className="w-full h-full flex flex-col">
              {/* HEADER */}
              <header className="flex justify-end items-center py-4 pl-6">
                <div className="bg-[#798777] w-full py-4 rounded-l-full flex items-center gap-4 pr-4">
                  {/* IMAGE */}
                  <div className="pl-4">
                    <img
                      src="/src/Assets/Images/DemoImageWithBg.png"
                      alt="Profile"
                      className="w-[70px] h-[70px] md:w-[120px] md:h-[120px] border-4 border-white rounded-full object-cover shadow-md"
                    />
                  </div>

                  {/* TEXT */}
                  <div className="text-white">
                    <h1 className="font-bold text-[32px] leading-tight">
                      Shawn Garcia
                    </h1>
                    <h2 className="font-light text-[clamp(10px,1.5vw,18px)]">
                      Business Analyst
                    </h2>
                  </div>
                </div>
              </header>

              {/* BODY (TAKES FULL REMAINING HEIGHT) */}
              <div className="flex text-[#60665B] gap-4 flex-1">
                {/* LEFT SIDE */}
                <aside className="w-1/2 bg-[#DAE6D7] p-4 rounded-tr-3xl space-y-4 h-full overflow-auto">
                  <div>
                    <h2 className="font-bold text-[clamp(10px,1.2vw,14px)] mb-1">
                      About Me
                    </h2>
                    <p className="text-[clamp(8px,1vw,12px)] leading-4">
                      I am a talented, ambitious, and hardworking individual
                      with broad skills and experience in Digital Business
                      Marketing.
                    </p>
                  </div>

                  <div>
                    <h1 className="font-bold text-[clamp(10px,1.2vw,14px)] mb-1">
                      Experience
                    </h1>

                    <div className="space-y-2 text-[clamp(8px,1vw,12px)]">
                      <div>
                        <h2 className="font-semibold text-[#9EA99A]">
                          Reallygreatsite.com
                        </h2>
                        <h3 className="text-[#7d807b]">2016 - 2018</h3>
                        <p>
                          • Business Marketing <br />• Business Development
                        </p>
                      </div>

                      <div>
                        <h2 className="font-semibold text-[#9EA99A]">
                          Reallygreatsite Corps.
                        </h2>
                        <h3 className="text-[#7d807b]">2018 - 2021</h3>
                        <p>• Supervisor of Marketing Division</p>
                      </div>

                      <div>
                        <h2 className="font-semibold text-[#9EA99A]">
                          Reallygreatsite Co.
                        </h2>
                        <h3 className="text-[#7d807b]">2021 - Present</h3>
                        <p>• Marketing Supervisor</p>
                      </div>
                    </div>
                  </div>
                </aside>

                {/* RIGHT SIDE */}
                <aside className="w-1/2 flex flex-col justify-between p-4 h-full overflow-auto">
                  <div>
                    <h2 className="font-bold text-[clamp(10px,1.2vw,14px)] mb-1">
                      Education
                    </h2>
                    <p className="text-[clamp(8px,1vw,12px)] font-semibold">
                      Reallygreatsite University
                    </p>
                    <p className="text-[clamp(8px,1vw,12px)]">2014 - 2018</p>
                    <p className="text-[clamp(8px,1vw,12px)] italic">
                      Master of Business
                    </p>
                  </div>

                  <div>
                    <h2 className="font-bold text-[clamp(10px,1.2vw,14px)] mb-1">
                      Skills
                    </h2>
                    <ul className="list-disc list-inside text-[clamp(8px,1vw,12px)] leading-4">
                      <li>Digital Marketing</li>
                      <li>Market Analysis</li>
                      <li>Social Media Management</li>
                      <li>Public Speaking</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="font-bold text-[clamp(10px,1.2vw,14px)] mb-1">
                      Contact
                    </h2>
                    <ul className="text-[clamp(8px,1vw,12px)] leading-4">
                      <li className="flex items-center gap-2">
                        <MdCall /> <span>+1 234-567-890</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoIosMail /> <span>abc@gmail.com</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FaHome /> <span>Anywhere Street, New York</span>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </main>
          </article>
        </section>
      </div>
    </div>
  );
};

export default FreeImgTemplate1;
