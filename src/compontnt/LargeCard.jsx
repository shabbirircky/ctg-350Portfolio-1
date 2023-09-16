import React from 'react'

const LargeCard = ({image,heading}) => {
  return (
    <>
        <div className="card w-96 glass mt-2 mb-2">
  <figure><img src="/src/images/project-1.png" alt="car!"/></figure>
  <div className="card-body text-center">
    <h2 className="text-center font-medium text-2xl ">{heading}</h2>
    
    <div className="card-actions justify-center">
      <button className="btn btn-outline , rounded-full ">Git Hub </button>
      <button className="btn btn-outline , rounded-full ">Live Demo</button>
    </div>
  </div>
</div>
    </>
  )
}

export default LargeCard