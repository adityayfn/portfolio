"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import React, { useEffect, useRef } from "react"

interface Props {
  children: React.ReactNode
}

const Reveal = ({ children }: Props) => {
  const mainControls = useAnimation()
  const slideControls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, {
    once: true,
  })

  const animationVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  }

  useEffect(() => {
    if (inView) {
      mainControls.start("visible")
      slideControls.start("visible")
    }
  }, [mainControls, slideControls, inView])

  return (
    <div ref={ref} className="relative w-full overflow-hidden">
      <motion.div
        animate={mainControls}
        initial="hidden"
        variants={animationVariants}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { bottom: 0 },
          visible: { bottom: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, case: "easeIn" }}
        className="bg-primary"
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
        }}
      />
    </div>
  )
}

export default Reveal
