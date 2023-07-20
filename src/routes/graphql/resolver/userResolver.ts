import { PrismaClient } from '@prisma/client'
import { userInputType } from '../types/user.js'

export type GraphQLContext = {
    prisma: PrismaClient
  }
interface IdType{
    id:string
}


const getUsers=async( _,{prisma}:GraphQLContext)=>{
    console.log('in resolver')
    const users = await prisma.user.findMany();
    console.log(users)
    return users
}

const getUser=async(_, {id}:IdType, {prisma}:GraphQLContext)=>{
    const user= await prisma.user.findUnique({
        where:{id}
    })
    console.log('user',user)
    return user
}

// const createUser = async ({ data: data }, { prisma }: GraphQLContext) => {
//     const user = await prisma.user.create({ data });
//     return user;
//   };

export default{
getUsers,
getUser
}