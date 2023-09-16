import React from 'react'
import { SmallCard } from './SmallCard'
import { DiIe } from "react-icons/di";
import { FiGift } from "react-icons/fi";
const AboutMe = () => {
  const aboutmeData=[
    {
      id:1,
      title:"Experience",
      year:"2+ Years",
      workArea:"Frontend Development",
      icone:<DiIe/>,
    },
    {
      id:2, 
      title:"Education",
      year:"B.Sc. Bachelors Degree",
      workArea:"M.Sc. Masters Degree",
      icone:<FiGift/>,
    }
  ]
  return (
    <>
    <div className='container  mx-auto mt-14 '>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 justify-items-center'>
        <div>
          <img className='w-96 rounded-xl' src="/src/images/about-pic.png " alt="" />
        </div> 
        <div>
          <div className=' gap-5 grid sm:grid-cols-1  lg:grid-cols-2'>
          {
            aboutmeData.map((AboutMe ,i  ) => < SmallCard key={i} title={AboutMe.title} year={AboutMe.year} workArea={AboutMe.workArea} icone={AboutMe.icone} />)
            }
          </div>
          <br /><br />
          <p className='text-xl font-medium text-current text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore natus in enim, vitae ut quidem vero consectetur id numquam pariatur culpa asperiores aliquam eaque, veritatis repellendus expedita optio nesciunt illum!</p>
        


        </div>
      </div>
    </div>
    </>
  )
}

export default AboutMe