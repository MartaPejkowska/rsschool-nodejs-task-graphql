import { Type } from '@fastify/type-provider-typebox';
import { GraphQLObjectType, GraphQLSchema, GraphQLNonNull,GraphQLList } from 'graphql';
import { UserType, userInputType } from './types/user.js';
import { UUIDType } from './types/uuid.js';
// import { MemberType } from './types/member.js';
import { memberType, memberTypeIdEnum } from './types/member.js';

// import { MemberTypeQueries } from './memberQueries.js';
import graphql from 'graphql';
import { postsType } from './types/posts.js';
import { profileType } from './types/profiles.js';

export const gqlResponseSchema = Type.Partial(
  Type.Object({
    data: Type.Any(),
    errors: Type.Any(),
  }),
);

export const createGqlResponseSchema = {
  body: Type.Object(
    {
      query: Type.String(),
      variables: Type.Optional(Type.Record(Type.String(), Type.Any())),
    },
    {
      additionalProperties: false,
    },
  ),
};


const query = new GraphQLObjectType({
  name:"Query",
  fields:{
    users:{
      type:UserType,
      // resolve: async (parent, args, context)=>{
      //   const users=await context.prisma.user.findMany()
      //   return users
      // }
  },
  user: {
    type: UserType,
    args: {
      id: { type: UUIDType },
    },
    // resolve: async (_, { id }, context) => {
    //   const user = await context.prisma.user.findUnique({
    //     where: {
    //       id: id
    //     },
    //   });
    //   return user;
  },
  memberType: {
    type: memberType,
    args: {
      id: { type: new GraphQLNonNull(memberTypeIdEnum) },
    },
  },
  memberTypes: {
    type: new GraphQLList(memberType),
  },
  // ...MemberTypeQueries
  posts:{
    type:postsType,
  },
  post:{
    type:postsType,
    args:{
      id: {type: UUIDType}
    }
  },
  profiles:{
    type:profileType
  },
  profile:{
    type:profileType,
    args:{
      id: {type:UUIDType}
    }
  }
},

}
)

// export const mutations= new GraphQLObjectType({
//   name:"Mutation",
//   fields:{
//     createUser:{
//       type:UserType,
//       args:{
//         data:{type:userInputType}
//       }
//     }
//   }
// })

export const schema = new GraphQLSchema({ query});