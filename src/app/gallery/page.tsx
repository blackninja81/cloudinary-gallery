"use client";
import React from "react";
import "./gallery.scss";
import { ImageResults } from "@/types/types";
import { Button } from "@/components/ui/button";
import { CldUploadButton } from "next-cloudinary";
const page = () => {
  return (
    <div className="gallery-page-container">
      <span className="gallery-title">
        <h3>My Gallery</h3>

        <Button asChild>
          <div className="gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>

            <CldUploadButton
              onUpload={(results: ImageResults) => {
                //   setImageId(results.info.public_id);
              }}
              uploadPreset="qhi77cel"
            />
          </div>
        </Button>
      </span>
    </div>
  );
};

export default page;
