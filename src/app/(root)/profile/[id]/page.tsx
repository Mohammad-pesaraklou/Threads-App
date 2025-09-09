import Image from "next/image";
import { redirect } from "next/navigation";

import { profileTabs } from "@/constants";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { auth } from "@clerk/nextjs/server";
import ProfileHeader from "@/components/shared/ProfileHeader";
import ThreadsTab from "@/components/shared/ThreadsTab";
import { fetchUser } from "@/lib/actions/user.actions";

async function Page({ params }: { params: { id: string } }) {
  const { userId } = await auth();
  if (!userId) return null;

  const userInfo = await fetchUser(params.id);
  if (!userInfo) return null;
  console.log({ userInfo }, "userInfo in profile [id]");
  return (
    <section>
      <ProfileHeader
        accountId={userInfo.id}
        authUserId={userId}
        name={userInfo.name}
        username={userInfo.userName}
        imgUrl={userInfo.image ?? null}
        bio={userInfo.bio ?? null}
      />

      <div className="mt-9">
        <Tabs defaultValue="threads" className="w-full">
          <TabsList className="tab">
            {profileTabs.map((tab) => (
              <TabsTrigger key={tab.label} value={tab.value} className="tab">
                <Image
                  src={tab.icon}
                  alt={tab.label}
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="max-sm:hidden">{tab.label}</p>

                {tab.label === "Threads" && userInfo?.threads && (
                  <p className="ml-1 rounded-sm bg-light-4 px-2 py-1 !text-tiny-medium text-light-2">
                    {userInfo.threads.length}
                  </p>
                )}
              </TabsTrigger>
            ))}
          </TabsList>
          {profileTabs.map((tab) => (
            <TabsContent
              key={`content-${tab.label}`}
              value={tab.value}
              className="w-full text-light-1"
            >
              {/* @ts-ignore */}
              <ThreadsTab
                currentUserId={userId}
                accountId={userInfo.id}
                accountType="User"
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
export default Page;
