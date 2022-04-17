(this["webpackJsonptodo-react-redux"]=this["webpackJsonptodo-react-redux"]||[]).push([[0],{45:function(n){n.exports=JSON.parse('[{"id":"id-1","name":"Shopping list","date":"April 05,2022","category":"Task","content":"Tomatoes, bread","dates":"","status":"active","svgUrl":"${sprite}#icon-buy"},{"id":"id-2","name":"The theory of evolution","date":"April 05,2022","category":"Random Thought","content":"The evolution is is based on the idea that all species? are related and gradually change over time","dates":"","status":"active","svgUrl":"${sprite}#icon-mind"},{"id":"id-3","name":"New feature","date":"April 05,2022","category":"Idea","content":"Implement a new process at work, deadline - 10/5/2022","dates":"10/5/2022","status":"active","svgUrl":"${sprite}#icon-lamp"},{"id":"id-4","name":"Books","date":"April 05,2022","category":"Task","content":"The Lean Startup","dates":"","status":"active","svgUrl":"${sprite}#icon-buy"},{"id":"id-5","name":"Trip to Mexico","date":"April 08,2022","category":"Idea","content":"Contact tripadvisor 10/06/2022","dates":"10/06/2022","status":"active","svgUrl":"${sprite}#icon-lamp"},{"id":"id-6","name":"Party","date":"April 05,2022","category":"Task","content":"Buy wine, cheese and meat","dates":"","status":"active","svgUrl":"${sprite}#icon-buy"},{"id":"id-7","name":"Children school","date":"April 05,2022","category":"Task","content":"Pay for second semester","dates":"","status":"active","svgUrl":"${sprite}#icon-buy"}]')},55:function(n,e,t){},62:function(n,e,t){"use strict";t.r(e);var a,i,r,c,o,d,l,p,s,h,x,b,g=t(0),j=t.n(g),m=t(19),u=t(18),f=t(13),O=t(39),w=(t(54),t(55),t(5)),v=t(4),y=t(3),C=y.a.div(a||(a=Object(v.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 20px;\n  padding-right: 20px;\n\n  width: 320px;\n\n  @media screen and (min-width: 768px) {\n    padding-left: 35px;\n    padding-right: 35px;\n    width: 768px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    padding-left: 10px;\n    padding-right: 10px;\n    width: 1024px;\n  }\n"]))),k=t(1),E=function(n){var e=n.children;return Object(k.jsx)(C,{children:e})},T=y.a.div(i||(i=Object(v.a)(["\n  padding-top: 25px;\n  padding-bottom: 25px;\n"]))),I=function(n){var e=n.children;return Object(k.jsx)(T,{children:e})},S=t(11),Z=t(72),z=t(29),A=Object(S.b)("app/addTodo",(function(n){var e=n.name,t=n.category,a=n.content,i=n.dates;return{payload:{id:Object(Z.a)(),date:Object(z.a)(new Date,"mmmm d, yyyy"),name:e,category:t,content:a,dates:i,status:"active"}}})),M=Object(S.b)("app/deleteTodo"),H=Object(S.b)("app/deleteAllTodo"),L=Object(S.b)("app/archiveTodo"),V=Object(S.b)("app/unpackTodo"),P=Object(S.b)("app/editTodo"),R=Object(S.b)("app/addEditItem",(function(n){return{payload:{data:n,isEdit:!0}}})),U=Object(S.b)("app/deleteEditItem"),$=Object(S.b)("app/toggleModal"),B=y.a.button(r||(r=Object(v.a)(["\n  padding: 0;\n  margin-right: 9px;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  /* width: 18px;\n  height: 18px; */\n"]))),D=function(n){var e=n.children,t=n.onClick;return Object(k.jsx)(B,{type:"button",onClick:t,children:e})},F=t(31),N=t.n(F),J=t(30),q=t.n(J),_=t(41),G=y.a.div(c||(c=Object(v.a)(["\n  display: flex;\n  margin-bottom: 20px;\n  padding-left: 18px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.167;\n  letter-spacing: 0.06em;\n\n  background-color: rgb(165, 163, 163);\n  color: white;\n  border-radius: 6px;\n\n  @media screen and (min-width: 768px) {\n    padding-left: 45px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    padding-left: 48px;\n  }\n"]))),K=y.a.p(o||(o=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  width: 100px;\n\n  @media screen and (min-width: 768px) {\n    width: 116px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    width: 178px;\n  }\n"]))),Q=y.a.p(d||(d=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  width: 50px;\n\n  @media screen and (min-width: 768px) {\n    width: 82px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    width: 147px;\n  }\n"]))),W=y.a.div(l||(l=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  margin-left: 20px;\n\n  @media screen and (min-width: 768px) {\n    margin-left: 103px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    margin-left: 74px;\n  }\n"]))),X=Object(y.a)(u.b)(p||(p=Object(v.a)(["\n  margin-right: 10px;\n"]))),Y=y.a.ul(s||(s=Object(v.a)(["\n  margin: 0;\n  padding: 0;\n  margin-bottom: 20px;\n  color: rgb(92, 90, 90);\n"]))),nn=y.a.li(h||(h=Object(v.a)(["\n  list-style: none;\n  display: flex;\n  padding-left: 10px;\n  padding-right: 25px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin-bottom: 20px;\n  background-color: rgb(241, 241, 252);\n"]))),en=y.a.button(x||(x=Object(v.a)(["\n  display: block;\n  margin-left: auto;\n\n  text-align: center;\n  width: 100px;\n  height: 24px;\n  background-color: white;\n  color: rgb(92, 90, 90);\n\n  text-transform: uppercase;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 1.117;\n\n  border-radius: 5px;\n  border: 1px solid rgb(165, 163, 163);\n\n  @media screen and (min-width: 768px) {\n    width: 120px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    width: 100px;\n  }\n\n  cursor: pointer;\n\n  &:hover {\n    background-color: rgb(165, 163, 163);\n    color: white;\n    border: 2px solid rgb(165, 163, 163);\n    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);\n  }\n\n  &:focus {\n    outline: none;\n    border: 2px solid rgb(165, 163, 163);\n    background-color: white;\n    color: rgb(92, 90, 90);\n  }\n"]))),tn=t(40),an=t.n(tn),rn=["title","titleId"];function cn(){return cn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},cn.apply(this,arguments)}function on(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function dn(n,e){var t=n.title,a=n.titleId,i=on(n,rn);return g.createElement("svg",cn({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",ref:e,"aria-labelledby":a},i),t?g.createElement("title",{id:a},t):null,b||(b=g.createElement("g",{"data-name":"Layer 24"},g.createElement("path",{d:"M61.58 12.88A2 2 0 0 0 60 12.1H14.26l-2.37-6.95A2 2 0 0 0 10 3.79H4a2 2 0 0 0 0 4h4.57l13.15 38.65a2 2 0 0 0 1.89 1.35H52a2 2 0 0 0 0-4H25l-1.46-4.31H54A2 2 0 0 0 55.94 38l6-23.38a2 2 0 0 0-.36-1.74Zm-9.13 22.6H22.22l-6.6-19.38h41.8ZM30 49.49c-7.08.22-7.08 10.49 0 10.72 7.08-.21 7.08-10.5 0-10.72Zm0 6.72a1.36 1.36 0 0 1 0-2.72 1.36 1.36 0 0 1 0 2.72ZM47.41 49.49c-7.08.22-7.08 10.49 0 10.72 7.08-.21 7.08-10.5 0-10.72Zm0 6.72a1.36 1.36 0 0 1 0-2.72 1.36 1.36 0 0 1 0 2.72Z"}))))}var ln,pn,sn,hn,xn,bn,gn,jn,mn=g.forwardRef(dn),un=(t.p,["title","titleId"]);function fn(){return fn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},fn.apply(this,arguments)}function On(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function wn(n,e){var t=n.title,a=n.titleId,i=On(n,un);return g.createElement("svg",fn({width:64,height:64,viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":a},i),t?g.createElement("title",{id:a},t):null,ln||(ln=g.createElement("path",{d:"M32 11.26C32.3978 11.26 32.7794 11.102 33.0607 10.8207C33.342 10.5394 33.5 10.1578 33.5 9.76V5C33.5 4.60218 33.342 4.22064 33.0607 3.93934C32.7794 3.65804 32.3978 3.5 32 3.5C31.6022 3.5 31.2206 3.65804 30.9393 3.93934C30.658 4.22064 30.5 4.60218 30.5 5V9.76C30.5 10.1578 30.658 10.5394 30.9393 10.8207C31.2206 11.102 31.6022 11.26 32 11.26V11.26Z"})),pn||(pn=g.createElement("path",{d:"M46.58 17.2999C46.9775 17.2985 47.3584 17.1404 47.64 16.8599L51 13.4899C51.1403 13.3513 51.2517 13.1863 51.3277 13.0043C51.4037 12.8223 51.4429 12.6271 51.4429 12.4299C51.4429 12.2327 51.4037 12.0375 51.3277 11.8555C51.2517 11.6735 51.1403 11.5085 51 11.3699C50.7175 11.0914 50.3367 10.9353 49.94 10.9353C49.5433 10.9353 49.1625 11.0914 48.88 11.3699L45.52 14.7399C45.3797 14.8785 45.2683 15.0435 45.1923 15.2255C45.1163 15.4075 45.0771 15.6027 45.0771 15.7999C45.0771 15.9971 45.1163 16.1923 45.1923 16.3743C45.2683 16.5563 45.3797 16.7213 45.52 16.8599C45.8017 17.1404 46.1825 17.2985 46.58 17.2999V17.2999Z"})),sn||(sn=g.createElement("path",{d:"M57.3801 28.8799H52.6201C52.2223 28.8799 51.8408 29.0379 51.5595 29.3192C51.2782 29.6005 51.1201 29.9821 51.1201 30.3799C51.1201 30.7777 51.2782 31.1592 51.5595 31.4405C51.8408 31.7218 52.2223 31.8799 52.6201 31.8799H57.3801C57.7779 31.8799 58.1595 31.7218 58.4408 31.4405C58.7221 31.1592 58.8801 30.7777 58.8801 30.3799C58.8801 29.9821 58.7221 29.6005 58.4408 29.3192C58.1595 29.0379 57.7779 28.8799 57.3801 28.8799V28.8799Z"})),hn||(hn=g.createElement("path",{d:"M47.6402 43.8999C47.5086 43.7363 47.3441 43.6021 47.1573 43.5061C46.9705 43.41 46.7656 43.3543 46.5559 43.3425C46.3462 43.3306 46.1364 43.363 45.94 43.4374C45.7436 43.5118 45.565 43.6266 45.4158 43.7744C45.2666 43.9222 45.1501 44.0997 45.0738 44.2954C44.9976 44.4911 44.9632 44.7006 44.9731 44.9104C44.9829 45.1202 45.0367 45.3256 45.131 45.5133C45.2252 45.7009 45.3578 45.8667 45.5202 45.9999L48.8802 49.3599C49.1631 49.6386 49.5432 49.7964 49.9402 49.7999C50.2327 49.7959 50.5175 49.7064 50.7598 49.5426C51.002 49.3787 51.1911 49.1477 51.3037 48.8778C51.4164 48.6079 51.4477 48.3109 51.3937 48.0235C51.3398 47.7361 51.203 47.4706 51.0002 47.2599L47.6402 43.8999Z"})),xn||(xn=g.createElement("path",{d:"M16.3602 43.9L13.0002 47.26C12.7907 47.4698 12.648 47.7369 12.5903 48.0277C12.5325 48.3185 12.5622 48.6199 12.6756 48.8939C12.7891 49.1678 12.9811 49.4019 13.2275 49.5668C13.474 49.7316 13.7637 49.8197 14.0602 49.82C14.4572 49.8164 14.8373 49.6587 15.1202 49.38L18.4802 46C18.6276 45.8627 18.7458 45.6971 18.8278 45.5131C18.9098 45.3291 18.9538 45.1305 18.9574 44.9291C18.9609 44.7276 18.9239 44.5276 18.8485 44.3408C18.773 44.154 18.6607 43.9844 18.5183 43.8419C18.3758 43.6995 18.2062 43.5872 18.0194 43.5118C17.8326 43.4363 17.6326 43.3993 17.4312 43.4028C17.2298 43.4064 17.0311 43.4505 16.8471 43.5324C16.6631 43.6144 16.4975 43.7326 16.3602 43.88V43.9Z"})),bn||(bn=g.createElement("path",{d:"M11.3801 28.8799H6.62012C6.22229 28.8799 5.84076 29.0379 5.55946 29.3192C5.27815 29.6005 5.12012 29.9821 5.12012 30.3799C5.12012 30.7777 5.27815 31.1592 5.55946 31.4405C5.84076 31.7218 6.22229 31.8799 6.62012 31.8799H11.3801C11.7779 31.8799 12.1595 31.7218 12.4408 31.4405C12.7221 31.1592 12.8801 30.7777 12.8801 30.3799C12.8801 29.9821 12.7221 29.6005 12.4408 29.3192C12.1595 29.0379 11.7779 28.8799 11.3801 28.8799V28.8799Z"})),gn||(gn=g.createElement("path",{d:"M16.3602 16.8599C16.6415 17.1408 17.0227 17.2986 17.4202 17.2986C17.8177 17.2986 18.199 17.1408 18.4802 16.8599C18.6205 16.7213 18.7319 16.5563 18.8079 16.3743C18.8839 16.1923 18.9231 15.9971 18.9231 15.7999C18.9231 15.6027 18.8839 15.4075 18.8079 15.2255C18.7319 15.0435 18.6205 14.8785 18.4802 14.7399L15.1202 11.3699C14.8377 11.0914 14.4569 10.9353 14.0602 10.9353C13.6635 10.9353 13.2828 11.0914 13.0002 11.3699C12.8599 11.5085 12.7486 11.6735 12.6725 11.8555C12.5965 12.0375 12.5574 12.2327 12.5574 12.4299C12.5574 12.6271 12.5965 12.8223 12.6725 13.0043C12.7486 13.1863 12.8599 13.3513 13.0002 13.4899L16.3602 16.8599Z"})),jn||(jn=g.createElement("path",{d:"M48.4601 28.9999C48.2357 26.2988 47.3501 23.6943 45.8814 21.4162C44.4128 19.1382 42.4061 17.2565 40.0384 15.937C37.6708 14.6176 35.0149 13.9011 32.3049 13.8505C29.5949 13.8 26.9141 14.417 24.4988 15.6472C22.0836 16.8774 20.0082 18.683 18.4556 20.9047C16.903 23.1265 15.9209 25.6961 15.596 28.387C15.271 31.0779 15.6131 33.8075 16.5922 36.3349C17.5713 38.8624 19.1572 41.1101 21.2101 42.8799C22.3882 43.8816 23.3366 45.1254 23.9906 46.5266C24.6446 47.9279 24.9889 49.4536 25.0001 50.9999V51.6999C25.0001 52.0978 25.1581 52.4793 25.4394 52.7606C25.7207 53.0419 26.1023 53.1999 26.5001 53.1999H27.2601V55.7499C27.2601 57.0071 27.7595 58.2127 28.6484 59.1016C29.5373 59.9905 30.743 60.4899 32.0001 60.4899C33.2572 60.4899 34.4629 59.9905 35.3518 59.1016C36.2407 58.2127 36.7401 57.0071 36.7401 55.7499V53.2099H37.5001C37.8979 53.2099 38.2795 53.0519 38.5608 52.7706C38.8421 52.4893 39.0001 52.1078 39.0001 51.7099V50.9999C39.0252 49.4341 39.3843 47.8917 40.0534 46.4759C40.7225 45.06 41.6862 43.8034 42.8801 42.7899C44.8307 41.0934 46.3528 38.96 47.3225 36.5636C48.2922 34.1672 48.6819 31.5756 48.4601 28.9999V28.9999ZM33.7401 55.7599C33.7401 56.2214 33.5568 56.664 33.2305 56.9903C32.9041 57.3166 32.4616 57.4999 32.0001 57.4999C31.5386 57.4999 31.096 57.3166 30.7697 56.9903C30.4434 56.664 30.2601 56.2214 30.2601 55.7599V53.2099H33.7401V55.7599Z"})))}var vn,yn=g.forwardRef(wn),Cn=(t.p,["title","titleId"]);function kn(){return kn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},kn.apply(this,arguments)}function En(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function Tn(n,e){var t=n.title,a=n.titleId,i=En(n,Cn);return g.createElement("svg",kn({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",ref:e,"aria-labelledby":a},i),t?g.createElement("title",{id:a},t):null,vn||(vn=g.createElement("g",{"data-name":"Layer 27"},g.createElement("path",{d:"M57.08 36.11a19 19 0 0 1-5.36-11.36C51.46 12.48 40.14 2.15 27.87 3 8.26 3.79-1 28.81 13.33 42.12A42.11 42.11 0 0 1 17.4 60a1 1 0 0 0 .29.71 1 1 0 0 0 .71.29h23.33a1 1 0 0 0 1-.83l.83-4.79c.4-1.79 1.49-2.13 3.38-2.59 2.21-.54 5.24-1.28 4.81-6.64a.23.23 0 0 1 .15-.22A2.38 2.38 0 0 0 53 42.6a2.37 2.37 0 0 0 1.18-3.16h1.44a2 2 0 0 0 1.46-3.33Zm-3.14 1.33a1.85 1.85 0 0 0-1.55 2.82.36.36 0 0 1 0 .43L48 41a1 1 0 0 0-.07 2l3.35.51a.35.35 0 0 1-.15.55 2.27 2.27 0 0 0-1.37 2.14c.74 7.21-6.68 2.27-8.16 8.77l-.7 4H19.39a42.31 42.31 0 0 0-4.56-18.21 20.31 20.31 0 0 1-5.19-22.1C14.37 4.83 32.39.52 43 10.4a20.54 20.54 0 0 1 6.74 14.4 20.57 20.57 0 0 0 5.94 12.64Z"}),g.createElement("path",{d:"m22.69 11.89 1.22.43a4.07 4.07 0 0 0 .09 1.21c-.76.4-2.14.73-1.64 1.9a1 1 0 0 0 1.34.47l1.17-.56a4.65 4.65 0 0 0 .9.81c-.26.81-1 2 .18 2.49a1 1 0 0 0 1.26-.64l.43-1.23a3.27 3.27 0 0 0 1.21-.06l.56 1.16a1 1 0 1 0 1.8-.87l-.56-1.16a4.16 4.16 0 0 0 .81-.91 10.28 10.28 0 0 0 1.55.49 1 1 0 0 0 .33-1.95l-1.22-.43a3.8 3.8 0 0 0-.07-1.21c.76-.39 2.14-.73 1.64-1.89a1 1 0 0 0-1.34-.47l-1.17.56a4.35 4.35 0 0 0-.9-.81c.26-.81 1-2-.19-2.49a1 1 0 0 0-1.27.61l-.43 1.22a4.43 4.43 0 0 0-1.21.07c-.39-.76-.73-2.13-1.89-1.63a1 1 0 0 0-.47 1.33l.56 1.17a3.92 3.92 0 0 0-.81.91L23.35 10a1 1 0 0 0-.66 1.89ZM28 10.56a2.15 2.15 0 0 1 2 2.85 2.14 2.14 0 1 1-2-2.85ZM37.17 22.64h-1a3.19 3.19 0 0 0-.29-.72l.67-.66a1 1 0 1 0-1.39-1.43l-.68.66a3.82 3.82 0 0 0-.72-.31v-.94a1 1 0 0 0-2 0v.94a3.74 3.74 0 0 0-.72.29l-.66-.67A1 1 0 0 0 29 21.17l.66.68a3.36 3.36 0 0 0-.3.71s-.94 0-1 0a1 1 0 0 0 0 2h.95a3.47 3.47 0 0 0 .29.73l-.67.65a1 1 0 1 0 1.39 1.43l.68-.66a3.82 3.82 0 0 0 .72.31V28a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-1a3.74 3.74 0 0 0 .72-.29l.66.67A1 1 0 1 0 36.56 26l-.66-.67a3.23 3.23 0 0 0 .3-.72h1a1 1 0 0 0-.03-1.97Zm-3.27 2.09a1.59 1.59 0 0 1-2.23-2.27 1.59 1.59 0 0 1 2.23 2.27ZM26.54 25.85l-2.14-.76a5.58 5.58 0 0 0-.14-2.37l2-1a1 1 0 0 0 .47-1.33 1 1 0 0 0-1.34-.47l-2.05 1a5.5 5.5 0 0 0-1.77-1.59l.75-2.14a1 1 0 1 0-1.89-.67l-.75 2.15a5.47 5.47 0 0 0-2.38.14l-1-2a1 1 0 1 0-1.8.86l1 2.06a5.47 5.47 0 0 0-1.5 1.72l-2.15-.75a1 1 0 1 0-.66 1.88l2.14.76a5.76 5.76 0 0 0 .14 2.38l-2 1a1 1 0 1 0 .87 1.8l2.05-1a5.43 5.43 0 0 0 1.78 1.58l-.76 2.15a1 1 0 0 0 .61 1.27 1 1 0 0 0 1.28-.61l.7-2.15a5.32 5.32 0 0 0 2.38-.13l1 2.05a1 1 0 0 0 1.34.46 1 1 0 0 0 .47-1.33l-1-2A5.61 5.61 0 0 0 23.73 27a24.63 24.63 0 0 0 2.48.81 1 1 0 0 0 .33-1.96Zm-8.89 1.78a3.62 3.62 0 0 1 2.4-6.83c4.47 1.69 2.14 8.31-2.4 6.83Z"}))))}var In,Sn,Zn,zn,An,Mn,Hn,Ln,Vn,Pn=g.forwardRef(Tn),Rn=(t.p,[{category:"Task",icon:mn},{category:"Idea",icon:yn},{category:"Random Thought",icon:Pn}]),Un=function(n){var e=n.category,t=n.width,a=n.height,i=n.fill,r=Rn.find((function(n){return n.category===e})).icon;return Object(k.jsx)(r,{width:t,height:a,fill:i})},$n=(y.a.div(In||(In=Object(v.a)(["\n  display: flex;\n"]))),y.a.div(Sn||(Sn=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-right: 10px;\n\n  background-color: rgb(92, 90, 90);\n  border-radius: 50%;\n\n  @media screen and (min-width: 768px) {\n    width: 25px;\n    height: 25px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    width: 30px;\n    height: 30px;\n  }\n"])))),Bn=y.a.p(Zn||(Zn=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  width: 100px;\n\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1.167;\n  letter-spacing: 0.06em;\n\n  color: rgb(54, 54, 54);\n\n  @media screen and (min-width: 768px) {\n    width: 120px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    width: 180px;\n  }\n"]))),Dn=y.a.p(zn||(zn=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  width: 100px;\n\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1.167;\n  letter-spacing: 0.06em;\n\n  @media screen and (min-width: 768px) {\n    width: 80px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    width: 145px;\n  }\n"]))),Fn=y.a.p(An||(An=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  width: 100px;\n\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1.167;\n  letter-spacing: 0.06em;\n\n  @media screen and (min-width: 768px) {\n    width: 80px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    width: 145px;\n  }\n"]))),Nn=y.a.p(Mn||(Mn=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 10px;\n  white-space: nowrap;\n  width: 80px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1.167;\n  letter-spacing: 0.06em;\n\n  @media screen and (min-width: 768px) {\n    width: 80px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    width: 135px;\n  }\n\n  &:hover {\n    white-space: normal;\n    margin-right: 0;\n    overflow: visible;\n    width: 145px;\n    @media screen and (min-width: 768px) {\n      width: 100px;\n    }\n\n    @media screen and (min-width: 1024px) {\n      width: 145px;\n    }\n  }\n"]))),Jn=y.a.p(Hn||(Hn=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  width: 100px;\n\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1.167;\n  letter-spacing: 0.06em;\n\n  @media screen and (min-width: 768px) {\n    width: 80px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    width: 145px;\n  }\n"]))),qn=y.a.div(Ln||(Ln=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  margin-left: 55px;\n  @media screen and (min-width: 768px) {\n    margin-left: 75px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    margin-left: 55px;\n  }\n"]))),_n=y.a.button(Vn||(Vn=Object(v.a)(["\n  display: inline-block;\n\n  text-align: center;\n  width: 80px;\n  height: 24px;\n  background-color: white;\n  color: rgb(92, 90, 90);\n\n  text-transform: uppercase;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 1.117;\n\n  border-radius: 5px;\n  border: 1px solid rgb(165, 163, 163);\n\n  cursor: pointer;\n\n  &:hover {\n    background-color: rgb(165, 163, 163);\n    color: white;\n    border: 2px solid rgb(165, 163, 163);\n    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);\n  }\n\n  &:focus {\n    outline: none;\n    border: 2px solid rgb(165, 163, 163);\n    background-color: white;\n    color: rgb(92, 90, 90);\n  }\n"])));function Gn(n){var e=n.todo,t=Object(w.f)(),a=Object(f.b)();return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)($n,{children:Object(k.jsx)(Un,{width:"20",height:"20",fill:"whitesmoke",category:e.category})}),Object(k.jsx)(Bn,{children:e.name}),Object(k.jsx)(Dn,{children:e.date}),Object(k.jsx)(Fn,{children:e.category}),Object(k.jsx)(Nn,{children:e.content}),Object(k.jsx)(Jn,{children:e.dates}),"/home"===t.pathname?Object(k.jsxs)(qn,{children:[Object(k.jsx)(D,{children:Object(k.jsx)(an.a,{sx:{color:_.a[700],fontSize:25,"&:hover":{color:_.a[500]}},onClick:function(){a($()),a(R(e))}})}),Object(k.jsx)(D,{children:Object(k.jsx)(q.a,{sx:{color:_.a[700],fontSize:25,"&:hover":{color:_.a[500]}},onClick:function(){return a(L(e.id))}})}),Object(k.jsx)(D,{children:Object(k.jsx)(N.a,{sx:{color:_.a[700],fontSize:25,"&:hover":{color:_.a[500]}},onClick:function(){return a(M(e.id))}})})]}):Object(k.jsx)(qn,{children:Object(k.jsx)(_n,{onClick:function(){return a(V(e.id))},children:"Unpack"})})]})}var Kn=t(21),Qn=["Task","Idea","Random Thought"];var Wn=function(n){return n.todos.items.filter((function(n){return"active"===n.status}))},Xn=function(n){return n.todos.items.filter((function(n){return"archived"===n.status}))},Yn=function(n){return n.todos.editItem.data},ne=function(n){return n.todos.editItem.isEdit},ee=function(n){return function(n){var e,t=[],a=n.map((function(n){return{category:n.category,status:n.status}})),i=Object(Kn.a)(Qn);try{for(i.s();!(e=i.n()).done;){var r,c=e.value,o=0,d=0,l=Object(Kn.a)(a);try{for(l.s();!(r=l.n()).done;){var p=r.value;p.category===c&&"active"===p.status&&o++,p.category===c&&"archived"===p.status&&d++}}catch(g){l.e(g)}finally{l.f()}0===o&&(o=""),0===d&&(d="");var s={category:c,active:o,archived:d};t.push(s);var h,x=Object(Kn.a)(t);try{for(x.s();!(h=x.n()).done;){h.value;var b=t.findIndex((function(n){return""===n.active&&""===n.archived}));-1!==b&&t.splice(b,1)}}catch(g){x.e(g)}finally{x.f()}}}catch(g){i.e(g)}finally{i.f()}return t}(n.todos.items)};function te(){var n=Object(f.c)(Wn),e=Object(f.c)(Xn),t=[],a=Object(f.b)(),i=Object(w.f)();return"/home"===i.pathname&&(t=n),"/archive"===i.pathname&&(t=e),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(G,{children:[Object(k.jsx)(K,{children:"Name"}),Object(k.jsx)(Q,{children:"Created"}),Object(k.jsx)(Q,{children:"Category"}),Object(k.jsx)(Q,{children:"Content"}),Object(k.jsx)(Q,{children:"Dates"}),Object(k.jsxs)(W,{children:[Object(k.jsx)(X,{to:"/archive",children:Object(k.jsx)(q.a,{sx:{color:_.a[100],fontSize:32,"&:hover":{color:_.a[700]}}})}),Object(k.jsx)(D,{children:Object(k.jsx)(N.a,{sx:{color:_.a[100],fontSize:32,"&:hover":{color:_.a[700]}},onClick:function(){return a(H())}})})]})]}),Object(k.jsx)(Y,{children:t.map((function(n){return Object(k.jsx)(nn,{children:Object(k.jsx)(Gn,{todo:n})},n.id)}))}),"/home"===i.pathname?Object(k.jsx)(en,{onClick:function(){return a($())},children:"Create note"}):Object(k.jsx)(X,{to:"/home",children:Object(k.jsx)(en,{children:"Home"})})]})}var ae,ie,re,ce=t(42),oe=t.n(ce),de=y.a.div(ae||(ae=Object(v.a)(["\n  @media screen and (min-width: 320px) {\n    position: fixed;\n    top: 0;\n    display: flex;\n\n    justify-content: center;\n\n    width: 100vw;\n    height: 100vh;\n\n    background-color: rgba(0, 0, 0, 0.7);\n    overflow-y: scroll;\n    transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n  @media screen and (min-width: 1024px) {\n    align-items: center;\n  }\n"]))),le=y.a.div(ie||(ie=Object(v.a)(["\n  position: absolute;\n\n  width: 280px;\n  min-height: 200px;\n\n  padding: 25px 20px;\n  top: 150px;\n  left: 50%;\n  transform: translate(-50%, 0);\n\n  justify-content: center;\n\n  background-color: #ffffff;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 2px 1px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n\n  @media screen and (min-width: 768px) {\n    padding: 30px 30px;\n    width: 750px;\n    min-height: 120px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    width: 850px;\n    min-height: 120px;\n  }\n"]))),pe=y.a.div(re||(re=Object(v.a)(["\n  position: absolute;\n  top: 7px;\n  right: 3px;\n"]))),se=document.querySelector("#modal-root");var he,xe,be,ge,je,me,ue,fe,Oe,we=function(n){var e=n.children,t=Object(f.b)();Object(g.useEffect)((function(){return window.addEventListener("keydown",i),function(){window.removeEventListener("keydown",i)}}),[]);var a=function(){t($()),t(U())},i=function(n){"Escape"===n.code&&a()};return Object(m.createPortal)(Object(k.jsx)(de,{onClick:function(n){n.currentTarget===n.target&&a()},children:Object(k.jsxs)(le,{children:[Object(k.jsx)(pe,{children:Object(k.jsx)(D,{children:Object(k.jsx)(oe.a,{sx:{color:_.a[900],fontSize:25,"&:hover":{color:_.a[500]}},onClick:function(){return a()}})})}),e]})}),se)},ve=t(10),ye=y.a.form(he||(he=Object(v.a)(["\n  position: relative;\n  display: flex;\n  padding-top: 20px;\n  color: rgb(165, 163, 163);\n\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.167;\n  letter-spacing: 0.06em;\n"]))),Ce=y.a.input(xe||(xe=Object(v.a)(["\n  margin-right: 10px;\n  border-radius: 5px;\n  width: 200px;\n  height: 25px;\n  border: 1px solid rgb(165, 163, 163);\n\n  &:focus {\n    outline: none;\n    border: 2px solid rgb(92, 90, 90);\n  }\n"]))),ke=y.a.select(be||(be=Object(v.a)(["\n  margin-right: 10px;\n  height: 25px;\n  border-radius: 5px;\n  border: 1px solid rgb(165, 163, 163);\n\n  &:focus {\n    outline: none;\n    border: 2px solid rgb(92, 90, 90);\n  }\n"]))),Ee=y.a.textarea(ge||(ge=Object(v.a)(["\n  margin-right: 10px;\n  border-radius: 5px;\n  width: 300px;\n  border: 1px solid rgb(165, 163, 163);\n\n  &:focus {\n    outline: none;\n    border: 2px solid rgb(92, 90, 90);\n  }\n"]))),Te=y.a.button(je||(je=Object(v.a)(["\n  display: block;\n  margin-left: auto;\n\n  text-align: center;\n  width: 100px;\n  height: 24px;\n  background-color: white;\n  color: rgb(92, 90, 90);\n\n  text-transform: uppercase;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 1.117;\n\n  border-radius: 5px;\n  border: 1px solid rgb(165, 163, 163);\n\n  @media screen and (min-width: 768px) {\n    width: 120px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    width: 105px;\n  }\n\n  cursor: pointer;\n\n  &:hover {\n    background-color: rgb(165, 163, 163);\n    color: white;\n    border: 2px solid rgb(165, 163, 163);\n    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);\n  }\n\n  &:focus {\n    outline: none;\n    border: 2px solid rgb(165, 163, 163);\n    background-color: white;\n    color: rgb(92, 90, 90);\n  }\n"])));function Ie(){var n=Object(f.b)(),e=Object(f.c)(ne),t=Object(f.c)(Yn),a=Object(g.useState)(""),i=Object(ve.a)(a,2),r=i[0],c=i[1],o=Object(g.useState)("Task"),d=Object(ve.a)(o,2),l=d[0],p=d[1],s=Object(g.useState)(""),h=Object(ve.a)(s,2),x=h[0],b=h[1],j=Object(g.useState)("Create note"),m=Object(ve.a)(j,2),u=m[0],O=m[1];Object(g.useEffect)((function(){e&&(c(t.name),p(t.category),b(t.content),O("Save changes"),console.log("name",t.name))}),[e]);var w=function(n){var e=n.target,t=e.name,a=e.value;switch(t){case"name":c(a.trim());break;case"category":p(a);break;case"content":b(a.trim());break;default:return}},v=function(){c(""),p("Task"),b("")};return Object(k.jsxs)(ye,{onSubmit:function(a){a.preventDefault();var i=x.match(/\d{1,2}\D\d{1,2}\D(\d{4}|\d{2})/g),c=[],o="";if(null!==i&&(i.map((function(n){return c.push(Object(z.a)(n,"m/d/yyyy"))})),o=c.join(", ")),e){var d=t.id;n(P({id:d,name:r,category:l,content:x,dates:o})),n(U()),n($())}else n(A({name:r,category:l,content:x,dates:o}));v()},children:[Object(k.jsx)(Ce,{type:"text",name:"name",value:r,onChange:w}),Object(k.jsxs)(ke,{name:"category",value:l,onChange:w,required:!0,children:[Object(k.jsx)("option",{value:"Task",children:"Task"}),Object(k.jsx)("option",{value:"Random Thought",children:"Random Thought"}),Object(k.jsx)("option",{value:"Idea",children:"Idea"})]}),Object(k.jsx)(Ee,{rows:"3",type:"text",name:"content",value:x,onChange:w,placeholder:"Content..."}),Object(k.jsx)(Te,{type:"submit",children:u})]})}var Se,Ze,ze,Ae,Me,He,Le=y.a.div(me||(me=Object(v.a)(["\n  display: flex;\n  margin-left: 200px;\n  color: rgb(92, 90, 90);\n"]))),Ve=y.a.div(ue||(ue=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-right: 10px;\n\n  background-color: rgb(92, 90, 90);\n  border-radius: 50%;\n\n  @media screen and (min-width: 768px) {\n    width: 25px;\n    height: 25px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    width: 30px;\n    height: 30px;\n  }\n"]))),Pe=y.a.p(fe||(fe=Object(v.a)(["\n  /* margin: 0;\n  padding: 0; */\n  display: flex;\n  align-items: center;\n  width: 100px;\n  /* text-align: center; */\n  /* vertical-align: middle; */\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1.167;\n  letter-spacing: 0.06em;\n\n  color: rgb(54, 54, 54);\n\n  @media screen and (min-width: 768px) {\n    width: 120px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    width: 145px;\n  }\n"]))),Re=y.a.p(Oe||(Oe=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  width: 145px;\n\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.167;\n  letter-spacing: 0.06em;\n"])));function Ue(n){var e=n.item;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(Ve,{children:Object(k.jsx)(Un,{width:"20",height:"20",fill:"whitesmoke",category:e.category})}),Object(k.jsx)(Pe,{children:e.category}),Object(k.jsxs)(Le,{children:[Object(k.jsx)(Re,{children:e.active}),Object(k.jsx)(Re,{children:e.archived})]})]})}var $e=y.a.div(Se||(Se=Object(v.a)(["\n  display: flex;\n  margin-bottom: 20px;\n  padding-left: 18px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.167;\n  letter-spacing: 0.06em;\n\n  background-color: rgb(165, 163, 163);\n  color: white;\n  border-radius: 6px;\n\n  @media screen and (min-width: 768px) {\n    padding-left: 45px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    padding-left: 48px;\n  }\n"]))),Be=y.a.div(Ze||(Ze=Object(v.a)(["\n  display: flex;\n  margin-left: 100px;\n\n  @media screen and (min-width: 768px) {\n    margin-left: 185px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    margin-left: 200px;\n  }\n"]))),De=y.a.p(ze||(ze=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  width: 145px;\n"]))),Fe=y.a.p(Ae||(Ae=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  width: 100px;\n\n  @media screen and (min-width: 768px) {\n    width: 80px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    width: 145px;\n  }\n"]))),Ne=y.a.ul(Me||(Me=Object(v.a)(["\n  margin: 0;\n  padding: 0;\n  margin-bottom: 20px;\n  color: rgb(92, 90, 90);\n"]))),Je=y.a.li(He||(He=Object(v.a)(["\n  list-style: none;\n  display: flex;\n  padding-left: 10px;\n  padding-right: 25px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin-bottom: 20px;\n  background-color: rgb(241, 241, 252);\n"])));function qe(){var n=Object(f.c)(ee);return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)($e,{children:[Object(k.jsx)(De,{children:"Note category"}),Object(k.jsxs)(Be,{children:[Object(k.jsx)(Fe,{children:"Active"}),Object(k.jsx)(Fe,{children:"Archived"})]})]}),Object(k.jsx)(Ne,{children:n.map((function(n){return Object(k.jsx)(Je,{children:Object(k.jsx)(Ue,{item:n})},n.category)}))})]})}var _e=function(n){return n.modal.isOpen};function Ge(){var n=Object(f.c)(_e);return Object(k.jsxs)("div",{children:[Object(k.jsxs)(I,{children:[Object(k.jsx)(te,{}),n&&Object(k.jsx)(we,{children:Object(k.jsx)(Ie,{})})]}),Object(k.jsx)(I,{children:Object(k.jsx)(qe,{})})]})}function Ke(){return Object(k.jsx)(I,{children:Object(k.jsx)(te,{})})}function Qe(){return Object(k.jsx)(E,{children:Object(k.jsxs)(w.d,{children:[Object(k.jsx)(w.b,{path:"/",element:Object(k.jsx)(w.a,{replace:!0,to:"/home"})}),Object(k.jsx)(w.b,{path:"/home",element:Object(k.jsx)(Ge,{})}),Object(k.jsx)(w.b,{path:"/archive",element:Object(k.jsx)(Ke,{})})]})})}var We,Xe,Ye=t(14),nt=t(12),et=t(43),tt=t.n(et),at=t(17),it=t(44),rt=t.n(it),ct=t(6),ot=t(15),dt=t(45),lt=Object(S.c)(dt,(We={},Object(ct.a)(We,A,(function(n,e){return[e.payload].concat(Object(Ye.a)(n))})),Object(ct.a)(We,M,(function(n,e){var t=e.payload;return n.filter((function(n){return n.id!==t}))})),Object(ct.a)(We,H,(function(n){return[]})),Object(ct.a)(We,L,(function(n,e){var t=e.payload;return n.map((function(n){return n.id===t?Object(ot.a)(Object(ot.a)({},n),{},{status:"archived"}):n}))})),Object(ct.a)(We,V,(function(n,e){var t=e.payload;return n.map((function(n){return n.id===t?Object(ot.a)(Object(ot.a)({},n),{},{status:"active"}):n}))})),Object(ct.a)(We,P,(function(n,e){var t=e.payload;return n.map((function(n){return n.id===t.id?Object(ot.a)(Object(ot.a)({},n),{},{name:t.name,category:t.category,content:t.content,dates:t.dates}):n}))})),We)),pt={isEdited:!1},st=Object(S.c)(pt,(Xe={},Object(ct.a)(Xe,R,(function(n,e){return e.payload})),Object(ct.a)(Xe,U,(function(n,e){e._;return pt})),Xe)),ht=Object(nt.b)({items:lt,editItem:st}),xt=Object(S.c)(!1,Object(ct.a)({},$,(function(n){return!n}))),bt=Object(nt.b)({isOpen:xt}),gt=[].concat(Object(Ye.a)(Object(S.d)({serializableCheck:{ignoredActions:[at.a,at.f,at.b,at.c,at.d,at.e]}})),[tt.a]),jt={key:"todos",storage:rt.a},mt=Object(nt.b)({todos:ht,modal:bt}),ut=Object(at.g)(jt,mt),ft=Object(S.a)({reducer:ut,middleware:gt,devTools:!1}),Ot={store:ft,persistor:Object(at.h)(ft)},wt=document.getElementById("root");Object(m.render)(Object(k.jsx)(j.a.StrictMode,{children:Object(k.jsx)(f.a,{store:Ot.store,children:Object(k.jsx)(O.a,{loading:null,persistor:Ot.persistor,children:Object(k.jsx)(u.a,{children:Object(k.jsx)(Qe,{})})})})}),wt)}},[[62,1,2]]]);
//# sourceMappingURL=main.54b66573.chunk.js.map