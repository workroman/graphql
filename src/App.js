import './styles/App.css';
import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Repository from './components/Repository';
import { Link } from 'react-router-dom';

const GET_REPOSITORY = gql`
  query {
    viewer {
      login
      name
      repositories(last:7) {
        nodes {
          name
          id
          owner {
            login
          }
        }
      }
    }
  }
`

const App = () => (
  <Query query={GET_REPOSITORY}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :(</div>;
      console.log(data.viewer);
      return (
        <div className = "wrap">
          <h2>resositories by {data.viewer.name}</h2>
          {data.viewer.repositories.nodes.map((item) => {
            return (
              <Link to = {`/${item.owner.login}/${item.name}`} key = {item.id}>
                <Repository name = {item.name}
                            owner = {item.owner.login}
                />
              </Link>
            );
          })}
        </div>
      )
    }}
  </Query>
)

export default App;
