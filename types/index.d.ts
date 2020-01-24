import GridCol from './components/Col';
import GridRow from './components/Row';
import GridBlock from './components/Block';
import GridTouch from './components/Touch';
import GridText from './components/Text';
import GridCircle from './components/Circle';
import GridAnimation from './components/Animation';
import GridStyled from './utils/Styled';
declare namespace Grid {
    export import Col = GridCol;
    export import Row = GridRow;
    export import Block = GridBlock;
    export import Touch = GridTouch;
    export import Text = GridText;
    export import Circle = GridCircle;
    export import Animation = GridAnimation;
    export import Styled = GridStyled;
}
export import Col = Grid.Col;
export import Row = Grid.Row;
export import Block = Grid.Block;
export import Touch = Grid.Touch;
export import Text = Grid.Text;
export import Circle = Grid.Circle;
export import Animation = Grid.Animation;
export import Styled = Grid.Styled;
export default Grid;
