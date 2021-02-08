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

  createTaskHtml = ({ name, description, assignedTo, dueDate, status }) => {
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
    const html = `<div class="card text mb-3">
      <h5 class="card-header">${name}</h5>
      <div class="card-body">
          <div class="card-text">
              <ul>
                  <li>Description: ${description}</li>
                  <li> Assigned To: ${assignedTo}</li>
                  <li>Due Date: ${dueDate}</li>
                  <button type="button" class="btn btn-primary btn-sm">${status}</button>
                

              </ul>
          </div>
      </div>
  </div>
      `;
    return html;
  };

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
}