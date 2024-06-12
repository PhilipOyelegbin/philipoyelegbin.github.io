import Project from "@/app/(models)/Project";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const id = await req.params;
    const body = await req.json();
    const projectData = await Project.create(body);
    return NextResponse.json(
      { message: "Project sent succesfully", projectData },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const id = await req.params;
    const projectData = await Project.findById({ id });
    return NextResponse.json(
      { message: "Project received succesfully", projectData },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
