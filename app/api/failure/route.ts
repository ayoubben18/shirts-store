import logger from "@/lib/logger";
import { sendFailureEmail } from "@/service/send-email";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const id = req.nextUrl.searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Missing id parameter" },
        { status: 400 },
      );
    }

    await sendFailureEmail(id);

    logger.info({ id }, `Email sent in  route: failure for subscription ${id}`);

    return NextResponse.json({ message: "Subscription updated" });
  } catch (error) {
    logger.error({ error }, "Error sending in route: failure email");
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
};
