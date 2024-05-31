"use client";
import { ImageResults } from "@/types/types";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";
export default function Home() {
  const [ImageId, setImageId] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        onUpload={(results: ImageResults) => {
          setImageId(results.info.public_id);
        }}
        uploadPreset="qhi77cel"
      />
      {ImageId && (
      <CldImage
        width="960"
        height="600"
        src={ImageId}
        sizes="100vw"
        alt="Description of my image"
      />)}
    </main>
  );
}
