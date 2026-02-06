const Task = require("../models/Task");

// Show all tasks
exports.getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.render("tasks", { tasks });
};
exports.viewTask = async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.render("view", { task });
};
// Show add task page
exports.addTaskPage = (req, res) => {
    res.render("addTask");
};

// Create task
exports.createTask = async (req, res) => {
    await Task.create(req.body);
    res.redirect("/");
};

// Show edit page
exports.editTaskPage = async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.render("editTask", { task });
};

// Update task
exports.updateTask = async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
};

// Delete task
exports.deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect("/");
};

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.render("tasks", { tasks });
    } catch (err) {
        res.status(500).send("Something went wrong");
    }
};
