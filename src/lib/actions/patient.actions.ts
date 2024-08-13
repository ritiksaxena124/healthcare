import { z } from "zod";
import { UserFormValidation } from "../validation";
import { users } from "../appwrite.config";
import { ID } from "node-appwrite";
import { parseStringify } from "../utils";

export const createUser = async ({
  email,
  phone,
  name,
}: z.infer<typeof UserFormValidation>) => {
  try {
    const user = await users.create(ID.unique(), email, phone, undefined, name);
    return parseStringify(user);
  } catch (error) {
    console.log("Error while creating user", error);
  }
};
