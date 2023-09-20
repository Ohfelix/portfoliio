"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import { CustomButton } from "@components";
import { Carousel } from "react-responsive-carousel";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Portfolio, Projetos e outros !</h1>
        <p className="hero__subtitle">
          " Sou Leandro, um entusiasta de tecnologia de 32 anos, formado em
          técnico em automação e atualmente no segundo semestre do curso de
          engenharia de software. Minha paixão reside no desenvolvimento de
          software fullstack, onde combino minha formação técnica com o
          conhecimento em engenharia de software para criar soluções inovadoras
          e eficientes. Estou constantemente em busca de aprimorar minhas
          habilidades e explorar as fronteiras em constante evolução da
          tecnologia. Junte-se a mim nesta jornada emocionante de descobertas
          tecnológicas!"
        </p>
      </div>

      <section className="items-center">
        <h1 className="hero__title text-center p-2">Principais tecnologias !</h1>
        <div className="flex p-3 space-x-6">
          <div className="w-[80px]">
            <img src="javascript.png" alt="" />
          </div>
          <div className="w-[80px]">
            <img src="react.png" alt="" />
          </div>
          <div className="w-[80px]">
            <img src="node.png" alt="" />
          </div>
          <div className="w-[80px]">
            <img src="mongodb.webp" alt="" />
          </div>
          <div className="w-[80px]">
            <img src="git.png" alt="" />
          </div>
        </div>

        {/*       <Carousel className="flex" autoPlay infiniteLoop showThumbs={false} interval={5000}>
          <div className="flex p-3 w-40 h-60">
            <img src="javascript.png" />
            <p className="p-2">Javascript</p>
          </div>
          <div className="flex p-3 w-40 h-60">
            <img src="html.png" />
            <p className="p-2">Html</p>
          </div>
          <div className="flex p-3 w-40 h-60">
            <img src="css.png" />
            <p className="p-2">Css</p>
          </div>
          <div className="flex p-3 w-40 h-60">
            <img src="git.png" />
            <p className="p-2">Git</p>
          </div>
          <div className="flex p-3 w-40 h-60">
            <img src="mongodb.webp" />        
          </div>
          <div className="flex p-3 w-40 h-60">
            <img src="react.png" />
            <p className="p-2">React.js</p>
          </div>
        </Carousel> */}
      </section>
    </div>
  );
};

export default Hero;
