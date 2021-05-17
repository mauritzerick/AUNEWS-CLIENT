import React, { Component } from "react";
import {useParams} from "react-router-dom" // destructuring
import axios from 'axios';
import NewsCard from './NewsCard';
import altImage from '../images/GeneralAltImage.jpeg'

class News extends Component {
  constructor(props) {
    super(props)
    this.state= {
      newsArticle: []
    }
  };

  componentDidMount() {
    console.log(this.props);
    const newsInfo = () => {
      const newsURL = `http://newsapi.org/v2/top-headlines?country=au&category=${this.props.match.params.category}&apikey=a598dbb0d4a24ccf8c3a54a403b3e1ce`;
      console.log(newsURL);
      axios(newsURL).then((info) => {
        let newsArticles = info.data.articles;
        this.setState({newsArticle: newsArticles})
      }).catch(error => alert('There is an error'))
    }
    newsInfo()
  }

  render() {
    return (
      <div className="mainBlock">
        {this.state.newsArticle.map((article, index) => (
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

export default News;
