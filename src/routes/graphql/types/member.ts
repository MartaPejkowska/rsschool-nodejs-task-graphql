import { GraphQLFloat, GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';

 enum MemberTypeId {
    BASIC = 'basic',
    BUSINESS = 'business',
  }

export const MemberType= new GraphQLObjectType({
    name:'member',
    fields:{
        id:{
            type:GraphQLString
        },
        discount:{
            type: GraphQLFloat
        },
        postsLimitPerMonth:{
            type:GraphQLInt
        }
    }
})