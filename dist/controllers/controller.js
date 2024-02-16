"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayHello = void 0;
const sayHello = (req, res) => {
    res.json({ message: 'Hola desde el backend' });
};
exports.sayHello = sayHello;
