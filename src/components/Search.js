import React, {Component} from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';

let SEARCH_URL='https://newsapi.org/v2/everything?qInTitle=';

class Search extends Component {
  constructor(){
    super();

    this.state = {
      query: "",
      searchResults: [],
      error: ""
    };

    this._handleChange = this._handleChange.bind(this);
    this._submitSearch = this._submitSearch.bind(this);
  };

  _submitSearch(event) {
    let search = SEARCH_URL + this.state.query + "&apiKey=a598dbb0d4a24ccf8c3a54a403b3e1ce";
    event.preventDefault();

    if(this.state.query !== ""){
      axios.get(search,{
        headers: {
          "Content-Type": "application/json"
        }
      }).then((response) => {
        console.log(response.data.articles);
        this.setState({searchResults: response.data.articles});
      }).catch((error) => {
        console.log(error);
        this.setState({error: error});
      })
    }

  }
  _handleChange(event) {
    this.setState({ query: event.target.value })

  }
  render(){
    return (
      <div>
      <form onSubmit={ this._submitSearch } >
      <input type="search" onChange={ this._handleChange } placeholder="example: Corona"/>
      <button id="search"> Search </button>
      </form>
      <SearchList newsList={this.state.searchResults}/>
      </div>


    )
  }
}

const SearchList = (props) => {
  return(

    <div class="mainBlock">
    {
      props.newsList.map( (news) =>(

        <NewsCard className="newsCard" key={news.publishedAt}
                  title={news.title}
                  image={news.urlToImage}
                  description={news.description}
                  link={news.url}/>
      ))

    }
    </div>  
  )
}
export default Search;
