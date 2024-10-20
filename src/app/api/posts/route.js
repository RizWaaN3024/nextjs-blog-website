import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";


export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page");

  const POSTS_PER_PAGE = 2;

  const query = {
    take: POSTS_PER_PAGE,
    skip: POSTS_PER_PAGE * (page - 1)
  }

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count()
    ])
    return new NextResponse(JSON.stringify({posts, count}, { status: 200 }))
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 200 })
    )
  }
}