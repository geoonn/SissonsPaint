function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.home = Ti.UI.createView({
        backgroundColor: "white",
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
<<<<<<< HEAD
    $.__views.__alloyId35 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId35"
    });
    $.__views.home.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId36"
    });
    $.__views.__alloyId35.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Alloy.createController("toggle", {
        id: "__alloyId37",
        __parentSymbol: $.__views.__alloyId36
    });
    $.__views.__alloyId37.setParent($.__views.__alloyId36);
    $.__views.__alloyId38 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId28 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId28"
    });
    $.__views.home.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Alloy.createController("toggle", {
        id: "__alloyId30",
        __parentSymbol: $.__views.__alloyId29
    });
    $.__views.__alloyId30.setParent($.__views.__alloyId29);
    $.__views.__alloyId31 = Ti.UI.createLabel({
=======
    $.__views.__alloyId30 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId30"
    });
    $.__views.home.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Alloy.createController("toggle", {
        id: "__alloyId32",
        __parentSymbol: $.__views.__alloyId31
    });
    $.__views.__alloyId32.setParent($.__views.__alloyId31);
    $.__views.__alloyId33 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 28
        },
        text: "Home",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
<<<<<<< HEAD
        id: "__alloyId38"
    });
    $.__views.__alloyId36.add($.__views.__alloyId38);
=======
<<<<<<< HEAD
        id: "__alloyId31"
    });
    $.__views.__alloyId29.add($.__views.__alloyId31);
=======
        id: "__alloyId33"
    });
    $.__views.__alloyId31.add($.__views.__alloyId33);
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;