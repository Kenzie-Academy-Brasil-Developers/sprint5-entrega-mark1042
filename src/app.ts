import express from "express";
import userRouter from "./routers/user.router";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`app running @ port ${PORT}`);
});
