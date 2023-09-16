import React from 'react'
import LargeCard from './LargeCard'
const Project = () => {
  const projectData=[
    {
      id:1,
      image:"/src/images/project-1.png" ,
      heading:"Project ONE"
    },
    {
      id:2,
      image:"/src/images/project-2.png" ,
      heading:"Project TWO"
    },
    {
      id:3,
      image:"/src/images/project-3.png" ,
      heading:"Project THREE"
    }
  ]
  return (
    <>
    <div className="container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-evenly">
      {
        projectData.map((Project,i)=> < LargeCard key={i} image={Project.image} heading={Project.heading} />
        )
      }
   
    </div>


    </>
  )
}

export default Project