// import  graphql  from "graphql";
// import { MemberType } from "./types/member.js";
// import { MemberTypeId } from "../member-types/schemas.js";
// // import { MemberType as MType} from "../types/memberType.js"
// // import { Context } from "../types/context.js";


// const memberType = {
//   type: MemberType,
//   args: {
//     id: { type: MemberTypeId },
//   },
//   resolve: async (_, { id }, context) => {
//     return await context.prisma.memberType.findFirst({
//       where: {
//         id: id
//       }
//     });
//   },
// };

// const memberTypes ={
//   type: new graphql.GraphQLList(MemberType),
//   resolve: async (_, args, context) => {
//     return await context.prisma.memberType.findMany();
//     }
// }

// export const MemberTypeQueries = {
//   memberType,
//   memberTypes,
// };