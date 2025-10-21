import React from "react";
import Article from "./Article";


function ArticleList(props) {
    const articles = props.articles || []; // Default to an empty array if articles is undefined
    return (
        <main>
            {articles.map((article) => (
                <Article
                    key={article.id}
                    title={article.title}
                    date={article.date}
                    preview={article.preview}
                />
            ))}
        </main>
    );
}

export default ArticleList;
