// components/ModalProductosDestacados.tsx

import React from "react";

interface ModalProps {
  imageUrl: string;
  description: string;
  caracteristicas: string[];
  beneficios: string[];
  onClose: () => void;
}

const ModalProductosDestacados: React.FC<ModalProps> = ({
  imageUrl,
  description,
  caracteristicas,
  beneficios,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full overflow-y-auto max-h-[90vh] md:max-h-[90vh]  ">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-6">
          <div
            className="mt-2 shadow-md shadow-gray-500 w-full h-32 md:h-48 bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>

          <div className="w-full">
            <h2 className="text-2xl font-bold mb-4">Descripción</h2>
            <p className="text-gray-700 mb-4">{description}</p>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Características</h3>
              <ul className="list-disc list-inside text-gray-700">
                {caracteristicas.map((caracteristica, index) => (
                  <li key={index}>{caracteristica}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Beneficios</h3>
              <ul className="list-disc list-inside text-gray-700">
                {beneficios.map((beneficio, index) => (
                  <li key={index}>{beneficio}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProductosDestacados;
