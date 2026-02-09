"use client";

import AppBar from "../components/ui/app-bar";
import ApplicationDetails from "./application-details";

export default function Home() {
  return (
    <>
      <AppBar />

      <div className="flex items-center justify-center bg-white font-sans">
        <main className="flex flex-col w-full max-w-3xl justify-center items-center sm:items-start p-6 gap-6">
          <div className="text-xl font-semibold">
            Loan Application Detail View
          </div>

          <ApplicationDetails />
        </main>
      </div>
    </>
  );
}
