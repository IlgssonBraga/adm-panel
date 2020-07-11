import User from "../models/User";

class UserController {
  async store(req, res) {
    const { name, email, password } = req.body;

    await User.create({ name, email, password });
    res.redirect("/dashboard");
  }
}

export default new UserController();
