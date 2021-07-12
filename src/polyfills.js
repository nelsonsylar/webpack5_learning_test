import 'babel-polyfill';
import 'whatwg-fetch';
/**
 * polyfills 虽然是一种模块引入方式，但是并不推荐在主 bundle 中引入 polyfills，
 * 因为这不利于具备这些模块功能的现代浏览器用户，会使他们下载体积很大、但却不需要的脚本文件。
 * 所以单独以另外一个文件来引入
 */