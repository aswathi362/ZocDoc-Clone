import React from 'react';

function YellowButton({ text, isDropdown, onClick }) {
  const renderText = () => {
    if (typeof text === 'string' && text.includes('<i')) {
      return <span dangerouslySetInnerHTML={{ __html: text }} />;
    }
    return text;
  };

  return (
    <div
      className={`z-20 text-md rounded px-6 py-3 bg-neon-yellow hover:bg-dark-neon-yellow text-black`}
      onClick={onClick}
    >
      {renderText()}
      {isDropdown && <i className="bi bi-chevron-down mx-2"></i>}
    </div>
  );
}

export default YellowButton;
