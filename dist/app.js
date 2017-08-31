"use strict";App({__pages:{},__run:function(n){this.__pages[n]()},onLaunch:function(){}}),__page(0)({pageName:"index",onReady:function(){}}),__page(1)({pageName:"detail",onReady:function(){}});
function __page(routeIndex) {
    return function(e) {
        getApp().__pages[routeIndex] = function() {
            Page(e)
        }
    }
};
