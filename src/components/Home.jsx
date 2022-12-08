import React, { useState } from 'react';
import {
  BsEmojiLaughing,
  BsEmojiNeutral,
  BsEmojiFrown,
  BsEmojiAngry,
  BsEmojiSmile,
} from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { FaQuestion } from 'react-icons/fa';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ImagePerfil from '../image/imagen_logotipo.png';
import Imagen1 from '../image/imagen_1.jpeg';
import Imagen2 from '../image/imagen_2.jpeg';
import Imagen3 from '../image/imagen_3.jpeg';
import Imagen4 from '../image/imagen_4.jpeg';
import ModalFeelings from './layout/ModalFeelings';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Home() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [onChange, setOnChange] = useState(new Date());
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowCalendar(!showCalendar);
  };
  const handleModal = () => {
    setShowModal(!showModal);
  };

  const { planTerapia, setPlanTerapia, user } = useAuth();
  return (
    <div className="flex  flex-col max-w-max lg:ml-10 justify-center sm:flex sm:flex-row gap-2 lg:gap-7  lg:box-content overflow-hidden">
      <div className="flex flex-col sm:w-auto sm:ml-12 lg:m-12 lg:mt-2 sm:p-2  lg:w-full">
        <div className="flex flex-col lg:flex-row lg:gap-6 lg:justify-center">
          <div className="flex justify-center w-full   lg:w-2/3 lg:h-full   lg:bg-fifth lg:flex-col relative p-1 gap-2  border-b-[#597a97] border-t-[#597a97] border-b-2  pb-3 sm:gap-3 sm:p-3 sm:my-5 lg:my-0 lg:items-center lg:rounded-xl">
            <div className="w-2/4 sm:w-full lg:w-2/4">
              <img
                className="w-full lg:rounded-full"
                src={ImagePerfil}
                alt="image_perfil"
              />
            </div>

            <div className="flex flex-col w-2/3 gap-2 justify-between sm:w-full sm:justify-around sm:gap-3">
              <h3 className="text-base  my-px text-fourth sm:text-xl lg:text-2xl lg:text-center">
                Hola, {user.name}
              </h3>
              <span className="block   text-base text-fourth sm:text-xl lg:text-2xl lg:text-center">
                ¿Como te sientes?
              </span>
              <Link to="/chat" className="m-auto">
                <button
                  type="submit"
                  className=" lg:w-56 hover:scale-110 duration-150 lg:m-auto text-sm rounded-2xl bg-[#f4717f] p-2 cursor-pointer"
                >
                  <span className="w-full text-fourth sm:text-xl lg:text-2xl">
                    Hablar ahora
                  </span>
                </button>
              </Link>
            </div>

            <div className="text-white w-1/4 sm:w-full sm:flex justify-end lg:absolute lg:w-20 lg:top-2 lg:right-2 ">
              <button
                type="submit"
                className="flex hover:scale-110 hover:bg-eighth duration-150 justify-center items-center rounded-2xl border-red-500 border-2 p-1 w-full border-eighth text-center sm:w-2/3 sm:h-1/6 lg:h-auto  text-third lg:rounded-full"
              >
                <span className="sm:text-lg text-fourth lg:text-sm">SOS</span>
              </button>
            </div>
          </div>

          {/* Caja numero dos, contiene las reacciones con el calendatio */}

          <div className="flex flex-col gap-3 justify-between ites-center ">
            <div
              className={` lg:w-full   lg:bg-fifth lg:rounded-xl 
           ${
             showCalendar
               ? 'flex flex-col gap-3 overflow-scroll p-1 '
               : 'duration-300 p-1 flex flex-col gap-3 h-24 overflow-hidden'
           }`}
            >
              <div className="block">
                <span className="text-fourth sm:text-3xl lg:text-2xl">
                  ¿Quieres registrar tu emocion?
                </span>
              </div>
              <div className="flex justify-around text-fourth sm:gap-3">
                <div>
                  <BsEmojiLaughing
                    onClick={handleModal}
                    className="text-3xl sm:text-4xl hover:text-third duration-100 cursor-pointer hover:scale-125 lg:text-2xl"
                  />
                </div>
                <div>
                  <BsEmojiNeutral
                    onClick={handleModal}
                    className="text-3xl sm:text-4xl hover:text-third duration-100 cursor-pointer hover:scale-125 lg:text-2xl"
                  />
                </div>
                <div>
                  <BsEmojiFrown
                    onClick={handleModal}
                    className="text-3xl sm:text-4xl hover:text-third duration-100 cursor-pointer hover:scale-125 lg:text-2xl"
                  />
                </div>
                <div>
                  <BsEmojiAngry
                    onClick={handleModal}
                    className="text-3xl sm:text-4xl hover:text-third duration-100 cursor-pointer hover:scale-125 lg:text-2xl"
                  />
                </div>
                <div>
                  <BsEmojiSmile
                    onClick={handleModal}
                    className="text-3xl sm:text-4xl hover:text-third duration-100 cursor-pointer hover:scale-125 lg:text-2xl"
                  />
                </div>
                <button
                  type="submit"
                  onClick={handleClick}
                  className={
                    showCalendar
                      ? 'focus:rotate-180 ease-in duration-300'
                      : 'rotate-0 ease-in duration-300'
                  }
                >
                  {' '}
                  <IoIosArrowDown className="text-3xl" />{' '}
                </button>
              </div>
              <div className="relative flex items-center justify-center">
                <Calendar
                  className={
                    showCalendar
                      ? 'text-center bg-transparent ease-linear delay-150 duration-200 border-none'
                      : 'opacity-0 ease-in  duration-500 delay-500'
                  }
                  onChange={setOnChange}
                  value={onChange}
                />
              </div>
            </div>

            {/* Seccion para ti, slider de imagenes */}
            <div className="lg:bg-fifth rounded-lg p-2">
              <div>
                <div className=" w-full">
                  <h3 className="text-fourth sm:text-3xl text-left">Para ti</h3>
                </div>
                <div>
                  <Link
                    to="/emotionResume"
                    className="text-right text-fourth block sm:text-2xl"
                  >
                    Ver mas
                  </Link>
                </div>
              </div>
              <div className="h-auto p-2 order-b-[#597a97] border-b-[#597a97] lg:border-none  overflow-x-auto border-t-[#597a97] border-b-2  sm:w-full">
                <div className="flex  gap-4  sm:mx-6  pr-4 w-3xl ">
                  <img
                    className="w-56 cursor-pointer sm:w-96 lg:w-72 rounded-lg"
                    src={Imagen1}
                    alt="imagen_1"
                  />
                  <img
                    className="w-56 cursor-pointer sm:w-96 lg:w-72 rounded-lg"
                    src={Imagen2}
                    alt="imagen_2"
                  />
                  <img
                    className="w-56 cursor-pointer sm:w-96 lg:w-72 rounded-lg"
                    src={Imagen3}
                    alt="imagen_3"
                  />
                  <img
                    className="w-56 cursor-pointer sm:w-96 lg:w-72  "
                    src={Imagen4}
                    alt="imagen_4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seccion de tu terapeuta ideal, contiene una imagen y un boton hacia otra direccion */}
        <div className="flex flex-col lg:flex-row lg:my-2 gap-4">
          <div className="border-b-[#597a97] lg:p-1 border-t-[#597a97] lg:relative  border-b-2 lg:bg-fifth lg:w-1/2 lg:flex  lg:items-center  lg:justify-center lg:rounded-lg ">
            <h2 className="block p-0 text-fourth  lg:text-3xl lg:text-center lg:absolute lg:top-0 lg:left-4">
              Tu terapeuta ideal
            </h2>
            <div className="flex lg:flex-col  lg:w-full text-center gap-2 lg:gap-10 justify-around items-center my-10 sm:w-full sm:justify-around ">
              <div className="flex flex-col lg:flex-row w-1/2 lg:justify-center  items-center">
                <FaQuestion className="text-3xl text-[#f4717f]" />
                <span className="text-sm text-fourth sm:text-2xl mt-6">
                  {planTerapia}
                </span>
              </div>
              <div>
                <div className="sm:w-4/4 lg:w-auto text-base flex flex-col p-2 gap-4 w-full">
                  <div>
                    <h3 className="text-sm text-fourth sm:text-2xl">
                      No hay proximas seciones
                    </h3>
                    <span className="text-sm text-fourth sm:text-xl">
                      ¿Te gustaria programar una?
                    </span>
                  </div>
                </div>

                <div className="block">
                  <Link to="/paid">
                    <button
                      type="submit"
                      className="hover:scale-110 bg-third p-2 cursor-pointer duration-100 text-fourth  rounded-2xl text-white text-sm sm:p-4 sm:text-2xl"
                    >
                      {' '}
                      Programar ahora{' '}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Caja de resumen de emociones, contiene emociones, boton de terapeuta */}
          <div className=" text-fourth flex flex-col gap-4 p-2 text-center text-white lg:w-full lg:bg-fifth lg:rounded-lg">
            <div className="flex flex-col gap-3">
              <h2 className="text-left sm:text-3xl">Resumen de emociones</h2>
              <span className="text-sm sm:text-2xl">
                El mejor proceso es el que nunca se detiene te has sentido mejor
                4/7 dias
              </span>
            </div>
            <div className="text-right">
              <span className="cursor-pointer">Ver mas</span>
            </div>
            <div className="flex justify-around lg:justify-center lg:gap-10">
              <div className="cursor-pointer">
                <span>L</span>
                <BsEmojiLaughing className="lg:text-3xl text-2xl sm:text-4xl hover:scale-125 duration-200 hover:text-third" />
              </div>
              <div className="cursor-pointer">
                <span>M</span>
                <BsEmojiNeutral className="lg:text-3xl text-2xl sm:text-4xl hover:scale-125 duration-200 hover:text-third" />
              </div>
              <div className="cursor-pointer">
                <span>M</span>
                <BsEmojiFrown className="lg:text-3xl text-2xl sm:text-4xl hover:scale-125 duration-200 hover:text-third" />
              </div>
              <div className="cursor-pointer">
                <span>J</span>
                <BsEmojiAngry className="lg:text-3xl text-2xl sm:text-4xl hover:scale-125 duration-200 hover:text-third" />
              </div>
              <div className="cursor-pointer">
                <span>V</span>
                <BsEmojiSmile className="lg:text-3xl text-2xl sm:text-4xl hover:scale-125 duration-200 hover:text-third" />
              </div>

              <div className="cursor-pointer">
                <span>S</span>
                <BsEmojiLaughing className="lg:text-3xl text-2xl sm:text-4xl hover:scale-125 duration-200 hover:text-third" />
              </div>
              <div className="cursor-pointer">
                <span>D</span>
                <BsEmojiNeutral className="lg:text-3xl text-2xl sm:text-4xl hover:scale-125 duration-200 hover:text-third" />
              </div>
            </div>
            <div className="flex flex-col gap-4  items-center">
              <span className="text-sm sm:text-3xl">
                ¿Te gustaria empezar terapia?
              </span>
              <Link to="/emotionResume" className="w-full">
                <button
                  type="submit"
                  className="hover:scale-110 duration-100  w-2/4 bg-red-400 p-2 rounded-2xl bg-third text-xs sm:text-2xl sm:w-2/4 sm:p-3"
                >
                  Ver Resumen de emociones
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 z-20 w-full h-screen backdrop-blur-sm flex justify-center duration-75 items-center ${
          !showModal && 'scale-0'
        }`}
      >
        <ModalFeelings handleModal={handleModal} />
      </div>
    </div>
  );
}

export default Home;
