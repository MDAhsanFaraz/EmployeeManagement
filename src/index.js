import express from "express";
import bodyParser from "body-parser";
import apiRoutes from "./routes/index.js";
import { connect } from "./config/database.js";
import dotenv from "dotenv";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

dotenv.config();

const PORT = process.env.PORT;

app.listen(3000, async () => {
  console.log(`server started at PORT-${PORT}`);
  await connect();
  console.log("Mongo db connected");
});
