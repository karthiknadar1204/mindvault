"use client";
import Image from "next/image";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { DocumentCard } from "./document-card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UploadDocumentForm from "./upload-document-form";
import { useState } from "react";

export default function CreateDocumentButton() {
    const [isOpen,setIsOpen]=useState(false)
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
    <main className=" p-24  space-y-8">
      <Dialog onOpenChange={setIsOpen} open={isOpen} >
        <DialogTrigger asChild>
          <Button>
            Upload Document
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload a Document</DialogTitle>
            <DialogDescription>
                Upload a team document for you to search in the future.
            </DialogDescription>
            <UploadDocumentForm onUpload={()=>setIsOpen(false)} />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </main>
  );
}
