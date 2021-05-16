import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import './Science.css';
import axios from 'axios';
import altImage from '../images/TopScienceNews.jpeg'
class Science extends Component {
  constructor() {
    super()
    this.state ={
      articles: []
    };
  }

  componentDidMount() {
    const scienceInfo = () => {
      const scienceURL = "http://newsapi.org/v2/top-headlines?country=au&category=science&apikey=a598dbb0d4a24ccf8c3a54a403b3e1ce";
      axios(scienceURL).then((info) => {
        console.log(info.data.articles);
        let newsArticles = info.data.articles;
        this.setState({articles: newsArticles})
      }).catch(error => alert('There is an error'));
    }
    scienceInfo()
  }

  render() {
      let showURL = (imageURL) => {
        if (imageURL === null) {
          return <img className="image" src={altImage}  width="400" height="300"/>
        } else {
          return <img className="image" src={imageURL} width="400" height="300"/>
        }
      };

    return (
      <div>
        <h1>Science News!</h1>
        {this.state.articles.map((article, index) => (
            <Nav.Link href={article.url} target="_blank" className="article">
              <div>
                <p className="title">{article.title} </p>
                {showURL(article.urlToImage)}
                <p className="description">{article.description}</p>
              </div>
            </Nav.Link>
        ))}
      </div>
    );
  }
}

export default Science;
