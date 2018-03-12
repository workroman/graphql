import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PullRequest from "./components/PullRequest";

const token = '382d94722d8e5a3a81f2cc06222bbe5831bcb13f'
const client = new ApolloClient({ uri: `https://api.github.com/graphql?access_token=${token}`});

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Route path = "/" exact component={App} />   
        <Route path = "/:owner/:name" component = {PullRequest} />
      </div>
    </Router>
  </ApolloProvider>
);

render(< ApolloApp />, document.getElementById('root'));
