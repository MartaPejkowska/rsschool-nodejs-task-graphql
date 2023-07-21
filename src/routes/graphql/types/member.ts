import { GraphQLEnumType, GraphQLFloat, GraphQLInt,  GraphQLObjectType } from "graphql";
import { MemberTypeId } from '../../member-types/schemas.js'
import { profileType } from "./profiles.js";


export const memberTypeIdEnum = new GraphQLEnumType({
  name: 'MemberTypeId',
  values: {
    [MemberTypeId.BASIC]: {
      value: MemberTypeId.BASIC,
    },
    [MemberTypeId.BUSINESS]: {
      value: MemberTypeId.BUSINESS,
    },
  },
});

export const memberType = new GraphQLObjectType({
  name: 'Member',
  fields: () => ({
    id: { type: memberTypeIdEnum },
    discount: { type: GraphQLFloat },
    postsLimitPerMonth: { type: GraphQLInt },
    profile:{
      type:profileType,
      resolve: async(parent,args,{prisma})=>{
        const profile= await prisma.profile.findMany({
          where:{
            memberTypeIdEnum:parent.id
          }
        })
      }
    }

  }),
});