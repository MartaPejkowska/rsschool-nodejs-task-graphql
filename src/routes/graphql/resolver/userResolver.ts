import { UserType } from "../types/user.js";
import { PrismaClient } from '@prisma/client'
// import type { GraphQLContext } from './context'
// import type { Link } from '@prisma/client'
export type GraphQLContext = {
    prisma: PrismaClient
  }


// const {prisma}=fastify

//  const getUsers=async(parent, args, context:GraphQLContext)=>{
//     const users = await context.prisma.user.findMany();
//     console.log(users)
//     return users
// }

const getUsers=async( args,{prisma})=>{
    console.log('in resolver')
    const users = await prisma.user.findMany();
    console.log(users)
    return users
}

export default{
getUsers
}