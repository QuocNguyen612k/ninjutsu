(this.webpackJsonpninjutsu=this.webpackJsonpninjutsu||[]).push([[0],{261:function(e,t,n){},267:function(e,t){},268:function(e,t){},276:function(e,t){},279:function(e,t){},280:function(e,t){},281:function(e,t,n){},283:function(e,t,n){"use strict";n.r(t);var r=n(90),o=n.n(r),a=n(233),c=n.n(a),i=(n(261),n(4)),u=n.n(i),l=n(11),s=n(88),p=n(255),d=n.n(p),f=(n(281),n(5)),h={1:{name:"bird",color:"red"},2:{name:"boar",color:"yellow"},3:{name:"dog",color:"lime"},4:{name:"dragon",color:"blue"},5:{name:"hare",color:"purple"},6:{name:"horse",color:"purple"},7:{name:"monkey",color:"purple"},8:{name:"ox",color:"purple"},9:{name:"ram",color:"purple"},10:{name:"rat",color:"purple"},11:{name:"snake",color:"purple"},12:{name:"tiger",color:"purple"},13:{name:"clone",color:"purple"},14:{name:"clap",color:"purple"}},m=function(e,t,n,r,o,a,c){for(var i=0;i<=e.length;i++)if(e[i]&&t[i]&&n[i]>r){console.log(n[i]);var u=Object(f.a)(e[i],4),l=u[0],s=u[1],p=u[2],d=u[3],m=t[i];c.strokeStyle=h[m].color,c.lineWidth=10,c.fillStyle="white",c.font="30px Arial",c.beginPath(),c.fillText(h[m].name+" - "+Math.round(100*n[i])/100,s*o,l*a-10),c.rect(s*o,l*a,d*o/2,p*a/1.5),c.stroke(),console.log(h[m].name)}},g=n(87);var b=function(){var e=Object(r.useRef)(null),t=Object(r.useRef)(null),n=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.d("https://tsjs-real-time-model.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json");case 2:t=e.sent,setInterval((function(){o(t)}),16.7);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var n=Object(l.a)(u.a.mark((function n(r){var o,a,c,i,l,p,d,f,h,g,b,x;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("undefined"===typeof e.current||null===e.current||4!==e.current.video.readyState){n.next=34;break}return o=e.current.video,a=e.current.video.videoWidth,c=e.current.video.videoHeight,e.current.video.width=a,e.current.video.height=c,t.current.width=a,t.current.height=c,i=s.a.fromPixels(o),l=s.c.resizeBilinear(i,[640,480]),p=l.cast("int32"),d=p.expandDims(0),n.next=14,r.executeAsync(d);case 14:return f=n.sent,console.log(f),n.next=18,f[1].array();case 18:return h=n.sent,n.next=21,f[2].array();case 21:return g=n.sent,n.next=24,f[4].array();case 24:b=n.sent,t.current.width=a,t.current.height=c,x=t.current.getContext("2d"),requestAnimationFrame((function(){m(h[0],g[0],b[0],.8,a,c,x)})),s.b(i),s.b(l),s.b(p),s.b(d),s.b(f);case 34:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return n(),Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)("header",{className:"App-header",children:[Object(g.jsx)(d.a,{ref:e,muted:!0,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zIndex:9,width:640,height:480}}),Object(g.jsx)("canvas",{ref:t,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zIndex:9}})]})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,284)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),o(e),a(e),c(e)}))};c.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(b,{})}),document.getElementById("root")),x()}},[[283,1,2]]]);
//# sourceMappingURL=main.214018ef.chunk.js.map