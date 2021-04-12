import path from "path";
import { mergeResolvers } from "@graphql-toolkit/schema-merging";
import { loadFiles } from "@graphql-toolkit/file-loading";

export const resolversArray = loadFiles(
  path.join(__dirname, "./model-resolvers/*.*")
);

export default mergeResolvers(resolversArray);
