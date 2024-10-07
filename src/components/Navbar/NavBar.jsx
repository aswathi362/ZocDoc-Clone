import React, { useState } from "react";
import logo from '../../assets/logo.png';
import NavbarButton from "../ReusableComponents/Buttons/NavbarButton";
import YellowButton from "../ReusableComponents/Buttons/YellowButton";
import WhiteButton from "../ReusableComponents/Buttons/WhiteButton";
import Modal from '../ReusableComponents/Modal';
import BrowseModalContent from './BrowseModalContent';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleLogin = () => {
    setIsLoginDropdownOpen(!isLoginDropdownOpen);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSignUp = () => {
    navigate('/sign-up');
  }

  return (
    <>
      <nav className="bg-gray-800 py-3 px-5 md:px-12">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <button
              className="focus:outline-none lg:hidden font-bold"
              onClick={toggleNavbar}
            >
              <i className={`bi ${isOpen ? "bi-x-lg" : "bi-list"} text-2xl`}></i>
            </button>
            <div className="flex flex-row items-center">
              <img src={logo} className="img-fluid" style={{width:"65px"}} alt="zocdoc"/>
              <p className="text-lg font-semibold">Zocdoc</p>
            </div>
          </div>
          <div className="hidden lg:flex lg:items-center lg:w-auto">
            <div className="flex space-x-2 me-5">
              <NavbarButton text={"Browse"} isDropdown={true} onClick={openModal} /> 
              <NavbarButton text={"Help"} isDropdown={false} onClick={"#"} />
              <NavbarButton text={"List your practice on Zocdoc"} isDropdown={false} onClick={"#"} />
              <div className="border-l border-pale-grey h-7 border-2 my-2"></div>
              <NavbarButton text={"Log in"} onClick={toggleLogin} isDropdown={true} />
              <YellowButton text={"Sign up"} isDropdown={false} onClick={handleSignUp} />
            </div>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full bg-gray-800 md:hidden`}
        >
          <div className="flex flex-col space-y-4 justify-center mx-10 my-9">
            <div className="w-2/3 mx-auto"><h1 className="my-3 text-2xl">Welcome to Zocdoc</h1></div>
            <div className="w-2/3 text-center mx-auto"><YellowButton text={"Sign up"} onClick={handleSignUp}/></div>
            <div className="w-2/3 text-center mx-auto"><WhiteButton text={"Log in"} /></div>
            <div className="text-center pt-6 font-light">Interested in <span className="font-medium underline">listing your practice?</span></div>
          </div>
        </div>

        {isLoginDropdownOpen && (
          <div className="absolute top-16 right-52 mt-2 w-1/5 bg-white rounded-md shadow-xl z-50 px-5">
            <div className="py-2">
              <h1 className="text-black font-black py-2">Patients</h1>
              <a><p className="text-grey font-light py-2">Log in</p></a>
              <div className="border-b border-grey border-1 my-3"></div>
              <h1 className="text-black font-black py-2">Doctors</h1>
              <a><p className="text-grey font-light py-2">Log in</p></a>
            </div>
          </div>
        )}
      </nav>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <BrowseModalContent />
      </Modal>
    </>
  );
};

export default Navbar;