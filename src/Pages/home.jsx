import Header from "../Components/Header";
import Tarjeta1 from "../Components/tarjeta1";
import Tarjeta2 from "../Components/tarjeta2";
import Tarjeta3 from "../Components/tarjeta3";
import Footer from "../Components/Footer";
import Subseccion from "../Components/subseccion";

const Home = () => {
  return (
    <>
      <Header />

      <div
        className="bg-cover bg-center min-h-screen"
        style={{ backgroundImage: "url('/imagenes/fondoPag2.png')" }}
      >
        <Subseccion />
        <Tarjeta1 />
        {/*<Tarjeta2 />   Queso sardo sacado!!!*/}
        <Tarjeta3 />
      </div>
      <Footer />
    </>
  );
};

export default Home;
