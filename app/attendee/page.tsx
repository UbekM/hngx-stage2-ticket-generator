/** @format */

import NavBar from "../components/navbar";
import AttendeeForm from "./attendeeForm";

export default function Attendee() {
  return (
    <div
      style={{
        background:
          "radial-gradient(52.52% 32.71% at 50% 97.66%, rgba(36, 160, 181, 0.2) 0%, rgba(36, 160, 181, 0) 100%), #02191D",
      }}
      className="md:px-14 px-6 py-5 text-white "
    >
      <NavBar />
      <AttendeeForm />
    </div>
  );
}
