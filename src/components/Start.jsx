import React from 'react';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';

const Start = () => {
  return (
    <div className=" m-0 bg-[#3D6487] relative h-[100vh] max-h-screen w-[100vw] flex flex-col items-center justify-center pt-[10vh] gap-[2rem] text-white overflow-hidden text-[white] font-serif ">
      <div className=" top-[0] flex flex-col justify-center items-center gap-4 px-[5px]  sm:gap-2">
        <h2 className=" text-[clamp(1.5rem,7vw,3rem)] w-max h-max">
          {/* <Typical 
            loop = {Infinity}
            wrapper = 'c'
            steps={[
              'Hola soy FAME', 3000,
              'BIENVENIDO', 3000 
            ]}
          /> */}
          Hola soy FAME
        </h2>
      </div>
      <div className="max-w-[300px] w-[100%] px-[10px]">
        <img src="src/image/imagen_logotipo.png" />
      </div>

      <div className=" top-[0] flex flex-col justify-center items-end gap-4 px-[5px]  sm:gap-2">
        <p className=" text-[clamp(1rem,7vw,2rem)] w-screen h-max text-center px-[10px]">
          Este es un espacio seguro creado para ti
        </p>
        <Link to="/home">
          <button className="text-2xl rounded-[10px] text-secondary  hover:bg-slate-600 hover:text-third hover:scale-[1.1] mr-[25vw] mt-[20px]">
            <span className=" text-base">Comencemos ▶</span>{' '}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Start;
