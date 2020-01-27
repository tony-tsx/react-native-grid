import React from 'react';
import { ScrollView } from 'react-native';
import Style from '../utils/Style';
import Event from '../utils/Event';
class Scroll extends React.Component {
    constructor() {
        super(...arguments);
        this.render = () => {
            const { children, indicator, style, horizontal, on, ...rest } = this.props;
            const { style: containerStyle } = Style.parser(rest);
            const scrollProps = {};
            if (on)
                Object.assign(scrollProps, Event.parsers.scroll(on));
            scrollProps.style = style;
            scrollProps.contentContainerStyle = containerStyle;
            if (indicator) {
                if (typeof indicator === 'string')
                    scrollProps.indicatorStyle = indicator;
            }
            else {
                scrollProps.showsHorizontalScrollIndicator = false;
                scrollProps.showsVerticalScrollIndicator = false;
            }
            if (horizontal)
                scrollProps.horizontal = true;
            scrollProps.onAccessibilityAction;
            return (<ScrollView contentContainerStyle={style} {...scrollProps}>
        {children}
      </ScrollView>);
        };
    }
}
Scroll.defaultProps = {
    indicator: false
};
export default Scroll;
