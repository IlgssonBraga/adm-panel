import { Router } from "express";
import usersRouter from "./users/users.routes";

const routes = Router();

routes.get("/", (req, res) => {
  res.render("index.ejs");
});
routes.use("/users", usersRouter);

export default routes;
