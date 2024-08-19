import Image from "next/image";
import styles from "./Article.module.css";

export default function ArticleComponent({
  imageSrc,
  altText,
  title,
  description,
}) {
  return (
    <article className="tiles">
      <Image
        className={styles.howItWorks}
        src={imageSrc}
        alt={altText}
        width={300}
        height={300}
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
    // <article className="tiles">
    //   <Image
    //     className={styles.howItWorks}
    //     src="/assets/how-it-works-1.png"
    //     alt="phonecall"
    //     width={300}
    //     height={300}
    //   />
    //   <h3>Give us a call...</h3>
    //   <p>
    //     Call us and book in a "design consultation" on a date and time that
    //     suits you.
    //   </p>
    // </article>
  );
}
