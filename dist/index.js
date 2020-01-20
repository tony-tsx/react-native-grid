"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Col_1 = __importDefault(require("./components/Col"));
const Row_1 = __importDefault(require("./components/Row"));
var Grid;
(function (Grid) {
    Grid.Col = Col_1.default;
    Grid.Row = Row_1.default;
})(Grid || (Grid = {}));
module.exports = Grid;
