import express from "express";
import { buildSchema } from "graphql";
import cors from "cors";
// import { ApolloServer } from "apollo-server-express";
import types from "./graphql/schema";
import resolvers from "./graphql/resolvers";
import { graphqlHTTP } from "express-graphql";

const app = express();
app.use(cors());
const schema = buildSchema(types);

// const server = new ApolloServer({
//   introspection: true,
//   playground: true,
//   schema,
//   resolvers,
// });

app.use(
  "/api",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(1500, () => {
  console.log("server running on http://localhost:1500/graphql");
  console.log(types);
  console.log(resolvers);
});
