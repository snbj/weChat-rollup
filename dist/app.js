'use strict';

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
