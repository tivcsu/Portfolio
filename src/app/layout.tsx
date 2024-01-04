'use client'
import Image from 'next/image';
import { Inter } from 'next/font/google'
import './globals.css'
import { useCallback, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { AnimatePresence, Spring, motion } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const onScroll = useCallback((event: Event) => {
    event.preventDefault()
    const { scrollY } = window;
    const logo = document.querySelector('.logo');
    const navbar = document.querySelector('.navbar-wrapper');
    if (scrollY > 100) {
      logo?.classList.add('logo-hidden')
    } else {
      logo?.classList.remove('logo-hidden')
    }
    if (scrollY > 0) {
      navbar?.classList.add('with-background')
    } else {
      navbar?.classList.remove('with-background')
    }
  }, []);

  const handleMenuClick = () => {
    const menu = document.querySelector('.navbar-menu');
    const menuButton = document.querySelector('.navbar__menu-button');
    if (menu?.classList.contains('show')) {
      menu.classList.remove('show')
      menuButton?.classList.remove('close')
    } else {
      menu?.classList.add('show')
      menuButton?.classList.add('close')
    }
  }
  useEffect(() => {
    const logo = document.querySelector('.logo');
    logo?.classList.remove('logo-hidden')
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
   }
  }, [])
  useEffect(() => {
    const logo = document.querySelector('.logo');
    const navbar = document.querySelector('.navbar-wrapper');
    logo?.classList.remove('logo-hidden')
    if (pathname !== '/') {
      navbar?.classList.add('with-background')
    } else {
      navbar?.classList.remove('with-background')
    }
  }, [pathname])

  
  return (
    <html lang="en">
      <title>Tivadar Lisch Portfolio</title>
      <meta 
        name="I am Tivadar Lisch Front-end developer. This is my portfolio"
        content="I’m Tivadar Lisch, front end developer and designer from Hungary. I’m passionate about creating seamless user experiences through innovative design and development."      
      />
      <body className={inter.className}>
      <div className="navbar-wrapper">
        <nav className='navbar'>
          <Link href="/" className="navbar-logo">
            <Image className="navbar-logo__image" src="/Logo.png" alt="Tivadar Lisch Logo" width={40} height={40} loading='lazy'/>
            <p className='navbar-logo__text'>Tivadar Lisch</p>
          </Link>
          <ul className='navbar-menu'>
            <li className="navbar-menu__item">
              <Link href="/" onClick={handleMenuClick}>Home</Link>
            </li>
            <li className="navbar-menu__item">
              <Link href="/about" onClick={handleMenuClick}>About</Link>
            </li>
            <li className="navbar-menu__item">
              <a href="/#contact" onClick={handleMenuClick}>Contact</a>
            </li>
          </ul>
          <div className="navbar__menu-button" onClick={handleMenuClick}></div>
        </nav>
      </div>
      <div className="background-decor">
        <div className="outline-wrapper">
          <div className="outline">
            <div className="outline__img"></div>
          </div>
        </div>
        {pathname === '/' && <div className="logo logo-hidden">
          <h2 className="logo__text">Portfolio</h2>
          <div className="logo__image">
            <Image src="/Logo.png" alt="" width={1200} height={1200}/>
          </div>
        </div>}
      </div>
      <main>
        {children}
      </main>
      </body> 
    </html>
  )
}
