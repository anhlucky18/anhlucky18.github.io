(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[60],{1258:function(e,t,n){"use strict";var r=n(0);t.a=function(){var e=Object(r.useRef)(!0);return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1278:function(e,t,n){"use strict";var r=n(225),a=n(224);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n(0)),o=(0,r(n(227)).default)(c.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.default=o},1286:function(e,t,n){"use strict";function r(e){var t;if("undefined"!==typeof Symbol){if(Symbol.asyncIterator&&null!=(t=e[Symbol.asyncIterator]))return t.call(e);if(Symbol.iterator&&null!=(t=e[Symbol.iterator]))return t.call(e)}throw new TypeError("Object is not async iterable")}n.d(t,"a",(function(){return r}))},1315:function(e,t,n){"use strict";n(650)},1357:function(e,t,n){"use strict";n.d(t,"g",(function(){return m})),n.d(t,"h",(function(){return b})),n.d(t,"a",(function(){return h})),n.d(t,"l",(function(){return x})),n.d(t,"e",(function(){return y})),n.d(t,"c",(function(){return E})),n.d(t,"i",(function(){return _})),n.d(t,"d",(function(){return O})),n.d(t,"j",(function(){return k})),n.d(t,"f",(function(){return j})),n.d(t,"b",(function(){return w})),n.d(t,"k",(function(){return A}));var r=n(9),a=n.n(r),c=n(24),o=n(14),i=n(1286),s=n(53),u=n(184),l=n.n(u),p=(n(1315),n(121)),f=n.n(p),d=s.a.firestore(),m=function(){var e=Object(o.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.firestore().collection("quiz_test").get();case 3:if(!(t=e.sent).docs){e.next=7;break}return n=t.docs.map((function(e){return Object(c.a)({id:e.id},e.data())})),e.abrupt("return",n);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(o.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.firestore().collection("/resource/public/quizzes").get();case 3:if(!(t=e.sent).docs){e.next=7;break}return n=t.docs.map((function(e){return Object(c.a)({id:e.id,ref:e.ref.path},e.data())})),e.abrupt("return",n);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(o.a)(a.a.mark((function e(t,n,r,c){var o,i,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o={name:t.name,tags:n,typeQuiz:r,listQuiz:c},e.next=4,s.a.firestore().collection("quiz_test").add(o);case 4:return i=e.sent,e.next=7,i.get();case 7:return u=e.sent,g(n,o),e.abrupt("return",u.data());case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n,r,a){return e.apply(this,arguments)}}();function g(e,t){return v.apply(this,arguments)}function v(){return(v=Object(o.a)(a.a.mark((function e(t,n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=0;case 1:if(!(r<t.length)){e.next=9;break}return c=parseInt(t[r].slice(-1)),e.next=5,s.a.firestore().collection("users").where("grade","==",c).where("last_device.active_status","==",1).get().then((function(e){e.forEach((function(e){console.log(e.id," => ",e.data());var t={to:e.data().last_device.device_token,priority:"high",notification:{body:"H\u1ecdc b\xe0i \u1edf nh\xe0 v\u1eeba g\u1eedi 1 b\xe0i t\u1eadp",title:n.name},data:{click_action:"FLUTTER_NOTIFICATION_CLICK",deep_link:"",body:"H\u1ecdc b\xe0i \u1edf nh\xe0 v\u1eeba g\u1eedi 1 b\xe0i t\u1eadp",title:n.name,content_type:"h5p"}},r={"Content-Type":"application/json",Authorization:"key="+Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_AUTH0_CLIENT_ID:"",REACT_APP_AUTH0_DOMAIN:"",REACT_APP_SERVER_URL:"https://server.dschool.vn",REACT_APP_LOGOUT_URL:"https://id.hocbaionha.com/oauth2/sessions/logout",REACT_APP_H5P_URL:"https://h5p.dschool.vn",REACT_APP_FIREBASE_API_KEY:"AIzaSyD1rFzhNHcbWql0L8g4dWMcdgn5KiZ3cv4",REACT_APP_FIREBASE_APP_ID:"1:666303282505:web:2daabfe2056b8bcf276e98",REACT_APP_FIREBASE_AUTH_DOMAIN:"hbon-sso.firebaseapp.com",REACT_APP_FIREBASE_DATABASE_URL:"https://hbon-sso.firebaseio.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"666303282505",REACT_APP_FIREBASE_PROJECT_ID:"hbon-sso",REACT_APP_FIREBASE_STORAGE_BUCKET:"hbon-sso.appspot.com",REACT_APP_GA_MEASUREMENT_ID:"G-6ED668BBJC"}).REACT_APP_FIREBASE_CLOUD_MESSAGE_KEY};f.a.post("https://fcm.googleapis.com/fcm/send",t,{headers:r}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}))})).catch((function(e){console.log("Error getting documents: ",e)}));case 5:e.sent;case 6:r++,e.next=1;break;case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=function(){var e=Object(o.a)(a.a.mark((function e(t,n,r,c){var o,i,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o={name:t.name,tags:n,typeQuiz:r,listQuiz:c},console.log(t),console.log(o),e.next=6,s.a.firestore().collection("quiz_test").doc(t.id).update(o);case 6:return i=e.sent,e.next=9,i.get();case 9:return u=e.sent,e.abrupt("return",u.data());case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n,r,a){return e.apply(this,arguments)}}(),y=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.firestore().collection("quiz_test").doc(t).get();case 3:return n=e.sent,r=n.data(),e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.map((function(e){s.a.firestore().collection("quiz_test").doc(e).delete()})),e.abrupt("return",!0);case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.firestore().collection("repo/library/users").doc(t).collection("quizzes").get();case 3:if(!(n=e.sent).docs){e.next=7;break}return r=n.docs.map((function(e){return Object(c.a)({id:e.id},e.data())})),e.abrupt("return",r);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(o.a)(a.a.mark((function e(t,n){var r,c,o,i,s,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t,n),e.next=3,d.collection("repo/library/users").doc(t).collection("quizzes").doc(n).get();case 3:return r=e.sent,e.prev=4,e.next=7,r.data();case 7:(c=e.sent).task_data=[],o=c.questions,console.log(o),i=0;case 12:if(!(i<o.length)){e.next=25;break}return e.next=15,o[i].ref.get();case 15:return s=e.sent,e.next=18,s.data();case 18:(u=e.sent).id=s.id,console.log(u),c.task_data.push(u);case 22:i++,e.next=12;break;case 25:return delete c.questions,console.log(c),e.abrupt("return",c);case 30:e.prev=30,e.t0=e.catch(4),console.log(e.t0);case 33:case"end":return e.stop()}}),e,null,[[4,30]])})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("search"),"",f.a.get("https://test.search.dschool.vn/scotch.io-tutorial/cities_list/_search",{data:JSON.stringify("")}).then((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(o.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.collection("resource").doc("tags").collection("tags").get();case 2:if(!(t=e.sent).docs){e.next=6;break}return n=t.docs.map((function(e){return Object(c.a)({id:e.id},e.data())})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(a.a.mark((function e(t,n,r){var c,o,s,u,p,f,m,b,h,g,v,x,y,E,_,O,k,j,w,A,P,S,C;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,console.log(t),console.log(typeof t.data),(c={name:t.name,tag:t.tag,desc:t.desc,created_by:t.created_by,author:t.author}).restart=0,c.navigate=1,c.created_time=new Date,c.trial_maxquest=5,c.trial_maxtime=30,c.trial_maxentry=1,c.random=1,c.quest_feedback=0,c.auto_next=0,o=d.batch(),c.questions=[],s=[],console.log(c),u=0,p=!0,f=!1,e.prev=20,b=Object(i.a)(t.data);case 22:return e.next=24,b.next();case 24:return h=e.sent,p=h.done,e.next=28,h.value;case 28:if(g=e.sent,p){e.next=85;break}if(u++,(v=g).created_by=c.created_by,v.tag=c.tag,v.created_time=c.created_time,v.grade=parseInt(v.grade),v.time=parseInt(v.time),!("options"in v)){e.next=75;break}x=0,y=!0,E=!1,e.prev=41,O=Object(i.a)(v.options);case 43:return e.next=45,O.next();case 45:return k=e.sent,y=k.done,e.next=49,k.value;case 49:if(j=e.sent,y){e.next=57;break}j.fraction>0&&x++;case 54:y=!0,e.next=43;break;case 57:e.next=63;break;case 59:e.prev=59,e.t0=e.catch(41),E=!0,_=e.t0;case 63:if(e.prev=63,e.prev=64,y||null==O.return){e.next=68;break}return e.next=68,O.return();case 68:if(e.prev=68,!E){e.next=71;break}throw _;case 71:return e.finish(68);case 72:return e.finish(63);case 73:for(v.wrong_grade=Math.round(100*v.grade/x)/100,w=0;w<v.options.length;w++)v.options[w].value=w.toString(),"fraction"in v.options[w]||(v.options[w].fraction=0),v.options[w].fraction>0&&(v.options[w].fraction=v.wrong_grade);case 75:return A=v.element,e.next=78,d.collection("repo/library/users").doc(c.created_by).collection("questions").doc(v.id);case 78:P=e.sent,o.set(P,v),c.questions.push({id:u,element:A,ref:P}),s.push(v);case 82:p=!0,e.next=22;break;case 85:e.next=91;break;case 87:e.prev=87,e.t1=e.catch(20),f=!0,m=e.t1;case 91:if(e.prev=91,e.prev=92,p||null==b.return){e.next=96;break}return e.next=96,b.return();case 96:if(e.prev=96,!f){e.next=99;break}throw m;case 99:return e.finish(96);case 100:return e.finish(91);case 101:return e.next=103,d.collection("repo/library/users").doc(c.created_by).collection("quizzes").doc();case 103:return S=e.sent,o.set(S,c),e.next=107,d.collection("repo/library/users").doc(c.created_by).collection("catalogs").doc(n).collection("sections").doc(r);case 107:return C=e.sent,e.next=110,C.get();case 110:return e.next=112,e.sent.data();case 112:return"activities"in e.sent?(console.log(S),o.update(d.collection("repo/library/users").doc(c.created_by).collection("catalogs").doc(n).collection("sections").doc(r),{activities:l.a.firestore.FieldValue.arrayUnion({name:c.name,type:"quiz",ref:S})})):o.update(d.collection("repo/library/users").doc(c.created_by).collection("catalogs").doc(n).collection("sections").doc(r),{activities:[{name:c.name,type:"quiz",ref:S}]}),e.next=116,o.commit();case 116:return console.log("quizid:",S.id),c.id=S.id,e.abrupt("return",!0);case 121:e.prev=121,e.t2=e.catch(0),console.log(e.t2);case 124:case"end":return e.stop()}}),e,null,[[0,121],[20,87,91,101],[41,59,63,73],[64,,68,72],[92,,96,100]])})));return function(t,n,r){return e.apply(this,arguments)}}(),A=function(){var e=Object(o.a)(a.a.mark((function e(t,n){var r,c,o,s,u,l,p,f,m,b,h,g,v,x,y,E,_,O,k,j,w,A;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,console.log(n),console.log(typeof n.data),(r={name:n.name,tag:n.tag,desc:n.desc,created_by:n.created_by,author:n.author}).restart=0,r.navigate=1,r.created_time=new Date,r.trial_maxquest=5,r.trial_maxtime=30,r.trial_maxentry=1,r.random=1,r.quest_feedback=0,r.auto_next=0,c=d.batch(),r.questions=[],o=[],console.log(r),s=0,u=!0,l=!1,e.prev=20,f=Object(i.a)(n.data);case 22:return e.next=24,f.next();case 24:return m=e.sent,u=m.done,e.next=28,m.value;case 28:if(b=e.sent,u){e.next=87;break}if(s++,g=(h=b).element,h.created_by=r.created_by,h.tag=r.tag,h.created_time=r.created_time,h.grade=parseInt(h.grade),h.time=parseInt(h.time),!("options"in h)){e.next=76;break}v=0,x=!0,y=!1,e.prev=42,_=Object(i.a)(h.options);case 44:return e.next=46,_.next();case 46:return O=e.sent,x=O.done,e.next=50,O.value;case 50:if(k=e.sent,x){e.next=58;break}k.fraction>0&&v++;case 55:x=!0,e.next=44;break;case 58:e.next=64;break;case 60:e.prev=60,e.t0=e.catch(42),y=!0,E=e.t0;case 64:if(e.prev=64,e.prev=65,x||null==_.return){e.next=69;break}return e.next=69,_.return();case 69:if(e.prev=69,!y){e.next=72;break}throw E;case 72:return e.finish(69);case 73:return e.finish(64);case 74:for(h.wrong_grade=Math.round(100*h.grade/v)/100,j=0;j<h.options.length;j++)h.options[j].value=j.toString(),"fraction"in h.options[j]||(h.options[j].fraction=0),h.options[j].fraction>0&&(h.options[j].fraction=h.wrong_grade);case 76:return console.log("saving grade",h.grade),console.log("saving time",h.time),e.next=80,d.collection("repo/library/users").doc(r.created_by).collection("questions").doc(h.id);case 80:w=e.sent,c.set(w,h),r.questions.push({id:s,element:g,ref:w}),o.push(h);case 84:u=!0,e.next=22;break;case 87:e.next=93;break;case 89:e.prev=89,e.t1=e.catch(20),l=!0,p=e.t1;case 93:if(e.prev=93,e.prev=94,u||null==f.return){e.next=98;break}return e.next=98,f.return();case 98:if(e.prev=98,!l){e.next=101;break}throw p;case 101:return e.finish(98);case 102:return e.finish(93);case 103:return e.next=106,d.collection("repo/library/users").doc(r.created_by).collection("quizzes").doc(t);case 106:return A=e.sent,c.update(A,r),e.next=110,c.commit();case 110:return console.log("quizid:",A.id),r.id=A.id,e.abrupt("return",!0);case 115:e.prev=115,e.t2=e.catch(0),console.log(e.t2);case 118:case"end":return e.stop()}}),e,null,[[0,115],[20,89,93,103],[42,60,64,74],[65,,69,73],[94,,98,102]])})));return function(t,n){return e.apply(this,arguments)}}()},1671:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var r=n(9),a=n.n(r),c=n(14);function o(e){return i.apply(this,arguments)}function i(){return(i=Object(c.a)(a.a.mark((function e(t){var n,r,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n="",c=(r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789").length,o=0;o<t;o++)n+=r.charAt(Math.floor(Math.random()*c));return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(e){return u.apply(this,arguments)}function u(){return(u=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n="","0123456789",r="0123456789".length,c=0;c<t;c++)n+="0123456789".charAt(Math.floor(Math.random()*r));return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1680:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(3),o=n.n(c);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,c=e.size,o=void 0===c?24:c,u=s(e,["color","size"]);return a.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),a.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),a.a.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),a.a.createElement("line",{x1:"8",y1:"12",x2:"16",y2:"12"}))}));u.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},u.displayName="PlusCircle",t.a=u},1886:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return m}));var r=n(24),a=n(9),c=n.n(a),o=n(14),i=(n(1286),n(53)),s=n(184),u=n.n(s),l=n(1671),p=function(){var e=Object(o.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(l.a)(6);case 3:return n=e.sent,e.next=6,i.a.firestore().collection("classes").doc(n);case 6:if(r=e.sent,!r.get().exists){e.next=12;break}return e.abrupt("return","existed");case 12:return e.next=14,i.a.firestore().collection("classes").doc(n).set(t);case 14:return console.log("add class success"),e.next=17,i.a.firestore().collection("schools").doc(t.school_id).update({classes:u.a.firestore.FieldValue.arrayUnion(r)});case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(o.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.firestore().collection("classes").doc(t).get();case 3:return n=e.sent,(r=n.data()).id=t,e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(o.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),n=t.id,e.next=5,i.a.firestore().collection("classes").doc(n).update(t);case 5:return r=e.sent,e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(o.a)(c.a.mark((function e(t){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.firestore().collection("classes").where("school_id","==",t).get();case 3:if(!(n=e.sent).docs){e.next=8;break}return a=n.docs.map((function(e){return Object(r.a)({id:e.id},e.data())})),console.log(a),e.abrupt("return",a);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},2304:function(e,t,n){"use strict";var r=n(50),a=n(28),c=n(0),o=n.n(c),i=n(2),s=n(380),u=n(15),l=Object(s.a)((function(e){return{root:{fontFamily:e.typography.fontFamily,alignItems:"center",borderRadius:2,display:"inline-flex",flexGrow:0,whiteSpace:"nowrap",cursor:"default",flexShrink:0,fontSize:e.typography.pxToRem(12),fontWeight:e.typography.fontWeightMedium,height:20,justifyContent:"center",letterSpacing:.5,minWidth:20,padding:e.spacing(.5,1),textTransform:"uppercase"},primary:{color:e.palette.primary.main,backgroundColor:Object(u.d)(e.palette.primary.main,.08)},secondary:{color:e.palette.secondary.main,backgroundColor:Object(u.d)(e.palette.secondary.main,.08)},error:{color:e.palette.error.main,backgroundColor:Object(u.d)(e.palette.error.main,.08)},success:{color:e.palette.success.main,backgroundColor:Object(u.d)(e.palette.success.main,.08)},warning:{color:e.palette.warning.main,backgroundColor:Object(u.d)(e.palette.warning.main,.08)}}}));t.a=function(e){var t=e.className,n=void 0===t?"":t,c=e.color,s=void 0===c?"secondary":c,u=e.children,p=(e.style,Object(a.a)(e,["className","color","children","style"])),f=l();return o.a.createElement("span",Object.assign({className:Object(i.default)(f.root,Object(r.a)({},f[s],s),n)},p),u)}},2756:function(e,t,n){"use strict";n.r(t);var r=n(9),a=n.n(r),c=n(14),o=n(17),i=n(0),s=n.n(i),u=n(380),l=n(1180),p=n(374),f=n(390),d=n(1258),m=n(28),b=n(8),h=n(2),g=n(1188),v=n(1233),x=n(84),y=n(1191),E=n(1151),_=n(181),O=n(1278),k=n.n(O),j=n(1680),w=Object(u.a)((function(e){return{root:{},action:{marginBottom:e.spacing(1),"& + &":{marginLeft:e.spacing(1)}}}})),A=function(e){var t=e.className,n=Object(m.a)(e,["className"]),r=w();return s.a.createElement(g.a,Object.assign({className:Object(h.default)(r.root,t),container:!0,justify:"space-between",spacing:3},n),s.a.createElement(g.a,{item:!0},s.a.createElement(v.a,{separator:s.a.createElement(k.a,{fontSize:"small"}),"aria-label":"breadcrumb"},"Qu\u1ea3n l\xfd notification"),s.a.createElement(x.a,{variant:"h3",color:"textPrimary"},"Danh s\xe1ch notification")),s.a.createElement(g.a,{item:!0},s.a.createElement(y.a,{to:"/hbon/management/sendnotify/create",component:b.a},s.a.createElement(E.a,{color:"secondary",variant:"contained",startIcon:s.a.createElement(_.a,{fontSize:"small"},s.a.createElement(j.a,null))},"Th\xeam notification m\u1edbi"))))},P=n(57),S=n(24),C=(n(6),n(78)),T=n.n(C),R=n(1174),z=n(1230),I=n(1198),q=n(1187),N=n(1161),L=n(1189),D=n(1163),M=n(1155),B=n(1199),F=n(1160),U=n(1157),H=n(1156),W=n(1140),G=n(646),K=n(1164),Q=n(1226),J=n(1224),V=(n(1886),n(2304)),Y=n(1357),X=[{value:"all",label:"T\u1ea5t c\u1ea3"}],Z=[{value:"name|asc",label:"T\xean h\u1ecdc sinh (t\u0103ng)"},{value:"name|desc",label:"T\xean h\u1ecdc sinh (gi\u1ea3m)"}],$=function(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0},ee=function(e,t){var n=t.split("|"),r=Object(o.a)(n,2),a=r[0],c=function(e,t){return"desc"===e?function(e,n){return $(e,n,t)}:function(e,n){return-$(e,n,t)}}(r[1],a),i=e.map((function(e,t){return[e,t]}));return i.sort((function(e,t){var n=c(e[0],t[0]);return 0!==n?n:e[1]-t[1]})),i.map((function(e){return e[0]}))},te=Object(u.a)((function(e){return{root:{},queryField:{width:500},bulkOperations:{position:"relative"},bulkActions:{paddingLeft:4,paddingRight:4,marginTop:6,position:"absolute",width:"100%",zIndex:2,backgroundColor:e.palette.background.default},bulkAction:{marginLeft:e.spacing(2)},avatar:{height:42,width:42,marginRight:e.spacing(1)}}})),ne=function(e){var t=e.className,n=e.products,r=Object(m.a)(e,["className","products"]),a=te(),c=(Object(d.a)(),Object(i.useState)("all")),u=Object(o.a)(c,2),l=u[0],f=u[1],g=Object(i.useState)([]),v=Object(o.a)(g,2),x=v[0],y=v[1],O=Object(i.useState)(0),k=Object(o.a)(O,2),j=k[0],w=k[1],A=Object(i.useState)(10),C=Object(o.a)(A,2),$=C[0],ne=C[1],re=Object(i.useState)(""),ae=Object(o.a)(re,2),ce=ae[0],oe=ae[1],ie=Object(i.useState)(Z[0].value),se=Object(o.a)(ie,2),ue=se[0],le=(se[1],Object(i.useState)({hasAcceptedMarketing:null,isProspect:null,isReturning:null})),pe=Object(o.a)(le,2),fe=pe[0],de=pe[1],me=function(e){y(e.target.checked?n.map((function(e){return e.id})):[])},be=function(e,t,n){return e.filter((function(e){var r=!0;if("undefined"!==typeof t){var a=!1;["email","name"].forEach((function(n){e[n]&&e[n].toLowerCase().includes(t.toLowerCase())&&(a=!0)})),a||(r=!1)}return Object.keys(n).forEach((function(t){var a=n[t];a&&e[t]!==a&&(r=!1)})),r}))}(n,ce,fe),he=function(e,t,n){return e.slice(t*n,t*n+n)}(ee(be,ue),j,$),ge=x.length>0,ve=x.length>0&&x.length<n.length,xe=x.length===n.length;return s.a.createElement(R.a,Object.assign({className:Object(h.default)(a.root,t)},r),s.a.createElement(z.a,{onChange:function(e,t){var n=Object(S.a)(Object(S.a)({},fe),{},{hasAcceptedMarketing:null,isProspect:null,isReturning:null});"all"!==t&&(n[t]=!0),de(n),y([]),f(t)},scrollButtons:"auto",textColor:"secondary",value:l,variant:"scrollable"},X.map((function(e){return s.a.createElement(I.a,{key:e.value,value:e.value,label:e.label})}))),s.a.createElement(q.a,null),s.a.createElement(p.a,{p:2,minHeight:56,display:"flex",alignItems:"center"},s.a.createElement(N.a,{className:a.queryField,InputProps:{startAdornment:s.a.createElement(L.a,{position:"start"},s.a.createElement(_.a,{fontSize:"small",color:"action"},s.a.createElement(Q.a,null)))},onChange:function(e){e.persist(),oe(e.target.value)},placeholder:"T\xecm ki\u1ebfm theo t\xean quiz",value:ce,variant:"outlined"}),s.a.createElement(p.a,{flexGrow:1})),ge&&s.a.createElement("div",{className:a.bulkOperations},s.a.createElement("div",{className:a.bulkActions},s.a.createElement(D.a,{checked:xe,indeterminate:ve,onChange:me}),s.a.createElement(E.a,{variant:"outlined",className:a.bulkAction,onClick:function(){console.log(x),Object(Y.c)(x)}},"X\xf3a"),s.a.createElement(E.a,{variant:"outlined",className:a.bulkAction},"S\u1eeda"))),s.a.createElement(T.a,null,s.a.createElement(p.a,{minWidth:700},s.a.createElement(M.a,null,s.a.createElement(B.a,null,s.a.createElement(F.a,null,s.a.createElement(U.a,{padding:"checkbox"},s.a.createElement(D.a,{checked:xe,indeterminate:ve,onChange:me})),s.a.createElement(U.a,null,"T\xean"),s.a.createElement(U.a,null,"Lo\u1ea1i Quiz"),s.a.createElement(U.a,null,"Tags"),s.a.createElement(U.a,null,"List c\xe2u h\u1ecfi"),s.a.createElement(U.a,{align:"right"},"Actions"))),s.a.createElement(H.a,null,he.map((function(e){var t=x.includes(e.id);return s.a.createElement(F.a,{hover:!0,key:e.id,selected:t},s.a.createElement(U.a,{padding:"checkbox"},s.a.createElement(D.a,{checked:t,onChange:function(t){return n=e.id,void(x.includes(n)?y((function(e){return e.filter((function(e){return e!==n}))})):y((function(e){return[].concat(Object(P.a)(e),[n])})));var n},value:t})),s.a.createElement(U.a,null,e.name),s.a.createElement(U.a,null,e.typeQuiz),s.a.createElement(U.a,null,e.tags.map((function(e){return function(e){var t={"lop-6":{text:"L\u1edbp 6",color:"error"},"lop-7":{text:"L\u1edbp 7",color:"success"},"lop-8":{text:"L\u1edbp 8",color:"warning"},"lop-9":{text:"L\u1edbp 9",color:"primary"}}[e],n=t.text,r=t.color;return s.a.createElement(V.a,{color:r},n)}(e)}))),s.a.createElement(U.a,null,e.listQuiz.map((function(e){return s.a.createElement(W.a,{className:e,key:e,label:e})}))),s.a.createElement(U.a,{align:"right"},s.a.createElement(G.a,{component:b.a,to:"/hbon/management/quiztest/edit/"+e.id},s.a.createElement(_.a,{fontSize:"small"},s.a.createElement(J.a,null)))))})))))),s.a.createElement(K.a,{component:"div",count:be.length,onChangePage:function(e,t){w(t)},onChangeRowsPerPage:function(e){ne(parseInt(e.target.value))},page:j,rowsPerPage:$,rowsPerPageOptions:[5,10,25]}))};ne.defaultProps={products:[]};var re=ne,ae=n(55),ce=n(25),oe=Object(u.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));t.default=function(){var e=Object(ce.a)().user,t=oe(),n=Object(d.a)(),r=Object(i.useState)([]),u=Object(o.a)(r,2),m=u[0],b=u[1],h=Object(i.useCallback)(Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Y.g)();case 3:t=e.sent,n.current&&(b(t),console.log(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[n]);return Object(i.useEffect)((function(){h()}),[h]),s.a.createElement(f.a,{className:t.root,title:"Hbon Manager"},function(){if(!(e&&e.roles&&e.roles.some((function(e){return"hbonadmin"===e}))))return console.log("khong co quyen"),s.a.createElement(ae.a,{to:"/404"});console.log("admin")}(),s.a.createElement(l.a,{maxWidth:!1},s.a.createElement(A,null),s.a.createElement(p.a,{mt:3},s.a.createElement(re,{products:m}))))}}}]);
//# sourceMappingURL=60.d1865f9a.chunk.js.map