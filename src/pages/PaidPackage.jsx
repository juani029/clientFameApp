import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function PaidPackage() {
  const {setPlanTerapia} = useAuth()
  const navigate=useNavigate()
  return (
    <div className="flex justify-center flex-col gap-5 items-center h-screen">
      <Link
        to="/home"
        className="absolute 1/4 top-5 text-3xl left-4 rotate-180"
      >
        <IoIosArrowForward />
      </Link>
      <h2 className="text-fourth text-center text-4xl">Elige tu plan ideal</h2>
      <div className="w-full bg-fifth p-4 flex flex-col gap-1 justify-center items-center rounded-lg sm:w-2/3">
        <h3 className=" font-semibold">Paquetes de Bienestar</h3>
        <div className="  flex flex-col gap-4 justify-center items-center p-2 sm:flex-row flex-wrap ">
          <div className=" w-full bg-secondary p-1 flex flex-col gap-3 rounded-lg relative sm:w-72 hover:animate-pulse hover:scale-105 duration-150">
            <span className="absolute right-0  bg-third p-1 rounded-lg top-0 text-fourth">
              Recomendado
            </span>
            <h3 className="text-left">COMPLETO</h3>
            <span className="text-sm text-center font-semibold">
              12 sesiones con 70% de descuento
            </span>
            <span className="text-sm text-center">
              S/21.00 C/sesión S/252.00 en total
            </span>
            <button
              className="bg-third rounded-lg text-fourth p-1 w-2/3 m-auto text-sm mb-2 hover:scale-110 duration-150 hover:text-seventh hover:bg-fourth"
              type="submit"
              onClick={() => {navigate('/payment')
              setPlanTerapia('COMPLETO')
            }}
            >
              Me interesa
            </button>
          </div>
          <div className="w-full bg-secondary p-2 flex flex-col gap-1 rounded-lg sm:w-72 hover:animate-pulse hover:scale-105 duration-150">
            <h3 className="text-left">ESENCIAL</h3>
            <span className="text-sm text-center font-semibold">
              4 sesiones con 30% de descuento{' '}
            </span>
            <span className="text-sm text-center">
              S/49.00 C/sesión S/196.00 en total
            </span>
            <button
              className="bg-third rounded-lg text-fourth p-1 w-2/3 m-auto text-sm mb-2 hover:scale-110 duration-150 hover:text-seventh hover:bg-fourth"
              type="submit"
              onClick={() => {navigate('/payment')
              setPlanTerapia('ESENCIAL')
            }}
            >
              Me interesa
            </button>
          </div>
          <div className="w-full bg-secondary p-2 flex flex-col gap-1 rounded-lg sm:w-72 hover:animate-pulse hover:scale-105 duration-150">
            <h3 className="text-left">CONTEMPLATIVO</h3>
            <span className="text-sm text-left font-semibold">1 sesión</span>
            <span className="text-sm text-center">
              S/70.00 C/sesión; S/70.00 en total
            </span>
            <button
              className="bg-third text-fourth rounded-lg p-1 w-2/3 m-auto text-sm mb-2 hover:scale-110 duration-150 hover:text-seventh hover:bg-fourth"
              type="submit"
              onClick={() => {navigate('/payment')
              setPlanTerapia('CONTEMPLATIVO')
            }}
            >
              Me interesa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaidPackage;
