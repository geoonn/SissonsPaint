function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){function e(e){var t=Titanium.UI.createAnimation({bottom:e,duration:500,curve:Titanium.UI.ANIMATION_CURVE_LINEAR});d.sizeBar.animate(t)}function t(t){"color"==t.source.mod?(V?(i(-330),V=0):(i(60),V=1),1==x&&o(),L=0,e(-250)):(L?(e(-250),L=0):(e(40),L=1),1==x&&o(),V=0,i(-330))}function i(e){var t=Titanium.UI.createAnimation({bottom:e,duration:500,curve:Titanium.UI.ANIMATION_CURVE_LINEAR});d.colorSwatches.animate(t)}function o(){q(),1==x?(x=0,d.diyPaint.remove(G)):(x=1,i(-330),e(-250),V=0,L=0,d.diyPaint.add(G),G.addEventListener("click",$))}function a(e){"bucket"==E?(m=parseInt(e.value),Ti.App.fireEvent("web:setSensetive",{value:m})):"brush"==E?(f=parseInt(e.value),Ti.App.fireEvent("web:setStroke",{value:f})):"erase"==E&&(b=parseInt(e.value),Ti.App.fireEvent("web:setStroke",{value:b}))}function r(){d.activityIndicator.hide(),d.loadingBar.opacity="0",d.loadingBar.height="0";var e=Titanium.UI.createOptionDialog({title:"Choose an image source...",options:["Camera","Photo Gallery","Cancel"],cancel:2});e.addEventListener("click",function(e){0==e.index?Titanium.Media.showCamera({success:function(e){if(e.media,e.mediaType==Ti.Media.MEDIA_TYPE_PHOTO){y=d.toolbar.rect.height,T=g-y-p,d.canvas.setBottom(y),d.canvas.setHeight(T);var t=e.media.nativePath;v.rotateResizeImage(t,I,100),Ti.App.Properties.setString("image",t),Ti.App.fireEvent("web:loadImage",{image:t,height:T}),d.shareButton.touchEnabled="true"}},cancel:function(){},error:function(e){var t=Titanium.UI.createAlertDialog({title:"Camera"});t.setMessage(e.code==Titanium.Media.NO_CAMERA?"Device does not have camera":"Unexpected error: "+e.code),t.show()},allowImageEditing:!0,saveToPhotoGallery:!0}):1==e.index&&Titanium.Media.openPhotoGallery({success:function(e){y=d.toolbar.rect.height,T=g-y-p,d.canvas.setBottom(y),d.canvas.setHeight(T);var t=e.media.nativePath;Ti.App.Properties.setString("image",t),Ti.App.fireEvent("web:loadImage",{image:t,height:T}),d.shareButton.touchEnabled="true"},cancel:function(){}})}),e.show()}function l(){for(var e=50*Math.ceil(S.length)+10,t=Titanium.UI.createView({layout:"horizontal",bottom:10,height:40,width:e}),i=0;i<S.length;i++){var o=A.getColourById(S[i].colour_id);if(""!=o.thumb)var a=d.UI.create("ImageView",{image:o.thumb,borderColor:"#A5A5A5",borderWidth:1,width:"40",height:"40",left:"5",right:"5"});else var a=d.UI.create("View",{backgroundColor:"rgb("+o.rgb+")",borderColor:"#A5A5A5",borderWidth:1,width:"40",height:"40",left:"5",right:"5"});n(a,o),t.add(a)}d.recommendView.add(t)}function n(e,t){e.addEventListener("click",function(){var e=t.rgb.split(","),o=rgbToHex(e[0],e[1],e[2]);d.color.setBackgroundColor(o),Ti.App.fireEvent("web:setColour",{r:e[0],g:e[1],b:e[2],hex:o}),V?(i(-330),V=0):(i(60),V=1)})}function s(){for(var e=50*Math.ceil(C.length/3)+10,t=Titanium.UI.createView({layout:"horizontal",bottom:10,height:40,width:e}),i=Titanium.UI.createView({layout:"horizontal",bottom:10,height:40,width:e}),o=Titanium.UI.createView({layout:"horizontal",height:40,width:e}),a=-1,r=[],l=0;l<C.length;l++){a=r.length;for(var _=0;_<r.length;_++)if(C[l].contrast>=r[_].contrast){a=_;break}r.splice(a,0,C[l])}for(var l=0;l<r.length;l++){if(""!=r[l].thumb)var s=d.UI.create("ImageView",{image:r[l].thumb,borderColor:"#A5A5A5",borderWidth:1,width:"40",height:"40",left:"5",right:"5"});else var s=d.UI.create("View",{backgroundColor:"rgb("+r[l].rgb+")",borderColor:"#A5A5A5",borderWidth:1,width:"40",height:"40",left:"5",right:"5"});(l+1)%3==1?t.add(s):(l+1)%3==2?i.add(s):(l+1)%3==0&&o.add(s),n(s,r[l])}d.scrollView.add(t),d.scrollView.add(i),d.scrollView.add(o)}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="diyPaint",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var d=this,c={},h={};d.__views.diyPaint=Ti.UI.createView({id:"diyPaint"}),d.__views.diyPaint&&d.addTopLevelView(d.__views.diyPaint),d.__views.__alloyId73=Ti.UI.createView({backgroundColor:"white",id:"__alloyId73"}),d.__views.diyPaint.add(d.__views.__alloyId73),d.__views.toggle=Ti.UI.createView({id:"toggle",layout:"horizontal",height:"80",top:"0",backgroundImage:"/images/banner_paint_diy.jpg"}),d.__views.__alloyId73.add(d.__views.toggle),d.__views.__alloyId74=Alloy.createController("toggle",{id:"__alloyId74",__parentSymbol:d.__views.toggle}),d.__views.__alloyId74.setParent(d.__views.toggle),d.__views.canvas=Ti.UI.createWebView({top:"80",id:"canvas",url:"/html/canvas-paint-bucket.html",height:"80%",enableZoomControls:"false",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER,disableBounce:"true"}),d.__views.__alloyId73.add(d.__views.canvas),d.__views.loadingBar=Ti.UI.createView({layout:"vertical",id:"loadingBar",height:"0",width:"120",borderRadius:"15",top:"0",opacity:"1",backgroundColor:"#2E2E2E"}),d.__views.__alloyId73.add(d.__views.loadingBar),d.__views.activityIndicator=Ti.UI.createActivityIndicator({style:Ti.UI.ActivityIndicatorStyle.BIG,top:15,left:30,width:60,id:"activityIndicator"}),d.__views.loadingBar.add(d.__views.activityIndicator),d.__views.__alloyId75=Ti.UI.createLabel({width:Ti.UI.SIZE,height:Ti.UI.SIZE,color:"#ffffff",text:"Loading",id:"__alloyId75"}),d.__views.loadingBar.add(d.__views.__alloyId75),d.__views.colorSwatches=Ti.UI.createView({layout:"vertical",height:"330",bottom:"-330",id:"colorSwatches"}),d.__views.__alloyId73.add(d.__views.colorSwatches),d.__views.__alloyId76=Ti.UI.createImageView({image:"/images/scroll_up.png",backgroundColor:"transparent",width:Titanium.UI.FILL,id:"__alloyId76"}),d.__views.colorSwatches.add(d.__views.__alloyId76),d.__views.bottomColorBar=Ti.UI.createView({id:"bottomColorBar",layout:"vertical",backgroundColor:"white"}),d.__views.colorSwatches.add(d.__views.bottomColorBar),d.__views.__alloyId77=Ti.UI.createLabel({width:"90%",height:Ti.UI.SIZE,color:"black",text:"FAVOURITE COLOURS",textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,bottom:"10",id:"__alloyId77"}),d.__views.bottomColorBar.add(d.__views.__alloyId77),d.__views.recommendView=Ti.UI.createScrollView({id:"recommendView",backgroundColor:"white",layout:"horizontal",scrollType:"horizontal",height:"50",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),d.__views.bottomColorBar.add(d.__views.recommendView),d.__views.__alloyId78=Ti.UI.createImageView({image:"/images/scroll_up.png",backgroundColor:"transparent",width:Titanium.UI.FILL,id:"__alloyId78"}),d.__views.bottomColorBar.add(d.__views.__alloyId78),d.__views.__alloyId79=Ti.UI.createLabel({width:"90%",height:Ti.UI.SIZE,color:"black",text:"COLOUR LIBRARY",textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,bottom:"10",id:"__alloyId79"}),d.__views.bottomColorBar.add(d.__views.__alloyId79),d.__views.scrollView=Ti.UI.createScrollView({id:"scrollView",backgroundColor:"white",layout:"vertical",scrollType:"horizontal",height:"150",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),d.__views.bottomColorBar.add(d.__views.scrollView),d.__views.sizeBar=Ti.UI.createView({height:"250",bottom:"-250",width:"100",id:"sizeBar"}),d.__views.__alloyId73.add(d.__views.sizeBar),d.__views.__alloyId80=Ti.UI.createImageView({image:"/images/pop_window2.png",height:"250",width:"100",id:"__alloyId80"}),d.__views.sizeBar.add(d.__views.__alloyId80),d.__views.slider=Ti.UI.createSlider({id:"slider",min:"0",max:"100",value:"20",thumbImage:"/images/size_toggle.png",width:"180"}),d.__views.sizeBar.add(d.__views.slider),a?d.__views.slider.addEventListener("stop",a):h["$.__views.slider!stop!updateAdjustment"]=!0,d.__views.toolbar=Ti.UI.createView({height:"60",bottom:"0",id:"toolbar",width:"100%",backgroundImage:"/images/tool_bar.jpg"}),d.__views.__alloyId73.add(d.__views.toolbar),d.__views.__alloyId81=Ti.UI.createView({layout:"horizontal",width:"100%",id:"__alloyId81"}),d.__views.toolbar.add(d.__views.__alloyId81),d.__views.__alloyId82=Ti.UI.createView({width:"20%",id:"__alloyId82"}),d.__views.__alloyId81.add(d.__views.__alloyId82),d.__views.photoButton=Ti.UI.createImageView({id:"photoButton",image:"/images/icon_photo.png",height:"40",width:"50",top:"10",bottom:"10"}),d.__views.__alloyId82.add(d.__views.photoButton),r?d.__views.photoButton.addEventListener("click",r):h["$.__views.photoButton!click!takePhoto"]=!0,d.__views.__alloyId83=Ti.UI.createView({width:"20%",id:"__alloyId83"}),d.__views.__alloyId81.add(d.__views.__alloyId83),d.__views.tools=Ti.UI.createImageView({id:"tools",image:"/images/icon_bucket.png",height:"40",width:"50",top:"10",bottom:"10"}),d.__views.__alloyId83.add(d.__views.tools),o?d.__views.tools.addEventListener("click",o):h["$.__views.tools!click!toolspop"]=!0,d.__views.__alloyId84=Ti.UI.createView({width:"20%",id:"__alloyId84"}),d.__views.__alloyId81.add(d.__views.__alloyId84),d.__views.size=Ti.UI.createImageView({id:"size",image:"/images/icon_size.png",mod:"size",height:"40",width:"50",top:"10",bottom:"10"}),d.__views.__alloyId84.add(d.__views.size),t?d.__views.size.addEventListener("click",t):h["$.__views.size!click!slideUp"]=!0,d.__views.__alloyId85=Ti.UI.createView({width:"20%",id:"__alloyId85"}),d.__views.__alloyId81.add(d.__views.__alloyId85),d.__views.color=Ti.UI.createView({id:"color",backgroundColor:"#ffffff",height:"40",width:"50",mod:"color",borderColor:"#000000",borderWidth:"3",borderRadius:"10",top:"10",bottom:"10"}),d.__views.__alloyId85.add(d.__views.color),t?d.__views.color.addEventListener("click",t):h["$.__views.color!click!slideUp"]=!0,d.__views.__alloyId86=Ti.UI.createView({width:"20%",id:"__alloyId86"}),d.__views.__alloyId81.add(d.__views.__alloyId86),d.__views.shareButton=Ti.UI.createImageView({touchEnabled:!1,id:"shareButton",image:"/images/icon_share.png",height:"40",width:"50",top:"10",bottom:"10"}),d.__views.__alloyId86.add(d.__views.shareButton),F?d.__views.shareButton.addEventListener("click",F):h["$.__views.shareButton!click!share"]=!0,d.__views.win=Ti.UI.createView({id:"win",height:"80%",width:"80%",backgroundColor:"transparent",theme:"Theme.NoActionBar",navBarHidden:"true",fullscreen:"true",borderColor:"#A5A5A5",borderWidth:"2",visible:"false"}),d.__views.diyPaint.add(d.__views.win);var w=[];d.__views.view1=Ti.UI.createView({id:"view1",backgroundColor:"white"}),w.push(d.__views.view1),d.__views.__alloyId88=Ti.UI.createLabel({width:Ti.UI.SIZE,height:Ti.UI.SIZE,color:"black",text:"View 1",id:"__alloyId88"}),d.__views.view1.add(d.__views.__alloyId88),d.__views.view2=Ti.UI.createView({id:"view2",backgroundColor:"white"}),w.push(d.__views.view2),d.__views.__alloyId89=Ti.UI.createLabel({width:Ti.UI.SIZE,height:Ti.UI.SIZE,color:"black",text:"View 2",id:"__alloyId89"}),d.__views.view2.add(d.__views.__alloyId89),d.__views.view3=Ti.UI.createView({id:"view3",backgroundColor:"white"}),w.push(d.__views.view3),d.__views.__alloyId90=Ti.UI.createLabel({width:Ti.UI.SIZE,height:Ti.UI.SIZE,color:"black",text:"View 3",id:"__alloyId90"}),d.__views.view3.add(d.__views.__alloyId90),d.__views.__alloyId91=Ti.UI.createView({layout:"horizontal",bottom:"10",height:Ti.UI.SIZE,width:Ti.UI.SIZE,id:"__alloyId91"}),d.__views.view3.add(d.__views.__alloyId91),d.__views.checkBox=Ti.UI.createSwitch({value:!1,id:"checkBox",style:Ti.UI.Android.SWITCH_STYLE_CHECKBOX}),d.__views.__alloyId91.add(d.__views.checkBox),d.__views.showWindow=Ti.UI.createLabel({width:Ti.UI.SIZE,height:Ti.UI.SIZE,color:"black",text:"Don't show next time",id:"showWindow"}),d.__views.__alloyId91.add(d.__views.showWindow),d.__views.scrollableView=Ti.UI.createScrollableView({views:w,id:"scrollableView",showPagingControl:"true",pagingControlTimeout:"0"}),d.__views.win.add(d.__views.scrollableView),c.destroy=function(){},_.extend(d,d.__views),arguments[0]||{};var u=require("facebook"),v=require("fh.imagefactory"),I=Ti.Platform.displayCaps.platformWidth,g=PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight),y=d.toolbar.rect.height,p=d.toggle.getHeight(),T=0,m=d.slider.value,f=10,b=10,E="bucket";Alloy.createCollection("category_colour");var A=Alloy.createCollection("colour");Alloy.createCollection("category");var U=Alloy.createCollection("favourite"),S=U.getFavouriteList(),C=A.getColourList(),L=0,V=0,x=0,k=0,N=[],B="";u.appid=752094718209236;var P=Titanium.UI.create2DMatrix();P=P.rotate(-90),d.slider.transform=P,d.activityIndicator.show(),d.loadingBar.opacity="1",d.loadingBar.height="120",d.loadingBar.top=PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight)/2,setTimeout(function(){l(),s(),r()},300),d.toolbar.addEventListener("postlayout",function(){y=d.toolbar.rect.height,T=g-y-p,d.canvas.setBottom(y),d.canvas.setHeight(T)}),d.canvas.addEventListener("load",function(){Ti.App.fireEvent("web:initCanvasSize",{height:T,width:I})});var O=[],R=Ti.UI.createTableViewRow({title:"Save",width:150,height:Ti.UI.SIZE,left:10,touchEnabled:!0,height:60}),D=Ti.UI.createTableViewRow({title:"Share",width:150,height:Ti.UI.SIZE,left:10,touchEnabled:!0,height:60});Ti.UI.createLabel({text:"Save",width:150,textAlign:"center",height:60}),Ti.UI.createLabel({text:"Share",width:150,textAlign:"center",height:60}),O.push(R),O.push(D);var M=Titanium.UI.createTableView({separatorColor:"transparent",backgroundImage:"/images/pop_up.png",height:Ti.UI.SIZE,width:150,bottom:60,right:"9%",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER,data:O}),F=function(){H(),1==k?(k=0,d.diyPaint.remove(M)):(k=1,d.diyPaint.add(M),M.addEventListener("click",z))},z=function(e){console.log(e.index),k=0,d.diyPaint.remove(M),Ti.App.addEventListener("app:saveToGallery",j),0==e.index?Ti.App.fireEvent("web:saveAndShare",{share:0}):Ti.App.fireEvent("web:saveAndShare",{share:1})},H=function(){M.removeEventListener("click",z)},Z=Ti.UI.createTableViewRow({title:"Bucket",width:150,left:10,touchEnabled:!0,height:60}),W=Ti.UI.createTableViewRow({title:"Brush",width:150,left:10,touchEnabled:!0,height:60}),Y=Ti.UI.createTableViewRow({title:"Eraser",width:150,left:10,touchEnabled:!0,height:60});N.push(Z),N.push(W),N.push(Y);var G=Titanium.UI.createTableView({separatorColor:"transparent",backgroundImage:"/images/pop_window.png",height:Ti.UI.SIZE,width:150,bottom:60,left:"8%",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER,data:N}),$=function(e){x=0,d.diyPaint.remove(G),0==e.index&&(E="bucket",d.slider.setValue(m),Ti.App.fireEvent("web:setSensetive",{value:m}),Ti.App.fireEvent("web:changeTools",{tools:"bucket"}),d.tools.image="/images/icon_bucket.png"),1==e.index&&(E="brush",d.slider.setValue(f),Ti.App.fireEvent("web:setStroke",{value:f}),Ti.App.fireEvent("web:changeTools",{tools:"brush"}),d.tools.image="/images/icon_brush.png"),2==e.index&&(E="erase",d.slider.setValue(b),Ti.App.fireEvent("web:setStroke",{value:b}),Ti.App.fireEvent("web:changeTools",{tools:"erase"}),d.tools.image="/images/icon_erase.png")},q=function(){G.removeEventListener("click",$)},j=function(e){var t=e.blob,i=t.indexOf("base64,");t=t.substring(i+"base64,".length);var o=Ti.Utils.base64decode(t),a="sissons_diy"+printDate()+".png",r=Titanium.Filesystem.getFile(Titanium.Filesystem.externalStorageDirectory);r.exists()||r.createDirectory();var l=Titanium.Filesystem.getFile(r.resolve(),a);if(!1===l.write(o)){var _=Ti.UI.createNotification({message:"Saved FAILED",duration:Ti.UI.NOTIFICATION_DURATION_SHORT});_.show()}else{B=l.nativePath;var _=Ti.UI.createNotification({message:"Saved Done",duration:Ti.UI.NOTIFICATION_DURATION_SHORT});_.show()}if(1==e.share){console.log("share");var n=Alloy.createController("share",{imgPath:B}).getView();n.open()}l=null,r=null,Ti.App.removeEventListener("app:saveToGallery",j)};d.win.hide();var X=Ti.UI.createImageView({image:"/images/icon_remove.png",width:30,height:30,top:0,right:0});d.view3.add(X),X.addEventListener("click",function(){d.win.hide(),console.log(d.checkBox.value)}),h["$.__views.slider!stop!updateAdjustment"]&&d.__views.slider.addEventListener("stop",a),h["$.__views.photoButton!click!takePhoto"]&&d.__views.photoButton.addEventListener("click",r),h["$.__views.tools!click!toolspop"]&&d.__views.tools.addEventListener("click",o),h["$.__views.size!click!slideUp"]&&d.__views.size.addEventListener("click",t),h["$.__views.color!click!slideUp"]&&d.__views.color.addEventListener("click",t),h["$.__views.shareButton!click!share"]&&d.__views.shareButton.addEventListener("click",F),_.extend(d,c)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;