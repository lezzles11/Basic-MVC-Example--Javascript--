const Model = require("./model");
const Controller = require("./controller");
const View = require("./view");

const app = new Controller(new Model(), new View());

export default app;
