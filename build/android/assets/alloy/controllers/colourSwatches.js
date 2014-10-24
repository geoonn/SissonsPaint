function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){function e(){for(var e=0;e<n.length;e++){console.log("details: "+n[e]);var o=a.getCategoryColourByCategory(n[e].id),r=Titanium.UI.createImageView({width:"95%",height:Ti.UI.SIZE,touchEnabled:!1,top:15,image:n[e].image}),s=i.UI.create("Label",{width:"95%",text:n[e].description,classes:["aboutContent"]});i.TheScrollView.add(r),i.TheScrollView.add(s);var _=i.UI.create("View",{textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,layout:"horizontal",width:"95%",bottom:10,height:Ti.UI.SIZE}),d=0;o.forEach(function(o){var r=i.UI.create("View",{textAlign:Ti.UI.TEXT_ALIGNMENT_RIGHT,layout:"vertical",width:"25%",top:3,height:Ti.UI.SIZE}),a=l.getColourById(o.colour_id),s=i.UI.create("View",{backgroundColor:"rgb("+a.rgb+")",width:"97%",height:"80"}),c=i.UI.create("Label",{text:a.name,classes:["colorDesc"]}),h=i.UI.create("Label",{text:a.code,classes:["colorDesc"]});t(r,a,n[e]),r.add(s),r.add(c),r.add(h),_.add(r),d++}),i.TheScrollView.add(_);var h=Titanium.UI.createImageView({width:Titanium.UI.FILL,height:30,touchEnabled:!1,image:"/images/scroll_up.png"});n.length!=e+1&&i.TheScrollView.add(h)}i.mainViewContainer.add(c)}function t(e,t,i){e.addEventListener("click",function(){Ti.App.Properties.setString("from","colourSwatches");var e=Alloy.createController("colourDetails",{colour_details:t,details:i}).getView();Alloy.Globals.Drawer.setCenterWindow(e)})}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="colourSwatches",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var i=this,o={};i.__views.mainViewContainer=Ti.UI.createView({backgroundColor:"white",id:"mainViewContainer"}),i.__views.mainViewContainer&&i.addTopLevelView(i.__views.mainViewContainer),i.__views.__alloyId44=Ti.UI.createView({layout:"vertical",id:"__alloyId44"}),i.__views.mainViewContainer.add(i.__views.__alloyId44),i.__views.__alloyId45=Ti.UI.createView({layout:"horizontal",height:"80",id:"__alloyId45"}),i.__views.__alloyId44.add(i.__views.__alloyId45),i.__views.__alloyId46=Alloy.createController("toggle",{id:"__alloyId46",__parentSymbol:i.__views.__alloyId45}),i.__views.__alloyId46.setParent(i.__views.__alloyId45),i.__views.titleLabel=Ti.UI.createLabel({width:"75%",height:Ti.UI.SIZE,color:"black",font:{fontSize:"28"},text:"Colour Swatches",id:"titleLabel",textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER}),i.__views.__alloyId45.add(i.__views.titleLabel),i.__views.TheScrollView=Ti.UI.createScrollView({id:"TheScrollView",backgroundColor:"white",width:"100%",layout:"vertical",top:"0",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),i.__views.__alloyId44.add(i.__views.TheScrollView),o.destroy=function(){},_.extend(i,i.__views),arguments[0]||{};var r=Alloy.createCollection("category"),a=Alloy.createCollection("category_colour"),l=Alloy.createCollection("colour"),n=r.getCategoryList(),s=0,d=0,c=Titanium.UI.createView({layout:"composite",bottom:0,height:60,width:Ti.Platform.displayCaps.platformWidth}),h=Titanium.UI.createView({layout:"horizontal",left:(Ti.Platform.displayCaps.platformWidth-120)/2,width:120}),u=Ti.UI.createImageView({height:60,width:Ti.UI.FILL,image:"/images/tool_bar.jpg"}),I=Ti.UI.createImageView({width:50,height:40,right:10,top:10,bottom:10,image:"/images/icon_filter.png"}),w=Ti.UI.createImageView({width:50,height:40,left:10,top:10,bottom:10,image:"/images/icon_search.png"}),g=Titanium.UI.createView({layout:"composite",width:"100%",height:80,bottom:60,backgroundColor:"#A5A5A5"}),v=[],y=Ti.UI.createTableViewRow({title:"All",width:150,left:10,touchEnabled:!0,height:60}),p=Ti.UI.createTableViewRow({title:"Interior",width:150,left:10,touchEnabled:!0,height:60}),T=Ti.UI.createTableViewRow({title:"Exterior",width:150,left:10,touchEnabled:!0,height:60}),m=Ti.UI.createTableViewRow({title:"Wood",width:150,left:10,touchEnabled:!0,height:60}),f=Ti.UI.createTableViewRow({title:"Metal",width:150,left:10,touchEnabled:!0,height:60});v.push(y),v.push(p),v.push(T),v.push(m),v.push(f);var E=Titanium.UI.createTableView({separatorColor:"transparent",backgroundImage:"/images/pop_window.png",height:Ti.UI.SIZE,width:150,bottom:60,zIndex:999,center:I.getCenter(),data:v});h.add(I),h.add(w),c.add(u),c.add(h),e(),i.TheScrollView.height=PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight)-140;var A=function(e){console.log(e.index),d=0,i.mainViewContainer.remove(E)};I.addEventListener("click",function(){console.log("popWindow"),b(),i.mainViewContainer.remove(g),s=0,1==d?(d=0,i.mainViewContainer.remove(E)):(d=1,i.mainViewContainer.add(E),E.addEventListener("click",A))});var b=function(){E.removeEventListener("click",A)};w.addEventListener("click",function(){if(console.log("searchBar"),console.log("start:"+s),i.mainViewContainer.remove(E),d=0,1==s)s=0,console.log("change:"+s),i.mainViewContainer.remove(g);else{s=1,console.log("change:"+s);var e=Ti.UI.createLabel({text:"Enter Colour, Name or Colour Code",color:"#A5A5A5",font:{fontSize:14},backgroundColor:"transparent"}),t=Ti.UI.createTextField({borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,color:"#336699",hintText:"Enter Colour, Name or Colour Code",backgroundColor:"white",borderColor:"#A5A5A5",borderRadius:5,font:e.font,left:10,top:10,width:"70%",height:60}),o=Ti.UI.createButton({backgroundColor:"white",color:"#A5A5A5",textAlign:"Titanium.UI.TEXT_ALIGNMENT_CENTER",title:"SEARCH",borderColor:"#A5A5A5",borderRadius:5,left:5,top:10,height:60}),r=Titanium.UI.createView({layout:"horizontal"});r.add(t),r.add(o),g.add(r),i.mainViewContainer.add(g),o.addEventListener("click",function(){console.log(t.value),s=0,i.mainViewContainer.remove(g)})}}),_.extend(i,o)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;