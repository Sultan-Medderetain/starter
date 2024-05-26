import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

app
  .get("/hello", (c) => {
    return c.json({
      message: "Hello world",
    });
  })
  .post("/poster", (c) => {
    const body = c.req.json();

    return c.json(body);
  });

export const GET = handle(app);
export const POST = handle(app);
