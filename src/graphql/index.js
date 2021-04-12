import "graphql-import-node";
import path from "path";
import { fileLoader, mergeTypes } from "merge-graphql-schemas";
// const fileLoader = mergeGraphqlSchemas.fileLoader;
// const mergeTypes = mergeGraphqlSchemas.mergeTypes;

const typesArray = fileLoader(path.join(__dirname, "/schema/*.*"), {
  recursive: true,
});

export const types = mergeTypes(typesArray, { all: true });
