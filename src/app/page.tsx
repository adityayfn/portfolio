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
    console.log(themeName)
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
      </section>
      <section className=" pt-4 xl:h-screen xl:mx-20" id="about">
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
