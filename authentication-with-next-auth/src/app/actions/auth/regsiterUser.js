"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const registerUser = async (userData) => {
  try {
    const result = await dbConnect(collectionNames.TEST_USER).insertOne({...userData,role: "user"});
    return result;
  } 
  catch (error) {
    console.log(error);
    return null;
  }
}