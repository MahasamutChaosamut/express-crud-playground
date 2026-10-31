// // const calculator = require("./calculator");
// import { add } from "./calculator.js";
// import fs from "fs";
// console.log("A sync start");
// console.log(add(5, 3));

// //core modules
// //fs file system
// try {
//   const data = fs.readFileSync("hello.txt", "utf8");
//   console.log(data);
// } catch (error) {
//   console.error("Error reading file:", error);
// }

// const content = "Hello, World!";
// fs.writeFile("greeting.txt", content, (err) => {
//   if (err) {
//     console.error("Error writing file:", err);
//   }
//   console.log("File written successfully");
// });

// //path module
// import path from "node:path";
// const filePath = path.join("users", "kakgh", "book-api", "greeting.txt");
// console.log("File path:", filePath);

// //os module
// import os from "node:os";
// console.log(`OS Platform: ${os.platform()}`);
// console.log(`Total Memory: ${os.totalmem()} bytes`);
// console.log(`Free Memory: ${os.freemem()} bytes`);
// console.log(`Uptime: ${os.uptime()} seconds`);
import express from "express";
import patientsRouter from "./routes/patients.js";
const app = express();
const port = 3000;

//middleware save log
const logMiddleware = (req, res, next) => {
  console.log("request received at:", new Date().toISOString());
  console.log("method:", req.method, "url:", req.url);
  next();
};

app.use(logMiddleware);
app.use("/patients", patientsRouter);
app.use(express.static("public"));

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });

// const parsedUrl = url.parse(req.url, true);
// const path = parsedUrl.pathname;
// const query = parsedUrl.query;
// switch (path) {
//   case "/search": {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain, charset=utf-8");
//     const searchTerm = query.q || "ไม่ได้ระบุคำค้นหา";
//     res.end(JSON.stringify({ message: `Search results for "${searchTerm}"` }));
//     break;
//   }
//   case "/agent": {
//     res.statusCode = 200;
//     const userAgent = req.headers["user-agent"] || "Unknown";
//     res.end(JSON.stringify({ message: "user agent : ", userAgent }));
//     break;
//   }
//   default:
//     res.statusCode = 404;
//     res.end(JSON.stringify({ error: "Page Not Found" }));
// }

//   const data = {
//     message: "Hello, World!",
//     date: {
//       current: new Date().toISOString(),
//     },
//   };

//   switch (req.url) {
//     case "/":
//       res.end(JSON.stringify(data));
//       break;
//     case "/about":
//       res.end(JSON.stringify({ message: "About Page" }));
//       break;
//     case "/contact":
//       res.end(JSON.stringify({ message: "Contact Page" }));
//       break;
//     default:
//       res.statusCode = 404;
//       res.end(JSON.stringify({ error: "Page Not Found" }));
//   }

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
// import express from "express";
// const app = express();
// const port = 3000;
// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });
// app.get("/about", (req, res) => {
//   res.send("About Page");
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });
