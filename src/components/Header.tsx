"use client";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 flex-wrap mb-4 bg-color-primario shadow-md shadow-gray-500">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src="/images/Logo.png"
          alt="Logo de la aplicacion"
          width={60}
          height={60}
        />
        <p className="text-white text-3xl font-semibold">
          Bienestar Digital
        </p>
      </div>

       {/* Boton de menú para pantallas pequeñas */}
       <button
        className="md:hidden text-3xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <FontAwesomeIcon icon={faXmark} className="w-7 h-7" />
        ) : (
          <FontAwesomeIcon icon={faBars} className="w-7 h-7" />
        )}
      </button>

      {/* Links de navegación */}
      <div className={`md:flex md:items-center  w-full md:w-auto mt-4 md:mt-0  ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="md:flex md:items-center md:space-x-3 text-white">
          <li className="">
            <a
              href="#productos"
              className="px-2 text-lg  font-semibold block hover:text-gray-800"
            >
              Productos
            </a>
          </li>

          <li className="">
            <a
              href="#servicios"
              className="px-2 text-lg  font-semibold block hover:text-gray-800"
            >
              Servicios
            </a>
          </li>

          <li className="">
            <a
              href="#planes"
              className="px-2 text-lg  font-semibold block hover:text-gray-800"
            >
              Planes
            </a>
          </li>

          <li className="">
            <a
              href="#nosotros"
              className="px-2 text-lg  font-semibold block hover:text-gray-800"
            >
              Sobre Nosotros
            </a>
          </li>

          <li className="">
            <a
              href="#"
              className="bg-white px-3 py-2 text-base text-black font-semibold rounded-full hover:bg-gray-200 duration-500 block text-center border-2 border-gray-700"
            >
              Descarga Nuestra Aplicacion
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;