import React from 'react'
import img1 from '../assets/img1.jpeg.jpg'
import { MdOutlineArrowRight } from "react-icons/md";
import { Link} from 'react-scroll'

const Home = () => {
    return (
        <div name="home" className='h-screen bg-gradient-to-b from-black to-gray-800 via-black pt-16'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4  md:flex-row'>
                <div className='flex flex-col justify-center h-full px-4'>
                    <h2 className='text-4xl sm:text-6xl font-bold text-white  '>I'm a Full Stack Developer</h2>
                    <p className='text-gray-300 py-4 max-w-md'>
                        I have 1 year of experience in Web Designing.
                        Currently, I love to work on web application using technologies like
                        React, Tailwind, JavaScript, BootStrap, html.
                    </p>
                    <div>
                        <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 cursor-pointer'>
                            Portfolio <span className='group-hover:rotate-90 duration-300'><MdOutlineArrowRight size={25} /></span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={img1} alt="my profile" className='rounded-3xl mx-auto w-2/3 md:w-2/3' />
                </div>
            </div>
        </div>
    )
}

export default Home
