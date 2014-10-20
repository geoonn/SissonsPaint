function S4(){return(65536*(1+Math.random())|0).toString(16).substring(1)}function guid(){return S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4()}function Migrator(e,t){this.db=t,this.dbname=e.adapter.db_name,this.table=e.adapter.collection_name,this.idAttribute=e.adapter.idAttribute,this.column=function(e){var t=e.split(/\s+/),i=t[0];switch(i.toLowerCase()){case"string":case"varchar":case"date":case"datetime":Ti.API.warn('"'+i+'" is not a valid sqlite field, using TEXT instead');case"text":i="TEXT";break;case"int":case"tinyint":case"smallint":case"bigint":case"boolean":Ti.API.warn('"'+i+'" is not a valid sqlite field, using INTEGER instead');case"integer":i="INTEGER";break;case"double":case"float":case"decimal":case"number":Ti.API.warn('"'+e+'" is not a valid sqlite field, using REAL instead');case"real":i="REAL";break;case"blob":i="BLOB";break;case"null":i="NULL";break;default:i="TEXT"}return t[0]=i,t.join(" ")},this.createTable=function(e){var t=[],i=!1;for(var o in e.columns)o===this.idAttribute&&(i=!0),t.push(o+" "+this.column(e.columns[o]));i||this.idAttribute!==ALLOY_ID_DEFAULT||t.push(ALLOY_ID_DEFAULT+" TEXT UNIQUE");var r="CREATE TABLE IF NOT EXISTS "+this.table+" ( "+t.join(",")+")";this.db.execute(r)},this.dropTable=function(){this.db.execute("DROP TABLE IF EXISTS "+this.table)},this.insertRow=function(e){var t=[],i=[],o=[],r=!1;for(var a in e)a===this.idAttribute&&(r=!0),t.push(a),i.push(e[a]),o.push("?");r||this.idAttribute!==ALLOY_ID_DEFAULT||(t.push(this.idAttribute),i.push(guid()),o.push("?")),this.db.execute("INSERT INTO "+this.table+" ("+t.join(",")+") VALUES ("+o.join(",")+");",i)},this.deleteRow=function(e){var t="DELETE FROM "+this.table,i=_.keys(e),o=i.length,r=[],a=[];o&&(t+=" WHERE ");for(var l=0;o>l;l++)r.push(i[l]+" = ?"),a.push(e[i[l]]);t+=r.join(" AND "),this.db.execute(t,a)}}function Sync(e,t,i){var o,r,a=t.config.adapter.collection_name,l=t.config.columns,n=t.config.adapter.db_name||ALLOY_DB_DEFAULT,s=null;switch(e){case"create":case"update":s=function(){var e={};t.id||(t.id=t.idAttribute===ALLOY_ID_DEFAULT?guid():null,e[t.idAttribute]=t.id,t.set(e,{silent:!0}));var i=[],s=[],d=[];for(var _ in l)i.push(_),s.push(t.get(_)),d.push("?");if(r="REPLACE INTO "+a+" ("+i.join(",")+") VALUES ("+d.join(",")+");",o=Ti.Database.open(n),o.execute("BEGIN;"),o.execute(r,s),null===t.id){var c="SELECT last_insert_rowid();",u=o.execute(c);u&&u.isValidRow()?(t.id=u.field(0),e[t.idAttribute]=t.id,t.set(e,{silent:!0})):Ti.API.warn("Unable to get ID from database for model: "+t.toJSON()),u&&u.close()}return o.execute("COMMIT;"),o.close(),t.toJSON()}();break;case"read":i.query&&i.id&&Ti.API.warn('Both "query" and "id" options were specified for model.fetch(). "id" will be ignored.'),r="SELECT * FROM "+a,i.query?r=i.query:i.id&&(r+=" WHERE "+(t.idAttribute?t.idAttribute:ALLOY_ID_DEFAULT)+" = "+(_.isString(i.id)?'"'+i.id+'"':i.id)),o=Ti.Database.open(n);var d;d=_.isString(r)?o.execute(r):o.execute(r.statement,r.params);for(var c=0,u=[];d.isValidRow();){var h={},y=0;y=_.isFunction(d.fieldCount)?d.fieldCount():d.fieldCount,_.times(y,function(e){var t=d.fieldName(e);h[t]=d.fieldByName(t)}),u.push(h),c++,d.next()}d.close(),o.close(),t.length=c,s=1===c?u[0]:u;break;case"delete":r="DELETE FROM "+a+" WHERE "+t.idAttribute+"=?",o=Ti.Database.open(n),o.execute(r,t.id),o.close(),t.id=null,s=t.toJSON()}s?(_.isFunction(i.success)&&i.success(s),"read"!==e||i.silent||t.trigger("fetch",{fromAdapter:!0})):_.isFunction(i.error)&&i.error(s)}function GetMigrationFor(e,t){var i=null,o=Ti.Database.open(e);o.execute("CREATE TABLE IF NOT EXISTS migrations (latest TEXT, model TEXT);");var r=o.execute("SELECT latest FROM migrations where model = ?;",t);return r.isValidRow()&&(i=r.field(0)+""),r.close(),o.close(),i}function Migrate(e){var t=e.migrations||[],i={};t.length&&t[t.length-1](i);var o=e.prototype.config;o.adapter.db_name=o.adapter.db_name||ALLOY_DB_DEFAULT;var r=new Migrator(o),a="undefined"==typeof o.adapter.migration||null===o.adapter.migration?i.id:o.adapter.migration;if("undefined"==typeof a||null===a){var l=Ti.Database.open(o.adapter.db_name);return r.db=l,r.createTable(o),void l.close()}a+="";var n,s=GetMigrationFor(o.adapter.db_name,o.adapter.collection_name);if(s!==a){if(s&&s>a?(n=0,t.reverse()):n=1,db=Ti.Database.open(o.adapter.db_name),r.db=db,db.execute("BEGIN;"),t.length)for(var d=0;d<t.length;d++){var c=t[d],u={};if(c(u),n){if(u.id>a)break;if(u.id<=s)continue}else{if(u.id<=a)break;if(u.id>s)continue}var h=n?"up":"down";_.isFunction(u[h])&&u[h](r)}else r.createTable(o);db.execute("DELETE FROM migrations where model = ?",o.adapter.collection_name),db.execute("INSERT INTO migrations VALUES (?,?)",a,o.adapter.collection_name),db.execute("COMMIT;"),db.close(),r.db=null}}function installDatabase(e){var t=e.adapter.db_file,i=e.adapter.collection_name,o=/(^|.*\/)([^\/]+)\.[^\/]+$/,r=t.match(o);if(null===r)throw'Invalid sql database filename "'+t+'"';e.adapter.db_name=e.adapter.db_name||r[2];var a=e.adapter.db_name;Ti.API.debug('Installing sql database "'+t+'" with name "'+a+'"');var l,n,s=Ti.Database.install(t,a),d=s.execute('pragma table_info("'+i+'");'),c={};if(d){for(;d.isValidRow();)l=d.fieldByName("name"),n=d.fieldByName("type"),c[l]=n,l!==ALLOY_ID_DEFAULT||e.adapter.idAttribute||(e.adapter.idAttribute=ALLOY_ID_DEFAULT),d.next();d.close()}else{e.adapter.idAttribute?e.adapter.idAttribute:ALLOY_ID_DEFAULT;for(var u in e.columns)l=u,n=e.columns[u],l!==ALLOY_ID_DEFAULT||e.adapter.idAttribute?u===e.adapter.idAttribute&&(n+=" UNIQUE"):e.adapter.idAttribute=ALLOY_ID_DEFAULT,c[l]=n}if(e.columns=c,e.adapter.idAttribute){if(!_.contains(_.keys(e.columns),e.adapter.idAttribute))throw'config.adapter.idAttribute "'+e.adapter.idAttribute+'" not found in list of columns for table "'+i+'"\ncolumns: ['+_.keys(e.columns).join(",")+"]"}else{Ti.API.info('No config.adapter.idAttribute specified for table "'+i+'"'),Ti.API.info('Adding "'+ALLOY_ID_DEFAULT+'" to uniquely identify rows');var h=[],y=[];_.each(e.columns,function(e,t){y.push(t),h.push(t+" "+e)});var g=y.join(",");s.execute("ALTER TABLE "+i+" RENAME TO "+i+"_temp;"),s.execute("CREATE TABLE "+i+"("+h.join(",")+","+ALLOY_ID_DEFAULT+" TEXT UNIQUE);"),s.execute("INSERT INTO "+i+"("+g+","+ALLOY_ID_DEFAULT+") SELECT "+g+",CAST(_ROWID_ AS TEXT) FROM "+i+"_temp;"),s.execute("DROP TABLE "+i+"_temp;"),e.columns[ALLOY_ID_DEFAULT]="TEXT UNIQUE",e.adapter.idAttribute=ALLOY_ID_DEFAULT}s.close()}var _=require("alloy/underscore")._,ALLOY_DB_DEFAULT="_alloy_",ALLOY_ID_DEFAULT="alloy_id",cache={config:{},Model:{}};module.exports.beforeModelCreate=function(e,t){if(cache.config[t])return cache.config[t];if("undefined"==typeof Ti.Database)throw"No support for Titanium.Database in MobileWeb environment.";return e.adapter.db_file&&installDatabase(e),e.adapter.idAttribute||(Ti.API.info('No config.adapter.idAttribute specified for table "'+e.adapter.collection_name+'"'),Ti.API.info('Adding "'+ALLOY_ID_DEFAULT+'" to uniquely identify rows'),e.columns[ALLOY_ID_DEFAULT]="TEXT UNIQUE",e.adapter.idAttribute=ALLOY_ID_DEFAULT),cache.config[t]=e,e},module.exports.afterModelCreate=function(e,t){return cache.Model[t]?cache.Model[t]:(e=e||{},e.prototype.idAttribute=e.prototype.config.adapter.idAttribute,Migrate(e),cache.Model[t]=e,e)},module.exports.sync=Sync;