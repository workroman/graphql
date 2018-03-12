import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PullRequest from "./components/PullRequest";

const client = new ApolloClient({ uri: 'https://api.github.com/graphql?access_token=8aeff12d80f185a03ad09669be70f5d76d6e4ebe'});

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
