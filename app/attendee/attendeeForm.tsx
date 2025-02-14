/** @format */

import Link from "next/link";
import Box from "../components/box";
import Button from "../components/button";
import Image from "next/image";

/** @format */

export default function TicketBox() {
  return (
    <div className="rounded-3xl p-6 border border-[#0E464F] bg-[#041E23] mb-7 lg:mx-60 font-[Roboto] font-light ">
      <main>
        <div className="flex justify-between font-[JejuMyeongjo] mb-3 items-center ">
          <h1 className="text-3xl">Attendee Details</h1>
          <p className="font-[Roboto] text-sm">Step 2/3</p>
        </div>
        <div className="relative mb-3">
          <div className="rounded-lg  absolute top-0 h-1 lg:w-1/2 w-2/3 bg-[#24A0B5] " />
          <div className="rounded-lg bg-[#0E464F]  h-1 w-full mb-6" />

          <div className="space-y-8">
            <Box text="border-[#07373F] border-2 backdrop-blur-md flex flex-col justify-center lg:items-start lg:justify-center items-center p-5 relative">
              <p className="pb-2 lg:self-start ">Upload Profile Photo</p>
              <div className="flex justify-center items-center w-full ">
                <div className="w-full h-44 bg-black bg-opacity-30 absolute top-[3.8rem] -z-10 left-0 lg:block hidden"></div>
                <Box text="border-2 border-[#24A0B580] bg-[#0E464F] h-48 w-48 flex flex-col gap-1 border-3 justify-center items-center lg:self-center lg:mx-auto">
                  <Image
                    src="/addimage.png"
                    alt="Upload icon"
                    width={40}
                    height={40}
                  ></Image>
                  <p className="text-center pt-2">
                    Drag & drop or click to upload
                  </p>{" "}
                </Box>
              </div>
            </Box>

            <div className="border-[#07373F] border-2 mt-4 rounded-lg" />
            <div>
              <label className="text-sm pb-2">Enter your name</label>
              <input
                type="text"
                name=""
                id=""
                className="border-[#07373F] border w-full p-3 bg-inherit rounded-lg bg-[#08252B]"
              />
            </div>
            <div>
              <label className="text-sm pb-2"> Enter your email*</label>
              <input
                type="email"
                name=""
                id=""
                className="border-[#07373F] border w-full p-3 bg-inherit rounded-lg bg-[#08252B]"
              />
            </div>
            <div>
              <label className="text-sm pb-2"> Special request?</label>
              <textarea
                name=""
                id=""
                cols={3}
                className="border-[#07373F] border w-full h-28 p-3 bg-inherit rounded-lg bg-[#08252B]"
              ></textarea>
            </div>
            <div className="flex gap-3 flex-col lg:flex-row">
              <Link href="/" className="w-full">
                <Button className=" order-2 lg:order-2" text="Back" />
              </Link>
              <Link href="/successScreen" className="w-full">
                <Button
                  className="bg-[#24A0B5] order-1 lg:order-1 mb-2"
                  text="Get My Free Ticket"
                />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
