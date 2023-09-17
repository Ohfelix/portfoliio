"use client";
import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const About = () => {
  const backgroundImageStyle = {
    backgroundImage: `url("/jiujitso.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const textBackgroundStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Cor de fundo com transparência
  };

  return (
    <div className="hero">
      <div className="flex-1 p-36 padding-x">
        <h1 className="hero__title m-6 p-6 rounded-xl text-center">
          Minhas Primeiras impressões sobre <br />{" "}
          <span className="text-blue-500">Jiu-Jitsu!</span>
        </h1>
        <p
          className="hero__subtitle text-center bg-opacity-70"
          style={textBackgroundStyle}
        >
          A pouco tempo comecei as aulas de jiu-jitsu, e gostaria de
          compartilhar minhas primeiras impressões e dicas para aqueles que se
          interessam ou têm dúvidas sobre!
        </p>
      </div>   
        <div>
        <img src="/jiujitso.jpg" alt="" />
      </div>

      <div className="p-3">
        <h2 className="text-2xl font-bold">Escolher uma boa academia</h2>
        <p className="text-2xl p-3">
          {" "}
          Escolher uma boa academia de jiu-jitsu é fundamental porque oferece
          instrutores qualificados, instalações adequadas, uma comunidade
          acolhedora, variedade de treinamento, valores éticos, progressão
          estruturada, foco na segurança e uma reputação sólida. Isso assegura
          uma experiência de aprendizado eficaz e gratificante no jiu-jitsu.
        </p>
      </div>

      <section className="m-3">
        <h3 className="hero__title m-6 p-6 rounded-xl text-center">
          Novas alterações
        </h3>
      </section>
    </div>
  );
};

export default About;
