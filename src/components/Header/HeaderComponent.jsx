'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './styleHeader.module.css';
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
    <header className={styles.headerContainer}>
          {/* <h1 className="TextPhoneNumber headerSub">{title}</h1> */}
          <h1 className={`${styles.TextPhoneNumber} ${styles.headerSub}`}>{title}</h1>
          <section>
            <article>
              <nav className={styles.navContainer}>
                {/* Burger button */}
                {hideShow && ( <button onClick={handleClick} >
                  <Image 
                    className={styles.headerSub} 
                    src="/assets/menu-open-button.png" 
                    alt="phonecall" 
                    width={10}
                    height={10}
                    ></Image>
                </button>
                )}
              <div className={menu ? `${styles.fullPageMenu} ${styles.menuList}` : ''}>
                {/* Cross button */}
                {menu && (
                  <div className={styles.fullPageMenu}>
                    <div className={styles.btnReverse}>
                      <button onClick={handleClick}>
                        <Image 
                          src="/assets/menu-close-button.png" 
                          alt="cross" 
                          width={20}
                          height={20}
                        />
                      </button>
                    </div>
                    <ul className={styles.fullPageMenuList}>
                      <li><Link onClick={handleClick} href="/">Home</Link></li>
                      <li><Link onClick={handleClick} href="/founder">Founder</Link></li>
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
