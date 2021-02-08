class TaskManager {
  constructor() {
    this.tasks = [];
    this.currentId = 0;
  }

  addTask({ name, description, assignedTo, dueDate, status }) {
    this.currentId++;
    let task = {
      id: this.currentId,
      name,
      description,
      assignedTo,
      dueDate,
      status: "TODO",
    };
    this.tasks.push(task);
  }

  getTaskById(taskId) {
    let foundTask = {};
    this.tasks.forEach((task) => {
      if (task.id == taskId) {
        foundTask = task;
      }
    });
    return foundTask;
  }

  createTaskHtml = ({ id, name, description, assignedTo, dueDate, status }) => {
    // const html = `
    //     <li class="list-group-item">
    //         <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
    //             <h5>${name}</h5>
    //             <span class="badge badge-danger">${status}</span>
    //         </div>
    //         <div class="d-flex w-100 mb-3 justify-content-between">
    //             <small>Assigned To: ${assignedTo}</small>
    //             <small>Due: ${dueDate}</small>
    //         </div>
    //         <p>${description}</p>
    //     </li>
    // `;
    const html = `<div class="card text mb-3" data-task-id>
      <h5 class="card-header">${name}</h5>
      <div class="card-body">
          <div class="card-text">
              <ul data-task-id="${id}">
                  <li>Description: ${description}</li>
                  <li>Assigned to: ${assignedTo}</li>
                  <li>Due Date: ${dueDate}</li>
                  <button type="button" class="btn btn-primary btn-sm">${status}</button>
                  <button type="button" class="btn btn-secondary btn-sm done-button ${
                    status == "Done" ? "invisible" : ""
                  }">Mark As Done</button>
                  <button type="button" class="btn btn-danger btn-sm delete-button">Delete</button>

              </ul>
          </div>
      </div>
  </div>
      `;
    return html;
  };

  save() {
    let tasksJson = JSON.stringify(this.tasks);
    localStorage.setItem("tasks", tasksJson);
    let currentId = JSON.stringify(this.currentId);
    localStorage.setItem("currentId", currentId);
  }

  render() {
    let tasksHtmlList = [];
    this.tasks.forEach((task) => {
      task.dueDate = new Date();
      task.formattedDate =
        1 +
        task.dueDate.getMonth() +
        "/" +
        task.dueDate.getDate() +
        "/" +
        task.dueDate.getFullYear();
      let taskHtml = this.createTaskHtml(task);
      tasksHtmlList.push(taskHtml);
    });
    var tasksHtml = tasksHtmlList.join("\n ");
    $("#taskList").html(tasksHtml);
  }

  load() {
    let tasksJson = localStorage.getItem("tasks");
    this.tasks = JSON.parse(tasksJson);

    let currentId = localStorage.getItem("currentId");
    if (!currentId) {
      currentId = 0;
    }
    this.currentId = parseInt(currentId) || 0;
  }

  deleteTask(taskId) {
    let newTasks = [];
    this.tasks.forEach((task) => {
      if (task.id != taskId) {
        newTasks.push(task);
      }
    });
    this.tasks = newTasks;
  }
}

module.exports = TaskManager;
