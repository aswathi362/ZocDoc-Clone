import React from 'react';

function WhiteButton({ text, onClick }) {
  return (
    <div
      className={`text-md rounded px-14 py-2 hover:bg-pale-grey border border-black border-1`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}

export default WhiteButton;
