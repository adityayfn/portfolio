import Link from "next/link"
import { FaSquareArrowUpRight } from "react-icons/fa6"

interface IModal {
  title: string
  desc: string
}

interface IProps {
  img: string
  demo: string
}

const PortfolioThumb: React.FC<IProps> = ({ img, demo }) => {
  return (
    <div className="relative  m-4">
      <img src={img} alt="portfolio-thumbnail" />
      <div className="md:absolute md:top-0 md:w-full md:h-full md:hover:bg-black md:hover:opacity-90 md:grid md:place-items-center md:transition-all md:ease-in-out md:duration-300 md:opacity-0 hidden">
        <Link href={demo} className="tooltip tooltip-top " data-tip="Preview">
          <FaSquareArrowUpRight className="text-4xl" />
        </Link>
      </div>
    </div>
  )
}

export default PortfolioThumb
