import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const p = await params;
  const query = { _id: new ObjectId(p.id) }
  const result = await dbConnect("test_data").findOne(query)
  return Response.json(result);
}

export async function DELETE(req, { params }) {
  const p = await params;
  const query = {_id: new ObjectId(p.id)};
  const result = await dbConnect("test_data").deleteOne(query);
  return Response.json(result)
}

export async function PATCH(req, { params }) {
  const p = await params;
  const postedData = await req.json();
  const filter = { _id: new ObjectId(p.id) };
  const updateDoc = {
    $set: {
      ...postedData
    }
  }
  const result = await dbConnect("test_data").updateOne(filter, updateDoc, { upsert: true })

  return Response.json(result);
}