// import React, { Component } from 'react';
// import axios from 'axios'
// //import HTTP_call from 'https';
// import Mailchimp from 'react-mailchimp-form'
// const SERVER_NEWS_URL = 'http://localhost:3000/news.json';
// console.log(SERVER_NEWS_URL);
// //const MAILCHIMP = "https://us1.api.mailchimp.com/3.0/lists/cf956b3a2d";
// class Justin extends Component {
//   constructor() {
//     super()
//     this.state = {
//       news: [{
//         title: "",
//         subtitle: "",
//         description: "",
//         image: "",
//         link: "",
//         video: "",
//       }]
//     }
//   }
//
//   componentDidMount() {
//     const fetchNewsInfo = () => {
//       axios.get(SERVER_NEWS_URL).then((news) => {
//         this.setState({
//           news: news.data
//         });
//         setTimeout(fetchNewsInfo, 1000);
//       })
//     }
//     fetchNewsInfo();
//   }
//
//   render(){
//     return(
//       <div>
//       <Mailchimp
//       action='https://gmail.us1.list-manage.com/subscribe/post?u=a58ac3f80b52045bac544e375&amp;id=cf956b3a2d'
//         fields={[
//           {
//             name: 'EMAIL',
//             placeholder: 'Email',
//             type: 'email',
//             required: true
//           }
//         ]}
//         />
//       <NewsJustIn news={this.state.news} />
//       </div>
//     );
//   }
// }
//
// const NewsJustIn = (props) => {
//   return(
//     <div>
//     {props.news.map((n) => (
//       <p className="news" key={n.id}>
//         {n.title}
//         {n.subtitle}
//         {n.description}
//         {n.image}
//         {n.link}
//         {n.video}
//       </p>
//     ))}
//   </div>
//   )
// }
// export default Justin;
