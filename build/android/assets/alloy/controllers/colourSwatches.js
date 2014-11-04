function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){function e(){for(var e=0;e<s.length;e++){console.log(s[e]);var i=l.getCategoryColourByCategory(s[e].id),r=Titanium.UI.createImageView({width:"95%",height:Ti.UI.SIZE,touchEnabled:!1,top:15,image:s[e].image}),a=o.UI.create("Label",{width:"95%",text:s[e].description,width:"95%",classes:["aboutContent"],bottom:30});o.TheScrollView.add(r),o.TheScrollView.add(a);var _=o.UI.create("View",{textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,layout:"horizontal",width:"95%",bottom:10,height:Ti.UI.SIZE}),d=0;i.forEach(function(i){var r=o.UI.create("View",{textAlign:Ti.UI.TEXT_ALIGNMENT_RIGHT,layout:"vertical",width:"25%",top:3,height:Ti.UI.SIZE}),a=n.getColourById(i.colour_id),l=o.UI.create("View",{backgroundColor:"rgb("+a.rgb+")",borderColor:"#A5A5A5",borderWidth:1,width:"97%",height:"80"}),c=o.UI.create("Label",{text:a.name,classes:["colorDesc"]}),h=o.UI.create("Label",{text:a.code,classes:["colorDesc"],bottom:10});t(r,a,s[e]),r.add(l),r.add(c),r.add(h),_.add(r),d++}),o.TheScrollView.add(_);var c=Titanium.UI.createImageView({width:Titanium.UI.FILL,height:30,touchEnabled:!1,image:"/images/scroll_up.png"});s.length!=e+1&&o.TheScrollView.add(c)}o.mainViewContainer.add(g)}function t(e,t,i){e.addEventListener("click",function(){Ti.App.Properties.setString("from","colourSwatches");var e=Alloy.createController("colourDetails",{colour_details:t,details:i}).getView();e.open()})}function i(e){for(var t=e.children.slice(0),i=0;i<t.length;++i)e.remove(t[i])}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="colourSwatches",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var o=this,r={};o.__views.mainViewContainer=Ti.UI.createView({backgroundColor:"white",id:"mainViewContainer"}),o.__views.mainViewContainer&&o.addTopLevelView(o.__views.mainViewContainer),o.__views.__alloyId47=Ti.UI.createView({layout:"vertical",id:"__alloyId47"}),o.__views.mainViewContainer.add(o.__views.__alloyId47),o.__views.__alloyId48=Ti.UI.createView({layout:"horizontal",height:"80",id:"__alloyId48"}),o.__views.__alloyId47.add(o.__views.__alloyId48),o.__views.__alloyId49=Alloy.createController("toggle",{id:"__alloyId49",__parentSymbol:o.__views.__alloyId48}),o.__views.__alloyId49.setParent(o.__views.__alloyId48),o.__views.titleLabel=Ti.UI.createLabel({width:"75%",height:Ti.UI.SIZE,color:"black",font:{fontSize:"22"},text:"Colour Swatches",id:"titleLabel",textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER}),o.__views.__alloyId48.add(o.__views.titleLabel),o.__views.TheScrollView=Ti.UI.createScrollView({id:"TheScrollView",backgroundColor:"white",width:"100%",layout:"vertical",height:"80%",top:"0",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),o.__views.__alloyId47.add(o.__views.TheScrollView),r.destroy=function(){},_.extend(o,o.__views),arguments[0]||{};var a=Alloy.createCollection("category"),l=Alloy.createCollection("category_colour"),n=Alloy.createCollection("colour"),s=a.getCategoryListByType(2);Ti.Platform.displayCaps.platformHeight;var d=Alloy.createCollection("category_type"),c=d.selectTypeByDistinct();console.log(c);var h=0,u=0,g=Titanium.UI.createView({layout:"composite",bottom:0,height:60,width:Ti.Platform.displayCaps.platformWidth}),I=Titanium.UI.createView({layout:"horizontal",left:(Ti.Platform.displayCaps.platformWidth-120)/2,width:120}),w=Ti.UI.createImageView({height:60,width:Ti.UI.FILL,image:"/images/tool_bar.jpg"}),v=Ti.UI.createImageView({width:50,height:40,right:10,top:10,bottom:10,image:"/images/icon_filter.png"}),p=Ti.UI.createImageView({width:50,height:40,left:10,top:10,bottom:10,image:"/images/icon_search.png"}),y=Titanium.UI.createView({layout:"composite",width:"100%",height:80,bottom:60,backgroundColor:"#A5A5A5"}),m=[],T=Ti.UI.createTableViewRow({title:"All",width:150,left:10,touchEnabled:!0,height:60});m.push(T),c.forEach(function(e){var t=Ti.UI.createTableViewRow({title:e.tag,width:150,left:10,touchEnabled:!0,height:60});m.push(t)});var f=Titanium.UI.createTableView({separatorColor:"transparent",backgroundImage:"/images/pop_window.png",height:Ti.UI.SIZE,width:150,bottom:60,zIndex:999,center:v.getCenter(),data:m});I.add(v),I.add(p),g.add(w),g.add(I),e(),o.TheScrollView.height=PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight)-140;var E=function(t){if(console.log(t.index),u=0,o.mainViewContainer.remove(f),i(o.TheScrollView),0==t.index)s=a.getCategoryList(),e();else{var r=d.getCategoryTypeByTag(t.rowData.title),l=[];s=[],r.forEach(function(e){l=a.getCategoryById(e.cate_id),s.push(l)}),console.log(s),e()}};v.addEventListener("click",function(){console.log("popWindow"),A(),o.mainViewContainer.remove(y),h=0,1==u?(u=0,o.mainViewContainer.remove(f)):(u=1,o.mainViewContainer.add(f),f.addEventListener("click",E))});var A=function(){f.removeEventListener("click",E)};p.addEventListener("click",function(){if(console.log("searchBar"),console.log("start:"+h),o.mainViewContainer.remove(f),u=0,1==h)h=0,console.log("change:"+h),o.mainViewContainer.remove(y);else{h=1,console.log("change:"+h);var e=Ti.UI.createLabel({text:"Enter Colour, Name or Colour Code",color:"#A5A5A5",font:{fontSize:14},backgroundColor:"transparent"}),t=Ti.UI.createTextField({borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,color:"black",hintText:"Enter Colour, Name or Colour Code",backgroundColor:"white",borderColor:"#A5A5A5",borderRadius:5,font:e.font,left:10,top:10,width:"70%",height:60}),i=Ti.UI.createButton({backgroundColor:"white",color:"#A5A5A5",textAlign:"Titanium.UI.TEXT_ALIGNMENT_CENTER",title:"SEARCH",borderColor:"#A5A5A5",borderRadius:5,left:5,top:10,height:60}),r=Titanium.UI.createView({layout:"horizontal"});r.add(t),r.add(i),y.add(r),o.mainViewContainer.add(y),i.addEventListener("click",function(){if(console.log("textField.value: "+t.value),console.log("textField.value.length: "+t.value.length),h=0,console.log("searchFlag: "+h),Ti.UI.Android.hideSoftKeyboard(),0!=t.value.length){Ti.App.Properties.setString("query",t.value);var e=Alloy.createController("search").getView();Alloy.Globals.Drawer.setCenterWindow(e)}o.mainViewContainer.remove(y)})}}),_.extend(o,r)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;