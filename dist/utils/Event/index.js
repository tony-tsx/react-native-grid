import accessibility from './accessibility';
import gesture from './gesture';
import scroll from './scroll';
import view from './view';
import touchable from './touchable';
var Event;
(function (Event) {
    Event.parsers = { accessibility, gesture, scroll, view, touchable };
})(Event || (Event = {}));
export default Event;
