import React from 'react';
import {
  BsEmojiAngry,
  BsEmojiFrown,
  BsEmojiLaughing,
  BsEmojiNeutral,
  BsEmojiSmile,
} from 'react-icons/bs';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import Imagen1 from '../image/imagen_1.jpeg';
import Imagen2 from '../image/imagen_2.jpeg';
import Imagen3 from '../image/imagen_3.jpeg';
import Imagen4 from '../image/imagen_4.jpeg';

const EmotionResume = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col w-[inherit] sm:flex gap-2 container justify-center items-center sm:pl-5  m-auto">
      <div className=" text-fourth flex flex-col gap-4 p-2 text-center text-white mb-6">
        <div className="flex flex-col gap-3 justify-center ">
          <h2 className="text-center sm:text-3xl mb-5">Resumen de emociones</h2>
          <span className="text-sm sm:text-2xl text-primary bg-secondary px-4 py-2 rounded-full mx-2">
            Resumen de emociones del 8-14 de agosto 2022
          </span>
        </div>
        <div className="flex justify-around">
          <div className="">
            <span>L</span>
            <BsEmojiLaughing className="text-2xl sm:text-4xl duration-200 " />
          </div>
          <div className="">
            <span>M</span>
            <BsEmojiNeutral className="text-2xl sm:text-4xl  duration-200 " />
          </div>
          <div className="">
            <span>M</span>
            <BsEmojiFrown className="text-2xl sm:text-4xl  duration-200 " />
          </div>
          <div className="">
            <span>J</span>
            <BsEmojiAngry className="text-2xl sm:text-4xl  duration-200 " />
          </div>
          <div className="">
            <span>V</span>
            <BsEmojiSmile className="text-2xl sm:text-4xl duration-200" />
          </div>

          <div className="">
            <span>S</span>
            <BsEmojiLaughing className="text-2xl sm:text-4xl  duration-200 " />
          </div>
          <div className="">
            <span>D</span>
            <BsEmojiNeutral className="text-2xl sm:text-4xl  duration-200 " />
          </div>
        </div>
      </div>
      <div className="text-fourth flex flex-col gap-4 p-2 text-center text-white mb-6">
        <div className="flex flex-col gap-3 justify-center ">
          <h2 className="text-center sm:text-3xl ">Recomendado para ti </h2>
        </div>
        <div className="h-auto   sm:w-full">
          <div className="flex flex-col gap-4 items-center justify-center sm:mx-4  pr-4  sm:flex-row sm:flex-wrap ">
            <a
              className="rounded-xl overflow-hidden relative cursor-pointer hover:scale-[.99] duration-200 hover:shadow-228b"
              target="_blank"
              href="https://www.youtube.com/watch?v=OL7RM9zo-nA"
            >
              <img
                className="w-80 h-[280px] sm:w-[400px] sm:h-[385px]"
                src={Imagen1}
                alt="imagen_1"
              />
              <p className="absolute px-2 bottom-0 bg-third w-full py-1 text-sm">
                Volver al presente{' '}
                <span className="text-right pl-8"> 5 min</span>{' '}
              </p>
            </a>
            <a
              className="rounded-xl overflow-hidden relative cursor-pointer hover:scale-[.99] duration-200 hover:shadow-228b"
              target="_blank"
              href="https://www.youtube.com/watch?v=w2wxI5iHDgs"
            >
              <img
                className="w-80 h-[280px] sm:w-[400px] sm:h-[385px]"
                src={Imagen2}
                alt="imagen_2"
              />
              <p className="absolute px-2 bottom-0 bg-third w-full py-1 text-sm ">
                {' '}
                Combatir el estrés{' '}
                <span className="text-right pl-8"> 12 min</span>{' '}
              </p>
            </a>
            <a
              className="rounded-xl overflow-hidden relative cursor-pointer hover:scale-[.99] duration-200 hover:shadow-228b"
              target="_blank"
              href="https://www.youtube.com/watch?v=wv3l9D7dLEY"
            >
              <img
                className="w-80 h-[280px] sm:w-[400px] sm:h-[385px]"
                src={Imagen3}
                alt="imagen_3"
              />
              <p className="absolute px-2 bottom-0 bg-third w-full py-1 text-sm ">
                Manejo de la ira <span className="text-right pl-8">5 min</span>{' '}
              </p>
            </a>
            <a
              className="rounded-xl overflow-hidden relative cursor-pointer hover:scale-[.99] duration-200 hover:shadow-228b"
              target="_blank"
              href="https://www.youtube.com/watch?v=8Op2QXZqWsA"
            >
              <img
                className="w-80 h-[280px] sm:w-[400px] sm:h-[385px]"
                src={Imagen4}
                alt="imagen_4"
              />
              <p className="absolute px-2 bottom-0 bg-third w-full py-1 text-sm">
                Respiracion con conciencia{' '}
                <span className="text-right pl-8">12 min</span>{' '}
              </p>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center ">
          <h2 className="text-center sm:text-3xl my-4">
            ¿Te gustaria apreender algo, {user.name}?{' '}
          </h2>
          <Link to="/chat">
            <button className="bg-third rounded-md w-max px-4 py-2 hover:shadow-228b active:scale-[.98]">
              Claro que si
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmotionResume;
