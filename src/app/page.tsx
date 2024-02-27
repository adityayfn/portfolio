"use client"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Home from "@/components/Home"
import PortfolioCard from "@/components/Portfolio"
import ThemePanel from "@/components/Themes"
import { useEffect, useRef, useState } from "react"
import { extractHexColor } from "@/utils/extract-hex-color"
import { themeOptions } from "@/components/Themes/Colors"
import Reveal from "@/utils/Reveal"

export default function Page() {
  const [currentTheme, setCurrentTheme] = useState<any>("night")
  const [iconColor, setIconColor] = useState<string | null>(null)

  const changeTheme = (themeName: string) => {
    const id = document.getElementById("theme-switcher")
    id?.setAttribute("data-theme", themeName)
    setCurrentTheme(themeName)
    localStorage.setItem("theme", themeName)
  }

  useEffect(() => {
    const themeOption = themeOptions.find(
      (option) => option.name === currentTheme
    )
    if (themeOption) {
      const hex = extractHexColor(themeOption.color)
      setIconColor(hex)
      setCurrentTheme(localStorage.getItem("theme"))
    }
  }, [currentTheme])

  return (
    <main className="text-slate-300  ">
      <ThemePanel themeControl={changeTheme} />

      <section
        className="flex flex-col justify-center items-center h-screen xl:mx-10"
        id="home"
      >
        <Home />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="fixed w-full bottom-0 "
        >
          <path
            fill={iconColor == null ? "#31AADF" : iconColor!!}
            fill-opacity=".4"
            d="M0,0L12.6,42.7C25.3,85,51,171,76,170.7C101.1,171,126,85,152,64C176.8,43,202,85,227,106.7C252.6,128,278,128,303,144C328.4,160,354,192,379,218.7C404.2,245,429,267,455,261.3C480,256,505,224,531,229.3C555.8,235,581,277,606,250.7C631.6,224,657,128,682,117.3C707.4,107,733,181,758,181.3C783.2,181,808,107,834,106.7C858.9,107,884,181,909,218.7C934.7,256,960,256,985,234.7C1010.5,213,1036,171,1061,176C1086.3,181,1112,235,1137,245.3C1162.1,256,1187,224,1213,181.3C1237.9,139,1263,85,1288,80C1313.7,75,1339,117,1364,117.3C1389.5,117,1415,75,1427,53.3L1440,32L1440,320L1427.4,320C1414.7,320,1389,320,1364,320C1338.9,320,1314,320,1288,320C1263.2,320,1238,320,1213,320C1187.4,320,1162,320,1137,320C1111.6,320,1086,320,1061,320C1035.8,320,1011,320,985,320C960,320,935,320,909,320C884.2,320,859,320,834,320C808.4,320,783,320,758,320C732.6,320,707,320,682,320C656.8,320,632,320,606,320C581.1,320,556,320,531,320C505.3,320,480,320,455,320C429.5,320,404,320,379,320C353.7,320,328,320,303,320C277.9,320,253,320,227,320C202.1,320,177,320,152,320C126.3,320,101,320,76,320C50.5,320,25,320,13,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section className=" pt-4 xl:h-auto xl:mx-20" id="about">
        <Reveal>
          <h1 className="text-3xl xl:text-4xl text-center mb-3 font-bold">
            About Me
          </h1>
        </Reveal>
        <About />
      </section>
      <section
        className=" pt-20 xl:mt-32 xl:px-20 px-4 xl:h-screen "
        id="portfolio"
      >
        <Reveal>
          <h1 className="text-3xl xl:text-4xl text-center font-bold">
            My Portfolio
          </h1>
        </Reveal>
        <PortfolioCard />
      </section>
      <section className="py-5 xl:h-screen xl:mt-10" id="contact">
        <Reveal>
          <h1 className="text-3xl text-center pt-10 font-bold">Get In Touch</h1>
        </Reveal>
        <Contact iconColor={iconColor} />
      </section>
    </main>
  )
}
