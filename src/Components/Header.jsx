import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header style={{ backgroundImage: "url('/imagenes/5.png')" }}>
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="/imagenes/logo.png" className="w-42 h-20" alt="Logo" />
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <h1 className=" mb-4 font-titulo text-6xl text-white">
              La Maciaense
            </h1>
          </nav>
          <Link
            className="no-underline text-inherit"
            to="https://wa.me/+5493445404262?text=Hola! Estoy visitando su página web y estoy interesado en "
          >
            <button class="relative px-4 py-2 bg-yellow-400 rounded-lg shadow-md hover:bg-yellow-500 focus:outline-none">
              <div class="absolute inset-0 bg-yellow-400 rounded-lg shadow-md transform rotate-2"></div>
              <span class="relative z-10">Contactanos</span>
              <div class="absolute top-1 left-2 bg-white rounded-full w-3 h-3 opacity-60"></div>
              <div class="absolute top-3 left-6 bg-white rounded-full w-4 h-4 opacity-60"></div>
              <div class="absolute top-4 right-2 bg-white rounded-full w-2 h-2 opacity-60"></div>
              <div class="absolute top-2 right-5 bg-white rounded-full w-3 h-3 opacity-60"></div>
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
