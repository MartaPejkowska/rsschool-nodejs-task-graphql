import { GraphQLObjectType, GraphQLString } from "graphql";

export const postsType= new GraphQLObjectType({
    name:'posts',
    fields:{
        id:{
            type:GraphQLString
        },
        title:{
            type:GraphQLString
        },
        content:{
            type:GraphQLString
        },
        authorId:{
            type:GraphQLString
        }
    }
})