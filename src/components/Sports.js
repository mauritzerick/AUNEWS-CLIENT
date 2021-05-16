import React, { Component } from "react"; // destructuring
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import axios from 'axios';
import NewsCard from './NewsCard';
import altImage from '../images/SportsAltImage.png'

class Sports extends Component {
  constructor() {
    super()
    this.state ={
      sportsNewsArticles: []
    };
  }

  componentDidMount() {
    const sportsInfo = () => {
      const sportsNewsURL = "http://newsapi.org/v2/top-headlines?country=au&category=sport&apikey=a598dbb0d4a24ccf8c3a54a403b3e1ce";
      axios(sportsNewsURL).then((info) => {
        let newsArticles = info.data.articles;
        this.setState({sportsNewsArticles: newsArticles})
      }).catch(error => alert('There is an error'));
    }
    sportsInfo()
  };

  render() {
    return (
      <div className="mainBlock">
        {this.state.sportsNewsArticles.map((article, index) => (
          <NewsCard className="newsCard" key={article.publishedAt}
            title={article.title}
            image={article.urlToImage === null ? altImage : article.urlToImage}
            description={article.description}
            link={article.url}/>
        ))}
      </div>
    );
  }
};
export default Sports;
