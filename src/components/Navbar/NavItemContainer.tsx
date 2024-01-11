"use client"
import { Link } from "react-scroll"

interface Props {
  home: string
  name: string
  offset?: number
}

const NavItem: React.FC<Props> = ({ home, name, offset }) => {
  return (
    <>
      <div className="relative group xl:rotate-90">
        <Link
          activeClass="active"
          to={home}
          spy={true}
          isDynamic={true}
          offset={offset}
        >
          <h1 className="font-bold cursor-pointer"> {name}</h1>
        </Link>

        <span className="xl:line-hover"></span>
        <hr className="border-t-2 border-gray-700 w-80 xl:hidden" />
      </div>
    </>
  )
}

const NavItemContainer = () => {
  return (
    <div className="flex flex-col gap-14 pt-4  h-screen xl:bg-black items-center text-slate-300">
      <Link
        className="text-4xl font-primary hidden xl:block font-bold hover:text-primary cursor-pointer"
        to="home"
      >
        A<span className="text-primary w-2">.</span>
      </Link>
      <NavItem home={"home"} name={"Home"} />
      <NavItem home={"about"} name={"About"} />
      <NavItem home={"portfolio"} name={"Portfolio"} />
      <NavItem home={"contact"} name={"Contact"} />
    </div>
  )
}

export default NavItemContainer
