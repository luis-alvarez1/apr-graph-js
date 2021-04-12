import { makeExecutableSchema } from "graphql-tools";
import "graphql-import-node";
import rootSchema from "./schema/schema.graphql";
export const schema = makeExecutableSchema({
  typeDefs: [rootSchema],
});
