import React, { Component } from "react";
import {useParams} from "react-router-dom" // destructuring
import axios from 'axios';
import NewsCard from './NewsCard';
import altImage from './images/GeneralAltImage.jpeg';
import Loading from '../Loading';

class News extends Component {
  constructor(props) {
    super(props)
    this.state= {
      newsArticle: [],
      isLoading: 1
    }
  };

  componentDidMount() {
    console.log(this.props);
    const newsInfo = () => {

      let newsURL = "https://newsapi.org/v2/top-headlines?country=au&pageSize=100&category="
      if(this.props.props !== "General" ){
        newsURL = newsURL + `${this.props.match.params.category}&apikey=5d9e47c7febf45c8b087816526a26225`;
      }else{
        newsURL = newsURL + `${this.props.props}&apikey=5d9e47c7febf45c8b087816526a26225`;
      }

      console.log(newsURL);
      axios(newsURL).then((info) => {
        let newsArticles = info.data.articles;
        this.setState({newsArticle: newsArticles, isLoading: 0});

      }).catch(error => {
        alert('There is an error');
        {this.state.isLoading = 0}

      })
    }
    newsInfo()
  }

  render() {
    return (
      <div className="mainBlock">
        <Loading show={this.state.isLoading}/>
        {
          this.state.newsArticle.map((article, index) => (
          <NewsCard className="newsCard" key={article.publishedAt}
            title={article.title}
            image={article.urlToImage === null ? altImage : article.urlToImage}
            description={article.description}
            link={article.url}>
          </NewsCard>
        ))}

      </div>
    );
  }
}

export default News;
