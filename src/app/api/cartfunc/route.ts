import { cartTable, db } from "@/lib/drizzle";
import { validateDelete, validatePOST, validateUserId } from "@/lib/utils";
import { and, eq } from "drizzle-orm";
import { X } from "lucide-react";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET(req: NextRequest) {
  let url = req.nextUrl.searchParams;

  try {
    if (url.has("userid")) {
      const { userid } = validateUserId.parse({ userid: url.get("userid") });
      const cartData = await db
        .select()
        .from(cartTable)
        .where(eq(cartTable.userid, userid));
      return NextResponse.json(cartData);
    } else {
      throw new Error("User id not found");
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request payload" },
        { status: 422 }
      );
    }
    let rr = (error as { message: string }).message;
    console.log("Error", rr);
    return NextResponse.json({ error: rr });
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validatedBody = validatePOST.parse(body);

  try {
    const alreadyCartData = await db
      .select()
      .from(cartTable)
      .where(
        and(
          eq(cartTable.userid, validatedBody.userid),
          eq(cartTable.productid, validatedBody.productid)
        )
      );
    if (alreadyCartData.length > 0) {
      const updatedData = {
        userid: validatedBody.userid,
        productid: validatedBody.productid,
        quantity: (alreadyCartData[0].quantity as number) + 1,
      };
      await db
        .update(cartTable)
        .set(updatedData)
        .where(
          and(
            eq(cartTable.userid, validatedBody.userid),
            eq(cartTable.productid, validatedBody.productid)
          )
        );
      return NextResponse.json("OK");
    } else {
      const cartData = await db
        .insert(cartTable)
        .values(validatedBody)
        .returning();
      return NextResponse.json(cartData);
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request payload" },
        { status: 422 }
      );
    }
    let rr = (error as { message: string }).message;
    console.log("Error", rr);
    return NextResponse.json({ error: rr });
  }
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  const validatedBody = validatePOST.parse(body);

  try {
    await db
      .update(cartTable)
      .set(validatedBody)
      .where(
        and(
          eq(cartTable.userid, validatedBody.userid),
          eq(cartTable.productid, validatedBody.productid)
        )
      );
    return NextResponse.json("OK");
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request payload" },
        { status: 422 }
      );
    }
    let rr = (error as { message: string }).message;
    console.log("Error", rr);
    return NextResponse.json({ error: rr });
  }
}

export async function DELETE(req: NextRequest) {
  const url = req.nextUrl.searchParams;
  const { userid, productid } = validateDelete.parse({
    userid: url.get("userid"),
    productid: url.get("productid"),
  });

  try {
    await db
      .delete(cartTable)
      .where(
        and(eq(cartTable.userid, userid), eq(cartTable.productid, productid))
      );
    return NextResponse.json("OK");
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request payload" },
        { status: 422 }
      );
    }
    let rr = (error as { message: string }).message;
    console.log("Error", rr);
    return NextResponse.json({ error: rr });
  }
}
