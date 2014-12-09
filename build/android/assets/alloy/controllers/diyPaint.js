function __processArg(e,i){var t=null;return e&&(t=e[i]||null,delete e[i]),t}function Controller(){function e(e){var i=Titanium.UI.createAnimation({bottom:e,duration:500,curve:Titanium.UI.ANIMATION_CURVE_LINEAR});d.sizeBar.animate(i)}function i(i){"color"==i.source.mod?(L?(t(-330),L=0):(t(60),L=1),1==k&&o(),V=0,e(-250)):(V?(e(-250),V=0):(e(40),V=1),1==k&&o(),L=0,t(-330))}function t(e){var i=Titanium.UI.createAnimation({bottom:e,duration:500,curve:Titanium.UI.ANIMATION_CURVE_LINEAR});d.colorSwatches.animate(i)}function o(){J(),1==k?(k=0,K.hide()):(k=1,t(-330),e(-250),L=0,V=0,K.show(),K.addEventListener("click",X))}function a(e){"bucket"==E?(T=parseInt(e.value),Ti.App.fireEvent("web:setSensetive",{value:T})):"brush"==E?(f=parseInt(e.value),Ti.App.fireEvent("web:setStroke",{value:f})):"erase"==E&&(b=parseInt(e.value),Ti.App.fireEvent("web:setStroke",{value:b}))}function r(){d.activityIndicator.hide(),d.loadingBar.opacity="0",d.loadingBar.height="0";var e=Titanium.UI.createOptionDialog({title:"Choose an image source...",options:["Camera","Photo Gallery","Cancel"],cancel:2});e.addEventListener("click",function(e){0==e.index?Titanium.Media.showCamera({success:function(e){if(e.media,e.mediaType==Ti.Media.MEDIA_TYPE_PHOTO){y=d.toolbar.rect.height,m=I-y-p,d.canvas.setBottom(y),d.canvas.setHeight(m);var i=e.media.nativePath;v.rotateResizeImage(i,g,100),Ti.App.Properties.setString("image",i),Ti.App.fireEvent("web:loadImage",{image:i,height:m}),d.shareButton.touchEnabled="true"}},cancel:function(){},error:function(e){var i=Titanium.UI.createAlertDialog({title:"Camera"});i.setMessage(e.code==Titanium.Media.NO_CAMERA?"Device does not have camera":"Unexpected error: "+e.code),i.show()},allowImageEditing:!0,saveToPhotoGallery:!0}):1==e.index&&Titanium.Media.openPhotoGallery({success:function(e){y=d.toolbar.rect.height,m=I-y-p,d.canvas.setBottom(y),d.canvas.setHeight(m);var i=e.media.nativePath;Ti.App.Properties.setString("image",i),Ti.App.fireEvent("web:loadImage",{image:i,height:m}),d.shareButton.touchEnabled="true"},cancel:function(){}})}),e.show()}function l(){for(var e=50*Math.ceil(S.length)+10,i=Titanium.UI.createView({layout:"horizontal",bottom:10,height:40,width:e}),t=0;t<S.length;t++){var o,a=A.getColourById(S[t].colour_id);o=""!=a.thumb?d.UI.create("ImageView",{image:a.thumb,borderColor:"#A5A5A5",borderWidth:1,width:"40",height:"40",left:"5",right:"5"}):d.UI.create("View",{backgroundColor:"rgb("+a.rgb+")",borderColor:"#A5A5A5",borderWidth:1,width:"40",height:"40",left:"5",right:"5"}),s(o,a),i.add(o)}d.recommendView.add(i)}function s(e,i){e.addEventListener("click",function(){var e=i.rgb.split(","),o=rgbToHex(e[0],e[1],e[2]);d.color.setBackgroundColor(o),Ti.App.fireEvent("web:setColour",{r:e[0],g:e[1],b:e[2],hex:o}),L?(t(-330),L=0):(t(60),L=1)})}function n(){for(var e=50*Math.ceil(C.length/3)+10,i=Titanium.UI.createView({layout:"horizontal",bottom:10,height:40,width:e}),t=Titanium.UI.createView({layout:"horizontal",bottom:10,height:40,width:e}),o=Titanium.UI.createView({layout:"horizontal",height:40,width:e}),a=-1,r=[],l=0;l<C.length;l++)if(C[l].contrast<=730){a=r.length;for(var _=0;_<r.length;_++)if(C[l].contrast>=r[_].contrast){a=_;break}r.splice(a,0,C[l])}for(var n=[],l=0;l<C.length;l++)if(C[l].contrast>=730){a=n.length;for(var _=0;_<n.length;_++)if(C[l].contrast>=n[_].contrast){a=_;break}n.splice(a,0,C[l])}for(var c=r.concat(n),l=0;l<c.length;l++){var h;h=""!=c[l].thumb?d.UI.create("ImageView",{image:c[l].thumb,borderColor:"#A5A5A5",borderWidth:1,width:"40",height:"40",left:"5",right:"5"}):d.UI.create("View",{backgroundColor:"rgb("+c[l].rgb+")",borderColor:"#A5A5A5",borderWidth:1,width:"40",height:"40",left:"5",right:"5"}),(l+1)%3==1?i.add(h):(l+1)%3==2?t.add(h):(l+1)%3==0&&o.add(h),s(h,c[l])}d.scrollView.add(i),d.scrollView.add(t),d.scrollView.add(o)}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="diyPaint",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var d=this,c={},h={};d.__views.diyPaint=Ti.UI.createView({id:"diyPaint"}),d.__views.diyPaint&&d.addTopLevelView(d.__views.diyPaint),d.__views.__alloyId80=Ti.UI.createView({backgroundColor:"white",id:"__alloyId80"}),d.__views.diyPaint.add(d.__views.__alloyId80),d.__views.toggle=Ti.UI.createView({id:"toggle",layout:"horizontal",height:"80",top:"0",backgroundImage:"/images/banner_paint_diy.jpg"}),d.__views.__alloyId80.add(d.__views.toggle),d.__views.__alloyId81=Alloy.createController("toggle",{id:"__alloyId81",__parentSymbol:d.__views.toggle}),d.__views.__alloyId81.setParent(d.__views.toggle),d.__views.canvas=Ti.UI.createWebView({top:"80",id:"canvas",url:"/html/canvas-paint-bucket.html",height:"80%",enableZoomControls:"false",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER,disableBounce:"true"}),d.__views.__alloyId80.add(d.__views.canvas),d.__views.loadingBar=Ti.UI.createView({layout:"vertical",id:"loadingBar",height:"0",width:"120",borderRadius:"15",top:"0",opacity:"1",backgroundColor:"#2E2E2E"}),d.__views.__alloyId80.add(d.__views.loadingBar),d.__views.activityIndicator=Ti.UI.createActivityIndicator({style:Ti.UI.ActivityIndicatorStyle.BIG,top:15,left:30,width:60,id:"activityIndicator"}),d.__views.loadingBar.add(d.__views.activityIndicator),d.__views.__alloyId82=Ti.UI.createLabel({width:Ti.UI.SIZE,height:Ti.UI.SIZE,color:"#ffffff",text:"Loading",id:"__alloyId82"}),d.__views.loadingBar.add(d.__views.__alloyId82),d.__views.colorSwatches=Ti.UI.createView({layout:"vertical",height:"330",bottom:"-330",id:"colorSwatches"}),d.__views.__alloyId80.add(d.__views.colorSwatches),d.__views.__alloyId83=Ti.UI.createImageView({image:"/images/scroll_up.png",backgroundColor:"transparent",width:Titanium.UI.FILL,id:"__alloyId83"}),d.__views.colorSwatches.add(d.__views.__alloyId83),d.__views.bottomColorBar=Ti.UI.createView({id:"bottomColorBar",layout:"vertical",backgroundColor:"white"}),d.__views.colorSwatches.add(d.__views.bottomColorBar),d.__views.__alloyId84=Ti.UI.createLabel({width:"90%",height:Ti.UI.SIZE,color:"black",text:"FAVOURITE COLOURS",textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,bottom:"10",id:"__alloyId84"}),d.__views.bottomColorBar.add(d.__views.__alloyId84),d.__views.recommendView=Ti.UI.createScrollView({id:"recommendView",backgroundColor:"white",layout:"horizontal",scrollType:"horizontal",height:"50",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),d.__views.bottomColorBar.add(d.__views.recommendView),d.__views.__alloyId85=Ti.UI.createImageView({image:"/images/scroll_up.png",backgroundColor:"transparent",width:Titanium.UI.FILL,id:"__alloyId85"}),d.__views.bottomColorBar.add(d.__views.__alloyId85),d.__views.__alloyId86=Ti.UI.createLabel({width:"90%",height:Ti.UI.SIZE,color:"black",text:"COLOUR LIBRARY",textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,bottom:"10",id:"__alloyId86"}),d.__views.bottomColorBar.add(d.__views.__alloyId86),d.__views.scrollView=Ti.UI.createScrollView({id:"scrollView",backgroundColor:"white",layout:"vertical",scrollType:"horizontal",height:"150",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),d.__views.bottomColorBar.add(d.__views.scrollView),d.__views.sizeBar=Ti.UI.createView({height:"250",bottom:"-250",width:"100",id:"sizeBar"}),d.__views.__alloyId80.add(d.__views.sizeBar),d.__views.__alloyId87=Ti.UI.createImageView({image:"/images/pop_window2.png",height:"250",width:"100",id:"__alloyId87"}),d.__views.sizeBar.add(d.__views.__alloyId87),d.__views.slider=Ti.UI.createSlider({id:"slider",min:"0",max:"100",value:"30",thumbImage:"/images/size_toggle.png",width:"180"}),d.__views.sizeBar.add(d.__views.slider),a?d.__views.slider.addEventListener("stop",a):h["$.__views.slider!stop!updateAdjustment"]=!0,d.__views.toolbar=Ti.UI.createView({height:"60",bottom:"0",id:"toolbar",width:"100%",backgroundImage:"/images/tool_bar.jpg"}),d.__views.__alloyId80.add(d.__views.toolbar),d.__views.__alloyId88=Ti.UI.createView({layout:"horizontal",width:"100%",id:"__alloyId88"}),d.__views.toolbar.add(d.__views.__alloyId88),d.__views.__alloyId89=Ti.UI.createView({width:"20%",id:"__alloyId89"}),d.__views.__alloyId88.add(d.__views.__alloyId89),d.__views.photoButton=Ti.UI.createImageView({id:"photoButton",image:"/images/icon_photo.png",height:"40",width:"50",top:"10",bottom:"10"}),d.__views.__alloyId89.add(d.__views.photoButton),r?d.__views.photoButton.addEventListener("click",r):h["$.__views.photoButton!click!takePhoto"]=!0,d.__views.__alloyId90=Ti.UI.createView({width:"20%",id:"__alloyId90"}),d.__views.__alloyId88.add(d.__views.__alloyId90),d.__views.tools=Ti.UI.createImageView({id:"tools",image:"/images/icon_bucket.png",height:"40",width:"50",top:"10",bottom:"10"}),d.__views.__alloyId90.add(d.__views.tools),o?d.__views.tools.addEventListener("click",o):h["$.__views.tools!click!toolspop"]=!0,d.__views.__alloyId91=Ti.UI.createView({width:"20%",id:"__alloyId91"}),d.__views.__alloyId88.add(d.__views.__alloyId91),d.__views.size=Ti.UI.createImageView({id:"size",image:"/images/icon_size.png",mod:"size",height:"40",width:"50",top:"10",bottom:"10"}),d.__views.__alloyId91.add(d.__views.size),i?d.__views.size.addEventListener("click",i):h["$.__views.size!click!slideUp"]=!0,d.__views.__alloyId92=Ti.UI.createView({width:"20%",id:"__alloyId92"}),d.__views.__alloyId88.add(d.__views.__alloyId92),d.__views.color=Ti.UI.createView({id:"color",backgroundColor:"#ffffff",height:"40",width:"50",mod:"color",borderColor:"#000000",borderWidth:"3",borderRadius:"10",top:"10",bottom:"10"}),d.__views.__alloyId92.add(d.__views.color),i?d.__views.color.addEventListener("click",i):h["$.__views.color!click!slideUp"]=!0,d.__views.__alloyId93=Ti.UI.createView({width:"20%",id:"__alloyId93"}),d.__views.__alloyId88.add(d.__views.__alloyId93),d.__views.shareButton=Ti.UI.createImageView({touchEnabled:!1,id:"shareButton",image:"/images/icon_share.png",height:"40",width:"50",top:"10",bottom:"10"}),d.__views.__alloyId93.add(d.__views.shareButton),Y?d.__views.shareButton.addEventListener("click",Y):h["$.__views.shareButton!click!share"]=!0,d.__views.win=Ti.UI.createView({id:"win",height:"90%",width:"90%",backgroundColor:"transparent",theme:"Theme.NoActionBar",navBarHidden:"true",fullscreen:"true",borderColor:"#A5A5A5",borderWidth:"2",visible:"false"}),d.__views.diyPaint.add(d.__views.win);var w=[];d.__views.view1=Ti.UI.createView({id:"view1",backgroundColor:"#FFFFFF"}),w.push(d.__views.view1),d.__views.__alloyId95=Ti.UI.createImageView({image:"/images/tutorial/paintDiy/tutorial_paintDIY1.jpg",width:"100%",id:"__alloyId95"}),d.__views.view1.add(d.__views.__alloyId95),d.__views.view2=Ti.UI.createView({id:"view2",backgroundColor:"#FFFFFF"}),w.push(d.__views.view2),d.__views.__alloyId96=Ti.UI.createImageView({image:"/images/tutorial/paintDiy/tutorial_paintDIY2.jpg",width:"100%",id:"__alloyId96"}),d.__views.view2.add(d.__views.__alloyId96),d.__views.view3=Ti.UI.createView({id:"view3",backgroundColor:"#FFFFFF"}),w.push(d.__views.view3),d.__views.__alloyId97=Ti.UI.createImageView({image:"/images/tutorial/paintDiy/tutorial_paintDIY3.jpg",width:"100%",id:"__alloyId97"}),d.__views.view3.add(d.__views.__alloyId97),d.__views.__alloyId98=Ti.UI.createView({layout:"horizontal",bottom:"4",height:Ti.UI.SIZE,width:Ti.UI.SIZE,id:"__alloyId98"}),d.__views.view3.add(d.__views.__alloyId98),d.__views.checkBox=Ti.UI.createSwitch({value:!0,id:"checkBox",style:Ti.UI.Android.SWITCH_STYLE_CHECKBOX}),d.__views.__alloyId98.add(d.__views.checkBox),d.__views.showWindow=Ti.UI.createLabel({width:Ti.UI.SIZE,height:Ti.UI.SIZE,color:"black",text:"Don't show next time",left:"10",id:"showWindow"}),d.__views.__alloyId98.add(d.__views.showWindow),d.__views.scrollableView=Ti.UI.createScrollableView({views:w,id:"scrollableView",showPagingControl:"true",pagingControlTimeout:"0",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),d.__views.win.add(d.__views.scrollableView),c.destroy=function(){},_.extend(d,d.__views),arguments[0]||{};var u=require("facebook"),v=require("fh.imagefactory"),g=Ti.Platform.displayCaps.platformWidth,I=PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight),y=d.toolbar.rect.height,p=d.toggle.getHeight(),m=0,T=d.slider.value,f=10,b=10,E="bucket";Alloy.createCollection("category_colour");var A=Alloy.createCollection("colour");Alloy.createCollection("category");var U=Alloy.createCollection("favourite"),S=U.getFavouriteList(),C=A.getColourList(),V=0,L=0,k=0,B=0,x=[],P="";u.appid=752094718209236;var N=Titanium.UI.create2DMatrix();N=N.rotate(-90),d.slider.transform=N,d.activityIndicator.show(),d.loadingBar.opacity="1",d.loadingBar.height="120",d.loadingBar.top=PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight)/2-d.loadingBar.getHeight()/2,setTimeout(function(){l(),n(),1==Ti.App.Properties.getString("diyCheckBox")&&r()},1e3),d.toolbar.addEventListener("postlayout",function(){y=d.toolbar.rect.height,m=I-y-p,d.canvas.setBottom(y),d.canvas.setHeight(m)}),d.canvas.addEventListener("load",function(){Ti.App.fireEvent("web:initCanvasSize",{height:m,width:g})});var O=[],R=Ti.UI.createTableViewRow({width:150,height:Ti.UI.SIZE,left:10,touchEnabled:!0,height:60}),D=Ti.UI.createTableViewRow({width:150,height:Ti.UI.SIZE,left:10,touchEnabled:!0,height:60}),F=Ti.UI.createImageView({image:"/images/fb.png",width:25,height:Ti.UI.SIZE,left:20,touchEnabled:!0,height:25}),M=Ti.UI.createImageView({image:"/images/save.png",width:25,height:Ti.UI.SIZE,left:20,touchEnabled:!0,height:25}),H=Ti.UI.createLabel({text:"Save",width:150,textAlign:"center",height:60}),z=Ti.UI.createLabel({text:"Share",width:150,textAlign:"center",height:60});D.add(F),D.add(z),R.add(M),R.add(H),O.push(R),O.push(D);var W=Titanium.UI.createTableView({separatorColor:"transparent",backgroundImage:"/images/pop_up.png",height:Ti.UI.SIZE,width:150,bottom:60,right:"9%",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER,data:O});d.diyPaint.add(W);var Y=function(){Z(),1==B?(B=0,W.hide()):(B=1,W.show(),W.addEventListener("click",$))},$=function(e){B=0,W.hide(),Ti.App.addEventListener("app:saveToGallery",Q),0==e.index?Ti.App.fireEvent("web:saveAndShare",{share:0}):Ti.App.fireEvent("web:saveAndShare",{share:1})},Z=function(){W.removeEventListener("click",$)},q=Ti.UI.createTableViewRow({title:"Bucket",width:150,left:10,touchEnabled:!0,height:50}),j=Ti.UI.createTableViewRow({title:"Brush",width:150,left:10,touchEnabled:!0,height:50}),G=Ti.UI.createTableViewRow({title:"Eraser",width:150,left:10,touchEnabled:!0,height:50});x.push(q),x.push(j),x.push(G);var K=Titanium.UI.createTableView({separatorColor:"transparent",backgroundImage:"/images/pop_window.png",height:Ti.UI.SIZE,width:150,bottom:60,left:"8%",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER,data:x});d.diyPaint.add(K);var X=function(e){k=0,K.hide(),0==e.index&&(E="bucket",d.slider.setValue(T),Ti.App.fireEvent("web:setSensetive",{value:T}),Ti.App.fireEvent("web:changeTools",{tools:"bucket"}),d.tools.image="/images/icon_bucket.png"),1==e.index&&(E="brush",d.slider.setValue(f),Ti.App.fireEvent("web:setStroke",{value:f}),Ti.App.fireEvent("web:changeTools",{tools:"brush"}),d.tools.image="/images/icon_brush.png"),2==e.index&&(E="erase",d.slider.setValue(b),Ti.App.fireEvent("web:setStroke",{value:b}),Ti.App.fireEvent("web:changeTools",{tools:"erase"}),d.tools.image="/images/icon_erase.png")},J=function(){K.removeEventListener("click",X)},Q=function(e){var i=e.blob,t=i.indexOf("base64,");i=i.substring(t+"base64,".length);var o=Ti.Utils.base64decode(i),a="sissons_diy"+printDate()+".png",r="file://storage/sdcard0"+Ti.Filesystem.separator+"Pictures"+Ti.Filesystem.separator+"DIY",l=Titanium.Filesystem.getFile(r);l.exists()||l.createDirectory();var _=Titanium.Filesystem.getFile(l.resolve(),a);if(!1===_.write(o)){var s=Ti.UI.createNotification({message:"Saved FAILED",duration:Ti.UI.NOTIFICATION_DURATION_SHORT});s.show()}else{P=_.nativePath;var s=Ti.UI.createNotification({message:"Saved Done",duration:Ti.UI.NOTIFICATION_DURATION_SHORT});s.show()}if(1==e.share){var n=Alloy.createController("share",{imgPath:P}).getView();n.open()}Ti.Media.Android.scanMediaFiles([r+Ti.Filesystem.separator+a],["image/png"],function(){_=null,l=null}),Ti.App.removeEventListener("app:saveToGallery",Q)};1==Ti.App.Properties.getString("diyCheckBox")?d.win.hide():d.win.show();var ei=Ti.UI.createImageView({image:"/images/icon_remove.png",width:30,height:30,top:0,right:0});d.view3.add(ei),ei.addEventListener("click",function(){d.win.hide(),r(),1==d.checkBox.value&&Ti.App.Properties.setString("diyCheckBox",1)}),setTimeout(function(){K.hide(),W.hide()},3),h["$.__views.slider!stop!updateAdjustment"]&&d.__views.slider.addEventListener("stop",a),h["$.__views.photoButton!click!takePhoto"]&&d.__views.photoButton.addEventListener("click",r),h["$.__views.tools!click!toolspop"]&&d.__views.tools.addEventListener("click",o),h["$.__views.size!click!slideUp"]&&d.__views.size.addEventListener("click",i),h["$.__views.color!click!slideUp"]&&d.__views.color.addEventListener("click",i),h["$.__views.shareButton!click!share"]&&d.__views.shareButton.addEventListener("click",Y),_.extend(d,c)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;