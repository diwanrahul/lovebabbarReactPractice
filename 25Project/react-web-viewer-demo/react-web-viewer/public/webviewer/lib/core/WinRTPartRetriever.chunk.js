/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[14],{579:function(xa,ta,h){h.r(ta);var pa=h(0),qa=h(324);xa=h(569);var na=h(121);h=h(492);var ja={},ka=function(ha){function x(aa,r){var n=ha.call(this,aa,r)||this;n.url=aa;n.range=r;n.status=qa.a.NOT_STARTED;return n}Object(pa.c)(x,ha);x.prototype.start=function(aa){var r=this;"undefined"===typeof ja[this.range.start]&&(ja[this.range.start]={CY:function(n){var f=atob(n),a,b=f.length;n=new Uint8Array(b);for(a=0;a<b;++a)n[a]=f.charCodeAt(a);
f=n.length;a="";for(var e=0;e<f;)b=n.subarray(e,e+1024),e+=1024,a+=String.fromCharCode.apply(null,b);r.CY(a,aa)},uOa:function(){r.status=qa.a.ERROR;aa({code:r.status})}},window.external.notify(this.url),this.status=qa.a.STARTED);r.xK()};return x}(xa.ByteRangeRequest);xa=function(ha){function x(aa,r,n,f){aa=ha.call(this,aa,n,f)||this;aa.QE=ka;return aa}Object(pa.c)(x,ha);x.prototype.dC=function(aa,r){return"".concat(aa,"?").concat(r.start,"&").concat(r.stop?r.stop:"")};return x}(na.a);Object(h.a)(xa);
Object(h.b)(xa);ta["default"]=xa}}]);}).call(this || window)
