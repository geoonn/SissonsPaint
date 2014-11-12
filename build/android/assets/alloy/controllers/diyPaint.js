function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){function e(e){return e/(Titanium.Platform.displayCaps.dpi/160)}function t(e){var t=Titanium.UI.createAnimation({bottom:e,duration:500,curve:Titanium.UI.ANIMATION_CURVE_LINEAR});c.sizeBar.animate(t)}function i(e){"color"==e.source.mod?(V?(o(-330),V=0):(o(60),V=1),x=0,t(-250)):(x?(t(-250),x=0):(t(40),x=1),V=0,o(-330))}function o(e){var t=Titanium.UI.createAnimation({bottom:e,duration:500,curve:Titanium.UI.ANIMATION_CURVE_LINEAR});c.colorSwatches.animate(t)}function a(){X(),1==N?(N=0,c.diyPaint.remove($)):(N=1,c.diyPaint.add($),$.addEventListener("click",q))}function r(e){"bucket"==b?(T=parseInt(e.value),Ti.App.fireEvent("web:setSensetive",{value:T})):"brush"==b?(f=parseInt(e.value),Ti.App.fireEvent("web:setStroke",{value:f})):"erase"==b&&(E=parseInt(e.value),Ti.App.fireEvent("web:setStroke",{value:E}))}function l(){var e=Titanium.UI.createOptionDialog({title:"Choose an image source...",options:["Camera","Photo Gallery","Cancel"],cancel:2});e.addEventListener("click",function(e){0==e.index?Titanium.Media.showCamera({success:function(e){if(e.media,e.mediaType==Ti.Media.MEDIA_TYPE_PHOTO){m=c.toolbar.rect.height,y=I-m-25-p,c.canvas.setBottom(m),c.canvas.setHeight(y);var t=e.media.nativePath;g.rotateResizeImage(t,800,100),Ti.App.Properties.setString("image",t),Ti.App.fireEvent("web:loadImage",{image:t,height:y})}},cancel:function(){},error:function(e){var t=Titanium.UI.createAlertDialog({title:"Camera"});t.setMessage(e.code==Titanium.Media.NO_CAMERA?"Device does not have camera":"Unexpected error: "+e.code),t.show()},allowImageEditing:!0,saveToPhotoGallery:!0}):1==e.index&&Titanium.Media.openPhotoGallery({success:function(e){m=c.toolbar.rect.height,y=I-m-25-p,c.canvas.setBottom(m),c.canvas.setHeight(y);var t=e.media.nativePath;g.rotateResizeImage(t,800,100),Ti.App.Properties.setString("image",t),Ti.App.fireEvent("web:loadImage",{image:t,height:y})},cancel:function(){}})}),e.show()}function n(){for(var e=50*Math.ceil(L.length)+10,t=Titanium.UI.createView({layout:"horizontal",bottom:10,height:40,width:e}),i=0;i<L.length;i++){var o=A.getColourById(L[i].colour_id),a=c.UI.create("View",{backgroundColor:"rgb("+o.rgb+")",borderColor:"#A5A5A5",borderWidth:1,width:"40",height:"40",left:"5",right:"5"});s(a,o),t.add(a)}c.recommendView.add(t)}function s(e,i){e.addEventListener("click",function(){var e=i.rgb.split(","),a=rgbToHex(e[0],e[1],e[2]);c.color.setBackgroundColor(a),Ti.App.fireEvent("web:setColour",{r:e[0],g:e[1],b:e[2],hex:a}),V?(o(-330),V=0):(o(60),V=1),x=0,t(40)})}function d(){for(var e=50*Math.ceil(C.length/3)+10,t=Titanium.UI.createView({layout:"horizontal",bottom:10,height:40,width:e}),i=Titanium.UI.createView({layout:"horizontal",bottom:10,height:40,width:e}),o=Titanium.UI.createView({layout:"horizontal",height:40,width:e}),a=-1,r=[],l=0;l<C.length;l++){a=r.length;for(var n=0;n<r.length;n++)if(C[l].contrast>=r[n].contrast){a=n;break}r.splice(a,0,C[l])}for(var l=0;l<r.length;l++){var _=c.UI.create("View",{backgroundColor:"rgb("+r[l].rgb+")",borderColor:"#A5A5A5",borderWidth:1,width:"40",height:"40",left:"5",right:"5"});(l+1)%3==1?t.add(_):(l+1)%3==2?i.add(_):(l+1)%3==0&&o.add(_),s(_,r[l])}c.scrollView.add(t),c.scrollView.add(i),c.scrollView.add(o)}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="diyPaint",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var c=this,h={},u={};c.__views.diyPaint=Ti.UI.createView({id:"diyPaint"}),c.__views.diyPaint&&c.addTopLevelView(c.__views.diyPaint),c.__views.__alloyId51=Ti.UI.createView({backgroundColor:"white",id:"__alloyId51"}),c.__views.diyPaint.add(c.__views.__alloyId51),c.__views.toggle=Ti.UI.createView({id:"toggle",layout:"horizontal",height:"80",top:"0"}),c.__views.__alloyId51.add(c.__views.toggle),c.__views.__alloyId52=Alloy.createController("toggle",{id:"__alloyId52",__parentSymbol:c.__views.toggle}),c.__views.__alloyId52.setParent(c.__views.toggle),c.__views.__alloyId53=Ti.UI.createLabel({width:"75%",height:Ti.UI.SIZE,color:"black",font:{fontSize:22},text:"DIY Paint",textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:"__alloyId53"}),c.__views.toggle.add(c.__views.__alloyId53),c.__views.canvas=Ti.UI.createWebView({id:"canvas",url:"/html/canvas-paint-bucket.html",height:"200",enableZoomControls:"false",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),c.__views.__alloyId51.add(c.__views.canvas),c.__views.colorSwatches=Ti.UI.createView({layout:"vertical",height:"330",bottom:"-330",id:"colorSwatches"}),c.__views.__alloyId51.add(c.__views.colorSwatches),c.__views.__alloyId54=Ti.UI.createImageView({image:"/images/scroll_up.png",backgroundColor:"transparent",width:Titanium.UI.FILL,id:"__alloyId54"}),c.__views.colorSwatches.add(c.__views.__alloyId54),c.__views.bottomColorBar=Ti.UI.createView({id:"bottomColorBar",layout:"vertical",backgroundColor:"white"}),c.__views.colorSwatches.add(c.__views.bottomColorBar),c.__views.__alloyId55=Ti.UI.createLabel({width:"90%",height:Ti.UI.SIZE,color:"black",text:"FAVOURITE COLOURS",textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,bottom:"10",id:"__alloyId55"}),c.__views.bottomColorBar.add(c.__views.__alloyId55),c.__views.recommendView=Ti.UI.createScrollView({id:"recommendView",backgroundColor:"white",layout:"horizontal",scrollType:"horizontal",height:"50",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),c.__views.bottomColorBar.add(c.__views.recommendView),c.__views.__alloyId56=Ti.UI.createImageView({image:"/images/scroll_up.png",backgroundColor:"transparent",width:Titanium.UI.FILL,id:"__alloyId56"}),c.__views.bottomColorBar.add(c.__views.__alloyId56),c.__views.__alloyId57=Ti.UI.createLabel({width:"90%",height:Ti.UI.SIZE,color:"black",text:"COLOUR LIBRARY",textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,bottom:"10",id:"__alloyId57"}),c.__views.bottomColorBar.add(c.__views.__alloyId57),c.__views.scrollView=Ti.UI.createScrollView({id:"scrollView",backgroundColor:"white",layout:"vertical",scrollType:"horizontal",height:"150",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),c.__views.bottomColorBar.add(c.__views.scrollView),c.__views.sizeBar=Ti.UI.createView({height:"250",bottom:"-250",width:"100",id:"sizeBar"}),c.__views.__alloyId51.add(c.__views.sizeBar),c.__views.__alloyId58=Ti.UI.createImageView({image:"/images/pop_window2.png",height:"250",width:"100",id:"__alloyId58"}),c.__views.sizeBar.add(c.__views.__alloyId58),c.__views.slider=Ti.UI.createSlider({id:"slider",min:"0",max:"100",value:"20",thumbImage:"/images/size_toggle.png",width:"180"}),c.__views.sizeBar.add(c.__views.slider),r?c.__views.slider.addEventListener("stop",r):u["$.__views.slider!stop!updateAdjustment"]=!0,c.__views.toolbar=Ti.UI.createView({height:"60",bottom:"0",id:"toolbar",width:"100%",backgroundImage:"/images/tool_bar.jpg"}),c.__views.__alloyId51.add(c.__views.toolbar),c.__views.__alloyId59=Ti.UI.createView({layout:"horizontal",width:"100%",id:"__alloyId59"}),c.__views.toolbar.add(c.__views.__alloyId59),c.__views.__alloyId60=Ti.UI.createView({width:"20%",id:"__alloyId60"}),c.__views.__alloyId59.add(c.__views.__alloyId60),c.__views.photoButton=Ti.UI.createImageView({id:"photoButton",image:"/images/icon_photo.png",height:"40",width:"50",top:"10",bottom:"10"}),c.__views.__alloyId60.add(c.__views.photoButton),l?c.__views.photoButton.addEventListener("click",l):u["$.__views.photoButton!click!takePhoto"]=!0,c.__views.__alloyId61=Ti.UI.createView({width:"20%",id:"__alloyId61"}),c.__views.__alloyId59.add(c.__views.__alloyId61),c.__views.tools=Ti.UI.createImageView({id:"tools",image:"/images/icon_bucket.png",height:"40",width:"50",top:"10",bottom:"10"}),c.__views.__alloyId61.add(c.__views.tools),a?c.__views.tools.addEventListener("click",a):u["$.__views.tools!click!toolspop"]=!0,c.__views.__alloyId62=Ti.UI.createView({width:"20%",id:"__alloyId62"}),c.__views.__alloyId59.add(c.__views.__alloyId62),c.__views.size=Ti.UI.createImageView({id:"size",image:"/images/icon_size.png",mod:"size",height:"40",width:"50",top:"10",bottom:"10"}),c.__views.__alloyId62.add(c.__views.size),i?c.__views.size.addEventListener("click",i):u["$.__views.size!click!slideUp"]=!0,c.__views.__alloyId63=Ti.UI.createView({width:"20%",id:"__alloyId63"}),c.__views.__alloyId59.add(c.__views.__alloyId63),c.__views.color=Ti.UI.createView({id:"color",backgroundColor:"#ffffff",height:"40",width:"50",mod:"color",borderColor:"#000000",borderWidth:"3",borderRadius:"10",top:"10",bottom:"10"}),c.__views.__alloyId63.add(c.__views.color),i?c.__views.color.addEventListener("click",i):u["$.__views.color!click!slideUp"]=!0,c.__views.__alloyId64=Ti.UI.createView({width:"20%",id:"__alloyId64"}),c.__views.__alloyId59.add(c.__views.__alloyId64),c.__views.__alloyId65=Ti.UI.createImageView({id:"__alloyId65",image:"/images/icon_share.png",height:"40",width:"50",top:"10",bottom:"10"}),c.__views.__alloyId64.add(c.__views.__alloyId65),F?c.__views.__alloyId65.addEventListener("click",F):u["$.__views.__alloyId65!click!share"]=!0,h.destroy=function(){},_.extend(c,c.__views),arguments[0]||{};var w=require("facebook"),g=require("fh.imagefactory"),v=Ti.Platform.displayCaps.platformWidth,I=e(Ti.Platform.displayCaps.platformHeight),m=c.toolbar.rect.height,p=c.toggle.getHeight(),y=0,T=c.slider.value,f=10,E=10,b="bucket";Alloy.createCollection("category_colour");var A=Alloy.createCollection("colour"),U=Alloy.createCollection("category"),S=Alloy.createCollection("favourite"),L=S.getFavouriteList();U.getCategoryListByType(2);var C=A.getColourList(),x=0,V=0,N=0,k=0,P="";w.appid=752094718209236;var O=Titanium.UI.create2DMatrix();O=O.rotate(-90),c.slider.transform=O,l(),c.toolbar.addEventListener("postlayout",function(){m=c.toolbar.rect.height,y=I-m-25-p,c.canvas.setBottom(m),c.canvas.setHeight(y)}),c.canvas.addEventListener("load",function(){Ti.App.fireEvent("web:initCanvasSize",{height:y,width:v})});var R=[],B=Ti.UI.createTableViewRow({title:"Save",width:150,height:Ti.UI.SIZE,left:10,touchEnabled:!0,height:60}),D=Ti.UI.createTableViewRow({title:"Share",width:150,height:Ti.UI.SIZE,left:10,touchEnabled:!0,height:60});Ti.UI.createLabel({text:"Save",width:150,textAlign:"center",height:60}),Ti.UI.createLabel({text:"Share",width:150,textAlign:"center",height:60}),R.push(B),R.push(D);var M=Titanium.UI.createTableView({separatorColor:"transparent",backgroundImage:"/images/pop_up.png",height:Ti.UI.SIZE,width:150,bottom:60,right:"10%",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER,data:R}),F=function(){G(),1==k?(k=0,c.diyPaint.remove(M)):(k=1,c.diyPaint.add(M),M.addEventListener("click",z))},z=function(e){console.log(e.index),k=0,c.diyPaint.remove(M),Ti.App.addEventListener("app:saveToGallery",j),0==e.index?Ti.App.fireEvent("web:saveAndShare",{share:0}):Ti.App.fireEvent("web:saveAndShare",{share:1})},G=function(){M.removeEventListener("click",z)},H=[],Y=Ti.UI.createTableViewRow({title:"Bucket",width:150,left:10,touchEnabled:!0,height:60}),W=Ti.UI.createTableViewRow({title:"Brush",width:150,left:10,touchEnabled:!0,height:60}),Z=Ti.UI.createTableViewRow({title:"Eraser",width:150,left:10,touchEnabled:!0,height:60});H.push(Y),H.push(W),H.push(Z);var $=Titanium.UI.createTableView({separatorColor:"transparent",backgroundImage:"/images/pop_window.png",height:Ti.UI.SIZE,width:150,bottom:60,left:"15",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER,data:H}),q=function(e){N=0,c.diyPaint.remove($),0==e.index&&(b="bucket",c.slider.setValue(T),Ti.App.fireEvent("web:setSensetive",{value:T}),Ti.App.fireEvent("web:changeTools",{tools:"bucket"}),c.tools.image="/images/icon_bucket.png"),1==e.index&&(b="brush",c.slider.setValue(f),Ti.App.fireEvent("web:setStroke",{value:f}),Ti.App.fireEvent("web:changeTools",{tools:"brush"}),c.tools.image="/images/icon_brush.png"),2==e.index&&(b="erase",c.slider.setValue(E),Ti.App.fireEvent("web:setStroke",{value:E}),Ti.App.fireEvent("web:changeTools",{tools:"erase"}),c.tools.image="/images/icon_erase.png")},X=function(){$.removeEventListener("click",q)};setTimeout(function(){n(),d()},0);var j=function(e){var t=e.blob,i=t.indexOf("base64,");t=t.substring(i+"base64,".length);var o=Ti.Utils.base64decode(t),a="sissons_diy"+printDate()+".png",r=Titanium.Filesystem.getFile(Titanium.Filesystem.externalStorageDirectory);r.exists()||r.createDirectory();var l=Titanium.Filesystem.getFile(r.resolve(),a);if(!1===l.write(o)){var n=Ti.UI.createNotification({message:"Saved FAILED",duration:Ti.UI.NOTIFICATION_DURATION_SHORT});n.show()}else{P=l.nativePath,console.log("save done "+P);var n=Ti.UI.createNotification({message:"Saved Done",duration:Ti.UI.NOTIFICATION_DURATION_SHORT});n.show()}if(console.log("e.share: "+e.share),1==e.share){console.log("share");var s=Alloy.createController("share",{imgPath:P}).getView();s.open()}l=null,r=null,Ti.App.removeEventListener("app:saveToGallery",j)};u["$.__views.slider!stop!updateAdjustment"]&&c.__views.slider.addEventListener("stop",r),u["$.__views.photoButton!click!takePhoto"]&&c.__views.photoButton.addEventListener("click",l),u["$.__views.tools!click!toolspop"]&&c.__views.tools.addEventListener("click",a),u["$.__views.size!click!slideUp"]&&c.__views.size.addEventListener("click",i),u["$.__views.color!click!slideUp"]&&c.__views.color.addEventListener("click",i),u["$.__views.__alloyId65!click!share"]&&c.__views.__alloyId65.addEventListener("click",F),_.extend(c,h)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;