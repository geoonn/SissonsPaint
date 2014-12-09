function __processArg(t,e){var i=null;return t&&(i=t[e]||null,delete t[e]),i}function Controller(){function t(t,e,r,o,s,l){t.addEventListener("click",function(){var h=Titanium.UI.createProgressBar({width:"90%",height:Ti.UI.FILL,min:0,max:1,value:0,message:"",font:{fontSize:12},color:"red"}),d=t.size.height,c=t.size.width,_=Titanium.UI.createView({height:d,width:c,backgroundColor:"#A5A5A5",opacity:.5,bottom:0}),u=Ti.UI.createLabel({color:"#ffffff",font:{fontSize:14,fontWeight:"bold"},text:"",top:10,width:"100%",textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,width:c,height:d}),p=Titanium.UI.createView({height:"20%",width:"80%",backgroundColor:"#525151",opacity:.8});"0"==s?(p.add(_),p.add(h),p.add(u),i.brochureView.add(p)):(p.remove(_),p.remove(h),p.remove(u),i.brochureView.remove(p)),n(r,!0,h,u,function(t){t?alert(t):(a.updateDownloadedBrochure(e),""!=l&&o.remove(l),p.remove(_),p.remove(h),p.remove(u),i.brochureView.remove(p))})})}function e(t,e,i){t.addEventListener("click",function(){s.playVideo(i)})}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="brochure",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var i=this,r={},o={};i.__views.brochureView=Ti.UI.createView({backgroundColor:"white",id:"brochureView",backgroundImage:"/images/wood_background.jpg"}),i.__views.brochureView&&i.addTopLevelView(i.__views.brochureView),i.__views.__alloyId6=Ti.UI.createView({layout:"vertical",id:"__alloyId6"}),i.__views.brochureView.add(i.__views.__alloyId6),i.__views.__alloyId7=Ti.UI.createView({layout:"horizontal",height:"80",backgroundImage:"/images/banner_brochure.jpg",id:"__alloyId7"}),i.__views.__alloyId6.add(i.__views.__alloyId7),i.__views.__alloyId8=Alloy.createController("toggle",{id:"__alloyId8",__parentSymbol:i.__views.__alloyId7}),i.__views.__alloyId8.setParent(i.__views.__alloyId7),i.__views.scrollview=Ti.UI.createScrollView({top:"15",id:"scrollview",layout:"vertical",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),i.__views.__alloyId6.add(i.__views.scrollview),i.__views.mainView=Ti.UI.createView({id:"mainView",layout:"vertical",height:Ti.UI.SIZE,width:"80%"}),i.__views.scrollview.add(i.__views.mainView),i.__views.toolbar=Ti.UI.createView({height:"60",bottom:"0",id:"toolbar",width:"100%",backgroundImage:"/images/tool_bar.jpg"}),i.__views.brochureView.add(i.__views.toolbar),i.__views.__alloyId9=Ti.UI.createView({layout:"horizontal",width:"100%",id:"__alloyId9"}),i.__views.toolbar.add(i.__views.__alloyId9),i.__views.__alloyId10=Ti.UI.createView({width:"40%",id:"__alloyId10"}),i.__views.__alloyId9.add(i.__views.__alloyId10),i.__views.__alloyId11=Ti.UI.createView({width:"20%",id:"__alloyId11"}),i.__views.__alloyId9.add(i.__views.__alloyId11),i.__views.filterButton=Ti.UI.createImageView({id:"filterButton",image:"/images/icon_filter.png",height:"40",width:"50",top:"10",bottom:"10"}),i.__views.__alloyId11.add(i.__views.filterButton),v?i.__views.filterButton.addEventListener("click",v):o["$.__views.filterButton!click!popWindow"]=!0,i.__views.__alloyId12=Ti.UI.createView({width:"40%",id:"__alloyId12"}),i.__views.__alloyId9.add(i.__views.__alloyId12),r.destroy=function(){},_.extend(i,i.__views),arguments[0]||{};var n=require("pdf"),s=require("titutorial.youtubeplayer"),a=Alloy.createCollection("brochure"),l=a.getBrochureList(),h=0,d=[];setTimeout(function(){c()},300);var c=function(){for(var r,o,n,s,a,h=0,d="",c=l.length-1,_=0;_<l.length;_++){var u=l[_].id;if(r=l[_].cover,o=Ti.UI.createImageView({image:r,backgroundImage:"/images/default_cover.jpg",bottom:0,width:90}),h%3==0&&(n=i.UI.create("View",{textAlign:"center",bottom:0,layout:"vertical",height:220,width:"100%"}),s=Ti.UI.createImageView({image:"/images/wood_rack.png",top:0,width:"100%",right:5,left:5}),a=Titanium.UI.createView({layout:"horizontal",height:Ti.UI.SIZE,width:"100%",bottom:0,left:"5%",right:"5%"})),d=i.UI.create("View",{bottom:0,height:Ti.UI.SIZE,width:"30%",right:5}),d.add(o),a.add(d),n.add(a),n.add(s),"pdf"==l[_].format){var p="";"0"==l[_].isDownloaded&&(p=Ti.UI.createImageView({image:"/images/icon_download.png",width:30,height:30,top:0,right:0}),d.add(p)),t(o,u,l[_].content,d,l[_].isDownloaded,p)}else playIcon=Ti.UI.createImageView({image:"/images/icon_play.png",width:40,height:40}),e(o,u,l[_].url),e(playIcon,u,l[_].url),d.add(playIcon);(h%3==2||c==h)&&i.scrollview.add(n),h++}},u=Ti.UI.createTableViewRow({title:"LATEST",width:150,left:10,touchEnabled:!0,height:60}),p=Ti.UI.createTableViewRow({title:"DOWNLOADED",width:150,left:10,touchEnabled:!0,height:60}),g=Ti.UI.createTableViewRow({title:"VIDEO",width:150,left:10,touchEnabled:!0,height:60});d.push(u),d.push(p),d.push(g);var f=Titanium.UI.createTableView({separatorColor:"transparent",backgroundImage:"/images/pop_window.png",height:Ti.UI.SIZE,width:150,bottom:60,overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER,data:d}),m=function(t){h=0,i.brochureView.remove(f),removeAllChildren(i.scrollview),0==t.index?(l=a.getBrochureList(),c()):1==t.index?(l=a.getDownloadedList(),c()):(l=a.getVideoList(),c())},v=function(){w(),1==h?(h=0,i.brochureView.remove(f)):(h=1,i.brochureView.add(f),f.addEventListener("click",m))},w=function(){f.removeEventListener("click",m)};o["$.__views.filterButton!click!popWindow"]&&i.__views.filterButton.addEventListener("click",v),_.extend(i,r)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;