import { useSwiper } from "swiper/react"
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"

const MySwiper = () => {
  const swiper = useSwiper()

  return (
    <div className="absolute w-full hidden xl:block bottom-4 right-2 z-10   ">
      <div className="flex gap-2 justify-end">
        <button onClick={() => swiper.slidePrev()}>
          <FaArrowCircleLeft className="text-3xl hover:text-primary" />
        </button>
        <button onClick={() => swiper.slideNext()}>
          <FaArrowCircleRight className="text-3xl hover:text-primary" />
        </button>
      </div>
    </div>
  )
}

export default MySwiper
