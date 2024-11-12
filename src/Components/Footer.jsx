import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-tarjeta ">
        <div className="max-w-screen-xl  sm:px-6 text-white sm:flex justify-between mx-auto">
          <div className="p-5 sm:w-4/12">
            <img src="/imagenes/logo.png" alt="" />
          </div>

          <div className="p-5 sm:w-5/12 flex flex-col"></div>

          <div className="p-5 sm:w-3/12">
            <div className="text-sm uppercase  font-bold mb-5">Contacto</div>
            <div className="flex ">
              <div className="h-10 w-10 bg-cover">
                <img className="w-6 h-6" src="imagenes/phone.png" alt="" />
              </div>
              <Link
                className="no-underline text-inherit"
                to="https://wa.me/+5493445442291?text=Hola! Estoy visitando su página web y estoy interesado en "
              >
                <div className=" text-m">+54 9 3445 44-2291</div>
              </Link>
            </div>
            <div className="flex ">
              <div className="h-10 w-10 bg-cover">
                <img className="w-7 h-7" src="imagenes/map.png" alt="" />
              </div>
              <div className="">
                <Link
                  className="no-underline text-inherit"
                  to="https://maps.app.goo.gl/x7ZQVhA6od6TAKSH7"
                >
                  <div className=" text-m">Macia, Entre Rios</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex py-2 m-auto text-white  text-sm flex-col items-center border-t max-w-screen-xl">
          <p>© Copyright 2024. La Maciaense.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
