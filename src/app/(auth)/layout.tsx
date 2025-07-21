import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Threads",
  description: "meta threads communication app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <ClerkProvider
    //   publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    // >
    //   <header className="flex justify-end items-center p-4 gap-4 h-16">
    //     <SignedOut>
    //       <SignInButton />
    //       <SignUpButton>
    //         <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
    //           Sign Up
    //         </button>
    //       </SignUpButton>
    //     </SignedOut>
    //     <SignedIn>
    //       <UserButton />
    //     </SignedIn>
    //   </header>

    //   {children}
    // </ClerkProvider>
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
