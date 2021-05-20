import React, { Component } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import SearchInput from "./SearchInput";
import Loading from "../Loading";
import "../weather/Weather.css";

const SERVER_NEWS_URL = "https://gmail.us1.list-manage.com/subscribe/post?u=a58ac3f80b52045bac544e375&amp;id=cf956b3a2d"
class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      searchResults: [],
      error: "",
      isLoading: 0,
    };
    this._handleChange = this._handleChange.bind(this);
    this._submitSearch = this._submitSearch.bind(this);
  }

  _submitSearch(event) {
    let search =
      SERVER_NEWS_URL+
      this.state.query +
      "&apiKey=" +
      "5d9e47c7febf45c8b087816526a26225";
    event.preventDefault();
    if (this.state.query !== "") {
      this.setState({ searchResults: [], isLoading: 1 });
      axios(search)
        .then((response) => {
          this.setState({
            searchResults: response.data.articles,
            isLoading: 0,
          });
        })
        .catch((error) => {
          console.log(error);
          this.setState({ error: error, isLoading: 0 });
        });
    }
  }

  _handleChange(event) {
    this.setState({ query: event.target.value });
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this._submitSearch}
          className="searchbox"
          style={{ backgroundColor: "#fffbf8" }}
        >
          <input
            type="search"
            onChange={this._handleChange}
            placeholder="example: Corona"
          />
          <button id="search"></button>
        </form>

        <SearchList
          newsList={this.state.searchResults}
          show={this.state.isLoading}
        />
      </div>
    );
  }
}

const SearchList = (props) => {
  return (
    <div className="mainBlock">
      <Loading show={props.show} />
      {props.newsList.map((news) => (
        <NewsCard
          className="newsCard"
          key={news.publishedAt}
          title={news.title}
          image={news.urlToImage}
          description={news.description}
          link={news.url}
        />
      ))}
    </div>
  );
};
export default Search;
