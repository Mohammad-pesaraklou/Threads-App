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
import { dark } from "@clerk/themes";
import "../globals.css";
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
    <html lang="en">
      <body>
        <ClerkProvider
          appearance={{ baseTheme: dark }}
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        >
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
