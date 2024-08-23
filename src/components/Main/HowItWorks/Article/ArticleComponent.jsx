import Image from "next/image";
import styles from "./Article.module.css";

export default function ArticleComponent({
  imageSrc,
  altText,
  title,
  description,
}) {
  return (
    <article>
      <Image src={imageSrc} alt={altText} width={300} height={300} />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
