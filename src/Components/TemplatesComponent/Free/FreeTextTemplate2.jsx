import React from "react";

const FreeTextTemplate2 = () => {
  return (
    <div className="h-[86vh]  w-[34vw] bg-white flex justify-center items-center overflow-hidden">
      <div className="h-full w-full p-2 font-sans flex flex-col overflow-hidden leading-[1.2]">
        {/* HEADER */}
        <header className="text-center pb-1 border-b">
          <h1 className="text-[15px] font-bold tracking-wide">OLIVIA WILSON</h1>
          <p className="text-[9px] text-[#6B7280]">Address | Mail | Website</p>
          <h2 className="text-[10px] font-semibold text-[#374151]">
            SOFTWARE ENGINEER
          </h2>
        </header>

        {/* SUMMARY */}
        <section className="mt-1">
          <h3 className="bg-[#d7e4dc] font-semibold text-[10px] pl-5 py-[2px]">
            SUMMARY
          </h3>
          <p className="text-[9px] px-2 mt-1 text-[#374151] leading-tight pl-5">
            Detail-oriented Software Engineer with experience in app
            development, system optimization, and team collaboration. Skilled in
            debugging, UI improvement, and delivering efficient solutions under
            deadlines.
          </p>
        </section>

        {/* CONTENT */}
        <div className="flex-grow overflow-hidden space-y-2 mt-1">
          {/* TECHNICAL SKILLS */}
          <section>
            <h3 className="bg-[#d7e4dc] font-semibold text-[10px] pl-5 py-[2px]">
              TECHNICAL SKILLS
            </h3>
            <div className="grid grid-cols-3 text-[9px] text-[#374151] pl-5 mt-1">
              <ul className="list-disc pl-3 space-y-[2px]">
                <li>SwiftExa</li>
                <li>A37++</li>
                <li>StoryBloop XA</li>
              </ul>
              <ul className="list-disc pl-3 space-y-[2px]">
                <li>Data Structures</li>
                <li>APLYX</li>
                <li>HTTMILL</li>
              </ul>
              <ul className="list-disc pl-3 space-y-[2px]">
                <li>Data Structures</li>
                <li>APLYX</li>
                <li>HTTMILL</li>
              </ul>
            </div>
          </section>

          {/* PROJECTS */}
          <section>
            <h3 className="bg-[#d7e4dc] font-semibold text-[10px] pl-5 py-[2px]">
              PROJECTS
            </h3>

            <div className="px-2 mt-1 text-[#374151] pl-5 text-[9px] space-y-1">
              <div>
                <div className="flex justify-between font-semibold text-[10px]">
                  <p>
                    Instant Chat App | <span className="italic">Lukrasto</span>
                  </p>
                  <p className="text-[#6B7280]">Oct 2021</p>
                </div>
                <ul className="list-disc pl-3 mt-[2px] space-y-[2px]">
                  <li>Developed Messaging App</li>
                  <li>Improved UX by Debugging</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-semibold text-[10px]">
                  <p>
                    Weather App | <span className="italic">Lukrasto</span>
                  </p>
                  <p className="text-[#6B7280]">Sept 2021</p>
                </div>
                <ul className="list-disc pl-3 mt-[2px] space-y-[2px]">
                  <li>Analyzed User Data</li>
                  <li>Suggested Improvements</li>
                  <li>Supervised Implementation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* EDUCATION */}
          <section>
            <h3 className="bg-[#d7e4dc] font-semibold text-[10px] pl-5 py-[2px]">
              EDUCATION
            </h3>

            <div className="px-2 mt-1 text-[#374151] text-[9px] pl-5 space-y-1">
              <div>
                <div className="flex justify-between font-semibold text-[10px]">
                  <p>
                    Computer Science & Business |
                    <span className="italic"> Danliton</span>
                  </p>
                  <p className="text-[#6B7280]">2021</p>
                </div>
                <ul className="list-disc pl-3 mt-[2px] space-y-[2px]">
                  <li>Studied Software Planning</li>
                  <li>Worked with IT Industries</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-semibold text-[10px]">
                  <p>
                    BEng Chemical Engineering |
                    <span className="italic"> Royal Clickton</span>
                  </p>
                  <p className="text-[#6B7280]">2014 - 2018</p>
                </div>
                <ul className="list-disc pl-3 mt-[2px] space-y-[2px]">
                  <li>GPA: 3.19</li>
                  <li>Minor in Process Mgmt</li>
                  <li>Thesis on Efficiency</li>
                </ul>
              </div>
            </div>
          </section>

          {/* WORK EXPERIENCE */}
          <section>
            <h3 className="bg-[#d7e4dc] font-semibold text-[10px] pl-5 py-[2px]">
              WORK EXPERIENCE
            </h3>

            <div className="px-2 mt-1 text-[#374151] text-[9px] pl-5 space-y-1">
              <div>
                <div className="flex justify-between font-semibold text-[10px]">
                  <p>
                    Policy Manager |{" "}
                    <span className="italic">Lexramax Inc</span>
                  </p>
                  <p className="text-[#6B7280]">2021 - Present</p>
                </div>
                <ul className="list-disc pl-3 mt-[2px] space-y-[2px]">
                  <li>Policy Review</li>
                  <li>Technical Application</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-semibold  text-[10px]">
                  <p>
                    Quality Control Engineer |{" "}
                    <span className="italic">KrystaPointe</span>
                  </p>
                  <p className="text-[#6B7280]">2019 - 2020</p>
                </div>
                <ul className="list-disc pl-3 mt-[2px] space-y-[2px]">
                  <li>Analyzed Water Samples</li>
                  <li>Suggested Improvements</li>
                  <li>Supervised Implementation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* AWARDS */}
          <section>
            <h3 className="bg-[#d7e4dc] font-semibold text-[10px] pl-5 py-[2px]">
              AWARDS & ACHIEVEMENTS
            </h3>
            <div className="pl-8">
              <ul className="list-disc  text-[9px] text-[#374151] mt-1  space-y-[2px]">
                <li>Most Innovative Employee (2021)</li>
                <li>Project Leader (2021)</li>
                <li>Best New Employee (2019)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FreeTextTemplate2;
