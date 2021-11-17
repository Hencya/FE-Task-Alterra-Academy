import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://task-frontend.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "fneXrL0x7dtdKgD1W4QwzBQjzWTDyZtxdWT6s5c7sKqvxS1YD4UFi6PZ6TjEu75k",
  },
  cache: new InMemoryCache(),
});

export default client;
