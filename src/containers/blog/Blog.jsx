import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading" data-reveal="fade-right">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open AI is the future. Let us explore how it is?" imageAlt="Binary data tunnel" delay={120} />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open AI is the future. Let us explore how it is?" imageAlt="Circuit board detail" delay={180} />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 and Open AI is the future. Let us explore how it is?" imageAlt="People reviewing AI content" delay={240} />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open AI is the future. Let us explore how it is?" imageAlt="Artificial intelligence visualization" delay={300} />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open AI is the future. Let us explore how it is?" imageAlt="Technology team in a workspace" delay={360} />
      </div>
    </div>
  </div>
);

export default Blog;
