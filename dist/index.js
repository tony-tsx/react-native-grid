import GridCol from './components/Col';
import GridRow from './components/Row';
var Grid;
(function (Grid) {
    Grid.Col = GridCol;
    Grid.Row = GridRow;
})(Grid || (Grid = {}));
export var Col = Grid.Col;
export var Row = Grid.Row;
export default Grid;
