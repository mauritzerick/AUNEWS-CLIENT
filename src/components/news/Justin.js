import React, { Component } from "react";
import axios from "axios";
//import HTTP_call from 'https';
import Mailchimp from "react-mailchimp-form";
import NewsCard from "./NewsCard";
// import altImage from '../images/GeneralAltImage.jpeg'

import { CloudinaryContext, Transformation, Image } from "cloudinary-react";
//const MAILCHIMP = "https://us1.api.mailchimp.com/3.0/lists/cf956b3a2d";
const SERVER_NEWS_URL = "http://localhost:3000/news.json";

class Justin extends Component {
  constructor() {
    super();
    this.state = {
      news: [
        {
          title: "",
          subtitle: "",
          description: "",
          image: "",
          link: "",
          video: "",
        },
      ],
    };
  }

  componentDidMount() {
    const fetchNewsInfo = () => {
      axios.get(SERVER_NEWS_URL).then((news) => {
        this.setState({
          news: news.data,
        });
        setTimeout(fetchNewsInfo, 1000);
      });
    };
    fetchNewsInfo();
  }

  render() {
    return (
      <div>
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
        <NewsJustIn news={this.state.news} />
      </div>
    );
  }
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
    </div>
  );
};

export default Justin;
