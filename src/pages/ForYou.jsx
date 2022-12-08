import React from 'react';
import {
  BsEmojiLaughing,
  BsEmojiNeutral,
  BsEmojiFrown,
  BsEmojiAngry,
  BsEmojiSmile,
} from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
import Imagen1 from '../image/imagen_1.jpeg';
import Imagen2 from '../image/imagen_2.jpeg';
import Imagen3 from '../image/imagen_3.jpeg';
import Imagen4 from '../image/imagen_4.jpeg';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const ForYou = () => {
  const { user } = useAuth();
  return (
    <div className="flex flex-col gap-3 p-3">
      <Link to="/home">
        <IoIosArrowForward className="rotate-180 text-fourth text-4xl" />
      </Link>
      <h2 className="text-2xl text-center text-fourth">Resumen de emociones</h2>
      <div className="flex justify-center">
        <input
          className="w-3/4 outlone-none bg-fifth p-1 border-none rounded-lg"
          placeholder="semana del 8- 14 de agosto"
        />
      </div>
      <div className="flex justify-around">
        <div className="cursor-pointer text-fourth hover:text-third flex flex-col justify-center items-center">
          <span>L</span>
          <BsEmojiLaughing className="lg:text-3xl text-2xl sm:text-4xl hover:scale-125 duration-200" />
        </div>
        <div className="cursor-pointer text-fourth hover:text-third flex flex-col justify-center items-center">
          <span>M</span>
          <BsEmojiNeutral className="lg:text-3xl text-2xl sm:text-4xl hover:scale-125 duration-200" />
        </div>
        <div className="cursor-pointer text-fourth hover:text-third flex flex-col justify-center items-center">
          <span>M</span>
          <BsEmojiFrown className="lg:text-3xl text-2xl  sm:text-4xl hover:scale-125 duration-200" />
        </div>
        <div className="cursor-pointer text-fourth hover:text-third flex flex-col justify-center items-center">
          <span>J</span>
          <BsEmojiAngry className="lg:text-3xl text-2xl sm:text-4xl hover:scale-125 duration-200" />
        </div>
        <div className="cursor-pointer text-fourth hover:text-third flex flex-col justify-center items-center">
          <span>V</span>
          <BsEmojiSmile className="lg:text-3xl text-2xl  sm:text-4xl hover:scale-125 duration-200 " />
        </div>

        <div className="cursor-pointer text-fourth hover:text-third flex flex-col justify-center items-center">
          <span>S</span>
          <BsEmojiLaughing className="lg:text-3xl text-2xl  sm:text-4xl hover:scale-125 duration-200 " />
        </div>
        <div className="cursor-pointer text-fourth hover:text-third flex flex-col justify-center items-center">
          <span>D</span>
          <BsEmojiNeutral className="lg:text-3xl text-2xl  sm:text-4xl hover:scale-125 duration-200" />
        </div>
      </div>
      <div className="w-full">
        <span className="text-right block p-2 text-fourth">Ver mas</span>
        <div className="flex flex-wrap p-3 gap-3">
          <img src={Imagen1} />
          <img src={Imagen2} />
          <img src={Imagen3} />
          <img src={Imagen4} />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-9">
        <h3 className="text-fourth text-center">
          Te gustaria aprender algo {user.name} ?
        </h3>
        <button className="bg-third rounded-lg p-2 w-2/4 m-auto" type="submit">
          Claro que si
        </button>
      </div>
    </div>
  );
};

export default ForYou;
