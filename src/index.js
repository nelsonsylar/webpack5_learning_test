import { file, helpers } from './global.js'
function component() {
  var element = document.createElement('div');

  element.innerHTML = join(['Hello', 'join'], ' ');
  // Assume we are in the context of `window`
  console.log(file)
  console.log(helpers)
  return element;
}

document.body.appendChild(component());