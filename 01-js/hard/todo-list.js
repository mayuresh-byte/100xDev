/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor () {
    this.todoList = [];
  }

  add(todo) {
    this.todoList.push(todo);
    return this.todoList;
  }

  remove(indexOfTodo) {
    this.todoList.splice(indexOfTodo, 1);
    console.log(this.todoList);
    return this.todoList;
  }

  update(index, updatedTodo) {
    if(index >= this.todoList.length) {
      return this.todoList;
    } else {
      this.todoList.splice(index, 0, updatedTodo);
      return this.todoList;
    }
  }

  getAll() {
    return this.todoList;
  }
  
  get(indexOfTodo) {
    if(indexOfTodo >= this.todoList.length) {
      return null;
    } else {
      let ele = this.todoList[indexOfTodo];
      return ele;
    }
    
  }

  clear() {
    this.todoList.splice(0, this.todoList.length);
    return this.todoList;
  }

}

module.exports = Todo;
