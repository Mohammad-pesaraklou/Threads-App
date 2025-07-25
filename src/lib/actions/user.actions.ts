"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "../db";
import User from "../models/user.model";

interface updateUserPropTypes {
  userId: string;
  username: string;
  name: string;
  bio: string;
  image: string;
  path: string;
}
export async function updateUser({
  userId,
  bio,
  name,
  path,
  username,
  image,
}: updateUserPropTypes): Promise<void> {
  try {
    await connectToDB();
    await User.findOneAndUpdate(
      { id: userId },
      {
        username: username.toLowerCase(),
        name,
        bio,
        image,
        onboarded: true,
      },
      { upsert: true }
    );

    if (path === "/profile/edit") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}
