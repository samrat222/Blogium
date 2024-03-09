import { Hono } from "hono";
import { userRouter } from "./routes/user";
import { bookRouter } from "./routes/blog";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();
app.get("/", (c) => {
  return c.text("Hii hono");
});

app.route("/api/v1/user", userRouter);
app.route("/api/v1/book", bookRouter);

export default app;
