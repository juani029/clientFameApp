import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ConfirmAccount() {
  const { token } = useParams();
  const { confirmarCuenta } = useAuth();
  const [confirmado, setConfirmado] = useState(false);
  useEffect(() => {
    (async () => {
      const res = await confirmarCuenta(token);
      console.log('Soy la respuesta del back:', res);
      setConfirmado(true);
    })();
  }, [confirmado]);
  // return (
  // {confirmado ? (
  //     <div className="bg-secondary p-8 rounded-xl w-full md:m-auto md:w-1/2">
  //       <header className="flex items-center  justify-center pt-2 pb-4">
  //         <h1 className="text-4xl">Cuenta verificada exitósamente</h1>
  //       </header>
  //       <Link to="/home">
  //         <button className="w-full text-lg py-2  mb-4 bg-third rounded-lg text-gray-800 font-bold active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  active:hover:bg-[#b1656c]  disabled:cursor-not-allowed text-[#ffffff] mt-4 hover:shadow-228b active:shadow">
  //           Comenzar
  //         </button>
  //       </Link>
  //     </div> ) : (
  //     <div className="bg-secondary p-8 rounded-xl w-full md:m-auto md:w-1/2">
  //       <header className="flex items-center  justify-center pt-2 pb-4">
  //         <h1 className="text-4xl">Cuenta verificada exitósamente</h1>
  //       </header>
  //       <Link to="/home">
  //         <button className="w-full text-lg py-2  mb-4 bg-third rounded-lg text-gray-800 font-bold active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  active:hover:bg-[#b1656c]  disabled:cursor-not-allowed text-[#ffffff] mt-4 hover:shadow-228b active:shadow">
  //           Comenzar
  //         </button>
  //       </Link>
  //     </div>
  //   )
  return (
    <>
      {confirmado ? (
        <div className="bg-secondary p-8 rounded-xl w-full md:m-auto md:w-1/2">
          <header className="flex items-center  justify-center pt-2 pb-4">
            <h1 className="text-4xl">Cuenta verificada exitósamente</h1>
          </header>
          <Link to="/home">
            <button className="w-full text-lg py-2  mb-4 bg-third rounded-lg text-gray-800 font-bold active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  active:hover:bg-[#b1656c]  disabled:cursor-not-allowed text-[#ffffff] mt-4 hover:shadow-228b active:shadow">
              Comenzar
            </button>
          </Link>
        </div>
      ) : (
        <div className="bg-secondary p-8 rounded-xl w-full md:m-auto md:w-1/2">
          <header className="flex items-center  justify-center pt-2 pb-4">
            <h1 className="text-4xl">
              Lo lamentamos :( la verificación ha fallado
            </h1>
          </header>
          <Link to="/register">
            <button className="w-full text-lg py-2  mb-4 bg-third rounded-lg text-gray-800 font-bold active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  active:hover:bg-[#b1656c]  disabled:cursor-not-allowed text-[#ffffff] mt-4 hover:shadow-228b active:shadow">
              Volver
            </button>
          </Link>
        </div>
      )}
    </>
  );
}

export default ConfirmAccount;
