function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){function e(){i.TheScrollView.opacity="1";for(var e=g.length,o=0;e>o;o++)if(""!=g[o]){var r=Titanium.UI.createImageView({width:Titanium.UI.FILL,height:30,touchEnabled:!1,image:"/images/scroll_up.png"});"1"==h?h="0":i.TheScrollView.add(r),r=null;var a=n.getCategoryColourByCategory(g[o].id),l=Titanium.UI.createImageView({width:"95%",height:Ti.UI.SIZE,touchEnabled:!1,top:15,image:g[o].image}),_=i.UI.create("Label",{width:"95%",text:g[o].description,width:"95%",classes:["aboutContent"],bottom:30});i.TheScrollView.add(l),i.TheScrollView.add(_),l=null,_=null;var d=i.UI.create("View",{textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,layout:"horizontal",width:"95%",bottom:10,height:Ti.UI.SIZE}),c=0;a.forEach(function(e){var r=i.UI.create("View",{textAlign:Ti.UI.TEXT_ALIGNMENT_RIGHT,layout:"vertical",width:"24.5%",top:3,height:Ti.UI.SIZE}),a=s.getColourById(e.colour_id);if(""!=a.thumb)var l=i.UI.create("ImageView",{image:a.thumb,borderColor:"#A5A5A5",borderWidth:1,width:"97%",height:"80"});else var l=i.UI.create("View",{backgroundColor:"rgb("+a.rgb+")",borderColor:"#A5A5A5",borderWidth:1,width:"97%",height:"80"});var n=i.UI.create("Label",{text:a.name,classes:["colorDesc"]}),_=i.UI.create("Label",{text:a.code,classes:["colorDesc"],bottom:10});t(r,a,g[o]),r.add(l),r.add(n),r.add(_),a=null,l=null,n=null,_=null,d.add(r),r=null,c++}),i.TheScrollView.add(d),d=null}else e--;g=null,i.activityIndicator.hide(),i.loadingBar.opacity="0",i.loadingBar.height="0"}function t(e,t,i){e.addEventListener("click",function(){var e=Alloy.createController("colourDetails",{colour_details:t,details:i}).getView();e.open()})}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="colourSwatches",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var i=this,o={},r={};i.__views.mainViewContainer=Ti.UI.createView({backgroundColor:"white",id:"mainViewContainer"}),i.__views.mainViewContainer&&i.addTopLevelView(i.__views.mainViewContainer),i.__views.__alloyId40=Ti.UI.createView({layout:"vertical",id:"__alloyId40"}),i.__views.mainViewContainer.add(i.__views.__alloyId40),i.__views.__alloyId41=Ti.UI.createView({layout:"horizontal",height:"80",backgroundImage:"/images/banner_colour_swatches.jpg",id:"__alloyId41"}),i.__views.__alloyId40.add(i.__views.__alloyId41),i.__views.__alloyId42=Alloy.createController("toggle",{id:"__alloyId42",__parentSymbol:i.__views.__alloyId41}),i.__views.__alloyId42.setParent(i.__views.__alloyId41),i.__views.TheScrollView=Ti.UI.createScrollView({id:"TheScrollView",backgroundColor:"white",width:"100%",layout:"vertical",contentHeight:Ti.UI.SIZE,height:"80%",top:"0",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),i.__views.__alloyId40.add(i.__views.TheScrollView),i.__views.toolbar=Ti.UI.createView({height:"60",bottom:"0",id:"toolbar",width:"100%",backgroundImage:"/images/tool_bar.jpg"}),i.__views.__alloyId40.add(i.__views.toolbar),i.__views.__alloyId43=Ti.UI.createView({layout:"horizontal",width:"100%",id:"__alloyId43"}),i.__views.toolbar.add(i.__views.__alloyId43),i.__views.__alloyId44=Ti.UI.createView({width:"30%",id:"__alloyId44"}),i.__views.__alloyId43.add(i.__views.__alloyId44),i.__views.__alloyId45=Ti.UI.createView({width:"20%",id:"__alloyId45"}),i.__views.__alloyId43.add(i.__views.__alloyId45),i.__views.filterButton=Ti.UI.createImageView({id:"filterButton",image:"/images/icon_filter.png",height:"40",width:"50",top:"10",bottom:"10"}),i.__views.__alloyId45.add(i.__views.filterButton),A?i.__views.filterButton.addEventListener("click",A):r["$.__views.filterButton!click!filter"]=!0,i.__views.__alloyId46=Ti.UI.createView({width:"20%",id:"__alloyId46"}),i.__views.__alloyId43.add(i.__views.__alloyId46),i.__views.searchButton=Ti.UI.createImageView({id:"searchButton",image:"/images/icon_search.png",height:"40",width:"50",top:"10",bottom:"10"}),i.__views.__alloyId46.add(i.__views.searchButton),S?i.__views.searchButton.addEventListener("click",S):r["$.__views.searchButton!click!search"]=!0,i.__views.__alloyId47=Ti.UI.createView({width:"30%",id:"__alloyId47"}),i.__views.__alloyId43.add(i.__views.__alloyId47),i.__views.loadingBar=Ti.UI.createView({layout:"vertical",id:"loadingBar",height:"0",width:"120",borderRadius:"15",top:"0",opacity:"1",backgroundColor:"#2E2E2E"}),i.__views.mainViewContainer.add(i.__views.loadingBar),i.__views.activityIndicator=Ti.UI.createActivityIndicator({style:Ti.UI.ActivityIndicatorStyle.BIG,top:15,left:30,width:60,id:"activityIndicator"}),i.__views.loadingBar.add(i.__views.activityIndicator),i.__views.__alloyId48=Ti.UI.createLabel({width:Ti.UI.SIZE,height:Ti.UI.SIZE,color:"#ffffff",text:"Loading",id:"__alloyId48"}),i.__views.loadingBar.add(i.__views.__alloyId48),i.__views.win=Ti.UI.createView({id:"win",height:"90%",width:"90%",backgroundColor:"transparent",theme:"Theme.NoActionBar",navBarHidden:"true",fullscreen:"true",borderColor:"#A5A5A5",borderWidth:"2",visible:"false"}),i.__views.mainViewContainer.add(i.__views.win);var a=[];i.__views.view1=Ti.UI.createView({id:"view1",backgroundColor:"#FFFFFF"}),a.push(i.__views.view1),i.__views.__alloyId50=Ti.UI.createImageView({image:"/images/tutorial/colorSwatches/tutorial1.jpg",width:"100%",id:"__alloyId50"}),i.__views.view1.add(i.__views.__alloyId50),i.__views.view2=Ti.UI.createView({id:"view2",backgroundColor:"#FFFFFF"}),a.push(i.__views.view2),i.__views.__alloyId51=Ti.UI.createImageView({image:"/images/tutorial/colorSwatches/tutorial2.jpg",width:"100%",id:"__alloyId51"}),i.__views.view2.add(i.__views.__alloyId51),i.__views.view3=Ti.UI.createView({id:"view3",backgroundColor:"#FFFFFF"}),a.push(i.__views.view3),i.__views.__alloyId52=Ti.UI.createImageView({image:"/images/tutorial/colorSwatches/tutorial3.jpg",width:"100%",id:"__alloyId52"}),i.__views.view3.add(i.__views.__alloyId52),i.__views.view4=Ti.UI.createView({id:"view4",backgroundColor:"#FFFFFF"}),a.push(i.__views.view4),i.__views.__alloyId53=Ti.UI.createImageView({image:"/images/tutorial/colorSwatches/tutorial4.jpg",width:"100%",id:"__alloyId53"}),i.__views.view4.add(i.__views.__alloyId53),i.__views.__alloyId54=Ti.UI.createView({layout:"horizontal",bottom:"4",height:Ti.UI.SIZE,width:Ti.UI.SIZE,id:"__alloyId54"}),i.__views.view4.add(i.__views.__alloyId54),i.__views.checkBox=Ti.UI.createSwitch({value:!0,id:"checkBox",style:Ti.UI.Android.SWITCH_STYLE_CHECKBOX}),i.__views.__alloyId54.add(i.__views.checkBox),i.__views.showWindow=Ti.UI.createLabel({width:Ti.UI.SIZE,height:Ti.UI.SIZE,color:"black",text:"Don't show next time",left:"10",id:"showWindow"}),i.__views.__alloyId54.add(i.__views.showWindow),i.__views.scrollableView=Ti.UI.createScrollableView({views:a,id:"scrollableView",showPagingControl:"true",pagingControlTimeout:"0",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),i.__views.win.add(i.__views.scrollableView),o.destroy=function(){},_.extend(i,i.__views),arguments[0]||{};var l=Alloy.createCollection("category"),n=Alloy.createCollection("category_colour"),s=Alloy.createCollection("colour"),d=Alloy.createCollection("type"),c=0,h="1",u=2797,w=[],g=l.getCategoryListByType("2",c);i.TheScrollView.height=PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight)-140,Ti.App.Properties.setString("currentCategory","All"),i.activityIndicator.show(),i.loadingBar.opacity="1",i.loadingBar.height="120",i.loadingBar.top=PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight)/2-i.loadingBar.getHeight()/2,setTimeout(function(){e()},1e3),Ti.Platform.displayCaps.platformHeight;var v=Alloy.createCollection("category_type"),I=d.getType(),p=0,y=0,m=Titanium.UI.createView({layout:"composite",width:"100%",height:80,bottom:60,backgroundImage:"/images/tool_bar.jpg"});m.hide(),i.mainViewContainer.add(m);var T=Ti.UI.createTableViewRow({title:"All",width:150,left:10,touchEnabled:!0,top:5,bottom:10,height:40,className:"DataRow"});w.push(T),T=null,I.forEach(function(e){var t=Ti.UI.createTableViewRow({title:e.ctype,width:150,left:10,touchEnabled:!0,className:"DataRow",height:40,bottom:5});w.push(t)});var f=Titanium.UI.createTableView({separatorColor:"transparent",backgroundImage:"/images/pop_window.png",height:Ti.UI.SIZE,width:150,bottom:60,zIndex:999,left:"20%",data:w});i.mainViewContainer.add(f),setTimeout(function(){m.hide(),f.hide()},10);var b=function(t){if(i.activityIndicator.show(),i.loadingBar.opacity="1",i.loadingBar.height="120",i.loadingBar.top=PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight)/2-i.loadingBar.getHeight()/2,i.TheScrollView.opacity="0",y=0,f.hide(),removeAllChildren(i.TheScrollView),setTimeout(function(){Ti.App.Properties.setString("swatchMinHeight",2797),Ti.App.Properties.getString("swatchMinHeight")},1e3),"All"==t.source.title)g=l.getCategoryListByType("2",0),e();else{Ti.App.Properties.setString("currentCategory",t.source.title);var o=v.getCategoryTypeByTag(t.source.title),r=[];g=[],o.forEach(function(e){r=l.getCategoryById(e.cate_id,"2",0),""!=r&&g.push(r)}),e()}E()},A=function(){E(),m.hide(),p=0,1==y?(y=0,f.hide()):(y=1,f.show(),f.addEventListener("click",b))},E=function(){f.removeEventListener("click",b)},S=function(){if(y=0,f.hide(),1==p)p=0,m.hide();else{p=1;var e=Ti.UI.createLabel({text:"Enter Colour, Name or Colour Code",color:"#A5A5A5",font:{fontSize:14},backgroundColor:"transparent"}),t=Ti.UI.createTextField({borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,color:"black",hintText:"Enter Colour, Name or Colour Code",backgroundColor:"white",borderColor:"#A5A5A5",borderRadius:5,font:e.font,left:10,top:10,width:"70%",height:60}),o=Ti.UI.createButton({backgroundColor:"white",color:"#A5A5A5",textAlign:"Titanium.UI.TEXT_ALIGNMENT_CENTER",title:"SEARCH",borderColor:"#A5A5A5",borderRadius:5,left:5,top:10,height:60}),r=Titanium.UI.createView({layout:"horizontal"});r.add(t),r.add(o),m.add(r),m.show();var a=function(){if(p=0,Ti.UI.Android.hideSoftKeyboard(),0!=t.value.length){Ti.App.Properties.setString("query",t.value);var e=Alloy.createController("search").getView();Alloy.Globals.Drawer.setCenterWindow(e)}i.mainViewContainer.remove(m),o.removeEventListener("click",a)};o.addEventListener("click",a)}};Ti.App.Properties.setString("swatchMinHeight",u),i.TheScrollView.addEventListener("scroll",function(t){var i=Ti.App.Properties.getString("swatchMinHeight");if(t.y>=i){i=parseInt(i)+parseInt(u),Ti.App.Properties.setString("swatchMinHeight",i),c+=3;var o=Ti.App.Properties.getString("currentCategory");"All"!=o||(g=l.getCategoryListByType("2",c),e())}}),1==Ti.App.Properties.getString("swatchesCheckBox")?i.win.hide():i.win.show();var C=Ti.UI.createImageView({image:"/images/icon_remove.png",width:30,height:30,top:0,right:0});i.view4.add(C),C.addEventListener("click",function(){i.win.hide(),C=null,1==i.checkBox.value&&Ti.App.Properties.setString("swatchesCheckBox",1)}),r["$.__views.filterButton!click!filter"]&&i.__views.filterButton.addEventListener("click",A),r["$.__views.searchButton!click!search"]&&i.__views.searchButton.addEventListener("click",S),_.extend(i,o)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;