import GridCol from './components/Col'
import GridRow from './components/Row'
import GridBlock from './components/Block'
import GridTouch from './components/Touch'
import GridText from './components/Text'

namespace Grid {
  export import Col = GridCol
  export import Row = GridRow
  export import Block = GridBlock
  export import Touch = GridTouch
  export import Text = GridText
}

export import Col = Grid.Col
export import Row = Grid.Row
export import Block = Grid.Block
export import Touch = Grid.Touch
export import Text = Grid.Text

export default Grid
