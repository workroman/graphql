import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PullRequest from "./components/PullRequest";

const token = 'da1560f0e0a4f470b663dbc70a810ccc9dce4b9a'
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
