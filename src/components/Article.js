import react from "react";


/**
 * Make an Article component as a child of ArticleList. It should return:

an <article> element, with the following elements inside:
an <h3> element displaying the title of the article, passed as a prop called title
a <small> element displaying the date of the article, passed as a prop called date
a default value of "January 1, 1970" should be used if no date is passed as a prop
a <p> element displaying the preview of the article, passed as a prop called preview
 */
const Article = (props) => {
    return (
        <article>
            <h3>{props.title}</h3>

            <small>{props.date ? props.date : "January 1, 1970"}</small>
            <p>{props.preview}</p>

        </article>
    );
}
export default Article;