function toggle(){Alloy.Globals.Drawer.toggleLeftWindow()}function PixelsToDPUnits(e){return e/(Titanium.Platform.displayCaps.dpi/160)}function DPUnitsToPixels(e){return e*(Titanium.Platform.displayCaps.dpi/160)}function removeAllChildren(e){for(var t=e.children.slice(0),r=0;r<t.length;++r)e.remove(t[r])}function printDate(){var e=new Date,t=padStr(e.getFullYear())+padStr(1+e.getMonth())+padStr(e.getDate())+padStr(e.getHours())+padStr(e.getMinutes())+padStr(e.getSeconds());return t}function padStr(e){return 10>e?"0"+e:""+e}var Alloy=require("alloy"),_=Alloy._,Backbone=Alloy.Backbone;Alloy.createController("index");