var Alloy=require("alloy"),_=require("alloy/underscore")._,model,collection;exports.definition={config:{columns:{id:"INTEGER",name:"TEXT",code:"TEXT",rgb:"TEXT",cmyk:"TEXT",sample:"TEXT"},adapter:{type:"sql",collection_name:"colour"}},extendModel:function(e){return _.extend(e.prototype,{}),e},extendCollection:function(e){return _.extend(e.prototype,{getColourList:function(){var e=this,t="SELECT * FROM "+e.config.adapter.collection_name+"  order by id DESC";db=Ti.Database.open(e.config.adapter.db_name);for(var i=db.execute(t),o=[],a=0;i.isValidRow();)o[a]={id:i.fieldByName("id"),name:i.fieldByName("name"),code:i.fieldByName("code"),rgb:i.fieldByName("rgb"),cmyk:i.fieldByName("cmyk"),sample:i.fieldByName("sample")},i.next(),a++;return i.close(),db.close(),e.trigger("sync"),o},getColourById:function(e){var t=this,i="SELECT * FROM "+t.config.adapter.collection_name+" WHERE id='"+e+"'";db=Ti.Database.open(t.config.adapter.db_name);var o=db.execute(i),a=[];return o.isValidRow()&&(a={id:o.fieldByName("id"),name:o.fieldByName("name"),code:o.fieldByName("code"),rgb:o.fieldByName("rgb"),cmyk:o.fieldByName("cmyk"),sample:o.fieldByName("sample")}),o.close(),db.close(),t.trigger("sync"),a},resetColour:function(){var e=this,t="DELETE FROM "+e.config.adapter.collection_name;db=Ti.Database.open(e.config.adapter.db_name),db.execute(t),db.close(),e.trigger("sync")}}),e}},model=Alloy.M("colour",exports.definition,[]),collection=Alloy.C("colour",exports.definition,model),exports.Model=model,exports.Collection=collection;