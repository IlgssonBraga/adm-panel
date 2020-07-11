import { Router } from "express";

const usersRouter = Router();

usersRouter.get("/", (req, res) => {
  res.send("Project using bootstrap");
});

export default usersRouter;
