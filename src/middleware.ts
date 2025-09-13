// middleware.ts

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/onboarding(.*)",
  "/api/webhook/clerk",

  // "/",
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

// export const config = {
//   matcher: ["/((?!_next|.*\\..*).*)", "/(api|trpc)(.*)"],
// };
export const config = {
  matcher: ["/((?!_next|.*\\..*|api/webhook/clerk).*)", "/(api|trpc)(.*)"],
};
