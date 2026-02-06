const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.get("/", taskController.getTasks);

router.get("/add", taskController.addTaskPage);
router.post("/add", taskController.createTask);

router.get("/edit/:id", taskController.editTaskPage);
router.post("/edit/:id", taskController.updateTask);

router.get("/delete/:id", taskController.deleteTask);
router.get("/view/:id", taskController.viewTask);

module.exports = router;
