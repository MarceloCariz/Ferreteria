import React from "react";
import { ReactElement } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const Navbar = () => {
  const carrito = () => {
    return;
  };
  return (
    <>
      <div className="bg-red-600 h-2"></div>

      <div className="bg-blue-600   h-auto items-center sm:px-12   pb-2 ">
        <div className="text-white pt-3    ">
          <div className="grid grid-cols-3 gap-4 justify-items-center content-between">
            <a href="" className=" inline-block w-14 h-14 text-5xl basis-1/4  ">
              {" "}
              <FontAwesomeIcon icon={faBars} />{" "}
            </a>

            <a href="/inicio" className="text-3xl text-center basis-1/2">
              FerreteriaPortales
            </a>

            <Link href="/inicio">
              <a className="pointer-none w-14 h-14 pl-0 text-4xl basis-1/4 text-right  ">
                <FontAwesomeIcon icon={faShoppingCart} />
              </a>
            </Link>
          </div>
        </div>

        <div className="sm:flex block sm:mx-48">
          <div className="hidden text-white sm:block flex-1">
           <menu className="space-x-4">
             <a href="">Inicio</a>
             <a href="">Inicio</a>
             <a href="">Inicio</a>
             <a href="">Inicio</a>

           </menu>
          </div>
          <div className="text-white grid-cols-2 grid justify-items-start items-center  mt-2 mb-2 ">
            <div className="justify-self-end">
              <FontAwesomeIcon className="text-right" icon={faSearch} />
            </div>
            <input
              type="text"
              className="justify-self-start  mx-2 rounded text-black pl-4"
              placeholder="Buscar..."
            />
          </div>
        </div>
      </div>
    </>
    // <nav>
    //     <menu className='bg-red-500'>
    //         <a href="/"><h1>FerreteriaPortales</h1></a>
    //         <a href="/about">Quienes Somos</a>
    //     </menu>
    // </nav>
  );
};

export default Navbar;
