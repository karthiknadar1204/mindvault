"use client";
import Image from "next/image";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated, useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
  const documents = useQuery(api.documents.getDocuments);
  const createDocument = useMutation(api.documents.createDocument);

  if (!documents) {
    return <div>Loading...</div>;
  }

  if (documents instanceof Error) {
    console.error(documents);
    return <div>Error loading documents</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <ModeToggle/>
        <button
          onClick={() => {
            createDocument({ title: "Hello world" });
          }}
        >
          Click Me
        </button>
        {documents.map((doc) => (
          <div key={doc._id}>{doc.title}</div>
        ))}
        <Button>Aur Bantai</Button>
      </Authenticated>
    </main>
  );
}
