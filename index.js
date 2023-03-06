const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./models/index");
const { where } = require("sequelize");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", async (req, resp) => {
  try {
    const data = await db.users_data.findAll();
    resp.send(data);
  } catch (err) {
    console.log("Error", err.message);
  }
});

app.get("/:id", async (req, resp) => {
  try {
    const data = await db.users_data.findOne({
      where: {
        id: req.params.id,
      },
    });
    resp.send(data);
  } catch (err) {
    console.log("Error", err.message);
  }
});

app.post("/", async (req, resp) => {
  try {
    const data = await db.users_data.create(req.body);
    console.log("saved data", data);
    resp.send(data);
  } catch (err) {
    console.log("Error", err.message);
  }
});

app.put("/:id", async (req, resp) => {
  try {
    const data = await db.users_data.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    console.log("saved data", data);
    resp.send(data);
  } catch (err) {
    console.log("Error", err.message);
  }
});

app.delete("/:id", async (req, resp) => {
  try {
    const data = await db.users_data.destroy({
      where: {
        id: req.params.id,
      },
    });
    resp.send(data);
  } catch (err) {
    console.log("Error", err.message);
  }
});

app.listen(2003, () => console.log("server is running on 2003"));
