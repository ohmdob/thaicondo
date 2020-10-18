import ApolloClient from "apollo-boost";
import fetch from "isomorphic-unfetch";
export const client = new ApolloClient({ fetch, uri: 'https://api.sweetlandhub.com/v1/graphql'});