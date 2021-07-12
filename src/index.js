// 使用webpack的ProvidePlugin来全局使用lodash
function component() {
  var element = document.createElement('div');
  console.log(join)
  console.log(window.join)
  console.log(_)
  element.innerHTML = join(['Hello', 'join'], ' ');

  return element;
}

document.body.appendChild(component());