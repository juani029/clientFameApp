import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

// eslint-disable-next-line react/prop-types
function ModalFeelings({ handleModal }) {
  const fellingsOptionsTwo = [
    'familia',
    'trabajo',
    'amistades',
    'estudios',
    'productividad',
    'descanso',
    'alimentación',
    'pareja/ex',
    'conmigo',
  ];
  const fellingsOptions = [
    'triste',
    'sola',
    'desesperanzada',
    'abrumada',
    'decepcionada',
    'dolida',
    'melalcolica',
    'miserable',
    'arrepentida',
  ];

  const handleSubmitEmotion = (value) => {
    console.log(value, 'ckileooo');
  };
  const handleSubmitSituation = (value) => {
    console.log(value, 'ckileooo');
  };

  return (
    <div className="flex flex-col bg-primary p-3 gap-3  lg:w-2/3 fixed justify-center items-center rounded-lg m-2">
      <div className="absolute top-1 right-1">
        <AiFillCloseCircle
          onClick={handleModal}
          className="text-2xl text-third cursor-pointer"
        />
      </div>
      <div>
        <h2 className="text-fourth text-center lg:text-2xl mt-4">
          Entiendo que no te sientes bien, ¿que emociones lo describen mejor?
        </h2>
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="text-fourth text-sm lg:text-lg">Emociones</h3>
        </div>
        <div className="flex justify-center w-full">
          <input
            className="w-full bg-secondary p-1 rounded-lg outline-none"
            type="text"
            name="search"
            placeholder="buscar mas tags"
          />
        </div>
        <div className="flex gap-3 flex-wrap justify-center">
          {fellingsOptions.map((value, index) => (
            <button
              value={value}
              onClick={() => handleSubmitEmotion(value)}
              key={index}
              type="submit"
              className="p-1 lg:p-3 sm:p-2  rounded-md text-fourth bg-third"
            >
              {value}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="text-fourth text-sm lg:text-lg">Situaciones </h3>
        </div>
        <div>
          <input
            className="w-full bg-secondary rounded-lg p-1 outline-none text-seventh"
            type="text"
            name="search"
            placeholder="buscar mas tags"
          />
        </div>
        <div className="flex gap-3 flex-wrap justify-center">
          {fellingsOptionsTwo.map((value, index) => (
            <button
              onClick={() => handleSubmitSituation(value)}
              value={value}
              key={index}
              type="submit"
              className="p-1 lg:p-2 rounded-md text-fourth bg-third"
            >
              {value}
            </button>
          ))}
        </div>
      </div>
      <div className="ml-auto p-1">
        <button
          type="submit"
          className="bg-third p-1 lg:p-2 rounded-lg text-fourth w-24"
          onClick={handleModal}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

export default ModalFeelings;
