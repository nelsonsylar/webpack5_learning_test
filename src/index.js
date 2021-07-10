import _ from 'lodash'
function component() {
  var element = document.createElement('div');

  // Lodash通过npm包以es6的模块方式引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());