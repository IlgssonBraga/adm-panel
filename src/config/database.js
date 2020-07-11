import Sequelize from "sequelize";

const sequelize = new Sequelize("panel", "postgres", "docker", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
