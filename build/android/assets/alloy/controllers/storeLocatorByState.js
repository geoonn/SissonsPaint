function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){function e(i){for(var o=[],l=Titanium.UI.createTableView({width:"100%",height:PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight)-160,separatorColor:"#ffffff",backgroundColor:"#FFFFFF",top:0,overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),n=0;n<i.length;n++){var _=Titanium.UI.createTableViewRow({layout:"vertical",touchEnabled:!1,backgroundSelectedColor:"transparent",id:i[n].id,backgroundColor:"#FFFFFF"}),s=t.UI.create("Label",{text:i[n].outlet,id:i[n].id,color:"black",font:{fontSize:22},width:"auto",textAlign:"left",left:20,bottom:10});if(""!=i[n].address)var d=Titanium.UI.createLabel({text:i[n].address,id:i[n].id,width:"auto",color:"#848484",textAlign:"left",left:20,bottom:10});var c=Titanium.UI.createView({layout:"horizontal",width:"100%"}),h=Titanium.UI.createView({layout:"vertical",width:"80%"});""==i[n].mobile&&(i[n].mobile="-");var w=Titanium.UI.createLabel({text:"TEL: "+i[n].mobile,id:i[n].id,width:"auto",color:"#848484",textAlign:"left",left:20});if(""==i[n].fax||null==i[n].fax);else var u=Titanium.UI.createLabel({text:"FAX: "+i[n].fax,id:i[n].id,width:"auto",color:"#848484",textAlign:"left",left:20});if(""==i[n].email||null==i[n].email);else{console.log("email"+i[n].email),console.log("email length"+i[n].email.length);var v=Titanium.UI.createLabel({text:"E-mail: "+i[n].email,id:i[n].id,width:"auto",color:"#848484",textAlign:"left",left:20})}switch(i[n].category){case 1:var g="Branches";break;case 2:var g="Stockists";break;case 3:var g="Dealers"}Titanium.UI.createLabel({text:g,id:i[n].id,width:"auto",color:"#848484",textAlign:"left",left:20});var I=Titanium.UI.createImageView({image:"/images/icon_store.png",width:40,height:40,right:20,zIndex:n});I.addEventListener("click",function(e){""==i[e.source.zIndex].latitude||""==i[e.source.zIndex].longitude?NavigateTo(0,0,i[e.source.zIndex].outlet,i[e.source.zIndex].address):NavigateTo(i[e.source.zIndex].latitude,i[e.source.zIndex].longitude,i[e.source.zIndex].outlet,i[e.source.zIndex].address)});var y=Titanium.UI.createImageView({width:Titanium.UI.FILL,height:30,touchEnabled:!1,image:"/images/scroll_up.png"});n>0&&_.add(y),_.add(s),""!=i[n].address&&h.add(d),h.add(w),""==i[n].fax||null==i[n].fax||h.add(u),""==i[n].email||null==i[n].email||h.add(v),c.add(h),c.add(I),_.add(c),o.push(_)}var m=Titanium.UI.createView({layout:"composite",width:"100%",height:80,bottom:0,backgroundColor:"#A5A5A5"}),T=Ti.UI.createLabel({text:"Enter Colour, Name or Colour Code",color:"#A5A5A5",font:{fontSize:14},backgroundColor:"transparent"}),p=Ti.UI.createTextField({borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,color:"black",hintText:"Enter Search Query",backgroundColor:"white",borderColor:"#A5A5A5",borderRadius:5,font:T.font,left:10,top:10,width:"70%",height:60}),f=Ti.UI.createButton({backgroundColor:"white",color:"#A5A5A5",textAlign:"Titanium.UI.TEXT_ALIGNMENT_CENTER",title:"SEARCH",borderColor:"#A5A5A5",borderRadius:5,left:5,top:10,height:60}),b=Titanium.UI.createView({layout:"horizontal"});l.setData(o),t.tableContainer.add(l),b.add(p),b.add(f),m.add(b),t.tableContainer.add(m),f.addEventListener("click",function(){Ti.UI.Android.hideSoftKeyboard(),0==p.value.length?(i=r.getStoreByState(a),e(i)):(i=r.getStoreByName(a,p.value),e(i))})}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="storeLocatorByState",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var t=this,i={};t.__views.storeLocatorByState=Ti.UI.createView({layout:"vertical",backgroundColor:"white",id:"storeLocatorByState"}),t.__views.storeLocatorByState&&t.addTopLevelView(t.__views.storeLocatorByState),t.__views.__alloyId110=Ti.UI.createView({layout:"horizontal",height:"80",id:"__alloyId110"}),t.__views.storeLocatorByState.add(t.__views.__alloyId110),t.__views.__alloyId111=Alloy.createController("toggle",{id:"__alloyId111",__parentSymbol:t.__views.__alloyId110}),t.__views.__alloyId111.setParent(t.__views.__alloyId110),t.__views.stateName=Ti.UI.createLabel({width:"75%",height:Ti.UI.SIZE,color:"black",font:{fontSize:22},id:"stateName",textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER}),t.__views.__alloyId110.add(t.__views.stateName),t.__views.tableContainer=Ti.UI.createView({backgroundColor:"white",id:"tableContainer",height:"auto"}),t.__views.storeLocatorByState.add(t.__views.tableContainer),i.destroy=function(){},_.extend(t,t.__views);var o=arguments[0]||{},a=o.state;Ti.App.Properties.setString("module","storeLocator");var r=Alloy.createCollection("storeLocator"),l=r.getStoreByState(a);e(l),t.stateName.text=a,NavigateTo=function(e,t,o,a){var r="geo:"+e+","+t+"?q="+o+" ("+a+")";if(Ti.Android)try{Ti.API.info("Trying to Launch via Intent");var l=Ti.Android.createIntent({action:Ti.Android.ACTION_VIEW,data:r});Ti.Android.currentActivity.startActivity(l)}catch(n){Ti.API.info("Caught Error launching intent: "+n),i.Install()}else Ti.Platform.canOpenURL(r)?Ti.Platform.openURL(r):i.Install()},_.extend(t,i)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;