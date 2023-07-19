import {  GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';
export const UserType= new GraphQLObjectType({
    name:'user',
    fields:{
        id:{
            type:GraphQLString
        },
        name:{
            type:GraphQLString
        },
        balance:{
            type:GraphQLInt
        }
    }
})