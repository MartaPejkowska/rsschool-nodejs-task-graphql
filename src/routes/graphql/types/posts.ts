import { GraphQLObjectType, GraphQLString } from "graphql";
import { UUIDType } from "./uuid.js";

export const postsType= new GraphQLObjectType({
    name:'posts',
    fields:()=>({
        id:{
            type:UUIDType
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
    })
})