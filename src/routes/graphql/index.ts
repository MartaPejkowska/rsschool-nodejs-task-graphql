import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { createGqlResponseSchema, gqlResponseSchema } from './schemas.js';
import { graphql } from 'graphql';
import userResolvers from './resolver/userResolver.js'
import { schema } from './schemas.js';

const rootValue = {
  ...userResolvers,
  // ...memberTypeResolvers,
  // ...postResolvers,
  // ...profileResolvers
};


const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  const { prisma } = fastify;
  fastify.route({
    url: '/',
    method: 'POST',
    schema: {
      ...createGqlResponseSchema,
      response: {
        200: gqlResponseSchema,
      },
    },
    async handler(req) {
      const response = await graphql({
        schema: schema,
        source: req.body.query,
        rootValue,
        contextValue:{prisma},
        variableValues:req.body.variables
      })
      return response;
    },
  });
};

export default plugin;
