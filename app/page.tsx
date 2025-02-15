/** @format */

"use client";

import { useState } from "react";
import TicketList from "./TicketList";
import AttendeeForm from "./attendee/attendeeForm";
import SuccessScreen from "./successScreen/successScreen";
import NavBar from "./components/navbar";

export default function Home() {
  const [step, setStep] = useState(1);
  const [ticketInfo, setTicketInfo] = useState(null);
  const [attendeeInfo, setAttendeeInfo] = useState(null);

  const handleTicketSelect = (info) => {
    setTicketInfo(info);
    setStep(2);
  };

  const handleFormSubmit = (info) => {
    setAttendeeInfo(info);
    setStep(3);
  };

  return (
    <div className="md:px-14 px-6 py-5 text-white">
      <NavBar />
      {step === 1 && <TicketList onTicketSelect={handleTicketSelect} />}
      {step === 2 && <AttendeeForm onFormSubmit={handleFormSubmit} />}
      {step === 3 && (
        <SuccessScreen ticketInfo={ticketInfo} attendeeInfo={attendeeInfo} />
      )}
    </div>
  );
}
