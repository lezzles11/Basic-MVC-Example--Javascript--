// pretty much like the data of the entire application - how is the data utilized, moved?

class Model {
  constructor() {
    this.items = [
      { id: 1, text: "Create this example", complete: false },
      { id: 2, text: "Reevaluate my entire life", complete: false },
    ];
  }

  // The purpose of this method is to add a new item
  add(item) {
    //Create a new item with the needed variables
    const newItem = {
      // if the list is empty, then initialize the id with 1.
      id: this.items.length > 0 ? this.items[this.items.length - 1].id + 1 : 1,
      text: item,
      complete: false,
    };
    // Add it to the original array
    this.items.push(newItem);
  }
}
