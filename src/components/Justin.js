import React, { Component } from 'react';
//import axios from 'axios'
//import HTTP_call from 'https';
import Mailchimp from 'react-mailchimp-form'

//const MAILCHIMP = "https://us1.api.mailchimp.com/3.0/lists/cf956b3a2d";
class Justin extends Component {
  render(){
    return(
      <Mailchimp
      action='https://gmail.us1.list-manage.com/subscribe/post?u=a58ac3f80b52045bac544e375&amp;id=cf956b3a2d'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          }
        ]}
        />
    );
  }
}
export default Justin;
