"use client";

import Image from "next/image";

export default function AppBar() {
  return (
    <div className="border-b border-gray-300 px-6 py-2">
      <Image
        src="/logo.webp"
        alt="UME Logo"
        width={120}
        height={48}
        priority
        className="h-auto w-auto"
      />
    </div>
  );
}
