import { GraphQLBoolean, GraphQLInt, GraphQLObjectType, GraphQLScalarType, GraphQLString } from "graphql";


export const profileType= new GraphQLObjectType({
    name:'profiles',
    fields:{
        id:{
            type:GraphQLString
        },
        isMale:{
            type:GraphQLBoolean
        },
        yearOfBirth:{
            type: GraphQLInt
        },
        userId:{
            type: GraphQLString
        },
        MemberTypeId:{
            type: GraphQLString
        }
    }
})