"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("/api/home")
      .then((res) => res.json())
      .then((fin) => console.log({ fin }));
  });

  return (
    <div>
      <h2 className="text-blue">hello world</h2>
    </div>
  );
}
