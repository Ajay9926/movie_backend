import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import movieRoutes from "./routes/movieRoutes";

const app = express();

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use(cors());

app.use("/api", movieRoutes);

app.get("/", (req, res) => {
  res.send("Backend working");
});

export default app;
