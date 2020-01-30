import GridAnimation from './components/Animation'
import GridBlock from './components/Block'
import GridGradient from './components/Gradient'
import GridScroll from './components/Scroll'
import GridText from './components/Text'
import GridTouch from './components/Touch'

import GridStyle from './utils/Style'

namespace Grid {
  export import Block = GridBlock
  export import Touch = GridTouch
  export import Text = GridText
  export import Animation = GridAnimation
  export import Style = GridStyle
  export import Scroll = GridScroll
  export import Gradient = GridGradient
}

export import Block = Grid.Block
export import Touch = Grid.Touch
export import Text = Grid.Text
export import Animation = Grid.Animation
export import Style = Grid.Style
export import Scroll = Grid.Scroll
export import Gradient = Grid.Gradient

export default Grid
