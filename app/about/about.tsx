/** @format */

import Box from "../components/box";
import Button from "../components/button";

export default function About() {
  return (
    <div className="rounded-3xl p-8 border border-[#0E464F] bg-[#041E23] mb-7 lg:mx-60 font-[Roboto]">
      <div className="font-light space-y-6 ">
        <h2 className="text-2xl font-bold">
          Event Ticket Booking UI – Open Source Practice Project
        </h2>
        <div>
          <h3 className="font-normal text-xl">🎟️ Overview</h3>
          <p>
            This is a beginner-friendly yet practical Event Ticket Booking UI
            designed for developers to clone, explore, and build upon. The
            design focuses on a seamless, login-free ticket reservation flow,
            allowing users to book event tickets quickly and efficiently.
          </p>
          <p>
            The project consists of a three-step ticket booking flow, and
            developers can extend it further by integrating:
          </p>
          <ul className="list-disc pl-6">
            <li>Payment solutions</li>
            <li>User authentication (optional)</li>
            <li>Ticket validation systems</li>
          </ul>
        </div>
        <div>
          <h3 className="font-normal text-xl">📌 Flow & Features</h3>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Ticket Selection</strong>
              <ul className="list-disc pl-6">
                <li>Users can browse available tickets (Free & Paid).</li>
                <li>Ticket options are displayed in a list or card view.</li>
                <li>
                  <strong>For Free Tickets:</strong> Clicking “Get Free Ticket”
                  proceeds to attendee details.
                </li>
                <li>
                  <strong>For Paid Tickets:</strong> Clicking “Purchase Ticket”
                  would ideally open a payment modal.
                </li>
              </ul>
            </li>

            <li>
              <strong>Attendee Details Form</strong>
              <ul className="list-disc pl-6">
                <li>
                  Users input their Name, Email, and optional Phone Number.
                </li>
                <li>
                  Profile picture upload option with preview functionality.
                </li>
                <li>
                  Ticket summary is visible to ensure users review their details
                  before submission.
                </li>
              </ul>
            </li>

            <li>
              <strong>Payment or Success Page</strong>
              <ul className="list-disc pl-6">
                <li>
                  If the ticket is free, the user is taken directly to the
                  Ticket Confirmation Page.
                </li>
                <li>
                  If the ticket is paid, developers can integrate Stripe,
                  Paystack, or Flutterwave to process payments before showing
                  the confirmation page.
                </li>
                <li>Upon successful booking, users should receive:</li>
                <ul className="list-[circle] pl-10">
                  <li>A visual ticket preview with a unique QR Code.</li>
                  <li>
                    An option to download the ticket as PDF or save it to their
                    device.
                  </li>
                  <li>An email confirmation containing ticket details.</li>
                </ul>
              </ul>
            </li>
          </ol>
        </div>
        <div>
          <h3 className="font-normal text-xl">🚀 How to Build This</h3>
          <p>This UI can be implemented using:</p>
          <ul className="list-disc pl-6">
            <li>
              <strong>📌 Frontend (Next.js or React)</strong>
              <ul className="list-[circle] pl-6">
                <li>
                  <strong>Component Breakdown:</strong>
                  <ul className="list-[square] pl-6">
                    <li>
                      <code>TicketCard.tsx</code> → Displays ticket details
                    </li>
                    <li>
                      <code>AttendeeForm.tsx</code> → Captures user details
                    </li>
                    <li>
                      <code>PaymentModal.tsx</code> → Handles payment processing
                    </li>
                    <li>
                      <code>SuccessScreen.tsx</code> → Shows the final ticket
                      preview
                    </li>
                  </ul>
                </li>
                <li>
                  State Management: React’s Context API, Zustand, or Redux (if
                  needed).
                </li>
                <li>
                  File Handling: Users should be able to upload images (profile
                  picture for ticket) using Firebase Storage, Cloudinary, or
                  local preview with <code>URL.createObjectURL()</code>.
                </li>
              </ul>
            </li>

            <li>
              <strong>📌 Backend (Optional)</strong>
              <ul className="list-[circle] pl-6">
                <li>
                  If persistence is required, a backend can be built using:
                </li>
                <ul className="list-[square] pl-6">
                  <li>Node.js & Express or Firebase Functions</li>
                  <li>
                    Database: MongoDB, PostgreSQL, or Firebase Firestore to
                    store ticket records
                  </li>
                </ul>
              </ul>
            </li>

            <li>
              <strong>📌 Payment Integration</strong>
              <ul className="list-[circle] pl-6">
                <li>For paid events, developers should integrate:</li>
                <ul className="list-[square] pl-6">
                  <li>Stripe Checkout (for international transactions)</li>
                  <li>Paystack or Flutterwave (for African users)</li>
                </ul>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-normal text-xl">🧑‍💻 What You’ll Learn</h3>
          <ul className="list-disc pl-6">
            <li>File handling & validation (profile picture uploads).</li>
            <li>Dynamic UI updates based on ticket selection.</li>
            <li>Persisting bookings using local state or a backend.</li>
            <li>Integrating payment gateways for ticket purchases.</li>
            <li>
              Generating & validating QR Codes for event check-in (Advanced).
            </li>
          </ul>
        </div>
        <div className="mb-20">
          <h3 className="font-normal text-xl">💬 Need Help? Reach Out!</h3>
        </div>
      </div>
      <Box text="border-[#0E464F] flex gap-6 flex-col lg:flex-row mx-16 p-6 mt-20 font-[Roboto]">
        <a
          href="https://www.figma.com/community/file/1470800949188681164"
          target="blank"
          className="w-full"
        >
          <Button
            text="Design File"
            className="font-[Roboto] text-[#24A0B5] font-light"
          />
        </a>
        <a
          href="https://github.com/UbekM/hngx-stage2-ticket-generator.git"
          target="blank"
          className="w-full"
        >
          <Button
            text="GitHub code"
            className="bg-[#24A0B5] font-[Roboto] font-light"
          />
        </a>
      </Box>
    </div>
  );
}
