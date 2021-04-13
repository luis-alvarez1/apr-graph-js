import express from "express";
import { buildSchema } from "graphql";
import cors from "cors";
import types from "./graphql/schema";
import resolvers from "./graphql/resolvers";
import { graphqlHTTP } from "express-graphql";
import jwt from "jsonwebtoken";
import * as EnvModule from "./config/env";
import * as DBConfig from "./config/database";

EnvModule.configEnv();

const app = express();

app.use(cors());

DBConfig.connectDB();

const schema = buildSchema(types);
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
    context: ({ req }) => {
      const token = req.headers["authorization"] || null;
      if (token) {
        try {
          const userToken = jwt.verify(
            token.replace("Bearer ", ""),
            process.env.SECRET
          );
          return userToken;
        } catch (error) {
          console.log(error);
        }
      }
    },
  })
);

app.listen(1500, () => {
  console.log("server running on http://localhost:1500/graphql");
});
