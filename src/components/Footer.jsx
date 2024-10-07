import React from 'react'

function Footer() {
  return (
    <div className='bg-dark-grey'>
        <div className='grid grid-cols-4 px-20 py-7'>
            {/* Zocdoc */}
            <div className='flex flex-col'>
                <h1 className='text-white font-bold my-3'>Zocdoc</h1>
                <ul className='text-grey font-light'>
                    <li className='mb-2 hover:text-white'>Home</li>
                    <li className='mb-2 hover:text-white'>About Us</li>
                    <li className='mb-2 hover:text-white'>Press</li>
                    <li className='mb-2 hover:text-white'>Careers</li>
                    <li className='mb-2 hover:text-white'>Contact Us</li>
                    <li className='mb-2 hover:text-white'>Help</li>
                </ul>
            </div>
            
            {/* Discover */}
            <div className='flex flex-col'>
                <h1 className='text-white font-bold my-3'>Discover</h1>
                <ul className='text-grey font-light'>
                    <li className='mb-2 hover:text-white'>The Paper Gown Stories for and about patients</li>
                    <li className='mb-2 hover:text-white'>Practice Resources for providers</li>
                    <li className='mb-2 hover:text-white'>Community Standards</li>
                    <li className='mb-2 hover:text-white'>Data and privacy</li>
                    <li className='mb-2 hover:text-white'>Verified reviews</li>
                </ul>
            </div>
            
            {/* Top Specialities */}
            <div className='flex flex-col'>
                <h1 className='text-white font-bold my-3'>Top Specialities</h1>
                <ul className='text-grey font-light'>
                    <li className="mb-2 hover:text-white">Primary Care Doctor</li>
                    <li className="mb-2 hover:text-white">Urgent Care</li>
                    <li className="mb-2 hover:text-white">Dermatologist</li>
                    <li className="mb-2 hover:text-white">OB-GYN</li>
                    <li className="mb-2 hover:text-white">Dentist</li>
                    <li className="mb-2 hover:text-white">Psychiatrist</li>
                    <li className="mb-2 hover:text-white">Ear, Nose & Throat Doctor</li>
                    <li className="mb-2 hover:text-white">Podiatrist</li>
                    <li className="mb-2 hover:text-white">Urologist</li>
                    <li className="mb-2 hover:text-white">Gastroenterologist</li>
                    <li className="mb-2 hover:text-white">Cardiologist</li>
                    <li className='mb-2 hover:text-white'>View all</li>
                </ul>
            </div>
            
            {/* Are you a doctor */}
            <div className='flex flex-col'>
                <h1 className='text-white font-bold my-3'>Are you a top doctor or health service?</h1>
                <ul className='text-grey font-light'>
                    <li className="mb-2 hover:text-white">List your practice on Zocdoc</li>
                    <li className="mb-2 hover:text-white">Become an EHR partner</li>
                    <li className="mb-2 hover:text-white">Access Zocdoc for Developers</li>
                    <li className="mb-2 hover:text-white">Learn about Zocdoc Enterprise Solutions</li>
                </ul>
            </div>
        </div>
        <div>
            <p className='text-xs text-grey px-20 py-6'>The content provided here and elsewhere on the Zocdoc site or mobile app is provided for general informational purposes only. It is not intended as, and Zocdoc does not provide, medical advice, diagnosis or treatment. Always contact your healthcare provider directly with any questions you may have regarding your health or specific medical advice.</p>
        </div>
        <div className='bg-black text-grey flex justify-between px-16'>
            <div className='flex justify-evenly p-4 gap-4'>
                <p className='text-white'>© 2024 Zocdoc, Inc.</p>
                <p>Terms</p>
                <p>Privacy</p>
                <p>Consumer Health</p>
                <p>Site map</p>
                <p>Your privacy choices</p>
            </div>
            <div className='flex justify-evenly items-center text-2xl gap-4'>
                <i className='bi bi-instagram'></i>
                <i className='bi bi-facebook'></i>
                <i className='bi bi-twitter'></i>
                <i className='bi bi-linkedin'></i>
            </div>
        </div>
    </div>
  )
}

export default Footer