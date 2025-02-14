/** @format */

import NavBar from "../components/navbar";
import SuccessScreen from "./successScreen";

export default function Attendee() {
  return (
    <div className="md:px-14 px-6 py-5 text-white lg:relative h-dvh  z-20">
      <div className="z-10">
        <NavBar />
      </div>
      <div className="lg:absolute top-1 left-0 lg:-z-10 w-full">
        <SuccessScreen />
      </div>
    </div>
  );
}
