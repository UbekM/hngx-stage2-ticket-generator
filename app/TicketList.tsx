/** @format */

"use client";

import { useState } from "react";
import Link from "next/link";
import Box from "./components/box";
import Button from "./components/button";

export default function TicketList({ onTicketSelect }) {
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);
  const [ticketCount, setTicketCount] = useState<number>(1);
  const [error, setError] = useState<string>("");

  const handleSelect = (type: string) => {
    setSelectedTicket(type);
    setError("");
  };

  const handleProceed = () => {
    if (!selectedTicket) {
      setError("Please select a ticket type.");
      return;
    }
    if (ticketCount < 1) {
      setError("Please select at least one ticket.");
      return;
    }
    setError("");
    onTicketSelect({ type: selectedTicket, count: ticketCount });
  };

  return (
    <div className="rounded-3xl p-6 border border-[#0E464F] bg-[#041E23] mb-7 lg:mx-60 font-[Roboto] font-light ">
      <main>
        <div className="flex justify-between font-[JejuMyeongjo] mb-3 items-center ">
          <h1 className="text-3xl">Ticket Selection</h1>
          <p className="font-[Roboto] text-sm">Step 1/3</p>
        </div>
        <div className="relative mb-3">
          <div className="rounded-lg absolute top-0 h-1 w-1/3 bg-[#24A0B5]" />
          <div className="rounded-lg bg-[#0E464F] h-1 w-full mb-6" />

          <Box text="bg-[#08252B] border-[#0E464F] p-4">
            <div className="space-y-8">
              <div>
                <p className="text-sm pb-2">Select Ticket Type:</p>
                <Box text="grid md:grid-cols-3 gap-4 bg-[#052228] border-[1px] border-[#07373F]">
                  {["Free", "VIP", "VVIP"].map((type) => (
                    <Box
                      key={type}
                      text={`border-2 border-[#197686] cursor-pointer ${
                        selectedTicket === type
                          ? "bg-[#12464E]"
                          : "hover:bg-[#2C545B]"
                      }`}
                      onClick={() => handleSelect(type)}
                    >
                      <h3 className="font-medium pb-2 text-xl">
                        {type === "Free" ? "Free" : "$150"}
                      </h3>
                      <p className="text-sm">{type} ACCESS</p>
                      <p className="text-sm">20/52</p>
                    </Box>
                  ))}
                </Box>
              </div>

              <div>
                <p className="text-sm pb-2">Number of Tickets:</p>
                <select
                  name="ticket-no"
                  className="border-[#07373F] border w-full p-3 bg-inherit rounded-lg bg-[#08252B]"
                  value={ticketCount}
                  onChange={(e) => setTicketCount(Number(e.target.value))}
                >
                  {[...Array(6)].map((_, i) => (
                    <option key={i + 1} value={i + 1} className="bg-[#08252B]">
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div className="flex gap-3 flex-col lg:flex-row w-full">
                <Link href="/" className="w-full">
                  <Button className="order-2 lg:order-2" text="Cancel" />
                </Link>
                <button
                  className="w-full bg-[#24A0B5] order-1 lg:order-1 mb-2 p-3 rounded-lg text-white font-[JejuMyeongjo] text-sm"
                  onClick={handleProceed}
                >
                  Next
                </button>
              </div>
            </div>
          </Box>
        </div>
      </main>
    </div>
  );
}
