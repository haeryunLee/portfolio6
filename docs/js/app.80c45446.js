(function(t){function s(s){for(var i,l,r=s[0],c=s[1],o=s[2],f=0,d=[];f<r.length;f++)l=r[f],Object.prototype.hasOwnProperty.call(e,l)&&e[l]&&d.push(e[l][0]),e[l]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);_&&_(s);while(d.length)d.shift()();return n.push.apply(n,o||[]),a()}function a(){for(var t,s=0;s<n.length;s++){for(var a=n[s],i=!0,r=1;r<a.length;r++){var c=a[r];0!==e[c]&&(i=!1)}i&&(n.splice(s--,1),t=l(l.s=a[0]))}return t}var i={},e={app:0},n=[];function l(s){if(i[s])return i[s].exports;var a=i[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=i,l.d=function(t,s,a){l.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,s){if(1&s&&(t=l(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var i in t)l.d(a,i,function(s){return t[s]}.bind(null,i));return a},l.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(s,"a",s),s},l.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},l.p="/portfolio6/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=s,r=r.slice();for(var o=0;o<r.length;o++)s(r[o]);var _=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"340e":function(t,s,a){},3602:function(t,s,a){},"38f7":function(t,s,a){"use strict";var i=a("44bc"),e=a.n(i);e.a},"414e":function(t,s,a){t.exports=a.p+"img/empty.f6fdefe1.jpg"},"44bc":function(t,s,a){},"46c8":function(t,s,a){t.exports=a.p+"img/path.6ef62aad.png"},"47a6":function(t,s,a){"use strict";var i=a("8c41"),e=a.n(i);e.a},"4e74":function(t,s,a){},"56d7":function(t,s,a){"use strict";a.r(s);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("header",{staticClass:"header"},[t._m(0),a("div",{staticClass:"header-bottom"},[a("div",{staticClass:"header_column"},[a("span",{staticClass:"header_txt"},[t._v(t._s(t.menu))])]),a("div",{staticClass:"header_column"},[a("span",{staticClass:"header_txt"},[t._v(t._s(t.title)),a("span",{staticClass:"header_y"},[t._v(t._s(t.num))])])]),a("div",{staticClass:"header_column"},[a("i",{class:t.icon})])])]),a("router-view"),a("nav",{staticClass:"tab_bar"},[a("router-link",{staticClass:"tab",attrs:{to:"/friends"}},[a("i",{staticClass:"fas fa-user"}),a("span",{staticClass:"tab_title"},[t._v("Friends")])]),a("router-link",{staticClass:"tab",attrs:{to:"/chats"}},[a("i",{staticClass:"fas fa-comment"}),a("span",{staticClass:"tab_title"},[t._v("Chats")])]),a("router-link",{staticClass:"tab",attrs:{to:"/find"}},[a("i",{staticClass:"fas fa-search"}),a("span",{staticClass:"tab_title"},[t._v("Find")])]),a("router-link",{staticClass:"tab",attrs:{to:"/more"}},[a("i",{staticClass:"fas fa-ellipsis-h"}),a("span",{staticClass:"tab_title"},[t._v("More")])])],1)],1)},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"header-top"},[a("div",{staticClass:"header_column"},[a("i",{staticClass:"fas fa-fighter-jet"}),a("i",{staticClass:"fas fa-wifi"})]),a("div",{staticClass:"header_column"},[a("span",{staticClass:"header_time"},[t._v("18:30")])]),a("div",{staticClass:"header_column"},[a("i",{staticClass:"far fa-moon"}),a("i",{staticClass:"fab fa-bluetooth-b"}),a("span",{staticClass:"header_battery"},[t._v("80% "),a("i",{staticClass:"fas fa-battery-three-quarters"})])])])}],l={name:"App",data:function(){return{menu:"",title:"",num:"",icon:""}},destroy:function(){this.$off("changeData")},created:function(){var t=this;this.$on("changeData",(function(s,a,i,e){t.menu=s,t.title=a,t.num=i,t.icon=e}))},components:{},methods:{}},r=l,c=(a("94de"),a("2877")),o=Object(c["a"])(r,e,n,!1,null,null,null),_=o.exports,f=a("8c4f"),d=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("main",{staticClass:"chats"},[t._m(0),a("ul",{staticClass:"chats_list"},t._l(t.chats,(function(t,s){return a("chats-li",{key:s,attrs:{li:t}})})),1),t._m(1)])},p=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"search_bar"},[a("i",{staticClass:"fas fa-search"}),a("input",{attrs:{type:"search",placeholder:"Find friends, chats, Plus Friends"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"chats_btn"},[a("i",{staticClass:"fas fa-comment"})])}],u=[{userImage:"http://tbgo38.dothome.co.kr/rwd/user1.jpg",username:"harry",message:"Hello! This is a test message!",time:"18:30"},{userImage:"http://tbgo38.dothome.co.kr/rwd/user1.jpg",username:"harry",message:"Hello! This is a test message!",time:"18:30"}],m=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",{staticClass:"chats_chat"},[a("a",{attrs:{href:"chat.html"}},[a("div",{staticClass:"chat_content"},[a("img",{attrs:{src:t.li.userImage,alt:"empty profile"}}),a("div",{staticClass:"chat_preview"},[a("h3",{staticClass:"chat_user"},[t._v(t._s(t.li.username))]),a("span",{staticClass:"chat_message"},[t._v(t._s(t.li.message))])])]),a("span",{staticClass:"chat_time"},[t._v(" "+t._s(t.li.time)+" ")])])])},C=[],v={name:"ChatsLi",props:{li:Object}},h=v,g=(a("38f7"),Object(c["a"])(h,m,C,!1,null,null,null)),b=g.exports,y={name:"chats",data:function(){return{title:"chats",chats:u}},mounted:function(){this.$parent.$emit("changeData","Edit","Chats","","")},components:{"chats-li":b}},F=y,k=Object(c["a"])(F,d,p,!1,null,null,null),x=k.exports,w=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("mian",{staticClass:"find"},[a("section",{staticClass:"find_options"},[a("div",{staticClass:"find_option"},[a("i",{staticClass:"fas fa-address-book"}),a("span",{staticClass:"find_option_title"},[t._v("Find")])]),a("div",{staticClass:"find_option"},[a("i",{staticClass:"fas fa-qrcode"}),a("span",{staticClass:"find_option_title"},[t._v("QR Code")])]),a("div",{staticClass:"find_option"},[a("i",{staticClass:"fas fa-mobile-alt"}),a("span",{staticClass:"find_option_title"},[t._v("Shake")])]),a("div",{staticClass:"find_option"},[a("i",{staticClass:"far fa-envelope"}),a("span",{staticClass:"find_option_title"},[t._v("Invite via SMS")])])]),a("section",{staticClass:"find_recommended"},[a("h6",{staticClass:"recommended_title"},[t._v("Recommended Friends")]),a("div",{staticClass:"recommended_list"},[a("span",{staticClass:"recommended_text"},[t._v("You have no recommended friends.")])])])])},$=[],j={name:"find",data:function(){return{title:"find"}},mounted:function(){this.$parent.$emit("changeData","Edit","Find","","")}},O=j,E=(a("47a6"),Object(c["a"])(O,w,$,!1,null,null,null)),S=E.exports,M=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("main",{staticClass:"friends"},[i("div",{staticClass:"search_bar"},[i("i",{staticClass:"fas fa-search"}),i("input",{attrs:{type:"search",placeholder:"Find friends, chats, Plus Friends"}})]),i("section",{staticClass:"friends_section"},[i("div",{staticClass:"f_section_header"},[i("h6",{staticClass:"f_setion_title"},[t._v("My Profile")])]),i("div",{staticClass:"f_section_Lists"},[i("div",{staticClass:"f_section_list"},[i("a",{attrs:{href:"profile.html"}},[i("img",{attrs:{src:a("414e"),alt:"empty profile"}}),i("span",{staticClass:"list_name"},[t._v("My Name")])])]),i("div",{staticClass:"f_section_list"},[i("a",{attrs:{href:"profile.html"}},[i("img",{attrs:{src:a("414e"),alt:"empty profile"}}),i("span",{staticClass:"list_name"},[t._v("Friends' Names Display")])])])])]),i("section",{staticClass:"friends_section"},[i("div",{staticClass:"f_section_header"},[i("h6",{staticClass:"f_setion_title"},[t._v("Friends")])]),i("div",{staticClass:"f_section_Lists"},[i("div",{staticClass:"f_section_list with_state_txt"},[i("a",{attrs:{href:"profile.html"}},[i("img",{attrs:{src:a("414e"),alt:"empty profile"}}),i("span",{staticClass:"list_name"},[t._v("Friend Name")]),i("span",{staticClass:"list_state_txt"},[t._v("Have a good day. See you soon")])])]),i("div",{staticClass:"f_section_list with_state_txt"},[i("a",{attrs:{href:"profile.html"}},[i("img",{attrs:{src:a("414e"),alt:"empty profile"}}),i("span",{staticClass:"list_name"},[t._v("Friend Name")]),i("span",{staticClass:"list_state_txt"},[t._v("Have a good day. See you soon")])])]),i("div",{staticClass:"f_section_list with_state_txt"},[i("a",{attrs:{href:"profile.html"}},[i("img",{attrs:{src:a("414e"),alt:"empty profile"}}),i("span",{staticClass:"list_name"},[t._v("Friend Name")]),i("span",{staticClass:"list_state_txt"},[t._v("Have a good day. See you soon")])])]),i("div",{staticClass:"f_section_list with_state_txt"},[i("a",{attrs:{href:"profile.html"}},[i("img",{attrs:{src:a("414e"),alt:"empty profile"}}),i("span",{staticClass:"list_name"},[t._v("Friend Name")]),i("span",{staticClass:"list_state_txt"},[t._v("Have a good day. See you soon")])])])])])])}],D={name:"friends",data:function(){return{title:"friends"}},mounted:function(){this.$parent.$emit("changeData","Manage","Friends","1","fa fa-cog")}},N=D,T=(a("5a52"),Object(c["a"])(N,M,P,!1,null,null,null)),H=T.exports,A=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("main",{staticClass:"more"},[i("section",{staticClass:"more_profile"},[i("div",{staticClass:"more_profile_column"},[i("img",{attrs:{src:a("414e"),alt:"empty profile"}}),i("div",{staticClass:"more_profile_info"},[i("h3",{staticClass:"more_profile_name"},[t._v("My Name")]),i("span",{staticClass:"more_profile_email"},[t._v("UserId@gmail.com")])])]),i("i",{staticClass:"far fa-comment"})]),i("section",{staticClass:"more_options"},[i("div",{staticClass:"more_option"},[i("i",{staticClass:"far fa-smile"}),i("span",{staticClass:"more_option_title"},[t._v("Emoticons")])]),i("div",{staticClass:"more_option"},[i("i",{staticClass:"fas fa-paint-brush"}),i("span",{staticClass:"more_option_title"},[t._v("Themes")])]),i("div",{staticClass:"more_option"},[i("i",{staticClass:"far fa-hand-peace"}),i("span",{staticClass:"more_option_title"},[t._v("Plus Friend")])]),i("div",{staticClass:"more_option"},[i("i",{staticClass:"far fa-user-circle"}),i("span",{staticClass:"more_option_title"},[t._v("Account")])])]),i("section",{staticClass:"more_plusFriends"},[i("header",{staticClass:"plusFriends_header"},[i("h2",{staticClass:"plusFriends title"},[t._v("Plus Friends")]),i("span",{staticClass:"plusFriends_info"},[i("i",{staticClass:"fas fa-info-circle"}),t._v(" Learn More ")])]),i("div",{staticClass:"plusFriends_lists"},[i("div",{staticClass:"plusFriends_list"},[i("i",{staticClass:"fas fa-utensils"}),i("span",{staticClass:"plusFriends_list_title"},[t._v("Order")])]),i("div",{staticClass:"plusFriends_list"},[i("i",{staticClass:"fas fa-home"}),i("span",{staticClass:"plusFriends_list_title"},[t._v("Store")])]),i("div",{staticClass:"plusFriends_list"},[i("i",{staticClass:"fas fa-tv"}),i("span",{staticClass:"plusFriends_list_title"},[t._v("TV Channel/Radio")])]),i("div",{staticClass:"plusFriends_list"},[i("i",{staticClass:"fas fa-pencil-alt"}),i("span",{staticClass:"plusFriends_list_title"},[t._v("Creation")])]),i("div",{staticClass:"plusFriends_list"},[i("i",{staticClass:"fas fa-graduation-cap"}),i("span",{staticClass:"plusFriends_list_title"},[t._v("Education")])]),i("div",{staticClass:"plusFriends_list"},[i("i",{staticClass:"fas fa-landmark"}),i("span",{staticClass:"plusFriends_list_title"},[t._v("Politics/Society")])]),i("div",{staticClass:"plusFriends_list"},[i("i",{staticClass:"fas fa-won-sign"}),i("span",{staticClass:"plusFriends_list_title"},[t._v("Finance")])]),i("div",{staticClass:"plusFriends_list"},[i("i",{staticClass:"fas fa-video"}),i("span",{staticClass:"plusFriends_list_title"},[t._v("Movies/Music")])])])]),i("section",{staticClass:"more_links"},[i("div",{staticClass:"more_link"},[i("img",{attrs:{src:a("b564"),alt:"kakao story image"}}),i("span",{staticClass:"more_link_title"},[t._v("Kakao Story")])]),i("div",{staticClass:"more_link"},[i("img",{attrs:{src:a("46c8"),alt:"path image"}}),i("span",{staticClass:"more_link_title"},[t._v("path")])]),i("div",{staticClass:"more_link"},[i("img",{attrs:{src:a("a325"),alt:"kakao friends image"}}),i("span",{staticClass:"more_link_title"},[t._v("Kakao Friends")])])])])}],L={name:"more",data:function(){return{title:"more"}},mounted:function(){this.$parent.$emit("changeData","","More","","fa fa-cog")}},R=L,q=(a("dc51"),Object(c["a"])(R,A,I,!1,null,null,null)),J=q.exports;i["a"].use(f["a"]);var K=[{path:"/",name:"App",component:_},{path:"/friends",component:H,name:"friends"},{path:"/chats",component:x,name:"chats"},{path:"/find",component:S,name:"find"},{path:"/more",component:J,name:"more"}],Q=new f["a"]({mode:"history",base:"/portfolio6/",routes:K,linkActiveClass:"tab_selected",linkExactActiveClass:"tab"}),U=Q;i["a"].config.productionTip=!1,new i["a"]({router:U,render:function(t){return t(_)}}).$mount("#app")},"5a52":function(t,s,a){"use strict";var i=a("340e"),e=a.n(i);e.a},"8c41":function(t,s,a){},"94de":function(t,s,a){"use strict";var i=a("3602"),e=a.n(i);e.a},a325:function(t,s,a){t.exports=a.p+"img/kakaofriends.32331b01.png"},b564:function(t,s,a){t.exports=a.p+"img/kakaostory.2be26e74.png"},dc51:function(t,s,a){"use strict";var i=a("4e74"),e=a.n(i);e.a}});
//# sourceMappingURL=app.80c45446.js.map