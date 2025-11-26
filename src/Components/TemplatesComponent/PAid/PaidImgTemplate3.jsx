import React from "react";

const PaidImgTemplate3 = () => {
  return (
    <section className="h-[86vh]  w-[34vw] bg-white flex justify-center items-start overflow-hidden">
      <div className="h-full w-full flex">
        {/* LEFT COLUMN */}
        <div className="w-[36%] bg-[#3a3f47] text-white px-4 py-5 flex flex-col gap-5 overflow-hidden">
          {/* PROFILE IMG */}
          <div className="flex justify-center">
            <div className="h-18 w-18 rounded-full overflow-hidden border-4 border-white">
              <img
                src="src/Assets/Images/DemoImageWithBg.png"
                alt="profile"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h2 className="text-[10px] font-semibold border-b border-[#D1D5DB] pb-1">
              CONTACT
            </h2>
            <div className="mt-2 text-[8px] space-y-1 leading-relaxed">
              <p>+123-456-7890</p>
              <p>hello@greatsite.com</p>
              <p>www.reallygreatsite.com</p>
              <p>123 Anywhere St, Any City</p>
            </div>
          </div>

          {/* EDUCATION */}
          <div>
            <h2 className="text-[10px] font-semibold border-b border-[#D1D5DB] pb-1">
              EDUCATION
            </h2>
            <div className="mt-2 text-[8px] space-y-2 leading-relaxed">
              <div>
                <p className="font-semibold">2020 – 2023</p>
                <p>Bachelor of Design</p>
                <p>Borcelle University</p>
              </div>
              <div>
                <p className="font-semibold">2016 – 2020</p>
                <p>Bachelor of Business</p>
                <p>Borcelle University</p>
              </div>
              <div>
                <p className="font-semibold">2010 – 2014</p>
                <p>Bachelor of Business</p>
                <p>Wardiere University</p>
              </div>
            </div>
          </div>

          {/* SKILLS */}
          <div>
            <h2 className="text-[10px] font-semibold border-b border-[#D1D5DB] pb-1">
              SKILLS
            </h2>
            <ul className="mt-2 text-[8px] space-y-1 leading-relaxed list-disc list-inside">
              <li>Management Skills</li>
              <li>Creativity</li>
              <li>Digital Marketing</li>
              <li>Critical Thinking</li>
              <li>Leadership</li>
              <li>Branding</li>
            </ul>
          </div>

          {/* LANGUAGE */}
          <div>
            <h2 className="text-[10px] font-semibold border-b border-[#D1D5DB] pb-1">
              LANGUAGE
            </h2>
            <ul className="mt-2 text-[8px] space-y-1 list-disc list-inside">
              <li>English</li>
              <li>Germany (basic)</li>
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-[64%] bg-white px-5 py-5 flex flex-col gap-4 overflow-hidden">
          {/* NAME */}
          <div>
            <h1 className="text-xl font-bold text-[#333] leading-tight">
              OLIVIA
              <br />
              SANCHEZ
            </h1>
            <p className="text-[9px] mt-1 text-[#4B5563] tracking-wide">
              Marketing Manager
            </p>
          </div>

          {/* ABOUT */}
          <div>
            <h2 className="text-[10px] font-bold text-[#333] border-b border-[#D1D5DB] pb-1">
              ABOUT ME
            </h2>
            <p className="mt-1 text-[8px] leading-relaxed text-[#374151]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* EXPERIENCE */}
          <div>
            <h2 className="text-[10px] font-bold text-[#333] border-b border-[#D1D5DB] pb-1">
              EXPERIENCE
            </h2>

            <div className="mt-2 text-[8px] space-y-2 leading-relaxed">
              <div>
                <p className="font-semibold">2020 – 2023</p>
                <p>Ginyard Intl Co. | Sydney – Australia</p>
                <p className="font-bold mt-1">Product Design Manager</p>
                <p className="mt-1 text-[#374151]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              <div>
                <p className="font-semibold">2019 – 2020</p>
                <p>Wardiere Inc. | Sydney – Australia</p>
                <p className="font-bold mt-1">Product Design Manager</p>
                <p className="mt-1 text-[#374151]">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>

              <div>
                <p className="font-semibold">2017 – 2019</p>
                <p>Wardiere Inc. | Sydney – Australia</p>
                <p className="font-bold mt-1">Product Design Manager</p>
                <p className="mt-1 text-[#374151]">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>

          {/* REFERENCES */}
          <div>
            <h2 className="text-[10px] font-bold text-[#333] border-b border-[#D1D5DB] pb-1">
              REFERENCES
            </h2>

            <div className="mt-2 grid grid-cols-2 gap-2 text-[8px] leading-relaxed">
              <div>
                <p className="font-bold">Bailey Dupont</p>
                <p>Wardiere Inc. / CEO</p>
                <p>Phone: 123-456-7890</p>
                <p>Email: hello@greatsite.com</p>
              </div>

              <div>
                <p className="font-bold">Harumi Kobayashi</p>
                <p>Wardiere Inc. / CEO</p>
                <p>Phone: 123-456-7890</p>
                <p>Email: hello@greatsite.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaidImgTemplate3;
