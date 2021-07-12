import _ from 'lodash';
import Print from './print'
function component() {
  console.log('add a console')
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack','edited'], ' ');
  element.onclick = Print.bind(null,'Hello webpack')
  return element
}

document.body.appendChild(component());