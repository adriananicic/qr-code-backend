import express from "express";
import prisma from "./prisma/client";
import ticketRouter from "./routes/ticketRoutes";
import cors from "cors";
import authRouter from "./routes/auth";

const app = express();
app.use(express.json());
app.use(cors());

const port = 4000;

app.get("/", async (req, res) => {
  res.send("Hello world");
});

app.use("/tickets", ticketRouter);
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
