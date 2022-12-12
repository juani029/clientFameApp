import React from 'react';
import CardAbout from '../CardAbout';
import fotoJuani from '../../image/foto_juani.png';
import fotoAgus from '../../image/foto_agus.jpg';
import fotoDaniel from '../../image/foto_daniel.jpg';
import fotoSteveen from '../../image/foto_steveen.jpg';

function About() {
  return (
    <div className="w-[88%] m-auto p-2 min-h-screen ">
      <div className=" flex justify-center items-center flex-col h-full p-0 m-0">
        <h2 className="text-[4rem] font-bold text-[#ffffff] text-center mb-3 border-b-2 border-[rgba(244,113,126,0.7)] px-6">
          Desarrolladores Cohorte 8-57-MERN
        </h2>
        <div className="flex flex-wrap gap-4 justify-center items-center py-8">
          <CardAbout
            name="Juan Ignacio Santillan"
            linkedinUrl="https://www.linkedin.com/in/juanisantillan-dev/"
            image={fotoJuani}
            githubUrl="https://github.com/juani029"
          />
          <CardAbout
            name="Agustin Galvan"
            linkedinUrl="https://www.linkedin.com/in/agustin-galvan-30592715a/"
            image={fotoAgus}
            githubUrl="https://github.com/Agustingalvan02"
          />
          <CardAbout
            name="Daniel Ramos"
            linkedinUrl="https://www.linkedin.com/in/daniel-ramos-1ab664223/"
            image={fotoDaniel}
            githubUrl="https://github.com/Daniel1264"
          />
          <CardAbout
            name="Steeven Sanchez"
            linkedinUrl="https://www.linkedin.com/in/steeven-sanchez-693442238/"
            image={fotoSteveen}
            githubUrl="https://github.com/Stiwii"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
