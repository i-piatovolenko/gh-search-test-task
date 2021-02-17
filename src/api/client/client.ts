import {ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

//517fbfbe4ae50d1659f177c73fb2d270336ba352