import { Link } from "react-router-dom";

const Tarjeta2 = () => {
  return (
    <>
      <section class="text-white body-font overflow-hidden">
        <div class="container mx-auto py-10 flex justify-center">
          <div class="bg-tarjeta flex  rounded-3xl border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
            <div class=" mx-auto flex flex-wrap">
              <img
                class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src="/imagenes/mozzarella.jpg"
                alt=""
              />
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 class="text-gray-100 text-3xl title-font font-medium mb-1">
                  Queso Mozzarella
                </h1>

                <p class="leading-relaxed">
                  Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                  sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                </p>
                <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
                <div class="flex">
                  <span class="mr-2 title-font font-medium text-xl text-white">
                    Por Mayor:
                  </span>
                  <span class="title-font font-medium text-xl text-white">
                    $5824.00
                  </span>
                </div>
                <div className="flex mt-4">
                  <span class="mr-2 title-font font-medium text-xl text-white">
                    Por Menor:
                  </span>

                  <span class="title-font font-medium text-xl text-white">
                    $5418.00
                  </span>
                </div>
                <div className="flex justify-center mt-2  ">
                  <Link to="https://wa.me/+543541540017?text=Hola! Estoy visitando su página web y me gustaría obtener más información sobre el viaje a Brasil. Gracias.">
                    <button className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                      <svg
                        className="w-4 h-4 "
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 0C5.372 0 0 5.373 0 12c0 2.125.552 4.206 1.602 6.052L.048 23.953l5.972-1.554A11.971 11.971 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm.026 21.899a9.817 9.817 0 01-5.081-1.419l-.364-.22-3.542.922.955-3.456-.236-.37A9.814 9.814 0 1121.845 12c0 5.436-4.419 9.849-9.819 9.899zm5.566-7.341c-.303-.152-1.797-.887-2.078-.988-.28-.102-.484-.152-.688.152-.204.303-.79.987-.969 1.19-.18.204-.357.23-.66.077-.303-.154-1.278-.472-2.433-1.504-.9-.803-1.504-1.795-1.683-2.098-.179-.303-.02-.467.134-.619.138-.137.304-.356.456-.537.154-.18.204-.303.305-.506.102-.204.051-.38-.026-.532-.077-.152-.688-1.652-.941-2.262-.247-.59-.498-.51-.688-.52-.179-.007-.38-.01-.581-.01-.202 0-.532.076-.81.38-.278.303-1.066 1.04-1.066 2.534s1.092 2.944 1.243 3.149c.152.204 2.148 3.277 5.199 4.593.728.314 1.297.501 1.74.64.732.233 1.397.2 1.922.122.587-.087 1.797-.732 2.053-1.437.255-.704.255-1.309.179-1.437-.076-.127-.276-.204-.58-.356z" />
                      </svg>
                      <span className="mx-2">Contactanos</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tarjeta2;
