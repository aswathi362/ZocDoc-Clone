import React from 'react';

function Tooltip({ text, position }) {
  return (
    <div className={`absolute ${position} bg-black text-white text-xs rounded py-1 px-2 z-50 w-3/5`}>
      {text}
    </div>
  );
}

export default Tooltip;
