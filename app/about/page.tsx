"use client";
import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carrousel } from "@components";

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
          className="hero__subtitle bg-opacity-70 text-justify"
          style={textBackgroundStyle}
        >          A pouco tempo comecei as aulas de jiu-jitsu, e gostaria de
          compartilhar minhas primeiras impressões e dicas para aqueles que se
          interessam ou têm dúvidas sobre!
        </p>
      </div>
      <Carrousel />   
   {/*    <section className="m-3">
        <h3 className="hero__title m-6 p-6 rounded-xl text-center">
          Novas alterações
        </h3>
      </section> */}
    </div>
  );
};

export default About;
