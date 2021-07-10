import _ from 'lodash'
import printMe from './print'
function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button')

  // Lodash通过npm包以es6的模块方式引入
  element.innerHTML = _.join(['Hello', 'webpack','test1'], ' ');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}