import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(
    '<html><style>.text{color:red; display: flex; justify-content: center; align-items: center; height: 100vh; font-size: 3rem}</style><body><div class="text">404! Page Not Found</div></body></html>'
  );
});

app.listen(port, (err) => {
  if (err) {
    console.error("Error starting server:", err);
    return;
  }
  console.log(`Express is listening at http://localhost:${port}`);
});
