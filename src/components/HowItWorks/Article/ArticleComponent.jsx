
import './Article.module.css'

export default function ArticleComponent () {
    return (
        <article className="tiles">
            <img
              className="how-it-works"
              src="src/assets/how-it-works-1.png"
              alt="phonecall"
            />
            <h3>Give us a call...</h3>
            <p>
              Call us and book in a "design consultation" on a date and time
              that suits you.
            </p>
          </article>
    )
}