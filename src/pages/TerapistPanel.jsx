import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { RiLightbulbFlashLine } from 'react-icons/ri';
import logo from '../image/imagen_logotipo.png';

const TerapistPanel = () => {
  const information = [
    {
      status: true,
      identificador: 3,
      medico: 'adsdlLAlsS23MaSL',
      fecha: '2022-10-28',
      descripcion: 'Hello mi name is',
    },
  ];

  return (
    <div className="flex w-full text-fourth sm:pl-20 overflow-hidden">
      <div className="h-screen"></div>
      <div className="w-full">
        <div className=" h-20 flex flex-row items-center justify-end mx-4 mt-4 pr-[5vh] gap-[20vh]">
          <CgProfile className="text-3xl shadow-228b p-1  hover:text-third hover:scale-[1.2]" />
          <AiOutlinePlusSquare className="text-3xl shadow-228b p-1  hover:text-third hover:scale-[1.2]" />
          <RiLightbulbFlashLine className="text-3xl shadow-228b p-1  hover:text-third hover:scale-[1.2]" />
        </div>
        <div className=" flex flex-col justify-center w-full">
          <h3 className="text-3xl px-2 py-4 ml-4">Consultas</h3>
          <div className="w-full flex justify-left mb-10 ml-4">
            <table className=" w-[90%] flex  lg:flex-col justify-left items-left text-xl text-center lg:gap-3">
              <tr className="flex flex-col lg:flex-row justify-center items-center lg:gap-5 lg:w-full w-1/2 bg-secondary">
                <td className="lg:w-2/5 h-16 lg:h-20 w-full lg:py-4  bg-third lg:bg-transparent">
                  Status
                </td>
                <td className="lg:w-2/5 h-16 lg:h-20 w-full lg:py-4  bg-third lg:bg-transparent">
                  Numero
                </td>
                <td className="lg:w-2/5 h-16 lg:h-20 w-full lg:py-4  bg-third lg:bg-transparent">
                  Medico
                </td>
                <td className="lg:w-2/5 h-16 lg:h-20 w-full lg:py-4  bg-third lg:bg-transparent">
                  Fecha
                </td>
                <td className="lg:w-2/5 h-16 lg:h-20 w-full lg:py-4  bg-third lg:bg-transparent">
                  Motivo
                </td>
              </tr>
              {information.map((element) => (
                <tr className="flex   justify-between lg:w-full flex-col lg:items-center lg:flex-row w-1/2 lg:gap-2 lg:bg-transparent bg-secondary">
                  <td className="lg:w-2/5  w-full flex items-center py-6  justify-center ">
                    <div
                      className={`rounded-full  flex justify-center items-center  w-[10px] h-[10px] ${
                        element.status ? 'bg-[green]' : 'bg-[red]'
                      }`}
                    ></div>
                  </td>
                  <td className="lg:w-2/5 w-full py-4  bg-secondary lg:bg-transparent">
                    {element.identificador}
                  </td>
                  <td className="lg:w-2/5 w-full py-4  bg-secondary lg:bg-transparent">
                    {element.medico}
                  </td>
                  <td className="lg:w-2/5 w-full py-4  bg-secondary lg:bg-transparent">
                    {element.fecha}
                  </td>
                  <td className="lg:w-2/5 w-full py-4  bg-secondary lg:bg-transparent">
                    {element.descripcion}
                  </td>
                </tr>
              ))}
            </table>
          </div>
          <button
            type="submit"
            className="m-auto bg-third hover:scale-[1.1] px-4 py-2 rounded-lg duration-75 active:translate-y-[2px] shadow-228b"
          >
            Nueva Consulta
          </button>
        </div>
      </div>
    </div>
  );
};

export default TerapistPanel;
