import React from 'react'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'

const Portfolio = () => {

    const portfolio = [
        {
            id: 1,
            src: img2,
        },
        {
            id: 2,
            src: img3
        },
        {
            id: 3,
            src: img7
        },
        {
            id: 4,
            src: img5
        },
        {
            id: 5,
            src: img6
        },
        {
            id: 6,
            src: img4
        },
    ]



    return (
        <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white '>
            <div className='max-w-screen-lg p-4 px-9 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>


                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                    {
                        portfolio.map(({ id, src , href }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg '>
                                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />

                                <div className='flex items-center justify-center'>

                                        <button key={id} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >
                                        Demo
                                        </button>
                                        <button key={id} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >
                                        Code
                                        </button>

                                </div>


                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio
