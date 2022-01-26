import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";
import Productos from "../../components/productos";

const index = ({ productos }) => {
  return (
    <>
      <Navbar />
      <div className="grid md:grid-cols-7 sm:grid-cols-4 grid-cols-3 gap-2 items-center content-center mt-6 mx-2">
        {productos.map((producto) => (
          <Productos key={producto._id} {...producto} />
        ))}
      </div>
      <Footer/>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    "https://backend-ferreteria.herokuapp.com/api/products/"
  );
  const { productos } = await res.json();

  return {
    props: {
      productos,
    },
  };
}

export default index;