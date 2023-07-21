import { PrismaClient } from "@prisma/client";
export type GraphQLContext = {
    prisma: PrismaClient
  }
interface ID{
id:string
}

const getMember= async ({ id }:ID, { prisma }: GraphQLContext) => {
    const memberType = await prisma.memberType.findUnique({
      where:{id},
      include:{
      profiles:true,
      }});
    return memberType;
  }

  const getMembers = async (_, { prisma }: GraphQLContext) => {
    const memberTypes = await prisma.memberType.findMany({
      include:{
        profiles:true
      }
    });
    return memberTypes;
  }

  export default {
    getMember,
    getMembers,
  };