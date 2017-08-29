import h from 'snabbdom/h';
import patch from 'snabbdom/patch';
import {defaultsDeep, isString} from 'lodash';


const app = document.getElementById('app');

const sayHello = (event) => {
  event.preventDefault()
  alert("hello world")
}


var vnode = h('div#id.two.classes', [
  h('span', {
    on: {
      click: sayHello
    },
    style: {
      fontWeight: 'bold'
    }
  }, 'Click me'),
  ' and this is just normal text',
  h('a', {
    props: {
      href: 'http://google.com',
      target: '_blank'
    }
  }, ' I\'ll take you google!')
]);

patch(app, vnode);
