import { GraphQLBoolean, GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";
import { UUIDType } from "./uuid.js";
import { UserType } from "./user.js";
import { memberType } from "./member.js";


export const profileType= new GraphQLObjectType({
    name:'profiles',
    fields:()=>({
        id:{
            type:UUIDType
        },
        isMale:{
            type:GraphQLBoolean
        },
        yearOfBirth:{
            type: GraphQLInt
        },
        userId:{
            type: UUIDType
        },
        user:{
            type: UserType,
            resolve: async(parent, args, {prisma})=>{
                const user= await prisma.user.findUnique({where:{id:parent.userId}})
                return user
            }
        },
        MemberTypeId:{
            type: GraphQLString
        },
        MemberType:{
            type:memberType,
            resolve:async(parent,args,{prisma})=>{
                const memberType=await prisma.memberType.findFirst({where:{id:parent.MemberTypeId}})
                return memberType
            }
        }
    })
})