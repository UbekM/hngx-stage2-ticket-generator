/** @format */

import Link from "next/link";
import Box from "./components/box";
import Button from "./components/button";

/** @format */

export default function TicketBox() {
  return (
    <div className="rounded-3xl p-6 border border-[#0E464F] bg-[#041E23] mb-7 lg:mx-60 font-[Roboto] font-light ">
      <main>
        <div className="flex justify-between font-[JejuMyeongjo] mb-3 items-center ">
          <h1 className="text-3xl">Ticket Selection</h1>
          <p className="font-[Roboto] text-sm">Step 1/3</p>
        </div>
        <div className="relative mb-3">
          <div className="rounded-lg  absolute top-0 h-1 w-1/3 bg-[#24A0B5] " />
          <div className="rounded-lg bg-[#0E464F]  h-1 w-full mb-6" />
          <Box text="bg-[#08252B] border-[#0E464F] p-4">
            <div className="space-y-8">
              <Box text="bg-custom-gradient border-[#07373F] border-2 backdrop-blur-md">
                <div className="text-center space-y-2 p-3">
                  <h2 className="font-roadRage text-6xl">Techember Fest ”25</h2>
                  <div className=" text-center">
                    <p>
                      Join us for an unforgettable experience at <br />
                      [Event Name]! Secure your spot now.
                    </p>
                  </div>
                  <div className="flex text-center justify-center items-center">
                    <p>
                      📍 [Event Location] <span className="mx-2">| |</span>{" "}
                      March 15, 2025 | 7:00 PM
                    </p>
                  </div>
                </div>
              </Box>
              <div className="border-[#07373F] border-2 mt-4 rounded-lg" />
              <div>
                <p className="text-sm pb-2">Select Ticket Type:</p>
                <Box text="grid md:grid-cols-3 gap-4 bg-[#052228] border-[1px] border-[#07373F]">
                  <Box text="border-2 border-[#197686] hover:bg-[#2C545B] cursor-pointer selection:bg-[#12464E]">
                    <h3 className="font-medium pb-2 text-xl">Free</h3>
                    <p className="text-sm">REGULAR ACCESS</p>
                    <p className="text-sm">20/52</p>
                  </Box>
                  <Box text="border-2 border-[#197686] hover:bg-[#2C545B] cursor-pointer selection:bg-[#12464E]">
                    {" "}
                    <h3 className="font-medium pb-2 text-xl">$150</h3>
                    <p className="text-sm">VIP ACCESS</p>
                    <p className="text-sm">20/52</p>
                  </Box>
                  <Box text="border-2 border-[#197686] hover:bg-[#2C545B] cursor-pointer selection:bg-[#12464E]">
                    {" "}
                    <h3 className="font-medium pb-2 text-xl">$150</h3>
                    <p className="text-sm">VVIP ACCESS</p>
                    <p className="text-sm">20/52</p>
                  </Box>
                </Box>
              </div>
              <div>
                <p className="text-sm pb-2"> Number of Tickets</p>
                <select
                  name="ticket-no"
                  id=""
                  className="border-[#07373F] border w-full p-3 bg-inherit rounded-lg bg-[#08252B]"
                >
                  <option value="1" className="bg-[#08252B]">
                    1
                  </option>
                  <option value="2" className="bg-[#08252B]">
                    2
                  </option>
                  <option value="3" className="bg-[#08252B]">
                    3
                  </option>
                  <option value="4" className="bg-[#08252B]">
                    4
                  </option>
                  <option value="5" className="bg-[#08252B]">
                    5
                  </option>
                  <option value="6" className="bg-[#08252B]">
                    6
                  </option>
                </select>
              </div>
              <div className="flex gap-3 flex-col lg:flex-row">
                <Link href="/" className="w-full">
                  <Button className="  order-2 lg:order-2" text="Cancel" />
                </Link>
                <Link href="/attendee" className="w-full">
                  <Button
                    className="bg-[#24A0B5] order-1 lg:order-1 mb-2"
                    text="Next"
                  />
                </Link>
              </div>
            </div>
          </Box>
        </div>
      </main>
    </div>
  );
}
