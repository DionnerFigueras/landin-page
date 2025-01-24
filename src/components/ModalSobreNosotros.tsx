"use client";
import React, { useEffect } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ModalProps {
  nosotros: string;
  objetivos: string;
  mision: string;
  vision: string;
  metas: string[];
  eslogan: string;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  nosotros,
  objetivos,
  mision,
  vision,
  metas,
  eslogan,
  isOpen,
  onClose,
}) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-11/12 md:max-w-2xl p-4 rounded-lg relative shadow-xl max-h-screen overflow-y-auto">
        
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 focus:outline-none"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
        </button>
        
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">¿A qué nos dedicamos?</h2>
          <p className="text-gray-700 mb-4">{nosotros}</p>

          <h2 className="text-2xl font-bold mb-4 text-gray-800">Nuestros objetivos</h2>
          <p className="text-gray-700 mb-4">{objetivos}</p>

          <h2 className="text-2xl font-bold mb-4 text-gray-800">Nuestra Misión</h2>
          <p className="text-gray-700 mb-4">{mision}</p>

          <h2 className="text-2xl font-bold mb-4 text-gray-800">Nuestra visión</h2>
          <p className="text-gray-700 mb-4">{vision}</p>

          <h2 className="text-2xl font-bold mb-4 text-gray-800">Nuestras Metas</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            {metas.map((meta, index) => (
              <li key={index}>{meta}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-gray-800">Eslogan</h2>
          <p className="text-xl font-bold mb-4 text-center">{eslogan}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
