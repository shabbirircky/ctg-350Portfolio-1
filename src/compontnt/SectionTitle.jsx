
import React from 'react'

const SectionTitle = ({subTitle,mainTitle}) => {
  return (
    <>
         <div className='container mx-auto text-center mt-48 mb-32'>
        <h5 className='text-slate-500 text-xl'>{subTitle}</h5>
        <h2 className='font-bold text-5xl'>{mainTitle}</h2>
    </div>
    </>
  )
} 

export default SectionTitle