import { FaBarsStaggered } from "react-icons/fa6"

const NavButton = () => {
  return (
    <>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden fixed right-4 top-4 z-40"
        >
          <FaBarsStaggered className="text-2xl" />
        </label>
      </div>
    </>
  )
}

export default NavButton
