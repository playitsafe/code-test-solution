import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Headline, ByLine, DateLine, Block } from '../components/index';
import StyledArticle from '../styles/Article.styled'
import { IArticle } from '../interfaces/article'

const baseURL = "http://localhost:3001/data";

const Article = () => {
  const [ article, setArticle ] = useState<IArticle>({
    headline: '',
    source: '',
    byline: '',
    publicationDate: '',
    blocks: []
  });
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setArticle(response.data);
    });
  }, [])
  return (
    <StyledArticle>
      <Headline headline={article.headline}></Headline>
      <ByLine byline={article.byline} source={article.source} />
      <DateLine publicationDate={article.publicationDate} />
      {
        article.blocks.map((block, key) => <Block item={block} key={key} />)
      }
    </StyledArticle>
  );
}

export default Article;