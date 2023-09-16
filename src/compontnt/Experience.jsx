import React from 'react'
import { AiFillCheckCircle } from "react-icons/ai";
const Experience = () => {
  return (
    <>
    <div className='container grid  sm:grid-cols-1 md:grid-cols-2 gap-5'>
        <div className="border-2 border-indogo-500 rounded-lg">
            <h2 className='text-4xl font-semibold mt-5  mb-5'>Frontend Development</h2>
            <div className="flex justify-around mt-5 mb-2">
                <div className="flex">
                <div className="">
                    <AiFillCheckCircle/> 
                </div>
                <div className="">
                    <h2 className=' text-2xl font-semibold'>HTML</h2>
                    <p>Experienced </p>
                </div>
            </div>
                <div className="flex">
                <div className="">
                <AiFillCheckCircle/> 
                </div>
                <div className="">
                    <h2 className=' text-2xl font-semibold'>CSS</h2>
                    <p>Experienced</p>
                </div>
            </div>
            </div>
            <div className="flex justify-around mt-5 mb-2">
                <div className="flex">
                <div className="">
                <AiFillCheckCircle/> 
                </div>
                <div className="">
                    <h2 className=' text-2xl font-semibold'>SASS</h2>
                    <p>Intermediate</p>
                </div>
            </div>
                <div className="flex">
                <div className="">
                <AiFillCheckCircle/> 
                </div>
                <div className="">
                    <h2 className=' text-2xl font-semibold'>JavaScript</h2>
                    <p>Experienced</p>
                </div>
            </div>
            </div>
            <div className="flex justify-around mt-5 mb-2">
                <div className="flex">
                <div className="">
                <AiFillCheckCircle/> 
                </div>
                <div className="">
                    <h2 className=' text-2xl font-semibold'>TypeScript</h2>
                    <p>Basic</p>
                </div>
            </div>
                <div className="flex">
                <div className="">
                <AiFillCheckCircle/> 
                </div>
                <div className="">
                    <h2 className=' text-2xl font-semibold'>Material UI</h2>
                    <p>Intermediate</p>
                </div>
            </div>
            </div>
        
        </div>
        <div className="border-2 border-indogo-500 rounded-lg">
            <h2 className='text-4xl font-semibold mt-5 mb-5 '>Backend Development</h2>
            <div className="flex justify-around mt-5 mb-2">
                <div className="flex">
                <div className="">
                <AiFillCheckCircle/> 
                </div>
                <div className="">
                    <h2 className=' text-2xl font-semibold'>PostgreSQL</h2>
                    <p>Basic</p>
                </div>
            </div>
                <div className="flex">
                <div className="">
                <AiFillCheckCircle/> 
                </div>
                <div className="">
                    <h2 className=' text-2xl font-semibold'>Node JS</h2>
                    <p>Intermediate</p>
                </div>
            </div>
            </div>
            <div className="flex justify-around mt-5 mb-2">
                <div className="flex">
                <div className="">
                <AiFillCheckCircle/> 
                </div>
                <div className="">
                    <h2 className=' text-2xl font-semibold'>Express JS</h2>
                    <p>Intermediate</p>
                </div>
            </div>
                <div className="flex">
                <div className="">
                <AiFillCheckCircle/> 
                </div>
                <div className="">
                    <h2 className=' text-2xl font-semibold'>Git</h2>
                    <p>Intermediate</p>
                </div>
            </div>
            </div>

        </div>
    </div>

    </>
  
    )
  }

export default Experience