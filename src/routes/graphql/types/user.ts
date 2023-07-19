import {  GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';

console.log('in user.ts')
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