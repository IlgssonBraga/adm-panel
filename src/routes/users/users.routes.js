import { Router } from "express";
import UserController from "../../app/controllers/UserController";

const usersRouter = Router();

usersRouter.get("/", UserController.index);

usersRouter.get("/cadUsers", (req, res) => {
  res.render("cadUsers.ejs");
});

usersRouter.post("/", UserController.store);

usersRouter.get("/test", (req, res) => {
  function soma(a, b) {
    return a + b;
  }

  const s = soma(3, 2);
  res.render("test.ejs", { soma, s });
});

export default usersRouter;
