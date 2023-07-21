import {  GraphQLObjectType, GraphQLString, GraphQLFloat } from 'graphql';
import { UUIDType } from './uuid.js';
import { profileType } from './profiles.js';
import { postsType } from './posts.js';

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
        },
        profile:{
            type: profileType,
            resolve: async (parent, args,{prisma})=>{
                const profile= await prisma.profile.findUnique({where:{id:parent.id}})
                return profile
            }
        },
        posts:{
            type:postsType,
            resolve: async (parent, args, {prisma})=>{
                const posts= await prisma.posts.findMany(
                    {where:{id:parent.id}}
                    )
                return posts
            }
        },
    })
})

export const userInputType= new GraphQLObjectType({
   name:'UserInputType',
   fields:()=>({
    name: {type: GraphQLString},
    balance: {type: GraphQLFloat}
   })
})
