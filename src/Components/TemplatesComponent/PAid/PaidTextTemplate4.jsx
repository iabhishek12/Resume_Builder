import React from "react";

const PaidTextTemplate4 = () => {
  return (
    <section className="h-[86vh]  w-[34vw] bg-white flex justify-center items-start overflow-hidden">
      <div className="h-full w-full p-4 overflow-hidden font-sans text-[#111827] flex flex-col gap-3">
        {/* NAME */}
        <div>
          <h1 className="text-lg font-bold tracking-wide">ESTELLE DARCY</h1>
          <p className="text-[10px] font-semibold mt-1">PROCESS ENGINEER</p>
          <p className="text-[8px] text-[#374151] mt-1">
            123 Anywhere St., Any City | hello@reallygreatsite.com |
            www.reallygreatsite.com
          </p>
        </div>

        {/* SUMMARY */}
        <div>
          <h2 className="text-[10px] font-bold border-b border-[#D1D5DB] pb-0.5">
            SUMMARY
          </h2>
          <p className="text-[8px]   text-[#1f2937]">
            Practical Engineer with Significant Experience in Process Design, I
            have worked with some organizations, ensuring a grounded approach to
            my profession, leveraging my expertise to optimize processes and
            deliver innovative solutions that meet business objectives.
          </p>
        </div>

        {/* PROFESSIONAL EXPERIENCE */}
        <div>
          <h2 className="text-[10px] font-bold border-b border-[#D1D5DB] pb-0.5">
            PROFESSIONAL EXPERIENCE
          </h2>

          <div className="mt-1 text-[8px] leading-relaxed space-y-2">
            {/* EXPERIENCE 1 */}
            <div>
              <div className="flex justify-between font-semibold">
                <p>Instrument Tech, Morcelle Program</p>
                <p>Jan 2024 - Present</p>
              </div>
              <ul className="list-disc ml-4 mt-1 ">
                <li>
                  Led development of an advanced automation system, achieving a
                  15% increase in operational efficiency.
                </li>
                <li>
                  Streamlined manufacturing processes, reducing production costs
                  by 10%.
                </li>
                <li>
                  Implemented preventive maintenance strategies, reducing
                  equipment downtime by 20%.
                </li>
              </ul>
            </div>

            {/* EXPERIENCE 2 */}
            <div>
              <div className="flex justify-between font-semibold">
                <p>Internship, XarrowAI Industries</p>
                <p>Jun 2022 - Aug 2022</p>
              </div>
              <ul className="list-disc ml-4 mt-1 ">
                <li>
                  Designed & optimized a robotic control system, realizing 12%
                  performance improvement.
                </li>
                <li>
                  Coordinated testing & validation, ensuring compliance with
                  industry standards.
                </li>
                <li>
                  Provided technical support, contributing to 15% system failure
                  reduction.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* PROJECTS */}
        <div>
          <h2 className="text-[10px] font-bold border-b border-[#D1D5DB] pb-1">
            PROJECTS
          </h2>

          <div className="text-[8px] mt-1 ">
            <div className="flex justify-between font-semibold">
              <p>Industrial Basics and General Application</p>
              <p>Jan 2023 - Jun 2023</p>
            </div>

            <p className="mt-1">University of Engineering Process Cohort</p>
            <ul className="list-disc ml-4 mt-1 ">
              <li>Automotive Technology.</li>
              <li>
                Technological Advancements within the current Chemical & Process
                Industry.
              </li>
              <li>Other relevant information.</li>
            </ul>
          </div>
        </div>

        {/* SKILLS */}
        <div>
          <h2 className="text-[10px] font-bold border-b border-[#D1D5DB] pb-1">
            SKILLS
          </h2>

          <div className="grid grid-cols-3 text-[8px] mt-1  ">
            <p>Prototyping Tools</p>
            <p>Interaction Design</p>
            <p>Accessibility</p>
            <p>User Research</p>
            <p>Visual Design</p>
            <p>Responsive Design</p>
          </div>
        </div>

        {/* EDUCATION */}
        <div>
          <h2 className="text-[10px] font-bold border-b border-[#D1D5DB] pb-1">
            EDUCATION
          </h2>

          <div className="mt-1 text-[8px] ">
            <div className="flex justify-between font-semibold">
              <p>Bachelor of Design in Process Engineering</p>
              <p>Sep 2019 - Sep 2023</p>
            </div>
            <p>Engineering University</p>
            <p className="mt-1">
              Relevant coursework in Process Design & Project Management.
            </p>
          </div>
        </div>

        {/* ADDITIONAL INFORMATION */}
        <div className="pb-3">
          <h2 className="text-[10px] font-bold border-b border-[#D1D5DB] pb-1">
            ADDITIONAL INFORMATION
          </h2>

          <ul className="list-disc ml-4 mt-1  text-[8px] leading-relaxed">
            <li>
              <b>Languages:</b> English, French, Mandarin.
            </li>
            <li>
              <b>Certifications:</b> Professional Design Engineer (PDE), PMT,
              SPD.
            </li>
            <li>
              <b>Awards/Activities:</b> Most Innovative Intern (2022), Overall
              Best Intern (2022), Onboarding Project Lead (2024).
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PaidTextTemplate4;
