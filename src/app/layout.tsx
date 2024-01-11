import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Reveal from "@/utils/Reveal"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio | Aditya Yudha",
  description: "My portfolio",
}

const ButtonResume = () => {
  return (
    <a href="/resume.pdf" target="_blank" className=" btn btn-primary">
      My Resume
    </a>
  )
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" id="theme-switcher">
      <body
        className={`${inter.className} bg-neutral-900`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        <div className="hidden xl:block xl:absolute xl:right-4 xl:top-4">
          <Reveal>
            <ButtonResume />
          </Reveal>
        </div>
        <div className="xl:pl-20">{children}</div>

        <footer className="text-center py-10 text-gray-500">
          <h1>&copy; 2023 Aditya Yudha</h1>
        </footer>
      </body>
    </html>
  )
}
