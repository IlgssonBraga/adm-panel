import { Router } from "express";

const usersRouter = Router();

usersRouter.get("/", (req, res) => {
  res.render("index.ejs");
});

export default usersRouter;
