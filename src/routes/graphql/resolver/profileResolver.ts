import { PrismaClient } from '@prisma/client'

export type GraphQLContext = {
    prisma: PrismaClient
  }
interface IdType{
    id:string
}


const getProfiles=async( _,{prisma}:GraphQLContext)=>{
    console.log('in resolver')
    const profile = await prisma.profile.findMany({
        include:{
        user:true,
        memberType:true
        }});
    console.log(profile)
    return profile
}

const getProfile=async(_, {id}:IdType, {prisma}:GraphQLContext)=>{
    const profile= await prisma.profile.findUnique({
        where:{id},
        include:{
        user:true,
        memberType:true
        }}
    )
    console.log('profile',profile)
    return profile
}

export default{
    getProfile,
    getProfiles
}