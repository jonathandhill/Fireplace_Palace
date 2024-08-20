import React from "react";
import styles from "./styleHowItWorks.module.css";
import ReviewsComponent from "../Reviews/ReviewsComponent";
import ArticleComponent from "./Article/ArticleComponent";
import Image from "next/image";
import Link from "next/link";

export default function HowItWorks() {
  const articles = [
    {
      imageSrc: "/assets/how-it-works-1.png",
      altText: "phonecall",
      title: "Give us a call...",
      description:
        'Call us and book in a "design consultation" on a date and time that suits you.',
    },
    {
      imageSrc: "/assets/how-it-works-2.png",
      altText: "design",
      title: "We design your space",
      description: "Our expert designers create a custom plan for your space.",
    },
    {
      imageSrc: "/assets/how-it-works-3.png",
      altText: "recommendation",
      title: "We recommend...",
      description: "We send you a bespoke set of fireplace recommendations.",
    },
    // Add more articles as needed
  ];

  return (
    <div>
      <main>
        <section className={styles.hero}>
          <article className={styles.tiles}>
            <Image
              // className={styles.howItWorks}
              src="/assets/hero-mobile.png"
              alt="phonecall"
              width={1000}
              height={400}
            />
          </article>
          <article className={styles.textBgColor}>
            <h1 className={styles.heroHeading}>
              Discover the <br />
              Perfect Fireplace ...
            </h1>
            <h2 className={styles.TextPhoneNumber}>
              <Link href="/Booking"> Book consultation</Link>
              {/* <span className={styles.phoneNumber}> 0121 345 6789</span> */}
            </h2>
          </article>
        </section>
        <ReviewsComponent />

        <section className={styles.howItWorksContainer}>
          <h2>How is works</h2>
          <div className={styles.howItWorksSubContainer}>
            {articles.map((articleData, index) => (
              <ArticleComponent
                className={styles.tiles}
                key={index}
                {...articleData}
              />
            ))}
          </div>
          {/* <div className={styles.howItWorksSubContainer}>
            <ArticleComponent />
            <article className={styles.tiles}>
              <Image
                src="/assets/how-it-works-2.png"
                alt="home visit"
                width={300}
                height={300}
              />
              <div className={styles.howItWorks}>
                <h3>We come to you...</h3>
                <p>
                  We come to your home to do an assessment of the space and to
                  your style preference.
                </p>
              </div>
            </article>
            <article className={styles.tiles}>
              <Image
                src="/assets/how-it-works-3.png"
                alt="recommendation"
                width={300}
                height={300}
              />
              <div className={styles.howItWorks}>
                <h3>We recommend...</h3>
                <p>We send you a bespoke set of fireplace recommendations.</p>
              </div>
            </article>
          </div> */}
        </section>
      </main>
    </div>
  );
}
