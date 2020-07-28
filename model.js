/**********************************************
 * Describes the different ways you can change the data
 * ==================================
 ***********************************************/

/** # Planning #
/*  ================== */
// What does each object look like?
// What are the data structures you will be utilizing?
// What can you do to the data?
// What are the arguments? What will be passed in from view? (Usually just text, right)

class Model {
  constructor() {
    /** # Constructor #
/*  ================== */
    // An array of objects
    // each item has property id (number), text (string), complete(boolean)
    this.items = [
      { id: 1, text: "Create this example", complete: false },
      { id: 2, text: "Reevaluate my entire life", complete: false },
    ];
  }
  bindTodoListChanged(callback) {
    // function
    this.onTodoListChanged = callback;
  }

  _commit(items) {
    this.onTodoListChanged(items);
    localStorage.setItem("todos", JSON.stringify(item));
  }

  /** # Add an item  #
/*  ====================== */
  // The purpose of this method is to add a new item
  add(text) {
    //Create a new item with the needed variables
    const newItem = {
      // if the list is empty, then initialize the id with 1.
      id: this.items.length > 0 ? this.items[this.items.length - 1].id + 1 : 1,
      text: text,
      complete: false,
    };
    // Add it to the original array
    this.items.push(newItem);

    this._commit(this.items);
  }

  /** # Edits an Item  #
/*  ====================== */
  // The purpose of this method is to edit an item
  edit(id, newText) {
    this.items = this.items.map((item) =>
      // if the item id is equal to the passed in it
      item.id === id
        ? // then replace it with this object (text is new text)
          { id: item.id, text: newText, complete: item.complete }
        : // otherwise, keep the old item
          item
    );
    this._commit(this.items);
  }

  /** # Deletes an item  #
/*  ====================== */
  // The purpose of this method is to delete an item

  delete(id) {
    // this items now includes all items that dont have that passed in id
    this.items = this.items.filter((item) => item.id !== id);
    this._commit(this.items);
  }

  /** # Toggle an item  #
/*  ====================== */
  // The purpose of this method is to change the complete method to true / false
  toggle(id) {
    // Map each item
    this.items = this.items.map((item) =>
      // If the passed in id equals to the item id
      item.id === id
        ? // Everything stays the same, except the complete - adding ! in front of the value makes it opposite to what it is
          { id: item.id, text: item.text, complete: !item.complete }
        : // otherwise, return the item
          item
    );
    this._commit(this.items);
  }

  seeAll() {
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
    }
  }
}

export default Model;
