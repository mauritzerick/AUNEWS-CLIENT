import React, { Component } from "react";
import { useParams } from "react-router-dom"; // destructuring
import axios from "axios";
import NewsCard from "./NewsCard";
import altImage from "./images/GeneralAltImage.jpeg";
import Loading from "../Loading";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsArticle: [],
      isLoading: 1,
    };
  }

  componentDidMount() {
    console.log(this.props);
    const newsInfo = () => {

      let newsURL = "https://newsapi.org/v2/top-headlines?country=au&pageSize=100&category="
      if(this.props.props !== "General" ){
        newsURL = newsURL + `${this.props.match.params.category}&apikey=d2136c3cf54d4638afa776dc6055a159`;
      }else{
        newsURL = newsURL + `${this.props.props}&apikey=d2136c3cf54d4638afa776dc6055a159`;
      }

      console.log(newsURL);
      axios(newsURL)
        .then((info) => {
          let newsArticles = info.data.articles;
          this.setState({ newsArticle: newsArticles, isLoading: 0 });
        })
        .catch((error) => {
          alert(error);
          {
            this.state.isLoading = 0;
          }
        });
    };
    newsInfo();
  }

  render() {
    return (
      <div className="mainBlock">
        <Loading show={this.state.isLoading} />
        {this.state.newsArticle.map((article, index) => (
          <NewsCard
            className="newsCard"
            key={article.publishedAt}
            title={article.title}
            image={article.urlToImage === null ? altImage : article.urlToImage}
            description={article.description}
            link={article.url}
          ></NewsCard>
        ))}
      </div>
    );
  }
}

export default News;
