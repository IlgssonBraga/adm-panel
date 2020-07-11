import { Router } from "express";

const usersRouter = Router();

usersRouter.get("/", (req, res) => {
  res.send("Hi");
});

export default usersRouter;
