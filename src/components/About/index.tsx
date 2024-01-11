import React from "react"
import Item from "./Item"
import Skills from "./Skills"
import Reveal from "@/utils/Reveal"

const About = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 xl:flex-row xl:px-6">
        <div>
          <Reveal>
            <div className=" w-72  ">
              <img src="/avatar.jpg" alt="avatar" className="rounded-md" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <h1 className="text-3xl font-bold text-center mt-2">
                <span className="text-primary">Aditya</span>
                <br className="xl:hidden" /> Yudha
              </h1>
            </Reveal>
          </div>
        </div>
        <div className="p-4 xl:w-3/4 bg-neutral-800 m-4 rounded-md">
          <Reveal>
            <h1 className="text-xl">
              I am a motivated and ambitious individual with a background in
              vocational education (SMK). With my virtual internship experience
              and foundational skills in frontend programming, I am passionate
              about pursuing a career in the technology industry. During my
              virtual internship, I focused on developing my skills in frontend
              programming.
            </h1>
          </Reveal>
          <div className="md:px-4 xl:px-0 mt-5 flex flex-col gap-3 text-xl">
            <Item />
          </div>
        </div>
      </div>
      <div className="my-10 mx-4">
        <div>
          <Reveal>
            <h1 className="text-center text-3xl font-bold">My Skills</h1>
          </Reveal>
        </div>
        <Reveal>
          <div className="flex justify-center flex-wrap gap-14 mt-10 ">
            <Skills />
          </div>
        </Reveal>
      </div>
    </>
  )
}

export default About
