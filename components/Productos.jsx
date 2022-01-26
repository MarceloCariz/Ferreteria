import React from "react";

const Productos = ({ title, price, stock, category, urlImage }) => {
  return (
    <>
      {
        <div
          // key={_id}
          className="text-center h-64 border-2 px-2 pt-2 pb-0 rounded-lg pointer"
        >
          <img className="h-32 w-96 sm:w-auto  sm:object-contain object-cover" src={urlImage} alt="" />
          <div className="flex flex-col ">
            <h2 className="flex-1 font-semi-bold text-lg">{title}</h2>
            <p className="">
              $ <span>{price}</span>
            </p>
            <button className="px-4 rounded-lg py-2 bg-blue-600 text-white">
              Agregar
            </button>
            <p className=" text-sm">stock: {stock}</p>
          </div>
        </div>
      }
    </>
  );
};

export default Productos;
