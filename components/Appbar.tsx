import React, { useState } from 'react';
import SigninButton from './SigninButton';
import Link from 'next/link';

const Appbar: React.FC = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <>
            <nav className='w-full bg-gray-500 px-5 text-white'>
                <div className='flex justify-between md:py-5 md:flex md:justify-around md:align-middle'>
                    <div className='flex items-center justify-center'>
                        <Link href='/'>
                            <h2 className='text-2xl font-bold md:pl:5'>Projeto Do Leandro</h2>
                        </Link>
                    </div>
                    {/* MOBILE */}
                    <div className='md:hidden py-8'>
                        <button className='py-3 rounded-md' onClick={() => setNavbar(!navbar)}>
                            {navbar ? <img src='/close-icon.webp' width={30} height={30} alt='Close Icon' /> : (
                                <img src='/hamburguer-icon.png' width={30} height={30} alt='menu Icon button' />
                            )}
                        </button>
                    </div>
                </div>

                <div className={`md:block ${navbar ? 'block' : 'hidden'}`}>
                    <SigninButton />
                    <ul className='md:auto md:flex cursor-pointer mt-8 h-screen'>
                        <Link href={"/about"} onClick={() => setNavbar(!navbar)}>
                            <li className='text-xl px-6 text-center py-5 hover:bg-white md:hover:bg-transparent hover:text-black'>Store</li></Link>
                        <Link href={"/store"} onClick={() => setNavbar(!navbar)}>
                            <li className='text-xl px-6 text-center py-5 hover:bg-white md:hover:bg-transparent hover:text-black'>About</li></Link>
                        <Link href={"/about"} onClick={() => setNavbar(!navbar)}>
                            <li className='text-xl px-6 text-center py-5 hover:bg-white md:hover:bg-transparent hover:text-black'>About</li></Link>
                    </ul>

                </div>
            </nav>
        </>
    );
};

export default Appbar;
