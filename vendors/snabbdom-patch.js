import snabbdom from 'snabbdom/snabbdom';
import snabbdomClass from 'snabbdom/modules/class';                   // makes it easy to toggle classes
import snabbdomProps from 'snabbdom/modules/props';                   // for setting properties on DOM elements
import snabbdomAtrributes from 'snabbdom/modules/attributes';
import snabbdomStyle from 'snabbdom/modules/style';           // handles styling on elements with j2c
import snabbdomEventlisteners from 'snabbdom/modules/eventlisteners'; // attaches event listeners
export default snabbdom.init([snabbdomClass, snabbdomProps, snabbdomAtrributes, snabbdomStyle, snabbdomEventlisteners]);
