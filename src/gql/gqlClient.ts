import { GraphQLClient } from "graphql-request";

const gqlClient = new GraphQLClient(process.env.NEXT_PUBLIC_GQL_URL!, {});

export default gqlClient;
