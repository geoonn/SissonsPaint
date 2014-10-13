<<<<<<< HEAD
function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){function e(e){var t=Alloy.createController("storeLocatorByState",{state:e.source.title}).getView();Alloy.Globals.Drawer.setCenterWindow(t),Ti.API.info(e.source.title)}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="storeLocator",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var t=this,i={},o={};t.__views.mainWindow=Ti.UI.createView({id:"mainWindow",layout:"vertical",backgroundColor:"white",width:"100%"}),t.__views.mainWindow&&t.addTopLevelView(t.__views.mainWindow),t.__views.__alloyId70=Ti.UI.createView({layout:"horizontal",height:"80",id:"__alloyId70"}),t.__views.mainWindow.add(t.__views.__alloyId70),t.__views.__alloyId71=Alloy.createController("toggle",{id:"__alloyId71",__parentSymbol:t.__views.__alloyId70}),t.__views.__alloyId71.setParent(t.__views.__alloyId70),t.__views.__alloyId72=Ti.UI.createLabel({width:"75%",height:Ti.UI.SIZE,color:"black",font:{fontSize:28},text:"Store Locator",textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:"__alloyId72"}),t.__views.__alloyId70.add(t.__views.__alloyId72),t.__views.subWindow=Ti.UI.createView({id:"subWindow",layout:"vertical",width:"100%",backgroundColor:"white"}),t.__views.mainWindow.add(t.__views.subWindow),t.__views.row1=Ti.UI.createView({id:"row1",layout:"horizontal",height:Ti.UI.SIZE,width:"100%"}),t.__views.subWindow.add(t.__views.row1),t.__views.zoneA=Ti.UI.createButton({title:"Johor",id:"zoneA",width:"40%",left:"10%",top:"5%"}),t.__views.row1.add(t.__views.zoneA),e?t.__views.zoneA.addEventListener("click",e):o["$.__views.zoneA!click!listState"]=!0,t.__views.zoneB=Ti.UI.createButton({title:"Kedah",id:"zoneB",width:"40%",right:"10%",top:"5%"}),t.__views.row1.add(t.__views.zoneB),e?t.__views.zoneB.addEventListener("click",e):o["$.__views.zoneB!click!listState"]=!0,t.__views.row2=Ti.UI.createView({id:"row2",layout:"horizontal",height:Ti.UI.SIZE,width:"100%"}),t.__views.subWindow.add(t.__views.row2),t.__views.zoneC=Ti.UI.createButton({title:"Melaka",id:"zoneC",width:"40%",left:"10%",top:"5%"}),t.__views.row2.add(t.__views.zoneC),e?t.__views.zoneC.addEventListener("click",e):o["$.__views.zoneC!click!listState"]=!0,t.__views.zoneD=Ti.UI.createButton({title:"Negeri Sembilan",id:"zoneD",width:"40%",right:"10%",top:"5%"}),t.__views.row2.add(t.__views.zoneD),e?t.__views.zoneD.addEventListener("click",e):o["$.__views.zoneD!click!listState"]=!0,t.__views.row3=Ti.UI.createView({id:"row3",layout:"horizontal",height:Ti.UI.SIZE,width:"100%"}),t.__views.subWindow.add(t.__views.row3),t.__views.zoneE=Ti.UI.createButton({title:"Pahang",id:"zoneE",width:"40%",left:"10%",top:"5%"}),t.__views.row3.add(t.__views.zoneE),e?t.__views.zoneE.addEventListener("click",e):o["$.__views.zoneE!click!listState"]=!0,t.__views.zoneF=Ti.UI.createButton({title:"Penang",id:"zoneF",width:"40%",right:"10%",top:"5%"}),t.__views.row3.add(t.__views.zoneF),e?t.__views.zoneF.addEventListener("click",e):o["$.__views.zoneF!click!listState"]=!0,t.__views.row4=Ti.UI.createView({id:"row4",layout:"horizontal",height:Ti.UI.SIZE,width:"100%"}),t.__views.subWindow.add(t.__views.row4),t.__views.zoneG=Ti.UI.createButton({title:"Selangor",id:"zoneG",width:"40%",left:"10%",top:"5%"}),t.__views.row4.add(t.__views.zoneG),e?t.__views.zoneG.addEventListener("click",e):o["$.__views.zoneG!click!listState"]=!0,t.__views.zoneH=Ti.UI.createButton({title:"Wilayah Persekutuan",id:"zoneH",width:"40%",right:"10%",top:"5%"}),t.__views.row4.add(t.__views.zoneH),e?t.__views.zoneH.addEventListener("click",e):o["$.__views.zoneH!click!listState"]=!0,i.destroy=function(){},_.extend(t,t.__views),arguments[0]||{};var r=Alloy.createCollection("storeLocator");r.getStoreStateList(),o["$.__views.zoneA!click!listState"]&&t.__views.zoneA.addEventListener("click",e),o["$.__views.zoneB!click!listState"]&&t.__views.zoneB.addEventListener("click",e),o["$.__views.zoneC!click!listState"]&&t.__views.zoneC.addEventListener("click",e),o["$.__views.zoneD!click!listState"]&&t.__views.zoneD.addEventListener("click",e),o["$.__views.zoneE!click!listState"]&&t.__views.zoneE.addEventListener("click",e),o["$.__views.zoneF!click!listState"]&&t.__views.zoneF.addEventListener("click",e),o["$.__views.zoneG!click!listState"]&&t.__views.zoneG.addEventListener("click",e),o["$.__views.zoneH!click!listState"]&&t.__views.zoneH.addEventListener("click",e),_.extend(t,i)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;
=======
function Controller() {
    function generateStoreTable(details) {
        var data = [];
        var TheTable = Titanium.UI.createTableView({
            width: "100%",
            separatorColor: "#ffffff",
            backgroundColor: "#fffff6"
        });
        for (var i = 0; details.length > i; i++) {
            var row = Titanium.UI.createTableViewRow({
                touchEnabled: true,
                height: 50,
                id: details[i].state,
                backgroundSelectedColor: "#FFE1E1",
                backgroundColor: "#ECF6CE"
            });
            var category_name = $.UI.create("Label", {
                text: details[i].state,
                id: details[i].state,
                color: "#848484",
                width: "auto",
                textAlign: "left",
                left: 20
            });
            var rightForwardBtn = Titanium.UI.createImageView({
                image: "/images/btn-forward.png",
                id: details[i].state,
                width: 15,
                height: 15,
                right: 20,
                top: 20
            });
            row.add(category_name);
            row.add(rightForwardBtn);
            data.push(row);
        }
        TheTable.setData(data);
        addClickEvent(TheTable);
        $.table2Container.add(TheTable);
    }
    function addClickEvent(table) {
        table.addEventListener("click", function(e) {
            var nav = Alloy.createController("storeLocatorByState", {
                state: e.source.id
            }).getView();
            Alloy.Globals.Drawer.setCenterWindow(nav);
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "storeLocator";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.table2Container = Ti.UI.createView({
        backgroundColor: "#ffffff",
        id: "table2Container",
        height: "auto"
    });
    $.__views.table2Container && $.addTopLevelView($.__views.table2Container);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var library = Alloy.createCollection("storeLocator");
    var details = library.getStoreStateList();
    generateStoreTable(details);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
>>>>>>> FETCH_HEAD
