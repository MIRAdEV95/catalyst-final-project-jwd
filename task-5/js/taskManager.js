class TaskManager {
  constructor() {
    this.tasks = [];
    this.currentId=0;
  }

  addTask({name,description,assignedTo,dueDate,status}){
      this.currentId++;
    let task={id:this.currentId,name,description,assignedTo,dueDate,status:'TODO'}
    this.tasks.push(task);
  }
}
