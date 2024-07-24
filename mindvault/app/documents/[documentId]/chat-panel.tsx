
// "use client";
// import React from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useAction } from "convex/react";
// import { api } from "@/convex/_generated/api";

// export default function ChatPanel({
//   documentId,
// }: {
//   documentId: Id<"documents">;
// }) {
//   const askQuestion = useAction(api.documents.askQuestion);

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const form = event.currentTarget;
//     const formData = new FormData(form);
//     const text = formData.get("text") as string;

//     try {
//       await askQuestion({ question: text, documentId });
//       console.log("Question submitted successfully.");
//     } catch (error) {
//       console.error("Error submitting question:", error);
//     }
//   };

//   return (
//     <div className="w-[300px] bg-gray-900 flex flex-col h-full gap-2 p-4">
//       <div className="h-[500px] overflow-y-auto">
//         {/* Placeholder for chat messages */}
//         <div className="p-4 bg-gray-800">hello</div>
//         <div className="p-4 bg-gray-800">world</div>
//          <div className="p-4 bg-gray-800" >hello</div>
//          <div className="p-4 bg-gray-800" >world</div>
//          <div className="p-4 bg-gray-800" >hahaha</div>
//          <div className="p-4 bg-gray-800" >hello</div>
//          <div className="p-4 bg-gray-800" >world</div>
//          <div className="p-4 bg-gray-800" >hahaha</div>
//          <div className="p-4 bg-gray-800" >hello</div>
//          <div className="p-4 bg-gray-800" >world</div>
//          <div className="p-4 bg-gray-800" >hahaha</div>
//          <div className="p-4 bg-gray-800" >hello</div>
//          <div className="p-4 bg-gray-800" >world</div>
//          <div className="p-4 bg-gray-800" >hahaha</div>
//         {/* Repeat as needed */}
//       </div>
//       <div className="flex gap-1 p-4 mt-auto">
//         <form onSubmit={handleSubmit}>
//           <Input required name="text" className="flex-1" />
//           <Button type="submit">Submit</Button>
//         </form>
//       </div>
//     </div>
//   );
// }












"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { useQuery } from "convex/react";
import { QuestionForm } from "./question-form";

export default function ChatPanel({
  documentId,
}: {
  documentId: Id<"documents">;
}) {
  const chats = useQuery(api.chats.getChatsForDocument, { documentId });

  return (
    <div className="dark:bg-gray-900 bg-slate-100 flex flex-col gap-2 p-6 rounded-xl">
      <div className="h-[350px] overflow-y-auto space-y-3">
        <div className="dark:bg-slate-950 rounded p-3">
          AI: Ask any question using AI about this document below:
        </div>
        {chats?.map((chat) => (
          <div
            className={cn(
              {
                "dark:bg-slate-800 bg-slate-200": chat.isHuman,
                "dark:bg-slate-950 bg-slate-300": !chat.isHuman,
                "text-right": chat.isHuman,
              },
              "rounded p-4 whitespace-pre-line"
            )}
          >
            {chat.isHuman ? "YOU" : "AI"}: {chat.text}
          </div>
        ))}
      </div>

      <div className="flex gap-1">
        <QuestionForm documentId={documentId} />
      </div>
    </div>
  );
}