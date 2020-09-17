import ApolloClient, { Operation } from "apollo-boost";

const client = new ApolloClient({
  request:async(operation: Operation) => { //intercept, modify Query or Mutation here
    operation.setContext({
      headers: {
        "X-JWT": localStorage.getItem("iwt") || ""
      }
    });
  },
  uri: "http://localhost:4000/graphql",
});

export default client;
