import express from 'express';
import { buildSchema } from 'graphql';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import types from './graphql/schema';
import resolvers from './graphql/resolvers';
import * as EnvModule from './config/env/envModule';
import * as DBConfig from './config/database/database';
import helpers from './util/helpers/index';

EnvModule.configEnv();

const app = express();

app.use(cors());

DBConfig.connectDB();

const schema = buildSchema(types);
app.use('/graphql', (request, response) =>
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
    context: {
      user: helpers.tokenHelpers.getUserFromToken(request),
    },
  })(request, response),
);

const PORT = process.env.PORT || 1500;

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}/graphql`);
});
