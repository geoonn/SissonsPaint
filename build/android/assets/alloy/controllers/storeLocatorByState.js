function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){function e(e){for(var i=[],o=Titanium.UI.createTableView({width:"100%",separatorColor:"#ffffff",backgroundColor:"#FFFFFF",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),a=0;a<e.length;a++){var l=Titanium.UI.createTableViewRow({layout:"vertical",touchEnabled:!1,selectedBackgroundColor:"transparent",id:e[a].id,backgroundColor:"#FFFFFF"}),r=t.UI.create("Label",{text:e[a].outlet,id:e[a].id,color:"black",font:{fontSize:22},width:"auto",textAlign:"left",left:20,bottom:10});if(""!=e[a].address)var _=Titanium.UI.createLabel({text:e[a].address,id:e[a].id,width:"auto",color:"#848484",textAlign:"left",left:20,bottom:10});var n=Titanium.UI.createView({layout:"horizontal",width:"100%"}),s=Titanium.UI.createView({layout:"vertical",width:"80%"});""==e[a].mobile&&(e[a].mobile="-");var d=Titanium.UI.createLabel({text:"TEL: "+e[a].mobile,id:e[a].id,width:"auto",color:"#848484",textAlign:"left",left:20});if(""==e[a].fax||null==e[a].fax);else var c=Titanium.UI.createLabel({text:"FAX: "+e[a].fax,id:e[a].id,width:"auto",color:"#848484",textAlign:"left",left:20});if(""==e[a].email||null==e[a].email);else{console.log("email"+e[a].email),console.log("email length"+e[a].email.length);var h=Titanium.UI.createLabel({text:"E-mail: "+e[a].email,id:e[a].id,width:"auto",color:"#848484",textAlign:"left",left:20})}switch(e[a].category){case 1:var u="Branches";break;case 2:var u="Stockists";break;case 3:var u="Dealers"}Titanium.UI.createLabel({text:u,id:e[a].id,width:"auto",color:"#848484",textAlign:"left",left:20});var w=Titanium.UI.createImageView({image:"/images/icon_store.png",width:40,height:40,right:20});w.addEventListener("click",function(){NavigateTo("3.160146","101.615076","Menara UAC","12, Jalan PJU 7/5 Mutiara Damansara 47820 Petaling Jaya, Selangor")});var I=Titanium.UI.createImageView({width:Titanium.UI.FILL,height:30,touchEnabled:!1,image:"/images/scroll_up.png"});a>0&&l.add(I),l.add(r),""!=e[a].address&&s.add(_),s.add(d),""==e[a].fax||null==e[a].fax||s.add(c),""==e[a].email||null==e[a].email||s.add(h),n.add(s),n.add(w),l.add(n),i.push(l)}o.setData(i),t.tableContainer.add(o)}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="storeLocatorByState",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var t=this,i={};t.__views.storeLocatorByState=Ti.UI.createView({layout:"vertical",backgroundColor:"white",id:"storeLocatorByState"}),t.__views.storeLocatorByState&&t.addTopLevelView(t.__views.storeLocatorByState),t.__views.__alloyId94=Ti.UI.createView({layout:"horizontal",height:"80",id:"__alloyId94"}),t.__views.storeLocatorByState.add(t.__views.__alloyId94),t.__views.__alloyId95=Alloy.createController("toggle",{id:"__alloyId95",__parentSymbol:t.__views.__alloyId94}),t.__views.__alloyId95.setParent(t.__views.__alloyId94),t.__views.stateName=Ti.UI.createLabel({width:"75%",height:Ti.UI.SIZE,color:"black",font:{fontSize:22},id:"stateName",textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER}),t.__views.__alloyId94.add(t.__views.stateName),t.__views.tableContainer=Ti.UI.createView({backgroundColor:"white",id:"tableContainer",height:"auto"}),t.__views.storeLocatorByState.add(t.__views.tableContainer),i.destroy=function(){},_.extend(t,t.__views);var o=arguments[0]||{},a=o.state;Ti.App.Properties.setString("module","storeLocator");var l=Alloy.createCollection("storeLocator"),r=l.getStoreByState(a);e(r),t.stateName.text=a,NavigateTo=function(e,t,o,a){var l="geo:"+e+","+t+"?q="+o+" ("+a+")";if(Ti.Android)try{Ti.API.info("Trying to Launch via Intent");var r=Ti.Android.createIntent({action:Ti.Android.ACTION_VIEW,data:l});Ti.Android.currentActivity.startActivity(r)}catch(_){Ti.API.info("Caught Error launching intent: "+_),i.Install()}else Ti.Platform.canOpenURL(l)?Ti.Platform.openURL(l):i.Install()},_.extend(t,i)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;