import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Carrousel = () => {
  return (
    <>
      <Carousel
        className="flex"
        autoPlay
        infiniteLoop
        showThumbs={false}
        interval={5000}
      >
        <div className="p-8">
          <img className="w-[200px]" src="jiujitso.jpg" />
        </div>
        <div className="p-4">
          <img className="w-[200px]" src="kimono.jpg" />
        </div>
        <div className="p-4">
          <img className="w-[200px]" src="alimentação.jpg" />
        </div>
      </Carousel>
      <div className="text-center p-4">
        <h2 className="text-4xl pb-4 font-bold">Escolher uma boa academia</h2>
        <p className="text-2xl p-3">
          {" "}
          Escolher uma boa academia de jiu-jitsu é fundamental porque oferece
          instrutores qualificados, instalações adequadas, uma comunidade
          acolhedora, variedade de treinamento, valores éticos, progressão
          estruturada, foco na segurança e uma reputação sólida. Isso assegura
          uma experiência de aprendizado eficaz e gratificante no jiu-jitsu.
        </p>
        <h2 className="text-4xl pb-4 font-bold">
          Kimonos, tenha 2 de preferência !
        </h2>
        <p className="text-2xl p-3">
          A escolha dos kimonos para apratica do esporte, tambem é muito
          importante pelo fato de que o esporte exige muito esforço fisico.
          então a tranmsiração é muita. E para manter a boa higiene e o conforto
          na hora do treino, o ideal e ter dois kimonos para revezar o uso. Como
          iniciei a pouco tempo, escolhi o da academia onde faço aulas e
          pretendo adquirir outro que não seja da academia. Outra dica é pegar
          Kimonos de cor escura como Preto ou Azul, lembrando que se academia
          for muito tradicional, não é permitido !
        </p>
        <h2 className="text-4xl pb-4 font-bold">
          Mantenha uma alimentação saudavel!
        </h2>
        <p className="text-2xl p-3">
          Uma coisa que percebi, é que a alimentação é super importante pára
          manter um bom desempenho durante os treinos, no meu caso tenho que
          fazer a alimentação extamente 2 horas antes da pratica. Isso me mantem
          com força para aguentar os exercicios. e o tempo de digestão não me
          permite chegar com o estomago cheio para a aula. Escute Seu Corpo:
          Cada pessoa é única, portanto, preste atenção ao seu corpo. Aprenda o
          que funciona melhor para você e ajuste sua alimentação pré-treino
          conforme necessário.
        </p>
      </div>
    </>
  );
};

export default Carrousel;
