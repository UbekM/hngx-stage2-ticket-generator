/** @format */

"use client";

import Link from "next/link";
import Button from "../components/button";
import Image from "next/image";
import Box from "../components/box";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface TicketInfo {
  type: string;
  count: number;
}

interface AttendeeInfo {
  name: string;
  email: string;
  specialRequest?: string;
  profilePhoto?: string;
}

interface SuccessScreenProps {
  ticketInfo: TicketInfo;
  attendeeInfo: AttendeeInfo;
}

export default function SuccessScreen({
  ticketInfo,
  attendeeInfo,
}: SuccessScreenProps) {
  const ticketRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    const ticket = ticketRef.current;
    if (ticket) {
      const canvas = await html2canvas(ticket);
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF();

      const imgWidth = canvas.width;
      const imgHeight = canvas.height;

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgHeight * pdfWidth) / imgWidth;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("ticket.pdf");
    }
  };

  if (!ticketInfo || !attendeeInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="rounded-3xl p-6 border border-[#0E464F] bg-[#041E23] mt-0 lg:mx-60 mx-0 font-[Roboto] font-light flex justify-center text-center">
      <main className="w-full">
        <div className="flex justify-between font-[JejuMyeongjo] mb-3 items-center">
          <h1 className="text-3xl">Ready</h1>
          <p className="font-[Roboto] text-sm">Step 3/3</p>
        </div>
        <div className="relative mb-16">
          <div className="rounded-lg absolute top-0 h-1 lg:w-full w-2/3 bg-[#24A0B5]" />
          <div className="rounded-lg bg-[#0E464F] h-1 w-full mb-6" />
        </div>
        <div className="space-y-12">
          <div className="text space-y-3">
            <h2 className="text-3xl font-medium">Your Ticket is Booked!</h2>
            <p>
              Check your email for a copy or you can{" "}
              <button onClick={handleDownload} className="underline">
                download
              </button>
            </p>
          </div>
          <div
            className="ticket flex flex-col items-center w-full relative"
            ref={ticketRef}
          >
            <div className="relative">
              <Image src="/bg.png" alt="background" width={320} height={600} />
            </div>
            <div className="box absolute top-7 w-[290px] h-[470px] rounded-2xl border-2 border-[#24A0B5]">
              <div className="text-center space-y-1 p-2 pb-6">
                <h2 className="font-roadRage text-4xl">
                  Techember Fest &quot;25
                </h2>
                <div className="text-center text-xs">
                  <p>📍 04 Rumens road, Ikoyi, Lagos</p>
                  <p className="py-1">📅 March 15, 2025 | 7:00 PM</p>
                </div>
              </div>
              <Box text="border-4 w-36 h-36 border-[#24A0B580] mx-auto pt-5 mb-5 bg-[#031E211A] backdrop-blur-sm">
                {attendeeInfo.profilePhoto ? (
                  <Image
                    src={attendeeInfo.profilePhoto}
                    alt="Profile"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    No Photo
                  </div>
                )}
              </Box>
              <Box text="m-2 py-3 rounded-lg border-[#133D44] bg-[#08343C]">
                <div className="grid grid-cols-2 text-left gap-2 text-xs border-b border-[#12464E]">
                  <div className="space-y-1 border-r border-[#12464E]">
                    <div className="pb-2">
                      <label htmlFor="name" className="text-gray-400">
                        Name
                      </label>
                      <p>{attendeeInfo.name}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="pb-2">
                      <label htmlFor="name" className="text-gray-400">
                        Email
                      </label>
                      <p>{attendeeInfo.email}</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 text-left gap-2 text-xs border-b border-[#12464E]">
                  <div className="space-y-1 border-r border-[#12464E]">
                    <div className="py-1">
                      <label htmlFor="name" className="text-gray-400">
                        Ticket Type:
                      </label>
                      <p>{ticketInfo.type}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="py-1">
                      <label htmlFor="name" className="text-gray-400">
                        Ticket for:
                      </label>
                      <p>{ticketInfo.count} person(s)</p>
                    </div>
                  </div>
                </div>
                <div className="text-left text-xs border-[#12464E]">
                  <div>
                    <div className="py-[0.4rem]">
                      <label htmlFor="name" className="text-gray-400 pb-2">
                        Special request?
                      </label>
                      <p className="pt-1">
                        {attendeeInfo.specialRequest || "No special request"}
                      </p>
                    </div>
                  </div>
                </div>
              </Box>
            </div>
            <Image
              src="/barcode.png"
              width={250}
              height={100}
              alt="Barcode"
              className="absolute bottom-5"
            />
          </div>
          <div className="flex gap-3 flex-col lg:flex-row">
            <Link href="/" className="w-full">
              <Button
                className="order-2 lg:order-2"
                text="Book Another Ticket"
              />
            </Link>
            <button
              onClick={handleDownload}
              className="w-full bg-[#24A0B5] order-1 lg:order-1 mb-2 p-3 rounded-lg text-white font-[JejuMyeongjo] text-sm"
            >
              Download Ticket
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
