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
          <div className={styles.heroDesktop}>
            <article>
              <Image
                className={styles.heroImage}
                src="/assets/hero-Desktop.png"
                alt="phonecall"
                width={400}
                height={400}
                layout="responsive"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </article>

            <article className={styles.textBgColor}>
              <div className={styles.heroHeading}>
                <b>Discover the</b>
              </div>
              <br />
              <div className={styles.heroHeading}>
                <b>Perfect Fireplace ...</b>
              </div>
              <span>
                <Link href="/Booking" className={styles.TextPhoneNumber}>
                  Book consultation
                </Link>
              </span>
            </article>
          </div>
          <article>
            <ReviewsComponent />
          </article>
        </section>

        <section className={styles.howItWorksContainer}>
          <h2>How is works</h2>
          <div className={styles.destopHowItWorks}>
            {articles.map((articleData, index) => (
              <ArticleComponent key={index} {...articleData} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
