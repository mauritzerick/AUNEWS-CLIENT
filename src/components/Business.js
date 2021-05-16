import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import axios from 'axios';
import NewsCard from './NewsCard';
import altImage from '../images/BusinessAltImage.jpeg'

class Business extends Component {
  constructor() {
    super()
    this.state ={
      articles: []
    };
  }

  componentDidMount() {
    const scienceInfo = () => {
      const scienceURL = "http://newsapi.org/v2/top-headlines?country=au&category=business&apikey=a598dbb0d4a24ccf8c3a54a403b3e1ce";
      axios(scienceURL).then((info) => {
        let newsArticles = info.data.articles;
        this.setState({articles: newsArticles})
      }).catch(error => alert('There is an error'));
    }
    scienceInfo()
  };

  render() {
    return (
      <div className="mainBlock">
        {this.state.articles.map((article, index) => (
          <NewsCard className="newsCard" key={article.publishedAt}
            title={article.title}
            image={article.urlToImage === null ? altImage : article.urlToImage}
            description={article.description}
            link={article.url}/>
        ))}
      </div>
    );
  }
}

export default Business;
