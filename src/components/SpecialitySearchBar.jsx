import React, { useEffect, useState } from 'react'
import { getSpecialitySuggestions } from '../axios/axios';

function SpecialitySearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [hoveredTerm, setHoveredTerm] = useState('');
    const [suggestions, setSuggestions] = useState({});
    const [showSuggestions, setShowSuggestions] = useState(false);

    useEffect(()=>{
        getSpecialitySuggestions()
            .then((response) => {
                console.log(response.data);
                setSuggestions(response.data);
            })
            .catch((error) => {
                console.error("Error fetching speciality suggestions:", error);
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
    <div className='p-3 grow flex items-center w-full lg:w-auto relative'>
        <i className='bi bi-search bold-icon'></i>
        <input 
            className='p-2 grow rounded-md focus:outline-none' 
            placeholder='Condition, Procedure, Doctor ...'
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
            {suggestions["Popular Specialities"].length > 0 && (
                <div>
                <div className='font-semibold p-2 text-grey'>Popular Suggestions</div>
                {suggestions["Popular Specialities"].map((suggestion, index) => (
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

            {suggestions["More specialities (a-z)"].length > 0 && (
                <div>
                <div className='font-semibold p-2 text-grey'>More suggestions (a-z)</div>
                {suggestions["More specialities (a-z)"].map((suggestion, index) => (
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

export default SpecialitySearchBar