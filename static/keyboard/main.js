"use strict";function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){var a=[],r=!0,o=!1,n=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(a.push(l.value),!t||a.length!==t);r=!0);}catch(e){o=!0,n=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw n}}return a}function _arrayWithHoles(e){if(Array.isArray(e))return e}$.fn.keyboard=function(e){var y,r,l,k,b,t,a,o,n,c,i,s,d,p,u,h,g,f,v,w,m,x,C,E,K,T,A,S,_,O,F,L,P,q,R,U,D,N,I,Y,j,M,H,J,B,G,W,z,Q,V,X,Z,ee,te,ae,re,oe,ne,le,ce,ie,se,de=["ar-SA","fa-IR","he-IL","ur-PK"],pe={29:0,"02":1,"03":2,"04":3,"05":4,"06":5,"07":6,"08":7,"09":8,"0a":9,"0b":10,"0c":11,"0d":12,10:13,11:14,12:15,13:16,14:17,15:18,16:19,17:20,18:21,19:22,"1a":23,"1b":24,"2b":25,"1e":26,"1f":27,20:28,21:29,22:30,23:31,24:32,25:33,26:34,27:35,28:36,"2c":37,"2d":38,"2e":39,"2f":40,30:41,31:42,32:43,33:44,34:45,35:46},ye="",ke=!1,be="text",ue={shift:!1,caps:!1,altgrp:!1,shift_altgrp:""},he="text",ge=!1,fe=0,ve="",we=$(this),$e=!1,me={keyboardFile:"",arrayPosition:""},xe="LTR",Ce="Language",Ee=":",Ke="triggerKeyboard",Te="https://cdn.jsdelivr.net/npm/mok-project@".concat("1.1.7","/dist/languages"),Ae=(i=(c=e).acceptColor,s=void 0===i?"#2ECC71":i,d=c.acceptTextColor,p=void 0===d?"#FFFFFF":d,u=c.allowEnterAccept,h=void 0===u||u,g=c.allowEscapeCancel,f=void 0===g||g,v=c.altKey,w=void 0===v?"":v,m=c.blackoutColor,x=void 0===m?"25, 25, 25, 0.9":m,C=c.cancelColor,E=void 0===C?"#E74C3C":C,K=c.cancelTextColor,T=void 0===K?"#FFFFFF":K,A=c.capsLightColor,S=void 0===A?"#3498DB":A,_=c.ctrlKey,O=void 0===_?"":_,F=c.directEnter,L=void 0!==F&&F,P=c.enterKey,q=void 0===P?"":P,R=c.inputFieldRegex,U=void 0===R?{number:/^(-)?(((\d+)|(\d+\.(\d+)?)|(\.(\d+)?))([eE]([-+])?(\d+)?)?)?$/}:R,D=c.inputType,N=void 0===D?"":D,I=c.isPermanentUppercase,Y=void 0!==I&&I,j=c.keyCharacterRegex,M=void 0===j?{number:/[0-9]|[eE]|\.|\+|-/,tel:/[0-9]|\.|\+|-|#|\(|\)/}:j,H=c.keyColor,J=void 0===H?"#E0E0E0":H,B=c.keyTextColor,G=void 0===B?"#000":B,W=c.keyboardPosition,z=void 0===W?"bottom":W,Q=c.language,V=void 0===Q?"":Q,X=c.languageKey,Z=void 0===X?"":X,ee=c.languageKeyTextColor,te=void 0===ee?"#3498db":ee,ae=c.showSelectedLanguage,re=void 0!==ae&&ae,oe=c.spareKey,ne=void 0===oe?"":oe,le=c.specifiedFieldsOnly,ce=void 0!==le&&le,ie=c.tabKey,se=void 0===ie?"":ie,{acceptColor:s,acceptTextColor:p,allowEnterAccept:h,allowEscapeCancel:f,altKey:w,blackoutColor:x,cancelColor:E,cancelTextColor:T,capsLightColor:S,ctrlKey:O,directEnter:L,enterKey:q,inputFieldRegex:U,inputType:(a=N,o=new Array,n="",n=void 0!==a&&""!=a?(o=a.trim().split(","),$.each(o,function(e,t){"contenteditable"==t.trim().toString()?n+='[contenteditable="true"], ':"textarea"==t.trim().toString()?n+="textarea, ":n+='input[type="'+t.trim().toString()+'"], '}),n.slice(0,-2)):'input[type="text"], input[type="number"], input[type="password"], input[type="search"], input[type="tel"], input[type="url"], textarea, [contenteditable="true"]'),isPermanentUppercase:Y,keyboardPosition:z,keyCharacterRegex:M,keyColor:J,keyTextColor:G,language:(t=V,t.split(",").map(function(e){return e.trim()})),languageKey:Z,languageKeyTextColor:te,showSelectedLanguage:re,spareKey:ne,specifiedFieldsOnly:ce,tabKey:se}),Se={disabled:"",readonly:"",maxlength:"",min:"",max:"",placeholder:""};function _e(){var t=Ae.language[fe].split(Ee)[0].trim();if(""!=me.keyboardFile&&me.arrayPosition==fe)Oe(t,me.keyboardFile);else{var a=function(e){me.keyboardFile=e,me.arrayPosition=fe,Oe(t,e)};$.get("./languages/".concat(t,".klc")).done(function(e){a(e)}).fail(function(){$.get("".concat(Te,"/").concat(t,".klc"),function(e){a(e)})})}}function Oe(e,t){var a,r,o,n,l,c,i,s,d=new Array;k=y=b="",a=(t=t.replace(/\u0000/g,"")).match(/\d(\w)?\s+\w+\s+\d\s+(-1|\w+@?|%%)\s+(-1|\w+@?|%%)\s+(-1|\w+@?|%%)(\s+(-1|\w+@?|%%))?(\s+(-1|\w+@?|%%))?(\s+(-1|\w+@?|%%))?\s+\/\//g);var p=_slicedToArray(t.match(/LOCALENAME\s+".*"/),1)[0];ve=p.replace(/LOCALENAME\s+"(.*)"/,"$1"),0<(o=t.indexOf("SHIFTSTATE"))&&((r=t.slice(o,t.indexOf("LAYOUT")).trim().split(/\n/g)).splice(0,2),$.each(r,function(e,t){-1==t.indexOf(":")?b+='"default": ':-1!=t.indexOf("Shft  Ctrl Alt")?b+='"shift_altgrp": ':-1!=t.indexOf("Shft  Ctrl")?b+='"ctrl_shift": ':-1!=t.indexOf("Ctrl Alt")?b+='"altgrp": ':-1!=t.indexOf("Ctrl")?b+='"ctrl": ':-1!=t.indexOf("Shft")&&(b+='"shift": '),b+=t.match(/\w{6}\s[0-9]/).toString().slice(-1)+", "}),b=JSON.parse("{"+b.toString().slice(0,-2)+"}")),0<(l=t.indexOf("DEADKEY"))&&((n=t.slice(l,t.indexOf("KEYNAME")).trim().split("DEADKEY")).splice(0,1),$.each(n,function(e,t){(d=t.split(/\n/g)).splice(0,2),s="",$.each(d,function(e,t){s+='"'+t.trim().slice(0,4)+'": "'+t.trim().slice(5,9)+'", '}),s="{"+s.slice(0,-2)+"}",y+='"'+t.trim().slice(0,4)+'": '+s+", "}),y=JSON.parse("{"+y.slice(0,-2)+"}")),0<(i=t.indexOf("LIGATURE"))&&((c=t.slice(i,t.indexOf("KEYNAME")).trim().split(/\n/g)).splice(0,5),$.each(c,function(a,e){0<e.indexOf("//")&&(c[a]=e.trim().split("//")[0].trim().replace(/\t/g," ").replace("  "," ").replace("  "," ").split(" "),c[a].splice(1,1),k+='"'+c[a][0]+'": ',c[a].splice(0,1),$.each(c[a],function(e,t){c[a][e]='"'+t+'"'}),k+="["+c[a]+"], ")}),k=JSON.parse("{"+k.slice(0,-2)+"}")),xe=de.includes(ve)?"RTL":"LTR",function(e){var t=e.toString().split(","),a=new Array,r=new Array(47);$.each(t,function(e,t){a[e]=t.toString().replace(/(\t+|\s+)/g," "),a[e]=a[e].split(" "),void 0!==pe[a[e][0]]&&(r[pe[a[e][0]]]=a[e])}),$(".keyboard-wrapper").length?(Ue(),$(".keyboard-row").remove(),!0):($("body").prepend('<div class="keyboard-wrapper"></div>'),Ae.directEnter||$("body").prepend('<div class="keyboard-blackout-background"></div>'),!1);Fe(r.slice(0,13)),Fe(r.slice(13,26)),Fe(r.slice(26,37)),Fe(r.slice(37,47)),Pe("default"),function(){var a=Ae.language,e=Ae.languageKeyTextColor,t=Ae.showSelectedLanguage,r=t?function(){var e=a[fe].split(Ee),t="";switch(e.length){case 1:t=e[0].toLowerCase().replace(/^\w/,function(e){return e.toUpperCase()});break;case 2:t=e[1].trim();break;default:t=Ce}return t}():Ce;$(".keyboard-action-wrapper").length||Ae.directEnter||$(".keyboard-wrapper").prepend('<div class="keyboard-action-wrapper"><button class="keyboard-action-button keyboard-cancel-button">Cancel</button><input type="text" class="keyboard-input-field"><button class="keyboard-action-button keyboard-accept-button">Accept</button></div>'),$(".keyboard-row:eq(0)").append('<button class="keyboard-key keyboard-key-lg" data-keyval="backspace">Backspace</button>'),$(".keyboard-row:eq(1)").prepend('<button class="keyboard-key keyboard-key-lg" data-keyval="tab">Tab</button>'),$(".keyboard-row:eq(2)").prepend('<button class="keyboard-key keyboard-key-lg caps-lock-key '.concat(Ae.isPermanentUppercase?"caps-lock-key-active":"",'" data-keyval="caps lock">Caps Lock</button>')),$(".keyboard-row:eq(2)").append('<button class="keyboard-key keyboard-key-lg" data-keyval="enter">Enter</button>'),$(".keyboard-row:eq(3)").prepend('<button class="keyboard-key keyboard-key-lg" data-keyval="shift">Shift</button>'),$(".keyboard-row:eq(3)").append('<button class="keyboard-key keyboard-key-lg" data-keyval="shift">Shift</button>'),$(".keyboard-wrapper").append('<div class="keyboard-row"></div>'),$(".keyboard-row:eq(4)").append('<button class="keyboard-key keyboard-key-lg" data-keyval="ctrl">Ctrl</button>'),$(".keyboard-row:eq(4)").append('<button class="keyboard-key keyboard-key-lg language-button" data-keyval="language">\n        <span style="color: '.concat(e,';" data-keyval="language">').concat(r,"</span>\n        </button>")),$(".keyboard-row:eq(4)").append('<button class="keyboard-key keyboard-key-lg" data-keyval="alt">Alt</button>'),$(".keyboard-row:eq(4)").append('<button class="keyboard-key keyboard-key-xl" data-keyval="space">&nbsp;</button>'),$(".keyboard-row:eq(4)").append('<button class="keyboard-key keyboard-key-lg" data-keyval="alt grp">Alt Grp</button>'),$(".keyboard-row:eq(4)").append('<button class="keyboard-key keyboard-key-lg" data-keyval="spare">&nbsp;</button>'),$(".keyboard-row:eq(4)").append('<button class="keyboard-key keyboard-key-lg" data-keyval="ctrl">Ctrl</button>')}(),function(){var e,t,a,r,o=$(".keyboard-row").width(),n=2*$(".keyboard-key").css("margin-right").match(/[0-9]/),l=(o-15*n)/15,c=o/3;$(".keyboard-row").each(function(){e=$(this).children(".keyboard-key-sm").length,t=$(this).children(".keyboard-key-lg").length,a=$(this).children(".keyboard-key-xl").length,r=(o-(e+t+a)*n-e*l-a*c)/t,$(this).children(".keyboard-key-sm").css("cssText","width: ".concat(l,"px")),$(this).children(".keyboard-key-lg").css("cssText","width: ".concat(r,"px")),$(this).children(".keyboard-key-xl").css("cssText","width: ".concat(c,"px"))})}(),function(){var e=$(window).width(),t=$(window).height(),a=$(".keyboard-wrapper").height(),r=$(".keyboard-wrapper").width();switch($(".keyboard-key").css("background-color",Ae.keyColor),$(".keyboard-key").css("color",Ae.keyTextColor),Ae.directEnter||($(".keyboard-cancel-button").css("background-color",Ae.cancelColor),$(".keyboard-cancel-button").css("color",Ae.cancelTextColor),$(".keyboard-accept-button").css("background-color",Ae.acceptColor),$(".keyboard-accept-button").css("color",Ae.acceptTextColor),$(".keyboard-blackout-background").css("background-color","rgba("+Ae.blackoutColor+")")),Ae.keyboardPosition){case"top":$(".keyboard-wrapper").css("top","20px");break;case"middle":$(".keyboard-wrapper").css("top",((t-a)/2).toString()+"px");break;default:$(".keyboard-wrapper").css("bottom","20px")}$(".keyboard-wrapper").css("left",((e-r)/2).toString()+"px")}(),ge||(Ae.directEnter||$(".keyboard-blackout-background").hide(),$(".keyboard-wrapper").hide())}(a)}function Fe(e){$(".keyboard-wrapper").append('<div class="keyboard-row"></div>'),$.each(e,function(e,t){!function(e){$(".keyboard-row:last").append('<button class="keyboard-key keyboard-key-sm"></button>'),$(".keyboard-key:last").data("keyDataObject",e)}(void 0!==t?{default:Le(t[b.default-1],t[1]),shift:Le(t[b.shift-1],t[1]),altgrp:Le(t[b.altgrp-1],t[1]),shift_altgrp:Le(t[b.shift_altgrp-1],t[1])}:{default:"-1",shift:"-1",altgrp:"-1",shift_altgrp:"-1"})})}function Le(e,t){var a=e;return"%%"==e?a=k[t]:void 0===e&&(a="-1"),a}function Pe(e){var t,a,r="";!ue.caps||ue.shift||ue.altgrp||Ae.isPermanentUppercase?ue.caps||ue.shift||ue.altgrp||(e="default"):(e="default",$(".caps-lock-key").addClass("caps-lock-key-active")),ue.caps||Ae.isPermanentUppercase||$(".caps-lock-key").removeClass("caps-lock-key-active"),""!=ue.shift_altgrp&&"shift_altgrp"!=e&&(ue.shift_altgrp=""),$(".keyboard-key").each(function(){r="";try{t=$(this),4==(a=t.data("keyDataObject"))[e].length?(t.html("&#x"+a[e]+";"),t.data("keyval",t.html())):5==a[e].length&&a[e].match("@")?(t.html("&#x"+a[e].replace("@","")+";"),t.data("keyval",t.html())):a[e].constructor===Array?($.each(a[e],function(e,t){r+="&#x"+t+";"}),t.html(r),t.data("keyval",t.html())):"-1"==a[e]||"%%"==a[e]||0==a[e].length?(t.html("&nbsp;"),t.data("keyval","")):(t.html(a[e]),t.data("keyval",t.html())),(!ue.shift&&ue.caps&&!ue.altgrp||Ae.isPermanentUppercase)&&(t.html(1==t.html().length?t.html().toUpperCase():t.html()),t.data("keyval",1==t.html().length?t.html():t.data("keyval")))}catch(e){}})}function qe(){l.val(""),Ue(),ge=!1,_e()}function Re(){r.is("input")?r.val(l.val()):r.html(l.val()),l.val(""),Ue(),ge=!1,_e()}function Ue(){for(var e in ue)ue.hasOwnProperty(e)&&(ue[e]=!1)}_e(),we.on("click touch",Ae.inputType,function(){var e=Ae.specifiedFieldsOnly;if("keyboard-input-field"!=$(this).prop("class")){var t=$(this);if(e){var a=t.data(Ke)||!1;if(!a)return}$.each(Se,function(e){Se[e]=void 0===t.prop(e)?"":t.prop(e)}),Se.disabled||Se.readonly||(r=$(this),l=r,Ae.directEnter||(l=$(".keyboard-input-field"),r.is("input")?(be=r.prop("type"),he="password"==be?"password":"text",l.prop("placeholder",Se.placeholder),l.val(r.val()),l.prop("type",he)):(be="text",l.val(r.html()),l.prop("type","text")),$(".keyboard-blackout-background").show()),$(".keyboard-wrapper").show(),ge=!0,l.focus())}}),$("body").on("click touch",".keyboard-key",function(){var e=$(this).data("keyval");!function(e){var t=("0000"+e.charCodeAt(0).toString(16)).slice(-4),a=l[0].selectionStart;if(2<(e=e.replace("&lt;","<").replace("&gt;",">").replace(/\bspace/," ")).length)switch(ye="",e){case"shift":ue.shift=!ue.shift,ue.caps=!1,ue.altgrp=!1,"altgrp"==ue.shift_altgrp?(Pe("shift_altgrp"),ue.shift_altgrp=""):"shift"==ue.shift_altgrp?(Pe("shift"),ue.shift_altgrp=""):(Pe("shift"),ue.shift_altgrp="shift");break;case"caps lock":ue.shift=!1,ue.caps=!ue.caps,ue.altgrp=!1,Pe("caps");break;case"alt grp":ue.shift=!1,ue.caps=!1,ue.altgrp=!ue.altgrp,"shift"==ue.shift_altgrp?(Pe("shift_altgrp"),ue.shift_altgrp=""):"altgrp"==ue.shift_altgrp?(Pe("altgrp"),ue.shift_altgrp=""):(Pe("altgrp"),ue.shift_altgrp="altgrp");break;case"backspace":l.val(l.val().slice(0,a-1)+l.val().slice(a)),a-=1,l.focus(),l[0].selectionStart=a,l[0].selectionEnd=a;break;case"space":break;case"enter":Ae.enterKey&&"function"==typeof Ae.enterKey&&Ae.enterKey();break;case"tab":Ae.tabKey&&"function"==typeof Ae.tabKey&&Ae.tabKey();break;case"ctrl":Ae.ctrlKey&&"function"==typeof Ae.ctrlKey&&Ae.ctrlKey();break;case"alt":Ae.altKey&&"function"==typeof Ae.altKey&&Ae.altKey();break;case"language":fe+1<=Ae.language.length-1?fe++:fe=0,Ue(),_e(),Ae.languageKey&&"function"==typeof Ae.languageKey&&Ae.languageKey();break;case"spare":Ae.spareKey&&Ae.spareKey}else{if(ue.shift=!1,ue.altgrp=!1,Pe("default"),(ye=y[t])||ke){if(e="",void 0===ye&&ke){var r=String.fromCharCode("0x"+ke[t]);r&&void 0!==ke[t]&&(e=r)}ke=ye}l.attr("dir",xe);var o,n=l.val();l.val(l.val().slice(0,a)+e+l.val().slice(a)),o=l.val(),("-1"!=Se.maxlength&&""!=Se.maxlength&&o.length>Se.maxlength||"number"==be&&""!=Se.max&&"-1"!=Se.max&&1*o>1*Se.max||"number"==be&&""!=Se.min&&"-1"!=Se.min&&1*o<1*Se.min||e.search(Ae.keyCharacterRegex[be])<0||o.search(Ae.inputFieldRegex[be])<0)&&(l.val(n),a--),a+=e.length,l.focus(),l[0].selectionStart=a,l[0].selectionEnd=a}}(e)}),$(document).on("click touch",".keyboard-cancel-button",function(){qe()}),$(document).on("click touch",".keyboard-accept-button",function(){Re()}),$(document).on("click touch","*",function(e){if(e.stopPropagation(),ge&&Ae.directEnter){var t=$(this);if(Ae.inputType.search(t.attr("type"))<1&&Ae.inputType.search(t.prop("tagName").toLowerCase())<1&&"true"!=t.prop("contenteditable")){for(;t.parent().length&&!t.hasClass("keyboard-wrapper");)t=t.parent();t.hasClass("keyboard-wrapper")||(Ue(),ge=!1,_e())}}}),$(document).on("keydown",function(e){!function(e){if($(".keyboard-wrapper").is(":visible"))switch(e.which){case 13:Ae.allowEnterAccept&&(Re(),e.preventDefault());break;case 27:Ae.allowEscapeCancel&&(qe(),e.preventDefault())}}(e)}),$(window).resize(function(){$e||($e=!0,setTimeout(function(){_e(),$e=!1},500))})};