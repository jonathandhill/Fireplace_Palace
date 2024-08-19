import styles from "./styleHeroFounders.module.css";
import Image from "next/image";
// import Link from 'next/link';
import ArticleComponent from "./Article/ArticleComponent";

function HeroFounders() {
  // const founders = [
  //   {
  //     name: 'Mike',
  //     imageSrc: '/assets/founder-mike.png',
  //     description: 'Mike is the founder of our company. He has a passion for design and a keen eye for detail. He is always looking for ways to improve our products and services.',
  //   }
  // ]
  const foundersWork = [
    {
      title: "Our Craftsmanship",
      description:
        "Mike and Mandy studied and honed their craft under the fireplace sensei Vik Von Blaze. Nothing gets delivered to a customer without their sign off.",
      imageSrc: "/assets/founders-1.png",
    },
    {
      title: "Our experience",
      description: `Number don't lie-We've been around for 20+years and have a long list of happy customers who gladly recommend us.`,
      imageSrc: "/assets/founders-2.png",
    },
    {
      title: "Our guarantee",
      description: `If you're not 100% satisfied we will fully refund your purchase. Also, we offer free repairs for the firsr 20 years of ownership. Find that somewhere else!`,
      imageSrc: "/assets/founders-3.png",
    },
  ];
  return (
    <section>
      <article>
        <h1 className={styles.headerFounders}>
          Meet the artisans behind our masterpieces! <br></br>
          <br></br> Mike and Mandy{" "}
          <Image
            className={styles.howItWorks}
            src="/assets/founder-mike-and-mandy.png"
            alt="Mike and Mandy"
            width={400}
            height={400}
          />
        </h1>
      </article>
      <article className={styles.founderSubContainer}>
        {foundersWork.map((articleData, index) => (
          <ArticleComponent key={index} {...articleData} />
        ))}
      </article>
    </section>
  );
}

export default HeroFounders;
