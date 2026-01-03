import { Hono } from "hono";

import comments from "./comments";
import { renderHtml } from "./renderHtml";

const app = new Hono();

app.get("/", (c) => {
  return c.html(
    <html>
      <head>
        <title>kctrnn</title>
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
      </head>

      <body>
        <div class="h-screen flex flex-col gap-4 items-center justify-center">
          <a href="/comments" class="text-blue-500 underline">
            comments
          </a>
        </div>
      </body>
    </html>
  );
});

app.route("/comments", comments);

export default app;
