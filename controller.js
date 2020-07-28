/**********************************************
 * This class connects the view with the model
 * ==================================
 ***********************************************/

class Controller {
  /** # Constructor #
/*  ====================== */
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Get the items from the model
    this.onTodoListChanged(this.model.items);

    // Binding the view to the methods
    this.view.bindAddTodo(this.handleAddTodo);
    this.view.bindEditTodo(this.handleEditTodo);
    this.view.bindDeleteTodo(this.handleDeleteTodo);
    this.view.bindToggleTodo(this.handleToggleTodo);
  }

  /** # initial display of data #
/*  ====================== */
  onTodoListChanged = (todos) => {
    this.view.displayTodos(todos);
  };
  /** # handle add #
/*  ====================== */

  handleAddTodo = (todoText) => {
    this.model.add(todoText);
  };

  /** # handle edit #
/*  ====================== */

  handleEditTodo = (id, todoText) => {
    this.model.edit(id, todoText);
  };

  /** # handle delete #
/*  ====================== */
  handleDeleteTodo = (id) => {
    this.model.delete(id);
  };

  /** # handle toggle #
/*  ====================== */
  handleToggleTodo = (id) => {
    this.model.toggle(id);
  };
}

export default Controller;
