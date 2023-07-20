import { PrismaClient } from '@prisma/client'

export type GraphQLContext = {
    prisma: PrismaClient
  }
interface IdType{
    id:string
}


const getProfiles=async( _,{prisma}:GraphQLContext)=>{
    console.log('in resolver')
    const profile = await prisma.profile.findMany();
    console.log(profile)
    return profile
}

const getProfile=async(_, {id}:IdType, {prisma}:GraphQLContext)=>{
    const profile= await prisma.profile.findUnique({
        where:{id}
    })
    console.log('profile',profile)
    return profile
}

export default{
    getProfile,
    getProfiles
}