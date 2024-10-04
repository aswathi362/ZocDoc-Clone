import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);
  return (
    <div className="fixed bg-opacity-55 bg-black inset-0 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-[85%] h-[75%] overflow-y-auto">
        <button className="hover:text-grey float-left" onClick={onClose}>
            <i className='bi bi-x-lg bold-icon'></i>
        </button>

        <div className="mt-8">
            {children}
        </div>
        </div>
    </div>
  );
};

export default Modal;
