import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaWhatsapp } from "react-icons/fa6";

const Contact = () => {



  return (
    <div>

      <div name="Contact" className="bg-slate-800 md:px-16 w-full text-white ">


        <div className=" max-w-screen-lg  mx-auto flex flex-col items-center justify-center  ">
          <br />
          <h1 className='flex font-bold  md:align-middle text-xl py-1 px-32'>Follow on</h1>

          <div className='m-4'>
            <button><a href="https://www.linkedin.com/in/sunnychiluka/"><FaLinkedin size={20} /></a></button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button> <a href="'https://github.com/sunny-star'"><FaGithub size={20} /></a></button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button><a href="mailto:sunnysunny968667@gmail.com"><HiOutlineMail size={20} /></a></button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button><a href="https://www.instagram.com/sunny_chiluka07?igsh=eGVjZDA2enF1bXo4"><FaInstagram size={20} /></a></button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button><a href="https://www.facebook.com/profile.php?id=100025448063447&mibextid=JRoKGi"><FaFacebook size={20} /></a></button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button><a href="https://wa.me/9676002081"><FaWhatsapp size={20} /></a></button>
          </div>


          <div>

            <button>Built &nbsp; with 💖 by</button>
            <button className='text-blue-500'>&nbsp;&nbsp;&nbsp;SUNNY</button>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
