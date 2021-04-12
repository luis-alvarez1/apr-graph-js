import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { schema } from "./graphql";

const app = express();
app.use(cors());

const server = new ApolloServer({
  introspection: true,
  playground: true,
  schema,
});
server.applyMiddleware({ app });

app.listen(1500, () => {
  console.log("server running on http://localhost:1500/graphql");
});
