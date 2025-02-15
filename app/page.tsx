/** @format */

"use client";

import { useState } from "react";
import TicketList from "./TicketList";
import AttendeeForm from "./attendee/attendeeForm";
import SuccessScreen from "./successScreen/successScreen";
import NavBar from "./components/navbar";

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

export default function Home() {
  const [step, setStep] = useState<number>(1);
  const [ticketInfo, setTicketInfo] = useState<TicketInfo | null>(null);
  const [attendeeInfo, setAttendeeInfo] = useState<AttendeeInfo | null>(null);

  const handleTicketSelect = (info: TicketInfo) => {
    setTicketInfo(info);
    setStep(2);
  };

  const handleFormSubmit = (info: AttendeeInfo) => {
    setAttendeeInfo(info);
    setStep(3);
  };

  return (
    <div className="md:px-14 px-6 py-5 text-white">
      <NavBar />
      {step === 1 && <TicketList onTicketSelectAction={handleTicketSelect} />}
      {step === 2 && <AttendeeForm onFormSubmitAction={handleFormSubmit} />}
      {step === 3 && ticketInfo && attendeeInfo && (
        <SuccessScreen ticketInfo={ticketInfo} attendeeInfo={attendeeInfo} />
      )}
    </div>
  );
}
