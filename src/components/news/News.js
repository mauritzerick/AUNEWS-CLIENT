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

      let newsURL = "https://gnews.io/api/v4/top-headlines?token=a87068074606da8c51bf48026e8325b0&country=au&topic="
      if(this.props.props !== "General" ){
        newsURL = newsURL + `${this.props.match.params.category}`;
      }else{
        newsURL = newsURL + `${this.props.props}`;
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
            image={article.image === null ? altImage : article.image}
            description={article.description}
            link={article.url}
          ></NewsCard>
        ))}
      </div>
    );
  }
}

export default News;
