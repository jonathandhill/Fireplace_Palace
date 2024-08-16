import Image from 'next/image';
import styles from './Article.module.css'

export default function ArticleComponent () {
    return (
        <article className="tiles">
          <Image 
          className={styles.howItWorks} 
          src="/assets/how-it-works-1.png" 
          alt="phonecall" 
          width={500}
          height={500}
        />
            <h3>Give us a call...</h3>
            <p>
              Call us and book in a "design consultation" on a date and time
              that suits you.
            </p>
          </article>
    )
}