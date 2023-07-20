import { GraphQLBoolean, GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";
import { UUIDType } from "./uuid.js";


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
        MemberTypeId:{
            type: GraphQLString
        }
    })
})