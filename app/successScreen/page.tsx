/** @format */

import NavBar from "../components/navbar";
import SuccessScreen from "./successScreen";

export default function Attendee() {
  const ticketInfo = { type: "VIP", count: 1 }; 
  const attendeeInfo = { name: "John Doe", email: "john@example.com" }; 
  return (
    <div className="md:px-14 px-6 py-5 text-white lg:relative h-dvh  z-20">
      <div className="z-10">
        <NavBar />
      </div>
      <div className="lg:absolute top-1 left-0 lg:-z-10 w-full">
        <SuccessScreen ticketInfo={ticketInfo} attendeeInfo={attendeeInfo} />
      </div>
    </div>
  );
}
