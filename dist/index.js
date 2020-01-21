import GridCol from './components/Col';
import GridRow from './components/Row';
import GridBlock from './components/Block';
import GridTouch from './components/Touch';
import GridText from './components/Text';
var Grid;
(function (Grid) {
    Grid.Col = GridCol;
    Grid.Row = GridRow;
    Grid.Block = GridBlock;
    Grid.Touch = GridTouch;
    Grid.Text = GridText;
})(Grid || (Grid = {}));
export var Col = Grid.Col;
export var Row = Grid.Row;
export var Block = Grid.Block;
export var Touch = Grid.Touch;
export var Text = Grid.Text;
export default Grid;
