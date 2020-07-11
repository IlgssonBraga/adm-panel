import User from "../models/User";

class UserController {
  async store(req, res) {
    const { name, email, password } = req.body;

    await User.create({ name, email, password });
    res.redirect("/dashboard");
  }

  async index(req, res) {
    const users = await User.findAll();
    return res.render("showUsers.ejs", { users });
  }
}

export default new UserController();
