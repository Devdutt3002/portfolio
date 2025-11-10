import logo from "../assets/Logo.svg";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className='mx-2 w-10' src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/devdutt-kaushik-66094a285" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/Devdutt3002" target="_blank"><FaGithub /></a>
            <a href="https://www.instagram.com/devduttk30?igsh=ZWRjY24xaDN6dWlk" target="_blank"><FaInstagram /></a>
        </div>
    </nav>
  )
}

export default Navbar