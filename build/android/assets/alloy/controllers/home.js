function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="home",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var e=this,t={};e.__views.home=Ti.UI.createView({backgroundColor:"white",id:"home"}),e.__views.home&&e.addTopLevelView(e.__views.home),e.__views.__alloyId94=Ti.UI.createView({layout:"vertical",id:"__alloyId94"}),e.__views.home.add(e.__views.__alloyId94),e.__views.__alloyId95=Ti.UI.createView({layout:"horizontal",height:"80",id:"__alloyId95"}),e.__views.__alloyId94.add(e.__views.__alloyId95),e.__views.__alloyId96=Alloy.createController("toggle",{id:"__alloyId96",__parentSymbol:e.__views.__alloyId95}),e.__views.__alloyId96.setParent(e.__views.__alloyId95),e.__views.__alloyId97=Ti.UI.createLabel({width:"75%",height:Ti.UI.SIZE,color:"black",font:{fontSize:22},text:"Home",textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:"__alloyId97"}),e.__views.__alloyId95.add(e.__views.__alloyId97),t.destroy=function(){},_.extend(e,e.__views),arguments[0]||{},_.extend(e,t)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;