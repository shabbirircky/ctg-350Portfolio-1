import React from 'react'

// import { SlBadge } from "react-icons/si";


export const SmallCard = ({title,year,workArea,icone}) => {
  return (
    <>
    <div>
    <div className="card w-80 border-2 border-state-600 text-center">
  <div className="card-body">
    <h2 className="card-title flex justify-center">
    {icone}
    </h2>
    
    <h1 className='text-3xl font-bold'>{title}</h1>
    <p>{year} </p>
     <p> {workArea}</p>
  </div>
</div>
    </div>

    </>
  )
}
