import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Intro from './compontnt/intro'
import SectionTitle from './compontnt/sectionTitle'
import AboutMe from './compontnt/AboutMe'
import Experience from './compontnt/Experience'
import Project from './compontnt/Project'
function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    <Intro/>
    <SectionTitle subTitle="Get to No More" mainTitle="About Me"/>
    <AboutMe/>
    <SectionTitle subTitle="Explore My" mainTitle="Experience" />
    <Experience/>
    <SectionTitle subTitle="Browse My Recent" mainTitle="Projects" />
    <Project/>

    </>
  )
}

export default App
