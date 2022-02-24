const express = require("express");
const path = require("path");
const UserController = require("../controller/users");

function views(document) {
  return path.join(__dirname, "../", "views", document);
}

const router = express.Router();

//definiendo el controlador
const userController = new UserController();
//asignando middlewares al router
//router.use('/users')

router.get("/registro", function (request, response) {
  return response.sendFile(views("registro.html"));
});

router.post("/registro", async function (request, response) {
  const persona = request.body;
  // console.log(request)
  const user = await userController.create(persona);
  if (user.success) {
    return response.redirect("/");
  } else {
    return response.redirect("/registro");
  }
});

router.get("/users", (req, res) => {
  return res.sendFile(views("users.html"));
});
router.get("/api/users",async (req, res) => {
  var users = await userController.readAll()
  return res.json(users)
});

module.exports = router;
