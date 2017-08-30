'use strict';

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  head.appendChild(style);
  
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  return returnValue;
}

App({
    __pages: {},
    __run: function __run(id) {
        this.__pages[id]();
    },
    onLaunch: function onLaunch() {}
});

__page(0)({
    pageName: 'index',
    onReady: function onReady() {
        console.log('index');
    }
});

__page(1)({
    pageName: 'detail',
    onReady: function onReady() {
        console.log('detail');
    }
});
function __page(routeIndex) {
    return function(e) {
        getApp().__pages[routeIndex] = function() {
            Page(e)
        }
    }
};
