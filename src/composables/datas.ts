import store from "/public/thumb/store.png"
import muvie from "/public/thumb/muvie.png"
import lpVintage from "/public/thumb/lp-vintage.png"
import pictHunt from "/public/thumb/pict-hunt.png"
import islamApp from "/public/thumb/islam-app.png"
import animeDex from "/public/thumb/anime-dex.png"

const state = [
  {
    id: 1,
    title: "Fake Dr Martens Store",
    tech: "Nuxt 3,Vuetify,Pinia,Firebase",
    about:
      "Fake Dr Martens Store using Vue Js 3 with vite. In this project I use firebase database.",

    img: "/thumb/store.png",
    repo: "https://github.com/adityayfn/nuxt-boots-store",
    demo: "https://fake-drmartens-store.netlify.app/",
  },
  {
    id: 2,
    title: "Anime Dex",
    tech: "Next 14,Tailwind,Daisyui",
    about:
      "Anime Dex is an anime streaming platform and this was my first project while learning Next JS. I am using the API from https://docs.consumet.org/",

    img: "/thumb/anime-dex.png",
    repo: "https://github.com/adityayfn/anime-dex",
    demo: "https://animes-dex.vercel.app/",
  },
  {
    id: 3,
    title: "Pict Hunt",
    tech: "React,Ant Design",
    about:
      "Pict Hunt is an image explorer website, there are a lot of images for free on it. In this project, I used React JS and the API from Pixabay.",

    img: "/thumb/pict-hunt.png",
    repo: "https://github.com/adityayfn/pict-hunt",
    demo: "https://pict-hunt.vercel.app/",
  },
  {
    id: 4,
    title: "The Muvie Search",
    tech: "Vue,Vuetify",
    about:
      "This is a movie search project.In this project, I am using API from TMDB",

    img: "/thumb/muvie.png",
    repo: "https://github.com/adityayfn/muvie",
    demo: "https://the-muvie-search.netlify.app/",
  },

  {
    id: 5,
    title: "Islam App",
    tech: "Vue,Tailwind,Daisyui",
    about:
      "This is my first project during learn vue js. In this project I use API from https://api.quran.gading.dev/surah  ",

    img: "/thumb/islam-app.png",
    repo: "https://github.com/adityayfn/islam-app",
    demo: "https://islam-apps.netlify.app",
  },
]
export default state
