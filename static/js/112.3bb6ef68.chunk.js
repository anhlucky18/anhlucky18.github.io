(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[112],{1258:function(e,t,n){"use strict";var a=n(0);t.a=function(){var e=Object(a.useRef)(!0);return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),e}},2766:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),i=n(14),l=n(17),s=n(1363),u=n(1355),p=n(1174),v=n(1177),m=n(1187),d=n(1176),f=n(374),h=n(1179),b=n(1188),E=n(1161),g=n(1163),k=n(84),O=n(1130),x=n(1151),y=n(2690),j=n(188),w=n(380),C=n(24),T=(n(184),n(53)),S=n(121),L=n.n(S),P=(n(2686),function(){var e=Object(i.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=[{id:0,title:"Ch\u1ecdn live Event"}],n=new Date,e.next=5,T.a.firestore().collection("live_events").where("start_at",">=",n).get();case 5:return e.sent.docs.map((function(e){t.push(Object(C.a)({id:e.id},e.data()))})),e.abrupt("return",t);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()),A=function(){var e=Object(i.a)(c.a.mark((function e(){var t,n,a,r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L()({method:"GET",url:"https://server.dschool.vn/api/getpopup",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS"}});case 3:for(r in t=e.sent,n=t.data,a=[{id:1,title:"Ch\u1ecdn PopUp"}],n)a.push(n[r]);return console.log(a),e.abrupt("return",a);case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),o=[{id:1,title:"Ch\u1ecdn PopUp"}],e.abrupt("return",o);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(i.a)(c.a.mark((function e(t,n){var a,r,o,i,l,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=T.a.firestore(),r="",!0===t.policy&&(r="keep_time"),"undefined"===typeof n){e.next=23;break}return console.log(t.liveOption),o=a.collection("live_events").doc(t.liveOption).collection("detail").doc("content"),e.next=9,o.get();case 9:if(!(i=e.sent).exists){e.next=20;break}return l=i.data().data,s=l.replace('a href="https://www.facebook.com/Hocbaionha/live"','a href="'+n+'"'),e.next=15,a.collection("live_events").doc(t.liveOption).collection("detail").doc("content").set({data:s});case 15:return e.next=17,G(t.liveOption,r);case 17:return e.abrupt("return",{error_code:0,message:"G\u1eedi tin nh\u1eafn th\xe0nh c\xf4ng."});case 20:return e.abrupt("return",{error_code:1,message:"Id live_event kh\xf4ng t\u1ed3n t\u1ea1i."});case 21:e.next=24;break;case 23:return e.abrupt("return",{error_code:1,message:"Link Bitly kh\xf4ng t\u1ed3n t\u1ea1i"});case 24:e.next=29;break;case 26:e.prev=26,e.t0=e.catch(0),console.log(e.t0);case 29:case"end":return e.stop()}}),e,null,[[0,26]])})));return function(t,n){return e.apply(this,arguments)}}(),B=function(){var e=Object(i.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L()({method:"GET",url:"https://server.dschool.vn/api/getLinkBitly?link_live="+t,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS"}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();function G(e,t){return H.apply(this,arguments)}function H(){return(H=Object(i.a)(c.a.mark((function e(t,n){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L()({method:"POST",url:"https://server.dschool.vn/api/sendnoti",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS",Authorization:"Bearer f56e78db35ab4ff8c915facfa644c4ad25b6358b"},data:{live_event_id:t,option:n}});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var F=n(1258);console.log(A);var N=Object(w.a)((function(e){return{brief:{"& .ql-editor":{height:150}},tags:{position:"relative",overflow:"auto",maxHeight:300},categories:{position:"relative",overflow:"auto",maxHeight:300},pre:{backgroundColor:"#fff"},toolbar:{marginBottom:0,borderLeft:"none",borderTop:"none",borderRight:"none",borderBottom:"1px solid ".concat(e.palette.divider),background:"transparent"},editor:{padding:e.spacing(2),color:e.palette.text.primary}}})),R=function(){var e=N(),t=Object(F.a)(),n=Object(a.useState)(),o=Object(l.a)(n,2),w=o[0],C=o[1],T=Object(a.useState)(),S=Object(l.a)(T,2),L=S[0],G=S[1],H=Object(a.useState)([]),R=Object(l.a)(H,2),q=R[0],D=R[1],I=Object(a.useCallback)(Object(i.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P();case 3:n=e.sent,console.log(n),t.current&&D(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[t]);Object(a.useEffect)((function(){I()}),[I]);var U=Object(a.useState)([]),W=Object(l.a)(U,2),M=W[0],z=W[1],J=Object(a.useCallback)(Object(i.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A();case 3:n=e.sent,console.log(n),t.current&&z(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[t]);return Object(a.useEffect)((function(){J()}),[J]),r.a.createElement(u.a,{initialValues:{liveOption:"",linkLive:"",popupOption:"",policy:!1,submit:null},validationSchema:s.e().shape({linkLive:s.g().required("Required"),liveOption:s.g().required("Required")}),onSubmit:function(){var e=Object(i.a)(c.a.mark((function e(t,n){var a,r,o,i,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.resetForm,a=n.setErrors,r=n.setStatus,o=n.setSubmitting,e.prev=1,e.next=4,Object(j.a)(1e3);case 4:return e.next=6,B(t.linkLive);case 6:if(!(i=e.sent).link){e.next=16;break}return C(!0),e.next=11,_(t,i.link);case 11:l=e.sent,console.log(l),0===l.error_code?G(!0):G(!1),e.next=18;break;case 16:C(!1),t.linkBitly="undefined";case 18:console.log(i),r({success:!0}),o(!1),e.next=29;break;case 23:e.prev=23,e.t0=e.catch(1),console.error(e.t0),r({success:!1}),a({submit:e.t0.message}),o(!1);case 29:case"end":return e.stop()}}),e,null,[[1,23]])})));return function(t,n){return e.apply(this,arguments)}}()},(function(t){var n=t.errors,a=t.handleBlur,o=t.handleChange,c=t.handleSubmit,i=t.isSubmitting,l=t.touched,s=t.values;return r.a.createElement(p.a,null,r.a.createElement(v.a,{title:"Basic Form"}),r.a.createElement(m.a,null),r.a.createElement(d.a,null,!0===w&&r.a.createElement(f.a,{mb:3},r.a.createElement(y.a,{onClose:function(){return C()},severity:"success"},"L\u1ea5y link th\xe0nh c\xf4ng!")),!1===w&&r.a.createElement(f.a,{mb:3},r.a.createElement(y.a,{onClose:function(){return C()},severity:"error"},"L\u1ea5y link th\u1ea5t b\u1ea1i!")),!0===L&&r.a.createElement(f.a,{mb:3},r.a.createElement(y.a,{onClose:function(){return G(!1)},severity:"success"},"G\u1eedi tin nh\u1eafn th\xe0nh c\xf4ng.")),!1===L&&r.a.createElement(f.a,{mb:3},r.a.createElement(y.a,{onClose:function(){return G(!1)},severity:"error"},"G\u1eedi tin nh\u1eafn th\u1ea5t b\u1ea1i.")),i?r.a.createElement(f.a,{display:"flex",justifyContent:"center",my:5},r.a.createElement(h.a,null)):r.a.createElement("form",{onSubmit:c},r.a.createElement(b.a,{container:!0,spacing:2},r.a.createElement(b.a,{item:!0,md:12,xs:12},r.a.createElement(E.a,{error:Boolean(l.linkLive&&n.linkLive),fullWidth:!0,helperText:l.linkLive&&n.linkLive,label:"Link Live",name:"linkLive",onBlur:a,onChange:o,value:s.linkLive,variant:"outlined"})),r.a.createElement(b.a,{item:!0,md:12,xs:12},q.length>0&&r.a.createElement(E.a,{className:e.liveOptions,error:Boolean(l.liveOption&&n.liveOption),label:"Live Event",name:"liveOption",onChange:o,select:!0,SelectProps:{native:!0},value:s.liveOption,variant:"outlined",fullWidth:!0},q.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.title)})))),r.a.createElement(b.a,{item:!0,md:12,xs:12},M.length>0&&r.a.createElement(E.a,{className:e.popupOptions,label:"Popup Moodle",name:"popupOption",onChange:o,select:!0,SelectProps:{native:!0},value:s.popupOption,variant:"outlined",fullWidth:!0},M.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.title)}))))),r.a.createElement(f.a,{alignItems:"center",display:"flex",mt:2,ml:-1},r.a.createElement(g.a,{checked:s.policy,name:"policy",onChange:o}),r.a.createElement(k.a,{variant:"body2",color:"textSecondary"},"Run auto  keep Start_time  Event")),Boolean(l.policy&&n.policy)&&r.a.createElement(O.a,{error:!0},n.policy),n.liveOption&&r.a.createElement("div",null,n.liveOption),r.a.createElement(f.a,{mt:2},r.a.createElement(x.a,{color:"secondary",disabled:i,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Run Auto")))))}))},q=(n(1859),n(390)),D=n(12),I=n(1180),U=n(1233),W=n(1191),M=n(2687),z=n.n(M),J=n(8),V=Object(w.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},avatar:{backgroundColor:D.colors.red[600]},stepper:{backgroundColor:"transparent"}}}));t.default=function(){var e=V();return r.a.createElement(q.a,{className:e.root,title:"Formik Form"},r.a.createElement(I.a,{maxWidth:"lg"},r.a.createElement(U.a,{separator:r.a.createElement(z.a,{fontSize:"small"}),"aria-label":"breadcrumb"},r.a.createElement(W.a,{variant:"body1",color:"inherit",to:"/app",component:J.a},"Dashboard"),r.a.createElement(k.a,{variant:"body1",color:"textPrimary"},"Forms")),r.a.createElement(k.a,{variant:"h3",color:"textPrimary"},"Formik"),r.a.createElement(f.a,{mt:3},r.a.createElement(b.a,{container:!0},r.a.createElement(b.a,{item:!0,xs:12,md:6},r.a.createElement(R,null))))))}}}]);
//# sourceMappingURL=112.3bb6ef68.chunk.js.map