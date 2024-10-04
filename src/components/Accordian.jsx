import React, { useState } from 'react';

const Accordion = ({ title, items, titleFontSize }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-grey border-1 mb-4">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center p-4 focus:outline-none"
      >
        <span className={titleFontSize}>{title}</span>
        {isOpen ? (
          <i className="bi bi-chevron-up"></i>
        ) : (
          <i className="bi bi-chevron-down"></i>
        )}
      </button>

      {isOpen && (
        <div className="">
          <ul className="">
            {items.map((doctor, index) => (
              <li key={index} className='underline pl-2 pb-2'>{doctor}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Accordion;