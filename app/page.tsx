/** @format */

import NavBar from "./components/navbar";
import TicketBox from "./TicketList";

/** @format */

export default function Home() {
  return (
    <div
      className="md:px-14 px-6 py-5 text-white"
    >
      <NavBar />
      <TicketBox />
    </div>
  );
}
