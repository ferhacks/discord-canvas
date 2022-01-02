const Greeting = require("./Base");

module.exports = class Welcome extends Greeting {
    constructor() {
        super();
        this.textTitle = "Bienvenido!";
        this.textMessage = "Se unio a {server}!";
        this.colorTitle = "#03A9F4";
    }
};
