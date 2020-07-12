import User from "../models/User";

class UserController {
  async store(req, res) {
    const { name, email, password } = req.body;

    await User.create({ name, email, password });
    res.redirect("/dashboard");
  }

  async index(req, res) {
    const del = async (id) => {
      const user = await User.findByPk(id);
      await user.destroy();
    };
    const users = await User.findAll();
    return res.render("showUsers.ejs", { users, del });
  }

  async delete(req, res) {
    const id = req.params.id;
    const user = await User.findByPk(id);
    await user.destroy();
    return res.redirect("/users");
  }
}

export default new UserController();
