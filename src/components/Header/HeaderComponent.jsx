"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./styleHeader.module.css";
import Image from "next/image";

export default function HeaderComponent({ title }) {
  const [menu, setMenu] = useState(false);
  const [hideShow, setHideShow] = useState(true);
  function handleClick() {
    setMenu(!menu);
    console.log(menu);

    setHideShow(!hideShow);

    console.log(hideShow);
  }
  return (
    <>
      <header className={styles.headerContainer}>
        {/* <h1 className="TextPhoneNumber headerSub">{title}</h1> */}
        {/* <div className={styles.headerDesktop}> */}
        <h1 className={`${styles.TextPhoneNumber} ${styles.headerSub}`}>
          {title}
        </h1>
        <ul className={`${styles.fullPageDesktopMenuList}`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/founder">Founder</Link>
          </li>
        </ul>
        {/* </div> */}

        <section>
          <article>
            <nav className={styles.navContainer}>
              {/* Burger button */}
              {/* If menu not been clicked (hideShow true) - show burger button */}
              {hideShow && (
                <div>
                  <button onClick={handleClick}>
                    <Image
                      src="/assets/menu-open-button.png"
                      alt="phonecall"
                      width={10}
                      height={10}
                    ></Image>
                  </button>
                </div>
              )}
              <div
                className={
                  menu ? `${styles.fullPageMenu} ${styles.menuList}` : ""
                }
              >
                {/* If menu clicked (true) - add styles for orange menu to appear */}
                {/* Cross button */}
                {/* If menu clicked (true) - show X */}
                {menu && (
                  <div
                  // className={`${styles.fullPageMenu} ${styles.btnReverse}`}
                  >
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
                      <li>
                        <Link onClick={handleClick} href="/">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link onClick={handleClick} href="/founder">
                          Founder
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </nav>
          </article>
        </section>
      </header>
    </>
  );
}
