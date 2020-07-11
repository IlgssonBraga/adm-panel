import { Router } from "express";
import UserController from "../../app/controllers/UserController";

const usersRouter = Router();

usersRouter.get("/", (req, res) => {
  res.send("Hi");
});

usersRouter.get("/cadUsers", (req, res) => {
  res.render("cadUsers.ejs");
});

usersRouter.post("/", UserController.store);

export default usersRouter;
