import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text, imageAlt = 'Blog article cover', delay = '0ms' }) => (
  <article
    className="gpt3__blog-container_article"
    data-reveal="fade-up"
    data-parallax="0.018"
    style={{ '--reveal-delay': typeof delay === 'number' ? `${delay}ms` : delay }}
  >
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt={imageAlt} loading="lazy" decoding="async" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </article>
);

export default Article;
