function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function doMenuClick(e) {
        switch (e.index) {
          case 0:
            navigation("diyPaint");
            break;

          case 1:
            navigation("colourPicker");
            break;

          case 2:
            navigation("colourSwatches");
            break;

          case 3:
            navigation("brochure");
            break;

          case 4:
            navigation("storeLocator");
            break;

          case 5:
            navigation("aboutUs");
        }
    }
    function navigation(target) {
        var nav = Alloy.createController(target).getView();
        Alloy.CFG.contentView.add(nav);
        Alloy.CFG.drawer.toggleLeftWindow();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menu";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
<<<<<<< HEAD
    var __alloyId78 = [];
    $.__views.__alloyId79 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId79"
    });
    __alloyId78.push($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createLabel({
        text: "DIY Paint",
        width: Ti.UI.FILL,
        left: "10",
=======
    var __alloyId77 = [];
    $.__views.__alloyId78 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId78"
    });
    __alloyId77.push($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createLabel({
        text: "DIY Paint",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId79"
    });
    $.__views.__alloyId78.add($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createTableViewRow({
        height: "50",
>>>>>>> FETCH_HEAD
        id: "__alloyId80"
    });
    __alloyId77.push($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createLabel({
        text: "Colour Picker",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId81"
    });
    $.__views.__alloyId80.add($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId82"
    });
    __alloyId77.push($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createLabel({
        text: "Colour Swatches",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId83"
    });
    $.__views.__alloyId82.add($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId84"
    });
    __alloyId77.push($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createLabel({
        text: "Brochure",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId85"
    });
    $.__views.__alloyId84.add($.__views.__alloyId85);
    $.__views.__alloyId86 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId86"
    });
<<<<<<< HEAD
    __alloyId78.push($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createLabel({
        text: "Store Locator",
        width: Ti.UI.FILL,
        left: "10",
=======
    __alloyId77.push($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createLabel({
        text: "Store Locator",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId87"
    });
    $.__views.__alloyId86.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createTableViewRow({
        height: "50",
>>>>>>> FETCH_HEAD
        id: "__alloyId88"
    });
    __alloyId77.push($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createLabel({
        text: "About Us",
        width: Ti.UI.FILL,
        left: "10",
        id: "__alloyId89"
    });
<<<<<<< HEAD
    $.__views.__alloyId89.add($.__views.__alloyId90);
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId78,
=======
    $.__views.__alloyId88.add($.__views.__alloyId89);
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId77,
>>>>>>> FETCH_HEAD
        id: "menuTable",
        backgroundColor: "#3F3D3D"
    });
    $.__views.menuTable && $.addTopLevelView($.__views.menuTable);
    doMenuClick ? $.__views.menuTable.addEventListener("click", doMenuClick) : __defers["$.__views.menuTable!click!doMenuClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.menuTable!click!doMenuClick"] && $.__views.menuTable.addEventListener("click", doMenuClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;