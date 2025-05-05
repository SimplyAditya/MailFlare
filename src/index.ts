import express from "express";
import dotenv from "dotenv";
import userRouter from "./routers/user.routes";
import authRouter from "./routers/auth.route";
import appPasswordRouter from "./routers/appPassword.route";
import mailTemplateRouter from "./routers/mailTemplate.router";
import sendEmailRouter from "./routers/sendEmail.route";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/appPassword", appPasswordRouter);
app.use("/api/v1/mailTemplate", mailTemplateRouter);
app.use("/api/v1/sendEmail", sendEmailRouter);

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
