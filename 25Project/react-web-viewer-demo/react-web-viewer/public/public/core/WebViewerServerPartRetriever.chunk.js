/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[13],{580:function(xa,ta,h){function pa(){return!1}function qa(ba,y,ea){if(!(y in w))return!0;y=w[y];for(var z=0;z<y.length;z++){var fa=ba;var ca=y[z];var ma=ea;if(ca.name in fa){var la="",ia=!1;fa=fa[ca.name];switch(ca.type){case "s":la="String";ia=Object(ka.isString)(fa);break;case "a":la="Array";ia=Object(ka.isArray)(fa);break;case "n":la="Number";ia=Object(ka.isNumber)(fa)&&Object(ka.isFinite)(fa);break;case "o":la="Object",ia=
Object(ka.isObject)(fa)&&!Object(ka.isArray)(fa)}ia||ma.reject('Expected response field "'.concat(ca.name,'" to have type ').concat(la));ca=ia}else ma.reject('Response missing field "'.concat(ca.name,'"')),ca=!1;if(!ca)return!1}return!0}function na(ba){for(var y=0,ea=["locale","excelMaxAllowedCellCount","applyPageBreaksToSheet","excelDefaultCellBorderWidth","displayChangeTracking"];y<ea.length;y++){var z=ea[y],fa=z;z=z.charAt(0).toUpperCase()+z.slice(1);ba[fa]&&(Object.defineProperty(ba,z,Object.getOwnPropertyDescriptor(ba,
fa)),delete ba[fa])}return ba}h.r(ta);var ja=h(0),ka=h(1);h.n(ka);var ha=h(3);xa=h(58);var x=h(34),aa=h(598),r=h(121),n=h(492),f=h(54),a=h(216),b=function(){function ba(){this.request=this.result=null;this.state=0;var y=this;y.promise=new Promise(function(ea,z){y.resolve=function(){if(0===y.state||4===y.state)y.state=1,y.result=arguments[0],ea.apply(null,arguments)};y.reject=function(){if(0===y.state||4===y.state)y.state=2,z.apply(null,arguments)}})}ba.prototype.My=function(){return 1===(this.state&
1)};ba.prototype.Jza=function(){return 2===(this.state&2)};ba.prototype.Ll=function(){return!this.Jza()&&!this.My()};ba.prototype.aza=function(){return 4===(this.state&4)};ba.prototype.OX=function(){this.state|=4};return ba}(),e=function(){function ba(){this.wy={};this.Gc=[]}ba.prototype.pop=function(){var y=this.Gc.pop();this.wy[y.key]=void 0;return y};ba.prototype.push=function(y,ea){ea={key:y,data:ea};this.Gc.push(ea);this.wy[y]=ea.data};ba.prototype.contains=function(y){return!!this.wy[y]};ba.prototype.get=
function(y){return this.wy[y]};ba.prototype.set=function(y,ea){var z=this;this.wy[y]=ea;this.Gc.forEach(function(fa,ca){fa.key===y&&(z.Gc[ca]=fa)})};ba.prototype.remove=function(y){var ea=this;this.wy[y]=void 0;this.Gc.forEach(function(z,fa){z.key===y&&ea.Gc.splice(fa,1)})};ba.prototype.length=function(){return this.Gc.length};return ba}(),w={pages:[{name:"pages",type:"a"}],pdf:[{name:"url",type:"s"}],docmod:[{name:"url",type:"s"},{name:"rID",type:"s"}],health:[],tiles:[{name:"z",type:"n"},{name:"rID",
type:"n"},{name:"tiles",type:"a"},{name:"size",type:"n"}],cAnnots:[{name:"annots",type:"a"}],annots:[{name:"url",type:"s"},{name:"name",type:"s"}],image:[{name:"url",type:"s"},{name:"name",type:"s"},{name:"p",type:"n"}],text:[{name:"url",type:"s"},{name:"name",type:"s"},{name:"p",type:"n"}],ApString2Xod:[{name:"url",type:"s"},{name:"rID",type:"s"}]};h=function(){function ba(y,ea,z){var fa=this;this.vY=this.Y4=!1;this.xj=this.$N=this.rA=this.fg=this.OB=this.xs=this.NB=this.Hq=null;this.fq=new b;this.Xt=
new b;this.YI=!1;this.Ah=this.lg=this.mg=this.ph=null;this.Wh=[];this.SJ=[];this.cache={};this.timeStamp=0;this.rj=[];this.Vl=[];this.jS=null;this.J4=!1;this.Dca=this.id=null;this.lV=this.d8=pa;this.Ph=0;this.WT=!1;this.r$=1;this.Rl={};this.Lw=0;this.wz=new e;ea.endsWith("/")||(ea+="/");z=z||{};this.Y4=z.disableWebsockets||!1;this.vY=z.singleServerMode||!1;null!=z.customQueryParameters&&Object(f.b)("wvsQueryParameters",z.customQueryParameters);ea.endsWith("blackbox/")||(ea+="blackbox/");this.Hq=z.uploadData||
null;this.rA=z.uriData||null;this.NB=z.cacheKey||null;if(this.xs=z.officeOptions||null)this.xs=na(this.xs);this.fg=z.rasterizerOptions||null;this.OB=z.cadOptions||null;this.Hg=ea;this.MR=y;this.Js(!0);this.kx=(new aa.a(ea,null,this.lk())).Rta(!this.Y4,function(ca){fa.PBa(ca)},function(){return null},function(){fa.YI=!1},function(){fa.KFa()})}ba.prototype.Spa=function(){var y=this;return new Promise(function(ea,z){var fa=new XMLHttpRequest,ca="".concat(y.Hg,"ck");fa.open("GET",ca);fa.withCredentials=
y.lk();fa.onreadystatechange=function(){fa.readyState===XMLHttpRequest.DONE&&(200===fa.status?ea():z())};fa.send()})};ba.prototype.JHa=function(y){this.d8=y||pa;this.lV=pa};ba.prototype.Zna=function(){this.Xba();return this.kx.mu()};ba.prototype.Xba=function(){Object(ja.b)(this,void 0,void 0,function(){return Object(ja.d)(this,function(y){switch(y.label){case 0:return this.Xt=new b,this.fq=new b,this.YI=!1,this.id=null,this.J4=!1,[4,this.Spa().catch(function(){})];case 1:return y.aa(),[2]}})})};ba.prototype.KFa=
function(){this.d8();this.Xba();this.ph&&(this.ph.Ll()?this.Cj(this.ph.request):this.ph.My()&&this.lV(this.ph.result.url,"pdf")&&(this.ph=null,this.Uba()));this.Ah&&this.Ah.Ll()&&this.Cj(this.Ah.request);this.mg&&this.mg.Ll()?this.Cj(this.mg.request):this.lg&&this.lg.Ll()&&this.N7();var y;for(y=0;y<this.rj.length;y++)this.rj[y]&&(this.rj[y].Ll()?this.Cj(this.rj[y].request):this.rj[y].My()&&this.lV(this.rj[y].result.url,"image")&&(this.rj[y]=null,this.OM(Object(ka.uniqueId)(),y)));for(y=0;y<this.Vl.length;y++)this.Vl[y]&&
this.Vl[y].Ll()&&!this.Vl[y].aza()&&this.Cj(this.Vl[y].request);for(y=0;y<this.Wh.length;y++)this.Wh[y]&&this.Wh[y].Ll()&&this.Cj(this.Wh[y].request)};ba.prototype.uya=function(){return this.YI?Promise.resolve():(this.YI=!0,this.timeStamp=Date.now(),this.kx.iL())};ba.prototype.bLa=function(){var y=this,ea,z,fa,ca,ma;return new Promise(function(la,ia){if(y.Hq)ea=new FormData,ea.append("file",y.Hq.fileHandle,y.Hq.fileHandle.name),y.xs&&ea.append("officeOptions",JSON.stringify(y.xs)),y.fg&&ea.append("rasterizerOptions",
JSON.stringify(y.fg)),y.OB&&ea.append("cadOptions",y.OB.getJsonString()),y.NB&&ea.append("cacheKey",y.NB),z=y.Hq.loadCallback,ca="upload",fa=y.Hq.extension;else if(y.rA)ea={uri:y.rA.uri,$Pa:y.rA.shareId},ea=Object.keys(ea).map(function(sa){return"".concat(sa,"=").concat(ea[sa]?encodeURIComponent(ea[sa]):"")}).join("&"),ma="application/x-www-form-urlencoded; charset=UTF-8",z=y.rA.loadCallback,ca="url",fa=y.rA.extension;else{la();return}var ra=new XMLHttpRequest,oa=Object(x.k)(y.Hg,"AuxUpload");oa=
Object(a.a)(oa,{type:ca,ext:fa});ra.open("POST",oa);ra.withCredentials=y.lk();ma&&ra.setRequestHeader("Content-Type",ma);ra.addEventListener("load",function(){if(ra.readyState===ra.DONE&&200===ra.status){var sa=JSON.parse(ra.response);y.MR=sa.uri;z(sa);la(sa)}});ra.addEventListener("error",function(){ia("".concat(ra.statusText," ").concat(JSON.stringify(ra)))});y.Hq&&null!=y.Hq.onProgress&&(ra.upload.onprogress=function(sa){y.Hq.onProgress(sa)});ra.send(ea)})};ba.prototype.zFa=function(y){this.password=
y||null;this.fq.My()||(this.fq=new b,this.Cj({t:"pages"}));return this.fq.promise};ba.prototype.cF=function(y){this.jS=y||null;this.fq.My()||this.Cj({t:"pages"});return this.fq.promise};ba.prototype.ZB=function(y){y=Object.assign(y,{uri:encodeURIComponent(this.MR)});this.jS&&(y.ext=this.jS);this.xj&&(y.c=this.xj);this.password&&(y.pswd=this.password);this.NB&&(y.cacheKey=this.NB);this.xs&&(y.officeOptions=this.xs);this.fg&&(y.rastOptions=this.fg);this.OB&&(y.cadOptions=this.OB.mImpl);return y};ba.prototype.qGa=
function(){0<this.wz.length()&&10>=this.Lw&&this.rGa(this.wz.pop().data)};ba.prototype.ina=function(y){0<this.wz.length()&&this.wz.contains(y)&&this.wz.remove(y)};ba.prototype.Cj=function(y){y=this.ZB(y);this.kx.send(y)};ba.prototype.yca=function(y,ea){10<this.Lw?this.wz.push(y,ea):(this.Lw++,y=this.ZB(ea),this.kx.send(y))};ba.prototype.rGa=function(y){this.Lw++;y=this.ZB(y);this.kx.send(y)};ba.prototype.fp=function(y){return y};ba.prototype.c8=function(y){this.vY&&y?Object(ha.j)("Server failed health check. Single server mode ignoring check."):
!this.jOa&&y&&3>=this.Ph?(this.WT=!0,this.kx.mu()):3<this.Ph&&(this.vY=!0)};ba.prototype.PBa=function(y){var ea=this,z=y.data,fa=y.err,ca=y.t;switch(ca){case "upload":fa?this.cLa.reject(fa):this.cLa.resolve("Success");break;case "pages":fa?this.fq.reject(fa):qa(z,ca,this.fq)&&this.fq.resolve(z);break;case "config":if(fa)this.Xt.reject(fa);else if(qa(z,ca,this.Xt)){this.c8(z.unhealthy);z.id&&(this.id=z.id);if(z.auth){var ma=Object(f.a)("wvsQueryParameters");ma.auth=z.auth;Object(f.b)("wvsQueryParameters",
ma)}z.serverVersion&&(this.$N=z.serverVersion,Object(ha.h)("[WebViewer Server] server version: ".concat(this.$N)));z.serverID?(this.Ph=z.serverID===this.Dca&&this.WT?this.Ph+1:0,this.Dca=z.serverID):this.Ph=0;this.WT=!1;this.Xt.resolve(z)}break;case "health":fa?this.Xt.reject(fa):qa(z,ca,this.Xt)&&this.c8(z.unhealthy);break;case "pdf":z.url=Object(a.a)("".concat(this.Hg,"../").concat(encodeURI(z.url)));fa?this.ph.reject(fa):qa(z,ca,this.ph)&&this.ph.resolve(z);break;case "ApString2Xod":z.url=Object(a.a)("".concat(this.Hg,
"../data/").concat(encodeURI(z.url)));fa?this.Rl[z.rID].reject(fa):qa(z,ca,this.Rl[z.rID])&&this.Rl[z.rID].resolve(z);break;case "docmod":z.url=Object(a.a)("".concat(this.Hg,"../").concat(encodeURI(z.url)));fa?this.Rl[z.rID].reject(fa):qa(z,ca,this.ph)&&this.Rl[z.rID].resolve(z);break;case "xod":if(fa)this.mg&&this.mg.Ll()&&this.mg.reject(fa),this.lg&&this.lg.Ll()&&this.lg.reject(fa);else if(z.notFound)z.noCreate||this.mg&&this.mg.Ll()&&this.mg.resolve(z),this.lg&&this.lg.Ll()&&this.lg.resolve(z);
else{z.url&&(z.url=Object(a.a)("".concat(this.Hg,"../").concat(encodeURI(z.url))));if(!this.lg||this.lg.My())this.lg=new b,this.lg.request={t:"xod",noCreate:!0};this.mg||(this.mg=new b,this.mg.request={t:"xod"});this.lg.resolve(z);this.mg.resolve(z)}break;case "cAnnots":ma=this.Ah;if(fa)ma.reject(fa);else if(qa(z,ca,ma)){ma.OX();var la=[],ia=z.annots;z=function(Ba){var Ca=ia[Ba].s,Aa=ia[Ba].e,Ja="".concat(ra.Hg,"../").concat(encodeURI(ia[Ba].xfdf)),Ea="true"===ia[Ba].hasAppearance?Object(a.a)("".concat(Ja,
".xodapp")):null,La=Object(ka.range)(Ca,Aa+1);la[Ba]={range:La,promise:new Promise(function(Na,Oa){var Ra=new XMLHttpRequest;Ra.open("GET",Object(a.a)(Ja));Ra.responseType="text";Ra.withCredentials=ea.lk();Ra.addEventListener("load",function(){Ra.readyState===Ra.DONE&&200===Ra.status&&Na({Uv:Ra.response,Uo:Ea,range:La})});Ra.addEventListener("error",function(){Oa("".concat(Ra.statusText," ").concat(JSON.stringify(Ra)))});Ra.send()})}};var ra=this;for(fa=0;fa<ia.length;fa++)z(fa);ma.resolve(la)}break;
case "annots":if(fa)this.Ah.reject(fa);else if(qa(z,ca,this.Ah)){this.Ah.OX();var oa=new XMLHttpRequest;ma="".concat(this.Hg,"../").concat(encodeURI(z.url));var sa=z.hasAppearance?Object(a.a)("".concat(ma,".xodapp")):null;oa.open("GET",Object(a.a)(ma));oa.responseType="text";oa.withCredentials=this.lk();oa.addEventListener("load",function(){oa.readyState===oa.DONE&&200===oa.status&&ea.Ah.resolve({Uv:oa.response,Uo:sa})});oa.addEventListener("error",function(){ea.Ah.reject("".concat(oa.statusText,
" ").concat(JSON.stringify(oa)))});oa.send()}break;case "image":this.Lw--;var ua=this.rj[z.p];fa?ua.promise.reject(fa):qa(z,ca,ua)&&(ua.result=z,ua.result.url=Object(a.a)("".concat(this.Hg,"../").concat(encodeURI(ua.result.url))),ua.resolve(ua.result));break;case "tiles":this.Lw--;ua=z.rID;ma=this.Wh[ua];this.Wh[ua]=null;this.SJ.push(ua);if(fa)ma.reject(fa);else if(qa(z,ca,ma)){for(fa=0;fa<z.tiles.length;fa++)z.tiles[fa]=Object(a.a)("".concat(this.Hg,"../").concat(encodeURI(z.tiles[fa])));ma.resolve(z)}break;
case "text":ua=this.Vl[z.p];if(fa)ua.reject(fa);else if(qa(z,ca,ua)){ua.OX();var wa=new XMLHttpRequest;z=Object(a.a)("".concat(this.Hg,"../").concat(encodeURI(z.url)));wa.open("GET",z);wa.withCredentials=this.lk();wa.addEventListener("load",function(){wa.readyState===wa.DONE&&200===wa.status&&(ua.result=JSON.parse(wa.response),ua.resolve(ua.result))});wa.addEventListener("error",function(Ba){ua.reject("".concat(wa.statusText," ").concat(JSON.stringify(Ba)))});wa.send()}break;case "progress":"loading"===
z.t&&this.trigger(r.a.Events.DOCUMENT_LOADING_PROGRESS,[z.bytes,z.total])}this.qGa();!ca&&y.echo&&y&&"apstring2xod"===y.echo.t&&(y=y.echo.reqID)&&(2<=parseInt(this.$N,10)?this.Rl[y].reject("Message unhandled by server"):this.Rl[y].reject())};ba.prototype.yua=function(){return Object(ja.b)(this,void 0,void 0,function(){return Object(ja.d)(this,function(y){switch(y.label){case 0:return[4,this.uya()];case 1:return y.aa(),[2,this.Xt.promise]}})})};ba.prototype.dua=function(y){for(var ea=this,z=new XMLHttpRequest,
fa=Object(a.a)("".concat(this.Hg,"aul"),{id:this.id}),ca=new FormData,ma={},la=0;la<y.body.length;la++){var ia=y.body[la];ma[ia.id]="".concat(ia.tQ.w,";").concat(ia.tQ.h);ca.append(ia.id,ia.tQ.dataString)}y={t:"apstring2xod",reqID:this.r$++,parts:ma};var ra=this.ZB(y);ca.append("msg",JSON.stringify(ra));this.Rl[ra.reqID]=new b;z.open("POST",fa);z.withCredentials=this.lk;fa=new Promise(function(oa,sa){z.onreadystatechange=function(){4===z.readyState&&(200===z.status?oa():sa("An error occurred while sending down appearance strings to the server"))}});
z.send(ca);return fa.then(function(){return ea.Rl[ra.reqID].promise})};ba.prototype.coa=function(){var y=this.$N.split("-")[0].split("."),ea=["1","5","9"];if(3!==y.length)throw Error("Invalid WVS version length.");if(3!==ea.length)throw Error("Invalid version length.");for(var z=0;z<y.length;++z){if(ea.length===z||y[z]>ea[z])return-1;if(y[z]!==ea[z])return 1}return 0};ba.prototype.Tt=function(){return 0>=this.coa()};ba.prototype.wS=function(){this.Ah||(this.Ah=new b,this.Tt()?this.Ah.request={t:"cAnnots"}:
this.Ah.request={t:"annots"},this.Cj(this.Ah.request));return this.Ah.promise};ba.prototype.OM=function(y,ea){this.rj[ea]||(this.rj[ea]=new b,this.rj[ea].request={t:"image",p:ea},this.yca(y,this.rj[ea].request));return this.rj[ea].promise};ba.prototype.AFa=function(y){this.Vl[y]||(this.Vl[y]=new b,this.Vl[y].request={t:"text",p:y},this.Cj(this.Vl[y].request));return this.Vl[y].promise};ba.prototype.BFa=function(y,ea,z,fa,ca){var ma=this.Wh.length;this.SJ.length&&(ma=this.SJ.pop());this.Wh[ma]=new b;
this.Wh[ma].request={t:"tiles",p:ea,z:z,r:fa,size:ca,rID:ma};this.yca(y,this.Wh[ma].request);return this.Wh[ma].promise};ba.prototype.Uba=function(){this.ph||(this.ph=new b,this.ph.request={t:"pdf"},this.J4?this.ph.resolve({url:this.MR}):this.Cj(this.ph.request));return this.ph.promise};ba.prototype.U6=function(y){var ea=this,z=new XMLHttpRequest,fa=Object(a.a)("".concat(this.Hg,"aul"),{id:this.id}),ca=new FormData,ma={};y.annots&&(ma.annots="xfdf");y.watermark&&(ma.watermark="png");y.redactions&&
(ma.redactions="redact");ma={t:"docmod",reqID:this.r$++,parts:ma};y.print&&(ma.print=!0);var la=this.ZB(ma);ca.append("msg",JSON.stringify(la));return Promise.all([y.annots,y.watermark,y.redactions].map(function(ia){return Promise.resolve(ia)})).then(function(ia){var ra=ia[0],oa=ia[1];ia=ia[2];ra&&ca.append("annots",ra);oa&&ca.append("watermark",oa);ia&&ca.append("redactions",ia);ea.Rl[la.reqID]=new b;z.open("POST",fa);z.withCredentials=ea.lk;ra=new Promise(function(sa,ua){z.onreadystatechange=function(){4===
z.readyState&&(200===z.status?sa():ua("An error occurred while sending down annotation data to the server"))}});z.send(ca);return ra.then(function(){return ea.Rl[la.reqID].promise})})};ba.prototype.N7=function(){this.lg||(this.lg=new b,this.lg.request={t:"xod",noCreate:!0},this.Cj(this.lg.request));return this.lg.promise};ba.prototype.CFa=function(){this.mg||(this.mg=new b,this.mg.request={t:"xod"},this.Cj(this.mg.request));return this.mg.promise};ba.prototype.Es=function(){return!0};ba.prototype.request=
function(){};ba.prototype.jba=function(){};ba.prototype.abort=function(){for(var y=0;y<this.Wh.length;y++)this.Wh[y]&&(this.Wh[y].resolve(null),this.Wh[y]=null,this.SJ.push(y));this.close()};ba.prototype.fN=function(y){this.xj=this.xj||{};this.xj.headers=y};ba.prototype.Js=function(y){this.xj=this.xj||{};this.xj.internal=this.xj.internal||{};this.xj.internal.withCredentials=y};ba.prototype.lk=function(){return this.xj&&this.xj.internal?this.xj.internal.withCredentials:null};ba.prototype.getFileData=
function(){return Promise.reject()};return ba}();Object(xa.a)(h);Object(n.a)(h);Object(n.b)(h);ta["default"]=h},598:function(xa,ta,h){var pa=h(0),qa=h(3),na=h(34),ja=h(54),ka=h(216),ha=h(102),x=function(){function r(n,f,a,b,e,w){void 0===a&&(a=null);void 0===b&&(b=null);void 0===e&&(e=null);void 0===w&&(w=null);this.ZT=!1;this.Ph=0;this.bE=8;this.jca=3E3;this.xN=!1;this.d3=this.yLa(n);this.url=f?"".concat(this.d3,"/").concat(f):"".concat(this.d3,"/ws");this.wR=a;this.tE=b;this.XB=e;this.Vba=w}r.prototype.yLa=
function(n){var f=n.indexOf("://"),a="ws://";0>f?f=0:(5===f&&(a="wss://"),f+=3);var b=n.lastIndexOf("/");0>b&&(b=n.length);return a+n.slice(f,b)};r.prototype.send=function(n){this.Us.readyState===WebSocket.CLOSED||this.ZT||this.Us.send(JSON.stringify(n))};r.prototype.iL=function(){return Object(pa.b)(this,void 0,void 0,function(){var n,f=this;return Object(pa.d)(this,function(){n=Object(ja.a)("wvsQueryParameters");n.bcid=Object(na.l)(8);Object(ja.b)("wvsQueryParameters",n);return[2,new Promise(function(a,
b){var e=Object(ka.a)(f.url);f.xN=!1;f.Us=new WebSocket(e);f.Us.onopen=function(){f.ZT=!1;f.Ph=0;f.tE&&f.tE();a()};f.Us.onerror=function(){f.ZT=!0};f.Us.onclose=function(w){w=w.code;f.XB&&f.XB();1E3!==w&&3E3!==w&&f.Pxa(w,a,b)};f.Us.onmessage=function(w){w&&w.data&&(w=JSON.parse(w.data),w.hb?f.send({hb:!0}):w.end?close():f.wR(w))}})]})})};r.prototype.Pxa=function(n,f,a){Object(pa.b)(this,void 0,void 0,function(){var b=this;return Object(pa.d)(this,function(){if(this.xN)return f(),[2];this.Ph<this.bE?
setTimeout(function(){b.xN?f():(b.Ph++,Object(qa.j)("Failed to connect to server with WebSocket close code ".concat(n,". Reconnecting to WebViewer Server, attempt ").concat(b.Ph," of ").concat(b.bE," ...")),b.iL().then(f).catch(a))},this.jca):a(ha.a);return[2]})})};r.prototype.mu=function(){var n;void 0===n&&(n=!1);this.Ph=0;this.xN=!0;n?this.Us.close(3E3):this.Us.close();return Promise.resolve()};return r}(),aa=function(){function r(n,f,a,b,e,w,ba){void 0===b&&(b=null);void 0===e&&(e=null);void 0===
w&&(w=null);void 0===ba&&(ba=null);this.Ph=this.NM=this.id=0;this.tD=!1;this.request=null;this.bE=8;this.jca=3E3;n=this.DDa(n);this.url=f?"".concat(n,"/").concat(f,"pf"):"".concat(n,"/pf");this.TN=a;this.wR=b;this.tE=e;this.XB=w;this.Vba=ba}r.prototype.DDa=function(n){var f=n.lastIndexOf("/");0>f&&(f=n.length);return n.slice(0,f)};r.prototype.vpa=function(n){n=n.split("\n");for(n[n.length-1]&&n.pop();0<n.length&&3>n[n.length-1].length;)"]"===n.pop()&&(this.id=0);0<n.length&&3>n[0].length&&n.shift();
for(var f=0;f<n.length;++f)n[f].endsWith(",")&&(n[f]=n[f].substr(0,n[f].length-1));return n};r.prototype.ica=function(){return Object(pa.b)(this,void 0,void 0,function(){var n=this;return Object(pa.d)(this,function(f){switch(f.label){case 0:return this.Ph++<this.bE?[4,new Promise(function(a){return setTimeout(function(){n.Vba();n.iL();a()},3E3)})]:[3,2];case 1:f.aa(),f.label=2;case 2:return[2]}})})};r.prototype.GDa=function(n){Object(pa.b)(this,void 0,void 0,function(){var f,a;return Object(pa.d)(this,
function(b){switch(b.label){case 0:f=null,a=0,b.label=1;case 1:if(!(a<n.length))return[3,6];f=JSON.parse(n[a]);if(!f)return[3,5];if(!f.end)return[3,2];close();return[3,5];case 2:if(!f.id||Number(f.id)===this.id)return[3,4];Object(qa.j)("Reconnecting, new server detected");this.mu();return[4,this.ica()];case 3:return b.aa(),[3,5];case 4:f.hb&&Number(f.id)===this.id?this.send({hb:!0}):this.tD||this.wR(f),b.label=5;case 5:return++a,[3,1];case 6:return[2]}})})};r.prototype.KBa=function(n){Object(pa.b)(this,
void 0,void 0,function(){var f,a,b;return Object(pa.d)(this,function(e){switch(e.label){case 0:if(!(3<=n.readyState))return[3,2];try{f=n.responseText.length}catch(w){return Object(qa.h)("caught exception"),[2]}if(0<f)try{a=this.vpa(n.responseText),0===this.id&&0<a.length&&(b=JSON.parse(a.shift()),this.id=b.id,this.Ph=0),this.GDa(a)}catch(w){}return this.tD?[3,2]:[4,this.O5()];case 1:e.aa(),e.label=2;case 2:return[2]}})})};r.prototype.O5=function(){return Object(pa.b)(this,void 0,void 0,function(){var n=
this;return Object(pa.d)(this,function(){return[2,new Promise(function(f,a){function b(){return Object(pa.b)(n,void 0,void 0,function(){return Object(pa.d)(this,function(w){switch(w.label){case 0:a(),this.mu(),w.label=1;case 1:return this.tD&&this.Ph<this.bE?[4,this.ica()]:[3,3];case 2:return w.aa(),[3,1];case 3:return[2]}})})}n.request=new XMLHttpRequest;n.request.withCredentials=n.TN;var e=Object(ka.a)(n.url,0!==n.id?{id:String(n.id),uc:String(n.NM)}:{uc:String(n.NM)});n.NM++;n.request.open("GET",
e,!0);n.request.setRequestHeader("Cache-Control","no-cache");n.request.setRequestHeader("X-Requested-With","XMLHttpRequest");n.request.onreadystatechange=function(){n.KBa(n.request)};n.request.addEventListener("error",b);n.request.addEventListener("timeout",b);n.request.addEventListener("load",function(){n.tE&&n.tE();f()});n.request.send()})]})})};r.prototype.iL=function(){var n=Object(ja.a)("wvsQueryParameters");n.bcid=Object(na.l)(8);Object(ja.b)("wvsQueryParameters",n);this.NM=this.id=0;this.tD=
!1;return this.O5()};r.prototype.send=function(n){var f=this,a=new XMLHttpRequest;a.withCredentials=this.TN;var b=Object(ka.a)(this.url,{id:String(this.id)}),e=new FormData;e.append("data",JSON.stringify(n));a.addEventListener("error",function(){f.mu()});a.open("POST",b);a.setRequestHeader("X-Requested-With","XMLHttpRequest");a.send(e)};r.prototype.mu=function(){this.id=0;this.tD=!0;this.XB&&this.XB();this.request.abort();return Promise.resolve()};return r}();xa=function(){function r(n,f,a){this.W3=
n;this.target=f;this.TN=a}r.prototype.Rta=function(n,f,a,b,e){void 0===n&&(n=!0);void 0===f&&(f=null);void 0===a&&(a=null);void 0===b&&(b=null);void 0===e&&(e=null);return n?new x(this.W3,this.target,f,a,b,e):new aa(this.W3,this.target,this.TN,f,a,b,e)};return r}();ta.a=xa}}]);}).call(this || window)