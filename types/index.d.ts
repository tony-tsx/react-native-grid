import GridCol from './components/Col';
import GridRow from './components/Row';
declare namespace Grid {
    export import Col = GridCol;
    export import Row = GridRow;
}
export import Col = Grid.Col;
export import Row = Grid.Row;
export default Grid;
