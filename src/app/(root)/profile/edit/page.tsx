import { redirect } from "next/navigation";

import { fetchUser } from "@/lib/actions/user.actions";
import AccountProfile from "@/components/forms/AccountProfile";
import { auth } from "@clerk/nextjs/server";

// Copy paste most of the code as it is from the /onboarding

async function Page() {
  const { userId } = await auth();
  if (!userId) return null;

  const userInfo = await fetchUser(userId);
  if (!userInfo?.onboarded) redirect("/onboarding");

  const userData = {
    id: userId,
    objectId: userInfo?._id,
    username: userInfo ? userInfo?.username : "",
    name: userInfo ? userInfo?.name : "",
    bio: userInfo ? userInfo?.bio : "",
    image: userInfo ? userInfo?.image : "",
  };

  return (
    <>
      <h1 className="head-text">Edit Profile</h1>
      <p className="mt-3 text-base-regular text-light-2">Make any changes</p>

      <section className="mt-12">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </>
  );
}

export default Page;
