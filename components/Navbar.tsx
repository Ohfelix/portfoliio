import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsList, BsX } from "react-icons/bs";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Adicione uma função useEffect para verificar o tamanho da tela e definir mobileMenuOpen com base nisso
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setMobileMenuOpen(false); // Altere para false quando a tela for menor que 640px
      }
    };

    // Execute a função handleResize quando o componente for montado e quando a janela for redimensionada
    handleResize();
    window.addEventListener("resize", handleResize);

    // Limpe o event listener quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "Blog" },
    { href: "/contact", text: "Contato" },
    { href: "/project", text: "Projetos" },
  ];

  return (
    <header className="w-full absolute z-10">
      <nav className="w-full h-24 shadow-xl">
        <div className="flex items-center justify-between h-full px-4">
          <Link href="/">
            <Image
              src="/logoRmb.png" // Substitua pelo URL da sua imagem
              alt="Logo Brothers"
              width={105}
              height={75}
              className="cursor-pointer"
            />
          </Link>
          <div className={`sm:hidden cursor-pointer pl-4 ${mobileMenuOpen ? 'hidden' : 'block'}`}>
            <BsList className="w-8 h-8" onClick={toggleMobileMenu} />
          </div>
      
          <div className={`hidden sm:flex space-x-8 text-black font-bold uppercase ${mobileMenuOpen ? 'hidden' : 'block'}`}>
            <ul className="w-full items-center justify-between h-full px-4 sm:flex">
              {menuLinks.map((link, index) => (
                <li className="cursor-pointer sm:ml-10 uppercase border-b border-white hover:border-[#F68519] text-xl" key={index}>
                  <Link href={link.href} onClick={closeMobileMenu}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          {mobileMenuOpen && (
            <div className="sm:hidden cursor-pointer pl-4">
              <BsX className="w-8 h-8" onClick={toggleMobileMenu} />
            </div>
          )}
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white p-10 ease-in-out duration-500 sm:hidden">
          <div className="flex w-full items-center justify-end">
            <div className="cursor-pointer" onClick={toggleMobileMenu}>
              <BsX className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <ul className="mt-8 space-y-4">
            {menuLinks.map((link, index) => (
              <li className="cursor-pointer ml-10 uppercase border-b border-white hover:border-[#4664dc] text-xl" key={index}>
                <Link href={link.href} onClick={closeMobileMenu}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
