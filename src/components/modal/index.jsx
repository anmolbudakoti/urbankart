import React from 'react'

export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
  
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-lg w-96 p-6 relative m-3">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
          >
            &times; {/* Close icon */}
          </button>
          {children}
        </div>
      </div>
  )
}
