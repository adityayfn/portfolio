import Reveal from "@/utils/Reveal"
import React from "react"

const Item = () => {
  return (
    <>
      <Reveal>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <h1>Age:</h1>
          <h2>20 Years</h2>
        </div>
        <div className="flex gap-2 items-center ">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <h1>Nationality:</h1>
          <h2>Indonesia</h2>
        </div>
        <div className="flex gap-2 items-center ">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <h1>Address:</h1>
          <h2>Malang, East Java</h2>
        </div>
        <div className="flex gap-2 items-center ">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <h1>Phone:</h1>
          <h2>+62 89675601599</h2>
        </div>
        <div className="flex gap-2 items-center ">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <h1>Email:</h1>
          <h2>adhitya.firstian@gmail.com</h2>
        </div>
      </Reveal>
    </>
  )
}

export default Item
