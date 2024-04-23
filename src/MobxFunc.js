import { makeObservable, observable, action } from "mobx";

class CounterStore {
  toDoList = [];
  id = 0

  constructor() {
    makeObservable(this, {
      toDoList: observable,
      id: observable,
      addToDo: action,
      deleteToDo: action,
      completedToDo: action
    });
  }

  addToDo(refvalue) {
    this.id++
    this.toDoList.push({title: refvalue, id: this.id, completed: false})
  }
  deleteToDo(toDoId) {
    this.toDoList = this.toDoList.filter((toDo) => toDo.id !== toDoId)
  }
  completedToDo(toDoCompleted) {
    this.toDoList = this.toDoList.map((toDo) => {
        if (toDoCompleted === false) {
            return { ...toDo, completed: true };
        } if (toDoCompleted === true) {
            return { ...toDo, completed: false };
        }
    });
  }
}

export default new CounterStore();