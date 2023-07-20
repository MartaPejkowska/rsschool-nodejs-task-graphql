import {  GraphQLObjectType, GraphQLString, GraphQLFloat } from 'graphql';
import { UUIDType } from './uuid.js';

console.log('in user.ts')
export const UserType= new GraphQLObjectType({
    name:"User",
    fields:()=>({
        id:{
            type:UUIDType
        },
        name:{
            type:GraphQLString
        },
        balance:{
            type:GraphQLFloat
        }
    })
})

export const userInputType= new GraphQLObjectType({
   name:'UserInputType',
   fields:()=>({
    name: {type: GraphQLString},
    balance: {type: GraphQLFloat}
   })
})
