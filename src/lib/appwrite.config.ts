import * as sdk from "node-appwrite";

export const {
  PROJECT_ID,
  API_SECRET_KEY,
  DATABASE_ID,
  NEXT_PUBLIC_API_URL: ENDPOINT,
  NEXT_PUBLIC_STORAGE_BUCKET_URL: BUCKET_ID,
} = process.env;

const client = new sdk.Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66ba4b7e001c4bcff08d")
  .setKey(
    "a31748a42151f2b1e59c357b7eed562c515eb3bc2ebe088f680fd76ffd71d322938e468be73ce3e41e861d334769a51630070891a5bfcd617d46b26f62329a09a9e8d81a4bff0e7c7c48af2b536192e768488423c5b067a54d438b2a34076b34cf534e1472c4aff4b5494213dd45d410e4542d31f70d38133a8b4629251b44c1"
  );

export const users = new sdk.Users(client);
export const databases = new sdk.Databases(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Messaging(client);
