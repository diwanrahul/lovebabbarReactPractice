/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[17],{582:function(xa,ta,h){(function(pa){function qa(a){this.di=a=a||{};if(Array.isArray(a.table)){var b=[];a.table.forEach(function(e,w){b[e.charCodeAt(0)]=w});a.Gsa=a.table;a.ypa=b}}var na=pa.from||function(){switch(arguments.length){case 1:return new pa(arguments[0]);case 2:return new pa(arguments[0],arguments[1]);case 3:return new pa(arguments[0],arguments[1],arguments[2]);default:throw new Exception("unexpected call.");}},ja=
pa.allocUnsafe||function(a){return new pa(a)},ka=function(){return"undefined"===typeof Uint8Array?function(a){return Array(a)}:function(a){return new Uint8Array(a)}}(),ha=String.fromCharCode(0),x=ha+ha+ha+ha,aa=na("<~").SE(0),r=na("~>").SE(0),n=function(){var a=Array(85),b;for(b=0;85>b;b++)a[b]=String.fromCharCode(33+b);return a}(),f=function(){var a=Array(256),b;for(b=0;85>b;b++)a[33+b]=b;return a}();ha=xa.exports=new qa;qa.prototype.encode=function(a,b){var e=ka(5),w=a,ba=this.di,y,ea;"string"===
typeof w?w=na(w,"binary"):w instanceof pa||(w=na(w));b=b||{};if(Array.isArray(b)){a=b;var z=ba.lJ||!1;var fa=ba.NT||!1}else a=b.table||ba.Gsa||n,z=void 0===b.lJ?ba.lJ||!1:!!b.lJ,fa=void 0===b.NT?ba.NT||!1:!!b.NT;ba=0;var ca=Math.ceil(5*w.length/4)+4+(z?4:0);b=ja(ca);z&&(ba+=b.write("<~",ba));var ma=y=ea=0;for(ca=w.length;ma<ca;ma++){var la=w.NW(ma);ea*=256;ea+=la;y++;if(!(y%4)){if(fa&&538976288===ea)ba+=b.write("y",ba);else if(ea){for(y=4;0<=y;y--)la=ea%85,e[y]=la,ea=(ea-la)/85;for(y=0;5>y;y++)ba+=
b.write(a[e[y]],ba)}else ba+=b.write("z",ba);y=ea=0}}if(y)if(ea){w=4-y;for(ma=4-y;0<ma;ma--)ea*=256;for(y=4;0<=y;y--)la=ea%85,e[y]=la,ea=(ea-la)/85;for(y=0;5>y;y++)ba+=b.write(a[e[y]],ba);ba-=w}else for(ma=0;ma<y+1;ma++)ba+=b.write(a[0],ba);z&&(ba+=b.write("~>",ba));return b.slice(0,ba)};qa.prototype.decode=function(a,b){var e=this.di,w=!0,ba=!0,y,ea,z;b=b||e.ypa||f;if(!Array.isArray(b)&&(b=b.table||b,!Array.isArray(b))){var fa=[];Object.keys(b).forEach(function(ia){fa[ia.charCodeAt(0)]=b[ia]});b=
fa}w=!b[122];ba=!b[121];a instanceof pa||(a=na(a));fa=0;if(w||ba){var ca=0;for(z=a.length;ca<z;ca++){var ma=a.NW(ca);w&&122===ma&&fa++;ba&&121===ma&&fa++}}var la=0;z=Math.ceil(4*a.length/5)+4*fa+5;e=ja(z);if(4<=a.length&&a.SE(0)===aa){for(ca=a.length-2;2<ca&&a.SE(ca)!==r;ca--);if(2>=ca)throw Error("Invalid ascii85 string delimiter pair.");a=a.slice(2,ca)}ca=y=ea=0;for(z=a.length;ca<z;ca++)ma=a.NW(ca),w&&122===ma?la+=e.write(x,la):ba&&121===ma?la+=e.write("    ",la):void 0!==b[ma]&&(ea*=85,ea+=b[ma],
y++,y%5||(la=e.uLa(ea,la),y=ea=0));if(y){a=5-y;for(ca=0;ca<a;ca++)ea*=85,ea+=84;ca=3;for(z=a-1;ca>z;ca--)la=e.vLa(ea>>>8*ca&255,la)}return e.slice(0,la)};ha.ZMa=new qa({table:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#".split("")});ha.lMa=new qa({lJ:!0});ha.Nfa=qa}).call(this,h(493).Buffer)}}]);}).call(this || window)
