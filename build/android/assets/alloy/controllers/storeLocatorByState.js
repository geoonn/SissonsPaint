function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){function e(i){for(var o=[],r=Titanium.UI.createTableView({width:"100%",height:PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight)-160,separatorColor:"#ffffff",backgroundColor:"#FFFFFF",top:0,overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),n=0;n<i.length;n++){var _=Titanium.UI.createTableViewRow({layout:"vertical",touchEnabled:!1,backgroundSelectedColor:"transparent",id:i[n].id,backgroundColor:"#FFFFFF"}),s=t.UI.create("Label",{text:i[n].outlet,id:i[n].id,color:"black",font:{fontSize:22},width:"auto",textAlign:"left",left:20,bottom:10});if(""!=i[n].address)var d=Titanium.UI.createLabel({text:i[n].address,id:i[n].id,width:"auto",color:"#848484",textAlign:"left",left:20,bottom:10});var c=Titanium.UI.createView({layout:"horizontal",width:"100%"}),u=Titanium.UI.createView({layout:"vertical",width:"80%"});""==i[n].mobile&&(i[n].mobile="-");var h=Titanium.UI.createLabel({text:"TEL: "+i[n].mobile,id:i[n].id,width:"auto",color:"#848484",textAlign:"left",left:20});if(""==i[n].fax||null==i[n].fax);else var w=Titanium.UI.createLabel({text:"FAX: "+i[n].fax,id:i[n].id,width:"auto",color:"#848484",textAlign:"left",left:20});if(""==i[n].email||null==i[n].email);else{console.log("email"+i[n].email),console.log("email length"+i[n].email.length);var v=Titanium.UI.createLabel({text:"E-mail: "+i[n].email,id:i[n].id,width:"auto",color:"#848484",textAlign:"left",left:20})}switch(i[n].category){case 1:var g="Branches";break;case 2:var g="Stockists";break;case 3:var g="Dealers"}Titanium.UI.createLabel({text:g,id:i[n].id,width:"auto",color:"#848484",textAlign:"left",left:20});var I=Titanium.UI.createImageView({image:"/images/icon_store.png",width:40,height:40,right:20,zIndex:n});I.addEventListener("click",function(e){console.log("right button pressed"),console.log("outlet: "+i[e.source.zIndex].outlet),console.log("address: "+i[e.source.zIndex].address),""==i[e.source.zIndex].latitude||""==i[e.source.zIndex].longitude?(NavigateTo(0,0,i[e.source.zIndex].outlet,i[e.source.zIndex].address),console.log("null")):(NavigateTo(i[e.source.zIndex].latitude,i[e.source.zIndex].longitude,i[e.source.zIndex].outlet,i[e.source.zIndex].address),console.log("latitude: "+i[e.source.zIndex].latitude),console.log("longitude: "+i[e.source.zIndex].longitude),console.log("!null"))});var y=Titanium.UI.createImageView({width:Titanium.UI.FILL,height:30,touchEnabled:!1,image:"/images/scroll_up.png"});n>0&&_.add(y),_.add(s),""!=i[n].address&&u.add(d),u.add(h),""==i[n].fax||null==i[n].fax||u.add(w),""==i[n].email||null==i[n].email||u.add(v),c.add(u),c.add(I),_.add(c),o.push(_)}var p=Titanium.UI.createView({layout:"composite",width:"100%",height:80,bottom:0,backgroundColor:"#A5A5A5"}),m=Ti.UI.createLabel({text:"Enter Colour, Name or Colour Code",color:"#A5A5A5",font:{fontSize:14},backgroundColor:"transparent"}),T=Ti.UI.createTextField({borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,color:"black",hintText:"Enter Search Query",backgroundColor:"white",borderColor:"#A5A5A5",borderRadius:5,font:m.font,left:10,top:10,width:"70%",height:60}),f=Ti.UI.createButton({backgroundColor:"white",color:"#A5A5A5",textAlign:"Titanium.UI.TEXT_ALIGNMENT_CENTER",title:"SEARCH",borderColor:"#A5A5A5",borderRadius:5,left:5,top:10,height:60}),b=Titanium.UI.createView({layout:"horizontal"});r.setData(o),t.tableContainer.add(r),b.add(T),b.add(f),p.add(b),t.tableContainer.add(p),f.addEventListener("click",function(){Ti.UI.Android.hideSoftKeyboard(),0==T.value.length?(i=l.getStoreByState(a),e(i)):(i=l.getStoreByName(a,T.value),e(i))})}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="storeLocatorByState",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var t=this,i={};t.__views.storeLocatorByState=Ti.UI.createView({layout:"vertical",backgroundColor:"white",id:"storeLocatorByState"}),t.__views.storeLocatorByState&&t.addTopLevelView(t.__views.storeLocatorByState),t.__views.__alloyId96=Ti.UI.createView({layout:"horizontal",height:"80",id:"__alloyId96"}),t.__views.storeLocatorByState.add(t.__views.__alloyId96),t.__views.__alloyId97=Alloy.createController("toggle",{id:"__alloyId97",__parentSymbol:t.__views.__alloyId96}),t.__views.__alloyId97.setParent(t.__views.__alloyId96),t.__views.stateName=Ti.UI.createLabel({width:"75%",height:Ti.UI.SIZE,color:"black",font:{fontSize:22},id:"stateName",textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER}),t.__views.__alloyId96.add(t.__views.stateName),t.__views.tableContainer=Ti.UI.createView({backgroundColor:"white",id:"tableContainer",height:"auto"}),t.__views.storeLocatorByState.add(t.__views.tableContainer),i.destroy=function(){},_.extend(t,t.__views);var o=arguments[0]||{},a=o.state;Ti.App.Properties.setString("module","storeLocator");var l=Alloy.createCollection("storeLocator"),r=l.getStoreByState(a);e(r),t.stateName.text=a,NavigateTo=function(e,t,o,a){var l="geo:"+e+","+t+"?q="+o+" ("+a+")";if(Ti.Android)try{Ti.API.info("Trying to Launch via Intent");var r=Ti.Android.createIntent({action:Ti.Android.ACTION_VIEW,data:l});Ti.Android.currentActivity.startActivity(r)}catch(n){Ti.API.info("Caught Error launching intent: "+n),i.Install()}else Ti.Platform.canOpenURL(l)?Ti.Platform.openURL(l):i.Install()},_.extend(t,i)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;