import React, { useEffect, useState } from 'react'
import insuarance from '../assets/insuarance.png'
import { getInsuranceSuggestions } from '../axios/axios';

function InsuranceSearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [hoveredTerm, setHoveredTerm] = useState('');
    const [suggestions, setSuggestions] = useState({});
    const [showSuggestions, setShowSuggestions] = useState(false);

    useEffect(()=>{
        getInsuranceSuggestions()
            .then((response) => {
                setSuggestions(response.data);
            })
            .catch((error) => {
                console.error("Error fetching insurance suggestions:", error);
            })
    },[]);

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion);
        setShowSuggestions(false);
    };

    const handleMouseOver = (suggestion) => {
        setHoveredTerm(suggestion);
    };

    const handleMouseLeave = () => {
        setHoveredTerm('');
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        setHoveredTerm('');
    };
  return (
    <div className='p-3 flex grow items-center w-full lg:w-auto relative'>
        <img src={insuarance} className='w-[20px]' alt='insurance card icon'/>
        <input 
            className='p-2 rounded-md grow focus:outline-none' 
            placeholder='Carrier insuarance and plan'
            value={hoveredTerm || searchTerm}
            onChange={handleInputChange}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        />
        {showSuggestions && (
            <div
                className='absolute top-[70px] left-0 w-full bg-white rounded-md max-w-80 z-50 max-h-64 overflow-y-auto shadow-lg'
                style={{ zIndex: 1000 }}
                onMouseLeave={handleMouseLeave}
            >

            {suggestions["#"].length > 0 && (
                <div>
                <div className='font-semibold p-2 text-grey'>#</div>
                {suggestions["#"].map((suggestion, index) => (
                    <div
                    key={index}
                    className='p-2 hover:bg-gray-100 cursor-pointer hover:bg-light-rose'
                    onMouseDown={() => handleSuggestionClick(suggestion)}
                    onMouseOver={() => handleMouseOver(suggestion)}
                    >
                    {suggestion}
                    </div>
                ))}
                </div>
            )}

            {suggestions["A"].length > 0 && (
                <div>
                <div className='font-semibold p-2 text-grey'>A</div>
                {suggestions["A"].map((suggestion, index) => (
                    <div
                    key={index}
                    className='p-2 hover:bg-gray-100 cursor-pointer hover:bg-light-rose'
                    onMouseDown={() => handleSuggestionClick(suggestion)}
                    onMouseOver={() => handleMouseOver(suggestion)}
                    >
                    {suggestion}
                    </div>
                ))}
                </div>
            )}

            {suggestions["B"].length > 0 && (
                <div>
                <div className='font-semibold p-2 text-grey'>B</div>
                {suggestions["B"].map((suggestion, index) => (
                    <div
                    key={index}
                    className='p-2 hover:bg-gray-100 cursor-pointer hover:bg-light-rose'
                    onMouseDown={() => handleSuggestionClick(suggestion)}
                    onMouseOver={() => handleMouseOver(suggestion)}
                    >
                    {suggestion}
                    </div>
                ))}
                </div>
            )}
            </div>
        )}
    </div>
  )
}

export default InsuranceSearchBar