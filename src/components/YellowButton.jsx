import React from 'react';

function YellowButton({ text, isDropdown, onClick }) {
  return (
    <div
      className={`text-md rounded px-6 py-3 bg-neon-yellow hover:bg-dark-neon-yellow text-black`}
      onClick={onClick}
    >
      {text}
      {isDropdown && <i className="bi bi-chevron-down mx-2"></i>}
    </div>
  );
}

export default YellowButton;
