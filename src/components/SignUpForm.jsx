import React, { useState } from 'react'
import YellowButton from '../components/Buttons/YellowButton'
import Tooltip from './Tooltip';

function SignUpForm() {
    const [showTooltipFirstName, setShowTooltipFirstName] = useState(false);
    const [showTooltipLastName, setShowTooltipLastName] = useState(false);
    const [showTooltipSex, setShowTooltipSex] = useState(false);
  return (
    <div>
        <div className='w-[40%] mx-auto my-16 flex flex-col'>
            <h1 className='text-3xl font-bold my-3'>Create an account</h1>
            <div className='flex flex-col my-5'>
                <p className='my-2'>Email</p>
                <input placeholder='' className='border border-pale-grey rounded-md p-3'/>
            </div>
            <div className='flex gap-2 my-3 relative'>
                <div className='flex-col grow'>
                    <p className="my-2">
                        Legal First Name
                        <button onMouseEnter={() => setShowTooltipFirstName(true)}
                            onMouseLeave={() => setShowTooltipFirstName(false)}
                            className="relative"
                        >
                            <i className="bi bi-info-circle ml-1"></i>
                        </button>
                        {showTooltipFirstName && <Tooltip position="-top-16" text="Share your legal name as listed in your insurance or medical records to create an appointment directly within the practice's calendar and verify your insurance coverage."/>}
                    </p>
                    <input placeholder='' className='border border-pale-grey rounded-md p-3 w-full'/>
                </div>
                <div className='flex-col grow'>
                    <p className="my-2">
                        Legal Last Name
                        <button onMouseEnter={() => setShowTooltipLastName(true)}
                            onMouseLeave={() => setShowTooltipLastName(false)}
                            className="relative"
                        >
                            <i className="bi bi-info-circle ml-1"></i>
                        </button>
                        {showTooltipLastName && <Tooltip position="-top-16" text="Share your legal name as listed in your insurance or medical records to create an appointment directly within the practice's calendar and verify your insurance coverage."/>}
                    </p>
                    <input placeholder='' className='border border-pale-grey rounded-md p-3 w-full'/>
                </div>
            </div>
            <div className='flex flex-col my-3'>
                <p className='my-2 font-bold'>Date of Birth</p>
                <input placeholder='dd/mm/yyyy' className='border border-pale-grey rounded-md p-3'/>
            </div>
            <div className='relative'>
                <p className="my-2">
                    Sex
                    <button onMouseEnter={() => setShowTooltipSex(true)}
                        onMouseLeave={() => setShowTooltipSex(false)}
                        className="relative"
                    >
                        <i className="bi bi-info-circle ml-1"></i>
                    </button>
                    {showTooltipSex && <Tooltip position="-top-8" text="Sex as listed in your health insurance or medical records for insurance matching"/>}
                </p>
                <input type="radio" name="sex" value="male"/>
                <label for="male" className='ps-2'>Male</label>
                <br/>
                <input type="radio" id="css" name="sex" value="female"/>
                <label for="female" className='ps-2'>Female</label>
            </div>
            <div className='my-3 flex gap-1'>
                <p className='font-bold underline'>Add more sex & gender info</p><p className='text-grey'>(optional)</p>
            </div>
            <div className='text-center my-5'>
                <YellowButton text="Sign Up"/>
            </div>
        </div>
    </div>
  )
}

export default SignUpForm