import portfolio from "@/composables/datas"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y, Scrollbar } from "swiper/modules"
import "swiper/css/bundle"
import { IoInformationCircle } from "react-icons/io5"

import Item from "./Item"
import MySwiper from "./MySwiper"
import PortfolioThumb from "./PortfolioThumb"
import Reveal from "@/utils/Reveal"
import { FaGithub, FaTools } from "react-icons/fa"

const PortfolioCard = () => {
  const breakpoints = {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  }
  return (
    <>
      <Swiper
        modules={[Navigation, Scrollbar, Pagination, A11y]}
        slidesPerView={1}
        loop={true}
        breakpoints={breakpoints}
        pagination={{ clickable: true }}
        className="max-h-screen  my-3 "
      >
        {portfolio.map((data) => (
          <SwiperSlide
            key={data.id}
            className="bg-neutral-800 pb-6 xl:pb-10 border border-gray-700 rounded-lg"
          >
            <div className="  xl:flex xl:items-center  xl:justify-center xl:px-10">
              <div className="mt-5">
                <Reveal>
                  <h1 className="text-2xl text-primary text-center md:my-4 md:text-3xl">
                    {data.title}
                  </h1>
                  <PortfolioThumb img={data.img} demo={data.demo} />
                </Reveal>
              </div>
              <div className="p-3 min-h-[22.2rem] relative my-5 xl:mt-20  xl:w-1/2  ">
                <Reveal>
                  <Item
                    title="About"
                    icon={<IoInformationCircle />}
                    content={data.about}
                  />

                  <Item
                    title="Tools & Tech"
                    icon={<FaTools />}
                    content={data.tech}
                  />
                  <Item
                    title="Repository"
                    icon={<FaGithub />}
                    content={
                      <a
                        className="hover:text-primary hover:underline transition-all ease-in duration-300"
                        href={data.repo}
                      >
                        {data.repo}
                      </a>
                    }
                  />
                </Reveal>
                <div className="mt-4 absolute bottom-0 ">
                  <Reveal>
                    <div className=" text-primary">
                      <a href={data.demo} className="btn btn-primary">
                        Preview
                      </a>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <MySwiper />
      </Swiper>
    </>
  )
}
export default PortfolioCard
