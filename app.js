import express from "express";
import cors from "cors";
import tasksRouter from "./routes/tasks.js";
import usersRouter from "./routes/users.js";
import testMiddleware from "./middleware/test.middleware.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoDB =
  "mongodb+srv://" +
  process.env.DB_USER +
  ":" +
  process.env.DB_PASSWORD +
  "@" +
  process.env.DB_SERVER +
  "/" +
  process.env.DB_NAME +
  "?retryWrites=true&w=majority";

async function main() {
  await mongoose.connect(mongoDB);
}

main().catch((err) => console.log(err));

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); //pendiente
app.use(express.json());
app.use(testMiddleware.logginCallRoute);

app.use("/tasks", tasksRouter);
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Hello Pablo");
});

app.use((req, res) => {
  res.status(404).json({ msg: "404 - Not Found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("500 - Server Error");
  next(err);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
