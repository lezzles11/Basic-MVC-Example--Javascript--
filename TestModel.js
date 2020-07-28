const List = require("./model/model");

const list = new List();
list.add("hello");
list.seeAll();

list.edit(3, "change this");
console.log("3 should change to text - change this");
list.seeAll();

list.add("Whats up girl");
console.log("Should be okay ");
list.seeAll();

list.delete(1);
console.log("Should delete the item with id one");
list.seeAll();

list.toggle(2);
console.log("id 2 should be marked as done\n");
list.seeAll();
