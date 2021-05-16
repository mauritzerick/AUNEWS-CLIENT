import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import './Science.css';
import axios from 'axios';
import NewsCard from './NewsCard';
import altImage from '../images/TopScienceNews.jpeg'
class Science extends Component {
  constructor() {
    super()
    this.state ={
      scienceNewsArticles: []
    };
  }

  componentDidMount() {
    const scienceInfo = () => {
      const scienceNewsURL = "http://newsapi.org/v2/top-headlines?country=au&category=science&apikey=a598dbb0d4a24ccf8c3a54a403b3e1ce";
      axios(scienceNewsURL).then((info) => {
        console.log(info.data.articles);
        let newsArticles = info.data.articles;
        this.setState({scienceNewsArticles: newsArticles})
      }).catch(error => alert('There is an error'));
    }
    scienceInfo()
  }

  render() {
    return (
      <div className="mainBlock">
        {this.state.scienceNewsArticles.map((article, index) => (
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

export default Science;
