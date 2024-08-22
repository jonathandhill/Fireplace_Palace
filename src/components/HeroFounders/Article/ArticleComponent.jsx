import React from "react";
import styles from "./styleArticle.module.css";
import Image from "next/image";

export default function ArticleComponent({
  title,
  description,
  imageSrc,
  altText,
}) {
  return (
    <article className={styles.articleContainer}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Image
        className={styles.howItWorks}
        src={imageSrc}
        alt={altText}
        width={420}
        height={420}
      />
    </article>
  );
}
