interface Props {
  isOpen: boolean
  themeControl: (themeName: string) => void
}
export const themeOptions = [
  { name: "bumblebee", color: "bg-[#E4BD00]" },
  { name: "emerald", color: "bg-[#58B177]" },

  { name: "synthwave", color: "bg-[#D972B6]" },
  { name: "nigth", color: "bg-[#31AADF]" },
  { name: "coffee", color: "bg-[#BE7E40]" },
  { name: "forest", color: "bg-[#18A048]" },
]

const Colors: React.FC<Props> = ({ isOpen, themeControl }) => {
  return (
    <div
      className={`fixed p-3 top-24  w-40   ${
        isOpen ? "right-0" : "right-[-150px]"
      } transition-all ease-in-out duration-300`}
    >
      <h1 className="my-3 text-center text-white">Themes Switcher</h1>
      <div className="flex flex-wrap gap-2">
        {themeOptions?.map((option, index) => (
          <div
            key={index}
            className={`w-7 h-7  ${option.color} rounded-full`}
            onClick={() => themeControl(option.name)}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Colors
