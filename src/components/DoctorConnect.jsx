import React from 'react'
import DoctorCard from './DoctorCard'
import doc1 from '../assets/doctor/doc1.svg'
import doc2 from '../assets/doctor/doc2.svg'
import doc3 from '../assets/doctor/doc3.svg'


function DoctorConnect() {
  return (
    <div className='bg-bright-yellow pt-10 pb-16'>
        <div className='container mx-auto text-center mt-10'>
            <h1 className='text-2xl'>Let’s get you a doc who gets you</h1>
            <div className='grid grid-cols-3 mt-36 gap-12 px-10'>
                <DoctorCard image={doc1} text={"Browse providers who take your insurance"} buttonText={"See specialities"}/>
                <DoctorCard image={doc2} text={"Read reviews from users"} buttonText={"See providers"}/>
                <DoctorCard image={doc3} text={"Book an appointment today, online"} buttonText={"See availablity"}/>
            </div>
        </div>
    </div>
  )
}

export default DoctorConnect