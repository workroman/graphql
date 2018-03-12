import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PullRequest from "./components/PullRequest";

const client = new ApolloClient({ uri: 'https://api.github.com/graphql?access_token=7cfc05364f821e19288ef567edd802d45ed235f6'});

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
