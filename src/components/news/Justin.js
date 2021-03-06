import React, { Component } from "react";
import axios from "axios";
//import HTTP_call from 'https';
import Mailchimp from "react-mailchimp-form";
import NewsCard from "./NewsCard";
// import altImage from '../images/GeneralAltImage.jpeg';
import Loading from "../Loading";

import { CloudinaryContext, Transformation, Image } from "cloudinary-react";
//const MAILCHIMP = "https://us1.api.mailchimp.com/3.0/lists/cf956b3a2d";
const SERVER_NEWS_URL = "https://bnpm-news.herokuapp.com/news.json";

class Justin extends Component {
  constructor() {
    super();
    this.state = {
      news: [
        {
          title: null,
          subtitle: null,
          description: null,
          image: null,
          link: null,
          video: null,
        },
      ],
      isLoading: 1,
    };
  }

  componentDidMount() {
    const fetchNewsInfo = () => {
      axios.get(SERVER_NEWS_URL).then((news) => {
        this.setState({
          news: news.data, isLoading: 0
        });
      });
    };
    fetchNewsInfo();
  }

  render() {
    return (
      <div>

      <div class="mailChimp">
        <h2>Would like to Subscribe to our news letter?</h2>
        <Mailchimp
        action='https://gmail.us1.list-manage.com/subscribe/post?u=a58ac3f80b52045bac544e375&amp;id=cf956b3a2d'
          fields={[
            {
              name: 'EMAIL',
              placeholder: 'Enter email here',
              type: 'email',
              required: true

            }
          ]}
          />
      </div>

      <Loading show={this.state.isLoading} />
      <ShowNews news={this.state.news} />
      </div>
    );
  }
}

function ShowNews(props) {
  const news = props.news;
  if (news.length > 1) {
    return <NewsJustIn news={news} />;
  }
  return <div> Please wait its loading</div>
}
const NewsJustIn = (props) => {
  return (
    <div className="mainBlock">

      {props.news.map((n) => (
        <NewsCard
          className="newsCard"
          key={n.id}
          title={n.title}
          description={n.description}
          link={n.link}
        >
          <CloudinaryContext cloudName="didtkbpn7">
            <Image publicId={n.image}>
              <Transformation
                crop="scale"
                width="300"
                height="200"
                dpr="auto"
                responsive_placeholder="blank"
              />
            </Image>
          </CloudinaryContext>
        </NewsCard>
      ))}
      {props.news.map((n) => (
        <NewsCard
          className="newsCard"
          key={n.id}
          title={n.title}
          description={n.description}
          link={n.link}
        >
          <CloudinaryContext cloudName="didtkbpn7">
            <Image publicId={n.image}>
              <Transformation
                crop="scale"
                width="300"
                height="200"
                dpr="auto"
                responsive_placeholder="blank"
              />
            </Image>
          </CloudinaryContext>
        </NewsCard>
      ))}
    </div>
  );
};

export default Justin;
