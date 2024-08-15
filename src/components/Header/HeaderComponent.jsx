'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import './styleHeader.css';
import Image from 'next/image';


export default function HeaderComponent({title}) {
  const [menu, setMenu] = useState(false);
  const [hideShow, setHideShow] = useState(true);
  function handleClick(){
      setMenu(!menu);
    console.log(menu);
    
    setHideShow(!hideShow);
   
    console.log( hideShow);
    
    // menu? setHideShow(!hideShow):setHideShow(hideShow);
  }
  return (
    <>
    <header className='headerContainer'>
          <h1 className="TextPhoneNumber headerSub">{title}</h1>
          <section>
            <article>
              <nav className="navContainer">
                {/* Burger button */}
              {hideShow && ( <button onClick={handleClick} className={menu? "!menu": "menu"}>
                 <Image 
                 class="how-it-works headerSub" 
                 src="/assets/menu-open-button.png" 
                 alt="phonecall" 
                 width={10}
                 height={10}
                 ></Image>
              </button>
              )}
              <div className='menuList'>
                {/* Cross button */}
              {menu && (
                <div >
                  <div className='btnReverse'>
                  <button  onClick={handleClick}>
                  <Image 
                 src="/assets/menu-close-button.png" 
                 alt="cross" 
                 width={10}
                 height={10}
                 ></Image>
                  </button>
                  </div>
                   <ul >
                    
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/founder">Founder</Link></li>
                  </ul>
                </div>
                 
              )}
                </div>
                </nav>
          </article>
          </section>
          
         
        </header>
    </>
  )
}
