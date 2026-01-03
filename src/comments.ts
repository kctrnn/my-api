import { Hono } from "hono";

import { PrismaD1 } from "@prisma/adapter-d1";
import { PrismaClient } from "./generated/prisma/client";

const app = new Hono<{ Bindings: Env }>();

app.get("/", async (c) => {
  const adapter = new PrismaD1(c.env.DB);
  const prisma = new PrismaClient({ adapter });

  const comments = await prisma.comment.findMany();
  return c.json(comments);
});

export default app;
