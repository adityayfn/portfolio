import React from "react"
import ContactItem from "./ContactItem"

import {
  mdiEmail,
  mdiGithub,
  mdiInstagram,
  mdiLinkedin,
  mdiMapMarker,
  mdiPhone,
  mdiShareVariant,
} from "@mdi/js"
import Icon from "@mdi/react"
import Reveal from "@/utils/Reveal"
import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShareAlt,
} from "react-icons/fa"
import { IoIosMail } from "react-icons/io"
import { AiFillInstagram } from "react-icons/ai"

interface Props {
  iconColor: string | null
}
const Contact: React.FC<Props> = ({ iconColor }) => {
  const iconClass: string =
    "text-5xl text-primary border-2 border-black rounded-full absolute top-[-30px] p-2 bg-neutral-800"

  return (
    <div className="mx-4 my-14 grid grid-cols-1 md:grid-cols-2 gap-10 ">
      <Reveal>
        <ContactItem
          icon={<FaPhoneAlt className={iconClass} />}
          title="Phone"
          content={<h1>+62 89675601599</h1>}
        />
      </Reveal>
      <Reveal>
        <ContactItem
          icon={<FaMapMarkerAlt className={iconClass} />}
          title="Address"
          content={<h1> Malang,Indonesia</h1>}
        />
      </Reveal>
      <Reveal>
        <ContactItem
          icon={<IoIosMail className={iconClass} />}
          title="Email"
          content={<h1>adhitya.firstian@gmail.com</h1>}
        />
      </Reveal>
      <Reveal>
        <ContactItem
          icon={<FaShareAlt className={iconClass} />}
          title="Follow Me"
          content={
            <div className="flex gap-2">
              <a
                className="hover:text-primary"
                href="https://github.com/adityayfn"
              >
                <FaGithub className="text-2xl" />
              </a>

              <a
                className="hover:text-primary"
                href="https://www.instagram.com/adit_oi098/"
              >
                <AiFillInstagram className="text-2xl" />
              </a>

              <a
                className="hover:text-primary"
                href="https://www.linkedin.com/in/aditya-yudha-firstian/"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          }
        />
      </Reveal>
    </div>
  )
}

export default Contact
