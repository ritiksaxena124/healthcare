import * as sdk from "node-appwrite";

export const {
  PROJECT_ID,
  API_SECRET_KEY,
  DATABASE_ID,
  NEXT_PUBLIC_API_URL: ENDPOINT,
  NEXT_PUBLIC_STORAGE_BUCKET_URL: BUCKET_ID,
} = process.env;

const client = new sdk.Client();

client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!).setKey(API_SECRET_KEY!);

export const users = new sdk.Users(client);
export const databases = new sdk.Databases(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Messaging(client);
