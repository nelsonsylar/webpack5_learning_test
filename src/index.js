import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  // Lodash通过npm包以es6的模块方式引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
