import React, { Component } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import SearchInput from "./SearchInput";
import Loading from "../Loading";
import "../weather/Weather.css";

const SERVER_NEWS_URL = "https://gnews.io/api/v4/search?q=";
class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: "Top News",
      searchResults: [],
      error: "",
      isLoading: 0,
    };
    this._handleChange = this._handleChange.bind(this);
    this._submitSearch = this._submitSearch.bind(this);
    this.fetchURL = this.fetchURL.bind(this);
  }
  componentDidMount() {
    this.fetchURL();
  }
  fetchURL() {
    let search =
      SERVER_NEWS_URL +
      this.state.query +
      "&token=" +
      "a87068074606da8c51bf48026e8325b0";

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

  _submitSearch(event) {
    event.preventDefault();
    this.fetchURL();
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
            placeholder="Example: Corona"
            className="searchinput"
          />
          <button id="search" className="searchbutton"></button>
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
          image={news.image}
          description={news.description}
          link={news.url}
        />
      ))}
    </div>
  );
};
export default Search;
