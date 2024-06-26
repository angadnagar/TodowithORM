import express from "express";
import mainRouter from "./routes/index";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/main", mainRouter);

app.listen(3000, () => {
  console.log("Server started");
});
