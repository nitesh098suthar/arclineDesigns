import express from "express";
import { config } from "dotenv";
config({ path: "./config/config.env" });
import userRouter from "./routes/userRoutes.js";
import designRouter from "./routes/designRoutes.js";
import otherRouter from "./routes/otherRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);
const FRONTEND_URI =
  process.env.FRONTEND_URL || "https://arcline-designs.netlify.app";
app.use(
  cors({
    origin: FRONTEND_URI,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(cookieParser());

app.use("/api/v1", userRouter);
app.use("/api/v1", designRouter);
app.use("/api/v1", otherRouter);

app.use(errorMiddleware);
export default app;
