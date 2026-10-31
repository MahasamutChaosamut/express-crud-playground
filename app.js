import express from "express";
import patientsRouter from "./routes/patients.js";
const app = express();
const port = 3000;
app.use(express.json());
app.use("/patients", patientsRouter);

app.use((req, res) => {
  res
    .status(404)
    .json({ message: `Route ${req.method} ${req.originalUrl} not found` });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal Server Error" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
