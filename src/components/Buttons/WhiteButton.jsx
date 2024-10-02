import React from 'react';

function WhiteButton({ text, isDropdown, onClick }) {
  return (
    <div
      className={`text-md rounded px-6 py-3 hover:bg-pale-grey border border-black border-1`}
      onClick={onClick}
    >
      {text}
      {isDropdown && <i className="bi bi-chevron-down mx-2"></i>}
    </div>
  );
}

export default WhiteButton;
