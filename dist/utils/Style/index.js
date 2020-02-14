import React from 'react';
import styledParser from './parser';
var Style;
(function (Style) {
    Style.create = (Component, useClass) => {
        if (useClass)
            return (class extends React.Component {
                constructor() {
                    super(...arguments);
                    this.render = () => {
                        const { style, props } = Style.parser(this.props);
                        return <Component {...props} style={style}/>;
                    };
                }
            });
        return ((props) => {
            const { style, props: _props } = Style.parser(props);
            return <Component {..._props} style={style}/>;
        });
    };
    Style.parser = styledParser;
})(Style || (Style = {}));
export default Style;
