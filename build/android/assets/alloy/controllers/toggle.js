<<<<<<< HEAD
function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){function e(){Alloy.Globals.Drawer.toggleLeftWindow()}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="toggle",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var t=this,i={},o={};t.__views.toggle=Ti.UI.createImageView({id:"toggle",image:"/images/menu_toggle.png",left:"0",top:"10",height:"60",width:"50"}),t.__views.toggle&&t.addTopLevelView(t.__views.toggle),e?t.__views.toggle.addEventListener("click",e):o["$.__views.toggle!click!menuToggle"]=!0,i.destroy=function(){},_.extend(t,t.__views),o["$.__views.toggle!click!menuToggle"]&&t.__views.toggle.addEventListener("click",e),_.extend(t,i)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;
=======
function Controller() {
    function menuToggle() {
        Alloy.Globals.Drawer["toggleLeftWindow"]();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "toggle";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.toggle = Ti.UI.createImageView({
        id: "toggle",
        image: "/images/menu_toggle.png",
        left: "0",
        top: "10",
        height: "60",
        width: "50"
    });
    $.__views.toggle && $.addTopLevelView($.__views.toggle);
    menuToggle ? $.__views.toggle.addEventListener("click", menuToggle) : __defers["$.__views.toggle!click!menuToggle"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.toggle!click!menuToggle"] && $.__views.toggle.addEventListener("click", menuToggle);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
>>>>>>> FETCH_HEAD
