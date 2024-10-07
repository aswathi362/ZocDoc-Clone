import React from 'react'
import doctor from '../../assets/doctor.jpg'
import YellowButton from '../ReusableComponents/Buttons/YellowButton'

function PrivatePractice() {
  return (
    <div className='p-16 grid grid-cols-1 lg:grid-cols-2'>
        <div>
            <img src={doctor} alt='doctor'/>
        </div>
        <div className='mx-10 my-auto flex flex-col justify-start items-start'>
            <p className='text-lg my-5'>Zocdoc for private practices</p>
            <p className='text-2xl my-5'>Are you a provider interested in reaching new patients?</p>
            <ul className='font-extralight my-5 list-disc mx-5'>
                <li className='list-item'>Reach patients in your area looking for a new provider</li>
                <li>Fill last-minute openings in your schedule</li>
                <li>Strengthen your online reputation with verified reviews</li>
            </ul>
            <div className='my-5'>
                <YellowButton text={"List your practice on Zocdoc"}/>
            </div>
        </div>
    </div>
  )
}

export default PrivatePractice