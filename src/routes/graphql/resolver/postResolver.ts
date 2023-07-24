import { PrismaClient } from '@prisma/client'

export type GraphQLContext = {
    prisma: PrismaClient
  }
interface IdType{
    id:string
}


const getPosts=async( _,{prisma}:GraphQLContext)=>{
    console.log('in resolver')
    const post = await prisma.post.findMany({
        include:{
            author:true
        }
        }
    );
    console.log(post)
    return post
}

const getPost=async(_, {id}:IdType, {prisma}:GraphQLContext)=>{
    const post= await prisma.post.findUnique({

        where:{id},
        include:{
        author:true,
        }
})
    console.log('post',post)
    return post
}

export default{
    getPost,
    getPosts
}