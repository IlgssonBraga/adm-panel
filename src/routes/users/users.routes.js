import { Router } from "express";
import UserController from "../../app/controllers/UserController";

const usersRouter = Router();

usersRouter.get("/", UserController.index);

usersRouter.get("/cadUsers", (req, res) => {
  res.render("cadUsers.ejs");
});

usersRouter.post("/", UserController.store);

usersRouter.delete("/:id", UserController.delete);

export default usersRouter;
