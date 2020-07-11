import express from "express";
import routes from "./routes/index.routes";
import path from "path";
import bodyParser from "body-parser";
import "./database";

const app = express();
app.use(express.json());

app.use(express.static(path.resolve(__dirname, "..", "public")));

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.use(routes);

app.listen(3333, () => console.log("Server running on http://localhost:3333"));
