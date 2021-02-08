var assert = require("assert");
const TaskManager = require("../js/taskManager");

let taskManager = new TaskManager();
describe("Task Manager module", function () {
  it("Add new task to TaskManager", function () {
    const sampleTask = {
      name: "Mocha Task",
      description: "this is Mocha task description",
      assignedTo: "Aster",
      assignedToGroup: "Group 1",
      dueDate: "02/07/2020",
    };
    console.log(taskManager.tasks);
    taskManager.addTask(sampleTask);
    assert.strictEqual(taskManager.tasks.length, 1);
  });

  it("Get task to TaskManager", function () {
    const task = taskManager.getTaskById(1);
    assert.strictEqual(task.assignedTo, "Aster");
    assert.strictEqual(task.name, "Mocha Task");
  });

  it("Delete task to TaskManager", function () {
    taskManager.deleteTask(1);
    assert.strictEqual(taskManager.tasks.length, 0);
  });
});
