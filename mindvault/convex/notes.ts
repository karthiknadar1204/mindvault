// import { ConvexError, v } from "convex/values";
// import {
//   MutationCtx,
//   QueryCtx,
//   internalAction,
//   internalMutation,
//   mutation,
//   query,
// } from "./_generated/server";
// import OpenAI from "openai";
// import { internal } from "./_generated/api";
// import { Doc, Id } from "./_generated/dataModel";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });



// export async function embed(text: string) {
//     const embedding = await openai.embeddings.create({
//       model: "text-embedding-ada-002",
//       input: text,
//     });
//     return embedding.data[0].embedding;
//   }
  
//   export const setNoteEmbedding = internalMutation({
//     args: {
//       noteId: v.id("notes"),
//       embedding: v.array(v.number()),
//     },
//     async handler(ctx, args) {
//       await ctx.db.patch(args.noteId, {
//         embedding: args.embedding,
//       });
//     },
//   });