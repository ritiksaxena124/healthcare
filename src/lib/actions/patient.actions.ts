import { z } from "zod";
import { UserFormValidation } from "../validation";
import {
  databases,
  users,
  PATIENT_COLLECTION_ID,
  DATABASE_ID,
} from "../appwrite.config";
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

export const registerPatient = async (values: RegisterUserParams) => {
  try {
    const newPatient = await databases.createDocument(
      "66baf725002b1ba2f19f",
      "66baf74f00084c3f9a9f",
      ID.unique(),
      {
        ...values,
      }
    );

    return newPatient;
  } catch (error) {
    console.log("Error while registering patient ", error);
  }
};
