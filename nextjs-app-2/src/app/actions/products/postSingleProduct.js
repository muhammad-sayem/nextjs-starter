"use server";

import dbConnect from "@/lib/dbConnect";

export const postSingleProduct = async (postedData) => {
  try {
    const result = await dbConnect("test_data").insertOne(postedData);
    revalidatePath('/products');  // ei path er cache kora data gula baad diye new kore ano abar //
    return Response.json(result);
  } 
  catch (error) {
    console.log(error);
    return null;
  }
} 