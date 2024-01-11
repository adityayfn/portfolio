"use client"
import { useState } from "react"
import Icon from "@mdi/react"
import { mdiCogOutline } from "@mdi/js"
import Colors from "./Colors"
import { FaGear } from "react-icons/fa6"

interface Props {
  themeControl: (themeName: string) => void
}

const ThemePanel: React.FC<Props> = ({ themeControl }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <div
        className={`fixed top-20 right-0 z-20 hover:cursor-pointer bg-neutral-600 ${
          isOpen ? "w-40 h-40" : "w-12"
        }  px-1 transition-all ease-in-out duration-300`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaGear
          className="text-4xl p-1"
          style={{ animation: "spin 2s linear infinite" }}
        />

        <Colors isOpen={isOpen} themeControl={themeControl} />
      </div>
    </div>
  )
}

export default ThemePanel
