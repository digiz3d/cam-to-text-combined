import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.send("nouveau build oulala build auto gg");
});
app.use("/", express.static("front"));

app.listen(process.env.PORT || 8080, () => {
  console.log("Backend en écoute sur le port " + (process.env.PORT || 8080));
});