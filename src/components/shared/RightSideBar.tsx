import { auth } from "@clerk/nextjs/server";
// actions
import { fetchUsers } from "@/lib/actions/user.actions";
// import { fetchCommunities } from "@/lib/actions/community.actions";
// components
import UserCard from "../cards/UserCard";

async function RightSidebar() {
  const { userId } = await auth();
  if (!userId) return null;

  const similarMindsData = await fetchUsers({
    userId,
    pageSize: 4,
  });
  //   const suggestedCOmmunities = await fetchCommunities({ pageSize: 4 });
  const suggestedCOmmunities = { communities: [] };

  return (
    <section className="custom-scrollbar rightsidebar">
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1">
          Suggested Communities
        </h3>

        <div className="mt-7 flex w-[350px] flex-col gap-9">
          {suggestedCOmmunities.communities.length > 0 ? (
            <>
              {/* {suggestedCOmmunities.communities.map((community) => (
                <UserCard
                  key={community.id}
                  id={community.id}
                  name={community.name}
                  username={community.username}
                  imgUrl={community.image}
                  personType="Community"
                />
              ))} */}
            </>
          ) : (
            <p className="!text-base-regular text-light-3">
              No communities found!
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1">Similar Minds</h3>
        <div className="mt-7 flex w-[350px] flex-col gap-10">
          {similarMindsData.users.length > 0 ? (
            <>
              {similarMindsData.users.map((person) => (
                <UserCard
                  key={person.id}
                  id={person.id}
                  name={person.name}
                  username={person.username}
                  imgUrl={person.image}
                  personType="User"
                />
              ))}
            </>
          ) : (
            <p className="!text-base-regular text-light-3">No users found!</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default RightSidebar;
