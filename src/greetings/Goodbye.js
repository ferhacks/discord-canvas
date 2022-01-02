const Greeting = require("./Base");

module.exports = class Goodbye extends Greeting {
    constructor() {
        super();
        this.textTitle = "Hasta luego!";
        this.textMessage = "Dejando {server}";
        this.colorTitle = "#df0909";
    }
};
