'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import './styleHeader.css';
import Image from 'next/image';


export default function HeaderComponent({title}) {
  const [menu, setMenu] = useState(false);
  function handleClick(){
    setMenu(!menu)
  }
  return (
    <>
    <header className='headerontainer'>
          <h1 className="Text_phoneNumber headerSub">{title}</h1>
          
          <button onClick={handleClick}>
            <Image 
            class="how-it-works headerSub" 
            src="/assets/menu-open-button.png" 
            alt="phonecall" 
            width={10}
            height={10}
            ></Image>
          </button>
         {menu ?
         <div>
         <Link href='/'>Home</Link>
         <Link href='/founder'>Founder</Link>
         </div>
          :<Link href='/'>Home</Link>}
        </header>
    </>
  )
}
