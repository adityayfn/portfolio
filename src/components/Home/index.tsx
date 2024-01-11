import Reveal from "@/utils/Reveal"
import React from "react"

const Home = () => {
  return (
    <div className="xl:flex xl:flex-col  items-center ">
      <Reveal>
        <h1 className="text-6xl font-primary font-bold leading-normal md:text-[4rem] xl:text-[6rem]">
          Hello<span className="text-primary">.</span>
          <br className="xl:hidden" /> I am <br className="xl:hidden" />
          Aditya
        </h1>
      </Reveal>
      <Reveal>
        <h1 className="text-xl text-primary font-bold text-center">
          Frontend Developer
        </h1>
      </Reveal>
    </div>
  )
}

export default Home
