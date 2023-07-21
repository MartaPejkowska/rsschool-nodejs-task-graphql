import { GraphQLObjectType, GraphQLString } from "graphql";
import { UUIDType } from "./uuid.js";
import { UserType } from "./user.js";

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
        },
        author:{
            type:UserType,
            resolve:async(parent, args, {prisma})=>{
                const author = await prisma.user.findUnique({
                    where:{id:parent.authorId}
            })
            }
        }
    })
})