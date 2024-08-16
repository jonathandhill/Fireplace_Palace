import React from 'react';
import styles from'./styleHowItWorks.module.css';
import ArticleComponent from './Article/ArticleComponent';
import Image from 'next/image';

export default function HowItWorks() {
  return (
    <div>
      <main>
        <section className={styles.hero}>
        <article className ={styles.tiles}>
        <Image 
          className={styles.howItWorks} 
          src="/assets/hero-mobile.png" 
          alt="phonecall" 
          width={500}
          height={500}
        />
        </article>
          <article className={styles.textBgColor}>
            <h1 className={styles.heroHeading}>
              Discover the <br />
              Perfect Fireplace ...
            </h1>
            <h2 className={styles.TextPhoneNumber}>
              Book consultation:
              <span className={styles.phoneNumber}> 0121 345 6789</span>
            </h2>
          </article>
        </section>
        <section className={styles.howItWorksContainer}>
          <h2>How is works</h2>
          <ArticleComponent/>
          <article className={styles.tiles}>
          <Image 
           src="/assets/how-it-works-2.png" 
           alt="home visit" 
           width={500}
           height={500}
        />
        <div className={styles.howItWorks}>
            <h3>We come to you...</h3>
            <p>
              We come to your home to do an assessment of the space and to your
              style preference.
            </p>
            </div>
          </article>
          <article className={styles.tiles}>
          <Image 
            src="/assets/how-it-works-3.png" 
            alt="recommendation" 
            width={500}
            height={500}
        />
        <div className={styles.howItWorks}>
        <h3>We recommend...</h3>
            <p>We send you a bespoke set of fireplace recommendations.</p>
         
        </div>
          </article>
        </section>
      </main>
    </div>
  );
}
