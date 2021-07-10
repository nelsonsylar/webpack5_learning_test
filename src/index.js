import _ from 'lodash'
import printMe from './print'
function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button')

  // Lodash通过npm包以es6的模块方式引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());