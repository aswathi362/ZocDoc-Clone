import React from 'react'
import SignUpLogo from '../assets/signUpPage/SignUpLogo.svg'
import SignUpForm from '../components/Signup/SignUpForm'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer';

function SignUpPage() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/')
  } 
  return (
    <div>
        <div className='flex p-4 px-16' onClick={handleLogoClick}>
            <img src={SignUpLogo} className='h-10'/>
        </div>
        <SignUpForm/>
        <Footer/>
    </div>
  )
}

export default SignUpPage