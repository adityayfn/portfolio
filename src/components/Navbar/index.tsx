import NavButton from "./NavButton"
import NavItemContainer from "./NavItemContainer"

const Navbar = () => {
  return (
    <nav className="fixed z-40 ">
      <div className="hidden xl:block">
        <NavItemContainer />
      </div>

      <div className="drawer ">
        <NavButton />
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu py-20 w-full md:w-1/2 h-screen bg-neutral-800 text-base-content text-3xl px-8 ">
            <NavItemContainer />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
