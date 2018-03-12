import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';



const PullRequest = (props) => {
  const params = props.match.params;
  const GET_PR = gql`
    query {
      repository(owner:"${params.owner}", name:"${params.name}") {
        pullRequests(last:20) {
          edges {
            node {
              title
              url
              id
            }
          }
        }
      }
    }
    `
    return (
        <Query query={GET_PR}>
        {({ loading, error, data }) => {
            let requests = [];
            if (loading) return <div>Loading...</div>;
            if (error) return <div>Error :(</div>;
                requests = data.repository.pullRequests.edges.map((item) => (
                <h4 key = {item.node.id}>{item.node.title}</h4>
                ));

            return (
                <div className = "wrap">
                <h2>Pull Requests {params.name}</h2>
                    {requests.length === 0 ? `this repository doesn't have pull requests` : requests }
                </div>
            )
        }}
        </Query>
    )
    }


export default PullRequest;
