function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function checkLoadStatus() {
        var loadStoreLocator = Ti.App.Properties.getString("loadStoreLocator");
        var loadBrochure = Ti.App.Properties.getString("loadBrochure");
        var loadColour = Ti.App.Properties.getString("loadColour");
        var loadCategory = Ti.App.Properties.getString("loadCategory");
        if ("1" == loadStoreLocator && "1" == loadBrochure && "1" == loadColour && "1" == loadCategory) {
            $.loadingBar.opacity = "0";
            var nav = Alloy.createController("diyPaint").getView();
            Alloy.Globals.Drawer.setCenterWindow(nav);
            Alloy.Globals.Drawer.setOpenDrawerGestureMode(module.OPEN_MODE_ALL);
        } else setTimeout(function() {
            checkLoadStatus();
        }, 500);
    }
    function toggle() {
        $.drawer["toggleLeftWindow"]();
    }
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
            navigation("favourite");
            break;

          case 4:
            navigation("brochure");
            break;

          case 5:
            navigation("storeLocator");
            break;

          case 6:
            navigation("aboutUs");
        }
    }
    function navigation(target) {
        var win = Alloy.createController(target).getView();
        Alloy.Globals.Drawer.setCenterWindow(win);
        Alloy.Globals.Drawer.closeLeftWindow();
    }
    function tnc() {
        var nav = Alloy.createController("tnc").getView();
        nav.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
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
    $.__views.mainWindow = require("xp.ui").createWindow({
        backgroundColor: "black",
        fullscreen: "true",
        title: "test",
        role: "leftWindow",
        id: "mainWindow"
    });
    $.__views.logo = Ti.UI.createImageView({
        id: "logo",
        image: "/images/menu_logo.png",
        width: "150",
        top: "30"
    });
    $.__views.mainWindow.add($.__views.logo);
    var __alloyId101 = [];
    $.__views.__alloyId102 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId102"
    });
    __alloyId101.push($.__views.__alloyId102);
    $.__views.__alloyId103 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "DIY Paint",
        left: "30",
        id: "__alloyId103"
    });
    $.__views.__alloyId102.add($.__views.__alloyId103);
    $.__views.__alloyId104 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId104"
    });
    __alloyId101.push($.__views.__alloyId104);
    $.__views.__alloyId105 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Colour Picker",
        left: "30",
        id: "__alloyId105"
    });
    $.__views.__alloyId104.add($.__views.__alloyId105);
    $.__views.__alloyId106 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId106"
    });
    __alloyId101.push($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Colour Swatches",
        left: "30",
        id: "__alloyId107"
    });
    $.__views.__alloyId106.add($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId108"
    });
    __alloyId101.push($.__views.__alloyId108);
    $.__views.__alloyId109 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Favourite Colour",
        left: "30",
        id: "__alloyId109"
    });
    $.__views.__alloyId108.add($.__views.__alloyId109);
    $.__views.__alloyId110 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId110"
    });
    __alloyId101.push($.__views.__alloyId110);
    $.__views.__alloyId111 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Brochure",
        left: "30",
        id: "__alloyId111"
    });
    $.__views.__alloyId110.add($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId112"
    });
    __alloyId101.push($.__views.__alloyId112);
    $.__views.__alloyId113 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "Store Locator",
        left: "30",
        id: "__alloyId113"
    });
    $.__views.__alloyId112.add($.__views.__alloyId113);
    $.__views.__alloyId114 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId114"
    });
    __alloyId101.push($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "white",
        text: "About Us",
        left: "30",
        id: "__alloyId115"
    });
    $.__views.__alloyId114.add($.__views.__alloyId115);
    $.__views.menuTable = Ti.UI.createTableView({
        data: __alloyId101,
        id: "menuTable",
        top: "100",
        separatorColor: "black",
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
    });
    $.__views.mainWindow.add($.__views.menuTable);
    doMenuClick ? $.__views.menuTable.addEventListener("click", doMenuClick) : __defers["$.__views.menuTable!click!doMenuClick"] = true;
    $.__views.tnc = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "white",
        font: {
            fontSize: 8
        },
        text: "TERM & CONDITIONS | 2014 COPYRIGHT",
        id: "tnc",
        bottom: "20"
    });
    $.__views.mainWindow.add($.__views.tnc);
    tnc ? $.__views.tnc.addEventListener("click", tnc) : __defers["$.__views.tnc!click!tnc"] = true;
    $.__views.centerWindow = require("xp.ui").createWindow({
        backgroundColor: "white",
        fullscreen: true,
        id: "centerWindow",
        role: "centerWindow"
    });
    $.__views.__alloyId116 = Ti.UI.createView({
        id: "__alloyId116"
    });
    $.__views.centerWindow.add($.__views.__alloyId116);
    $.__views.background = Ti.UI.createImageView({
        id: "background",
        image: "/images/background.jpg",
        bottom: "0",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL
    });
    $.__views.__alloyId116.add($.__views.background);
    $.__views.object = Ti.UI.createImageView({
        id: "object",
        image: "/images/object.png",
        bottom: "0"
    });
    $.__views.__alloyId116.add($.__views.object);
    $.__views.__alloyId117 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: "252px",
        backgroundColor: "transparent",
        bottom: "7%",
        id: "__alloyId117"
    });
    $.__views.__alloyId116.add($.__views.__alloyId117);
    $.__views.whiteLogo = Ti.UI.createView({
        id: "whiteLogo",
        height: "191px",
        top: "0",
        backgroundColor: "white",
        width: Ti.UI.FILL
    });
    $.__views.__alloyId117.add($.__views.whiteLogo);
    $.__views.label = Ti.UI.createImageView({
        id: "label",
        image: "/images/label.png",
        top: "0",
        right: "0",
        height: "252px"
    });
    $.__views.__alloyId117.add($.__views.label);
    $.__views.loadingBar = Ti.UI.createView({
        layout: "vertical",
        id: "loadingBar",
        height: "0",
        width: "120",
        borderRadius: "15",
        top: "0",
        opacity: "1",
        backgroundColor: "#2E2E2E"
    });
    $.__views.__alloyId116.add($.__views.loadingBar);
    $.__views.activityIndicator = Ti.UI.createActivityIndicator({
        style: Ti.UI.ActivityIndicatorStyle.BIG,
        top: 15,
        left: 30,
        width: 60,
        id: "activityIndicator"
    });
    $.__views.loadingBar.add($.__views.activityIndicator);
    $.__views.__alloyId118 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#ffffff",
        text: "Loading",
        id: "__alloyId118"
    });
    $.__views.loadingBar.add($.__views.__alloyId118);
    $.__views.drawer = Alloy.createWidget("nl.fokkezb.drawer", "widget", {
        openDrawerGestureMode: "OPEN_MODE_ALL",
        closeDrawerGestureMode: "CLOSE_MODE_MARGIN",
        leftDrawerWidth: 200,
        id: "drawer",
        children: [ $.__views.mainWindow, $.__views.centerWindow ]
    });
    $.__views.drawer && $.addTopLevelView($.__views.drawer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var pWidth = Ti.Platform.displayCaps.platformWidth;
    console.log(pWidth);
    $.whiteLogo.setOpacity(pWidth > 800 ? 1 : 0);
    $.drawer.open({
        navBarHidden: true,
        fullscreen: true
    });
    Ti.App.Properties.setString("module", "index");
    Ti.App.Properties.setString("from", "index");
    Ti.App.Properties.setString("loadStoreLocator", "0");
    Ti.App.Properties.setString("loadBrochure", "0");
    Ti.App.Properties.setString("loadColour", "0");
    Ti.App.Properties.setString("loadCategory", "0");
    var API = require("api");
    var drawerFlag = 0;
    $.activityIndicator.show();
    $.loadingBar.opacity = "1";
    $.loadingBar.height = "120";
    $.loadingBar.top = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) / 2 - $.loadingBar.getHeight() / 2;
    setTimeout(function() {
        API.loadStoreLocator();
        API.loadBrochure();
        API.loadColour();
        API.loadCategory();
        Alloy.Globals.Drawer.setOpenDrawerGestureMode(module.OPEN_MODE_NONE);
        checkLoadStatus();
    }, 500);
    Alloy.Globals.Drawer = $.drawer;
    $.drawer.addEventListener("android:back", function() {
        mod = Ti.App.Properties.getString("module");
        if ("storeLocator" == mod) {
            Ti.App.Properties.setString("module", "index");
            var nav = Alloy.createController("storeLocator").getView();
            Alloy.Globals.Drawer.setCenterWindow(nav);
        } else if ("search" == mod) {
            from = Ti.App.Properties.getString("from");
            Ti.App.Properties.setString("module", "index");
            var nav = Alloy.createController(from).getView();
            Alloy.Globals.Drawer.setCenterWindow(nav);
        } else if (1 == drawerFlag) {
            var dialog = Ti.UI.createAlertDialog({
                cancel: 1,
                buttonNames: [ "Cancel", "Confirm" ],
                message: "Would you like to exit Sissons Paint?",
                title: "Exit app"
            });
            dialog.addEventListener("click", function(e) {
                e.index === e.source.cancel;
                if (1 === e.index) {
                    var activity = Titanium.Android.currentActivity;
                    activity.finish();
                }
            });
            dialog.show();
        } else toggle();
    });
    $.drawer.addEventListener("windowDidOpen", function() {
        console.log("open");
        drawerFlag = 1;
    });
    $.drawer.addEventListener("windowDidClose", function() {
        $.destroy();
        drawerFlag = 0;
    });
    var module = require("dk.napp.drawer");
    __defers["$.__views.menuTable!click!doMenuClick"] && $.__views.menuTable.addEventListener("click", doMenuClick);
    __defers["$.__views.tnc!click!tnc"] && $.__views.tnc.addEventListener("click", tnc);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;