import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";

import RelayPlugin from "@pothos/plugin-relay";
import WithInputPlugin from "@pothos/plugin-with-input";

import { BigIntResolver, DateTimeResolver } from "graphql-scalars";
import PrismaTypes from "../../prisma/pothos-types";
import prisma from "../lib/prisma";

export type CustomScalars = {
  DateTime: {
    Input: Date;
    Output: Date;
  };
  BigInt: {
    Input: number;
    Output: number;
  };
};

export const builder = new SchemaBuilder<{
  Scalars: CustomScalars;
  PrismaTypes: PrismaTypes;
}>({
  plugins: [PrismaPlugin, RelayPlugin, WithInputPlugin],
  relayOptions: {},
  prisma: {
    client: prisma,
  },
});
builder.queryType({
  fields: (t) => ({}),
});
builder.mutationType({
  fields: (t) => ({}),
});

builder.addScalarType("DateTime", DateTimeResolver, {});
builder.addScalarType("BigInt", BigIntResolver, {});
