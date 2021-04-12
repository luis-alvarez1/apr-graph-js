import express from "express";
import { buildSchema } from "graphql";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { types } from "./graphql";

const app = express();
app.use(cors());
const schema = buildSchema(types);
const server = new ApolloServer({
  introspection: true,
  playground: true,
  schema,
});
server.applyMiddleware({ app });

app.listen(1500, () => {
  console.log("server running on http://localhost:1500/graphql");
});
