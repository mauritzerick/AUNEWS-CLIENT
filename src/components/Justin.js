import React, { Component } from 'react';
import Mailchimp from 'react-mailchimp-form';

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
