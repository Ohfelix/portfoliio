"use client";
import { motion } from "framer-motion";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title text-center p-2">
          Portfolio, Projetos e outros !
        </h1>
        <p className="hero__subtitle text-justify">
          " Sou Leandro, um entusiasta de tecnologia de 32 anos, formado em
          técnico em automação e atualmente no segundo semestre do curso de
          engenharia de software. Minha paixão reside no desenvolvimento de
          software fullstack, onde combino minha formação técnica com o
          conhecimento em engenharia de software para criar soluções inovadoras
          e eficientes. Estou constantemente em busca de aprimorar minhas
          habilidades e explorar as fronteiras em constante evolução da
          tecnologia. "
        </p>
      </div>
      <section className="">
        <div className="flex-1 pt-10 padding-x ">
          <h1 className="hero__title text-center p-2">
            Principais <span className="text-blue-600">Tecnologias !</span>
          </h1>
          <div className="flex justify-center p-5 space-x-6">
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
              <img src="mongodb.png" alt="" />
            </div>
            <div className="w-[80px]">
              <img src="git.png" alt="" />
            </div>
          </div>
          <p className="hero__subtitle text-justify">
            "Minha jornada no mundo do desenvolvimento de software me levou a
            uma paixão pelo stack <span className="font-black">MERN.</span> Como
            entusiasta de tecnologia, encontrei na combinação de MongoDB,
            Express, React e Node.js a base perfeita para criar aplicações web
            modernas e escaláveis. A flexibilidade do MongoDB, a agilidade do
            Node.js, a elegância do Express e a riqueza de recursos do React me
            permitem criar experiências de usuário incríveis e sistemas
            robustos. Estou constantemente explorando as possibilidades que essa
            stack oferece e empolgado em aplicar meu conhecimento para
            impulsionar projetos inovadores."
          </p>
        </div>
        <div className="p-4">
        
        </div>
      </section>
    </div>
  );
};

export default Hero;
