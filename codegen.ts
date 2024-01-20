import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:3000/api/graphql",
  documents: ["src/**/*.{ts,tsx}", "pages/**/*.{ts,tsx}"],
  generates: {
    "./src/gql/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
      config: {
        scalars: {
          DateTime: "Date",
          BigInt: "number",
        },
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
