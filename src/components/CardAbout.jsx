import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

function CardAbout({ name, linkedinUrl, image, githubUrl }) {
  return (
    <div className="bg-[#0000002d] text-fourth rounded-md shadow-228b flex-col w-[400px] p-5">
      <h3 className="text-[2rem] text-center m-2 ">{name}</h3>
      <div className="flex justify-center items-center p-2">
        <img
          alt={name}
          src={image}
          className="mb-2 rounded-3xl h-[250px] shadow-555b w-max"
        />
      </div>
      <div className="flex justify-center w-full items-center mb-2 gap-1">
        <button className="flex justify-center bg-[rgba(244,113,126,0.1)] shadow-123g rounded-md w-full m-1 hover:drop-shadow-123g active:shadow-555b active:scale-95">
          <a
            className="flex m-2 items-center gap-1"
            target="_blank"
            href={linkedinUrl}
          >
            Linkedin
            <BsLinkedin />
          </a>
        </button>
        <button className="flex justify-center w-full bg-[rgba(244,113,126,0.1)] shadow-123g hover rounded-md m-1 hover hover:drop-shadow-123g active:shadow-555b active:scale-95">
          <a
            className="flex m-2 items-center gap-1"
            target="_blank"
            href={githubUrl}
          >
            GitHub
            <BsGithub />
          </a>
        </button>
      </div>
    </div>
  );
}

export default CardAbout;
