/** @format */

"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import Box from "../components/box";
import Button from "../components/button";
import Image from "next/image";

export default function AttendeeForm({ onFormSubmit }) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [cloudinaryUrl, setCloudinaryUrl] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
      await handleUpload(file);
    }
  };

  const handleUpload = async (file: File) => {
    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dkipfofgi/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setCloudinaryUrl(data.secure_url);
    } catch (error) {
      console.error("Upload failed", error);
    } finally {
      setUploading(false);
    }
  };

  const validateField = (field: string, value: string) => {
    const newErrors = { ...errors };
    if (field === "name" && !value.trim()) {
      newErrors.name = "Name is required.";
    } else {
      delete newErrors.name;
    }
    if (field === "email") {
      if (!value.trim()) {
        newErrors.email = "Email is required.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        newErrors.email = "Invalid email format.";
      } else {
        delete newErrors.email;
      }
    }
    setErrors(newErrors);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (Object.keys(errors).length > 0 || !name.trim() || !email.trim()) {
      return;
    }
    onFormSubmit({
      name,
      email,
      specialRequest,
      profilePhoto: cloudinaryUrl || previewUrl,
    });
  };

  return (
    <div className="rounded-3xl p-6 border border-[#0E464F] bg-[#041E23] mb-7 lg:mx-60 font-[Roboto] font-light">
      <main>
        <div className="flex justify-between font-[JejuMyeongjo] mb-3 items-center">
          <h1 className="text-3xl">Attendee Details</h1>
          <p className="font-[Roboto] text-sm">Step 2/3</p>
        </div>
        <div className="relative mb-3">
          <div className="rounded-lg absolute top-0 h-1 lg:w-1/2 w-2/3 bg-[#24A0B5]" />
          <div className="rounded-lg bg-[#0E464F] h-1 w-full mb-6" />

          <form onSubmit={handleSubmit} className="space-y-8">
            <Box text="border-[#07373F] border-2 backdrop-blur-md flex flex-col justify-center lg:items-start lg:justify-center items-center p-5 relative">
              <p className="pb-2 lg:self-start">Upload Profile Photo</p>
              <div className="w-full h-44 bg-black bg-opacity-30 absolute top-[3.8rem] -z-10 left-0 lg:block hidden"></div>
              <div className="flex justify-center items-center w-full">
                <Box text="border-2 border-[#24A0B580] bg-[#0E464F] h-48 w-48 flex flex-col gap-1 justify-center items-center lg:self-center lg:mx-auto relative">
                  {previewUrl ? (
                    <Image
                      src={previewUrl || "/placeholder.svg"}
                      alt="Preview"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  ) : (
                    <>
                      <Image
                        src="/addimage.png"
                        alt="Upload icon"
                        width={40}
                        height={40}
                      />
                      <p className="text-center pt-2">
                        Drag & drop or click to upload
                      </p>
                    </>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleFileChange}
                  />
                </Box>
              </div>
            </Box>

            <div className="border-[#07373F] border-2 mt-4 rounded-lg" />
            <div>
              <label className="text-sm pb-2">Enter your name</label>
              <input
                type="text"
                className="border-[#07373F] border w-full p-3 bg-inherit rounded-lg bg-[#08252B]"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={(e) => validateField("name", e.target.value)}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="text-sm pb-2"> Enter your email*</label>
              <input
                type="email"
                className="border-[#07373F] border w-full p-3 bg-inherit rounded-lg bg-[#08252B]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={(e) => validateField("email", e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="text-sm pb-2"> Special request?</label>
              <textarea
                className="border-[#07373F] border w-full h-28 p-3 bg-inherit rounded-lg bg-[#08252B]"
                value={specialRequest}
                onChange={(e) => setSpecialRequest(e.target.value)}
              ></textarea>
            </div>
            <div className="flex gap-3 flex-col lg:flex-row">
              <Link href="/" className="w-full">
                <Button className="order-2 lg:order-2" text="Back" />
              </Link>
              <button
                type="submit"
                className="w-full bg-[#24A0B5] order-1 lg:order-1 mb-2 p-3 rounded-lg text-white font-[JejuMyeongjo] text-sm"
              >
                Get My Free Ticket
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
