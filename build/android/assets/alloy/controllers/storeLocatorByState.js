function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){function e(i){for(var o=[],r=Titanium.UI.createTableView({width:"100%",height:PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight)-160,separatorColor:"#ffffff",backgroundColor:"#FFFFFF",top:0,overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),_=0;_<i.length;_++){var n=Titanium.UI.createTableViewRow({layout:"vertical",touchEnabled:!1,backgroundSelectedColor:"transparent",id:i[_].id,backgroundColor:"#FFFFFF"}),s=t.UI.create("Label",{text:i[_].outlet,id:i[_].id,color:"black",font:{fontSize:22},width:"auto",textAlign:"left",left:20,bottom:10});if(""!=i[_].address)var d=Titanium.UI.createLabel({text:i[_].address,id:i[_].id,width:"auto",color:"#848484",textAlign:"left",left:20,bottom:10});var c=Titanium.UI.createView({layout:"horizontal",width:"100%"}),w=Titanium.UI.createView({layout:"vertical",width:"80%"});""==i[_].mobile&&(i[_].mobile="-");var h=Titanium.UI.createLabel({text:"TEL: "+i[_].mobile,id:i[_].id,width:"auto",color:"#848484",textAlign:"left",left:20});if(""==i[_].fax||null==i[_].fax);else var u=Titanium.UI.createLabel({text:"FAX: "+i[_].fax,id:i[_].id,width:"auto",color:"#848484",textAlign:"left",left:20});if(""==i[_].email||null==i[_].email);else{console.log("email"+i[_].email),console.log("email length"+i[_].email.length);var v=Titanium.UI.createLabel({text:"E-mail: "+i[_].email,id:i[_].id,width:"auto",color:"#848484",textAlign:"left",left:20})}switch(i[_].category){case 1:var I="Branches";break;case 2:var I="Stockists";break;case 3:var I="Dealers"}Titanium.UI.createLabel({text:I,id:i[_].id,width:"auto",color:"#848484",textAlign:"left",left:20});var g=Titanium.UI.createImageView({image:"/images/icon_store.png",width:40,height:40,right:20,zIndex:_});g.addEventListener("click",function(e){""==i[e.source.zIndex].latitude||""==i[e.source.zIndex].longitude?NavigateTo(0,0,i[e.source.zIndex].outlet,i[e.source.zIndex].address):NavigateTo(i[e.source.zIndex].latitude,i[e.source.zIndex].longitude,i[e.source.zIndex].outlet,i[e.source.zIndex].address)});var y=Titanium.UI.createImageView({width:Titanium.UI.FILL,height:30,touchEnabled:!1,image:"/images/scroll_up.png"});_>0&&n.add(y),n.add(s),""!=i[_].address&&w.add(d),w.add(h),""==i[_].fax||null==i[_].fax||w.add(u),""==i[_].email||null==i[_].email||w.add(v),c.add(w),c.add(g),n.add(c),o.push(n)}var T=Titanium.UI.createView({layout:"composite",width:"100%",height:80,bottom:0,backgroundColor:"#A5A5A5"}),m=Ti.UI.createLabel({text:"Enter Colour, Name or Colour Code",color:"#A5A5A5",font:{fontSize:14},backgroundColor:"transparent"}),p=Ti.UI.createTextField({borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,color:"black",hintText:"Enter Search Query",backgroundColor:"white",borderColor:"#A5A5A5",borderRadius:5,font:m.font,left:10,top:10,width:"70%",height:60}),b=Ti.UI.createButton({backgroundColor:"white",color:"#A5A5A5",textAlign:"Titanium.UI.TEXT_ALIGNMENT_CENTER",title:"SEARCH",borderColor:"#A5A5A5",borderRadius:5,left:5,top:10,height:60}),f=Titanium.UI.createView({layout:"horizontal"});r.setData(o),t.tableContainer.add(r),f.add(p),f.add(b),T.add(f),t.tableContainer.add(T),b.addEventListener("click",function(){Ti.UI.Android.hideSoftKeyboard(),0==p.value.length?(i=l.getStoreByState(a),e(i)):(i=l.getStoreByName(a,p.value),e(i))})}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="storeLocatorByState",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var t=this,i={};t.__views.storeLocatorByState=Ti.UI.createView({layout:"vertical",backgroundColor:"white",id:"storeLocatorByState"}),t.__views.storeLocatorByState&&t.addTopLevelView(t.__views.storeLocatorByState),t.__views.__alloyId141=Ti.UI.createView({layout:"horizontal",height:"80",id:"__alloyId141"}),t.__views.storeLocatorByState.add(t.__views.__alloyId141),t.__views.__alloyId142=Alloy.createController("toggle",{id:"__alloyId142",__parentSymbol:t.__views.__alloyId141}),t.__views.__alloyId142.setParent(t.__views.__alloyId141),t.__views.stateName=Ti.UI.createLabel({width:"75%",height:Ti.UI.SIZE,color:"black",font:{fontSize:22},id:"stateName",textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER}),t.__views.__alloyId141.add(t.__views.stateName),t.__views.tableContainer=Ti.UI.createView({backgroundColor:"white",id:"tableContainer",height:"auto"}),t.__views.storeLocatorByState.add(t.__views.tableContainer),i.destroy=function(){},_.extend(t,t.__views);var o=arguments[0]||{},a=o.state;Ti.App.Properties.setString("module","storeLocator");var l=Alloy.createCollection("storeLocator"),r=l.getStoreByState(a);e(r),t.stateName.text=a,NavigateTo=function(e,t,o,a){var l="geo:"+e+","+t+"?q="+o+" ("+a+")";if(Ti.Android)try{Ti.API.info("Trying to Launch via Intent");var r=Ti.Android.createIntent({action:Ti.Android.ACTION_VIEW,data:l});Ti.Android.currentActivity.startActivity(r)}catch(_){Ti.API.info("Caught Error launching intent: "+_),i.Install()}else Ti.Platform.canOpenURL(l)?Ti.Platform.openURL(l):i.Install()},_.extend(t,i)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;