function S4(){return(65536*(1+Math.random())|0).toString(16).substring(1)}function guid(){return S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4()}function InitAdapter(){throw"localStorage persistence supported only with MobileWeb."}function Sync(e,t,i){function o(e){localStorage.setItem(a,JSON.stringify(e))}var a=t.config.adapter.collection_name,r=t.config.data,l=null;switch(e){case"create":t.id||(t.id=guid(),t.set(t.idAttribute,t.id)),r[t.id]=t,o(r),l=t.toJSON();break;case"read":var n=localStorage.getItem(a),s=n&&JSON.parse(n)||{},d=0;for(var c in s){var h=new t.config.Model(s[c]);t.models.push(h),d++}t.length=d,l=1===d?t.models[0]:t.models;break;case"update":r[t.id]=t,o(r),l=t.toJSON();break;case"delete":delete r[t.id],o(r),l=t.toJSON()}l?(_.isFunction(i.success)&&i.success(l),"read"===e&&t.trigger("fetch")):_.isFunction(i.error)&&i.error(l)}var _=require("alloy/underscore")._;module.exports.sync=Sync,module.exports.beforeModelCreate=function(e){return e=e||{},e.data={},InitAdapter(),e},module.exports.afterModelCreate=function(e){return e=e||{},e.prototype.config.Model=e,e};