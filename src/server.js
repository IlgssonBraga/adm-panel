import express from "express";
import routes from "./routes/index.routes";

const app = express();

app.set("view engine", "ejs");
app.use(routes);

app.listen(3333, () => console.log("Server running on http://localhost:3333"));
