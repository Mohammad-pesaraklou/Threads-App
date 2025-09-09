import { redirect } from "next/navigation";

import { fetchUser } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import PostThread from "@/components/forms/PostThread";

async function Page() {
  const { userId } = await auth();
  if (!userId) return null;

  // fetch organization list created by user
  const userInfo = await fetchUser(userId);

  if (!userInfo?.onboarded) redirect("/onboarding");
  return (
    <>
      <h1 className="head-text">Create Thread</h1>

      <PostThread userId={userId} />
    </>
  );
}

export default Page;
