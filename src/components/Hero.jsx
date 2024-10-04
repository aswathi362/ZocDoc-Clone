import React, { useEffect, useState } from 'react'
import YellowButton from './Buttons/YellowButton'
import SpecialitySearchBar from './SpecialitySearchBar';
import InsuranceSearchBar from './InsuranceSearchBar';
import heroImg from '../assets/heroImg.png'
import heroLines from '../assets/heroLines.png'

function Hero() {
    const words = ['doctors', 'dentists', 'OB-GYNs','dermatologists'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);
  return (
    <div className='container py-16 px-12 mx-auto relative'>
        <p className='hidden lg:block text-5xl font-light leading-tight'>Book local <span className='swipe-text'>{words[currentWordIndex]}</span><br/>who take you insurance</p>
        <img src={heroImg} className='absolute w-[41%] -right-9 -top-16 hidden lg:block' alt='insurnace card image'/>
        <img src={heroLines} className='absolute w-10 right-5 hidden lg:block' alt='exclamation'/>
        <div className='mx-auto border-2 border-black rounded-md bg-white lg:mt-10 lg:ps-7 flex flex-col items-center lg:flex-row w-full'>
            <SpecialitySearchBar/>
            <div className='border-l lg:h-10 border-pale-grey lg:px-2'></div>
            <div className='p-3 flex grow items-center w-full lg:w-auto'>
                <i className='bi bi-geo-alt-fill'></i>
                <input className='p-2 rounded-md grow focus:outline-none' value="Kanchipuram, TN"/>
            </div>
            <div className='border-l lg:h-10 border-pale-grey lg:px-2'></div>
            <InsuranceSearchBar/>
            <div className='bg-neon-yellow p-3 hidden lg:block'>
                <YellowButton text={<i className="bi bi-search bold-icon" style={{height:"100%", width:"100%"}}></i>} />
            </div>
            <div className='block lg:hidden my-3'>
                <YellowButton text={"Find care"}/>
            </div>
        </div>
    </div>
  )
}

export default Hero