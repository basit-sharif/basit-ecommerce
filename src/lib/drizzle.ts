import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import {InferModel} from "drizzle-orm"
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const cartTable = pgTable("basitcart", {
  userid: varchar("userid", { length: 255 }).notNull(),
  productid: varchar("productid", { length: 255 }).notNull(),
  quantity: integer("quantity"),
});

export type typeOfCart = InferModel<typeof cartTable>

export const db = drizzle(sql);