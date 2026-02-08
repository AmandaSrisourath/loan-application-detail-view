"use client";

import ApplicationDetails from "./appplicationDetails";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans">
      <main className="flex flex-col w-full max-w-3xl justify-center items-center sm:items-start p-4">
        <ApplicationDetails />
      </main>
    </div>
  );
}
