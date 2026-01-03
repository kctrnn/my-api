import { Hono } from "hono";

const app = new Hono<{ Bindings: Env }>();

app.get("/", async (c) => {
  const stmt = c.env.DB.prepare("SELECT * FROM comments");
  const { results } = await stmt.all();

  return c.json(results);
});

export default app;
