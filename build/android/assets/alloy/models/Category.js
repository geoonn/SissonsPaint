var Alloy=require("alloy"),_=require("alloy/underscore")._,model,collection;exports.definition={config:{columns:{id:"INTEGER",name:"TEXT",type:"TEXT",description:"TEXT",image:"TEXT"},adapter:{type:"sql",collection_name:"category"}},extendModel:function(e){return _.extend(e.prototype,{}),e},extendCollection:function(e){return _.extend(e.prototype,{getCategoryList:function(){var e=this,t="SELECT * FROM "+e.config.adapter.collection_name+" order by id DESC";db=Ti.Database.open(e.config.adapter.db_name);for(var i=db.execute(t),o=[],a=0;i.isValidRow();)o[a]={id:i.fieldByName("id"),name:i.fieldByName("name"),type:i.fieldByName("type"),image:i.fieldByName("image"),description:i.fieldByName("description")},i.next(),a++;return i.close(),db.close(),e.trigger("sync"),o},getCategoryById:function(e){var t=this,i="SELECT * FROM "+t.config.adapter.collection_name+" WHERE id='"+e+"'";db=Ti.Database.open(t.config.adapter.db_name);var o=db.execute(i),a=[];return o.isValidRow()&&(a={id:o.fieldByName("id"),name:o.fieldByName("name"),type:o.fieldByName("type"),image:o.fieldByName("image"),description:o.fieldByName("description")}),o.close(),db.close(),t.trigger("sync"),a},resetCategory:function(){var e=this,t="DELETE FROM "+e.config.adapter.collection_name;db=Ti.Database.open(e.config.adapter.db_name),db.execute(t),db.close(),e.trigger("sync")}}),e}},model=Alloy.M("category",exports.definition,[]),collection=Alloy.C("category",exports.definition,model),exports.Model=model,exports.Collection=collection;