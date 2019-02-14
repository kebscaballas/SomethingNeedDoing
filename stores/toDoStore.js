import { observable } from mobx;

export default class ToDoStore {
  @observable toDoList = [];

  addToDo(task) {
    this.toDoList.push({
      title: task.title,
      description: task.description,
      dateAdded: task.dateAdded
    });
  }
}