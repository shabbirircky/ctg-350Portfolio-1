import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
const Intro = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 mt-20 container">
      <div className="justify-self-end sm:justify-items-center">
      <div className="avatar">
  <div className=" sm:w-40 md:w-64 lg:w-96 rounded-full">
    <img src="/src/images/profile-pic.png" />
  </div>
</div>
      </div>
      <div className=" justify-self-start mx-6 my-8  ">
        <p className="text-sm,  text-gray-400, font-medium">Hello.I'm</p>
       <br />
        <h2 className="text-6xl , font-semibold ">Jhon Doe</h2>
        <br />
        <h4 className="text-3xl , text-gray-400 , font-medium">Frontend Devloper</h4>
       <br />
        <button className="btn btn-outline , rounded-full ">Download CV</button>    <button className="btn btn-neutral , rounded-full">Contact info</button>
        <div className="flex justify-center mt-10 gap-10">

        <BsLinkedin/><BsGithub/>
        </div>

      </div>
    </div>
  )
}

export default Intro