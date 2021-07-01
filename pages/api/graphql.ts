import { ApolloServer } from "apollo-server-micro";
import { gql } from "apollo-server-micro";
import Cors from "micro-cors";

const cors = Cors();

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello from Apollo Server",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default cors((req, res) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  return server.createHandler({ path: "/api/graphql" })(req, res);
});
