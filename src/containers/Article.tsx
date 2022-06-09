import React, { FC, useState, useEffect } from 'react';
import axios from "axios";
import {
  Headline,
  Byline
} from '../components/index';
// import Byline from '../components/Byline';
import { StyledArticle } from '../styles/Article.styled'
import { IArticle } from '../interfaces/article'

interface ArticleProps {
  
}

const baseURL = "http://localhost:3001/data";


const Article: FC<ArticleProps> = () => {
  const [ article, setArticle ] = useState<IArticle>();
  useEffect(() => {
    //Todo intercept axios and add error handling here
    axios.get(baseURL).then((response) => {
      console.log('response', response);
      setArticle(response.data);
    });
  }, [])
  return (
    <StyledArticle>
      <Headline headline={article?.headline}></Headline>
      <Byline byline={article?.byline} source={article?.source} />
    </StyledArticle>
  );
}

export default Article;