import React from 'react'
import YellowButton from '../ReusableComponents/Buttons/YellowButton'
import jobs from '../../assets/jobs.png'

function Jobs() {
  return (
    <div className='bg-bright-yellow lg:px-20 pb-10'>
        <div className='container mx-auto bg-white p-10 grid grid-cols-1 lg:grid-cols-2 pb-0'>
            <div className='mx-10 my-auto flex flex-col justify-start items-start pb-40 lg:pb-0'>
                <p className='text-lg my-3'>Zocdoc jobs</p>
                <p className='text-2xl my-3'>Join us, and help transform
                healthcare for everyone.</p>
                <div className='my-3'>
                    <YellowButton text={"View job openings"}/>
                </div>
            </div>
            <div className=''>
                <img src={jobs} className='w-full -mt-24' alt='job search'/>
            </div>
        </div>
    </div>
  )
}

export default Jobs