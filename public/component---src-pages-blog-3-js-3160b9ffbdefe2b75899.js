/*! For license information please see component---src-pages-blog-3-js-3160b9ffbdefe2b75899.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[30],{5900:function(e,t){var a;!function(){"use strict";var l={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)){if(a.length){var c=n.apply(null,a);c&&e.push(c)}}else if("object"===r)if(a.toString===Object.prototype.toString)for(var s in a)l.call(a,s)&&a[s]&&e.push(s);else e.push(a.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()},7408:function(e,t,a){"use strict";var l=a(7462),n=a(3366),r=a(5900),c=a.n(r),s=a(7294),m=a(9541),i=["bsPrefix","className","as"],o=["xl","lg","md","sm","xs"],u=s.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,u=e.as,f=void 0===u?"div":u,E=(0,n.Z)(e,i),d=(0,m.vE)(a,"col"),g=[],h=[];return o.forEach((function(e){var t,a,l,n=E[e];if(delete E[e],"object"==typeof n&&null!=n){var r=n.span;t=void 0===r||r,a=n.offset,l=n.order}else t=n;var c="xs"!==e?"-"+e:"";t&&g.push(!0===t?""+d+c:""+d+c+"-"+t),null!=l&&h.push("order"+c+"-"+l),null!=a&&h.push("offset"+c+"-"+a)})),g.length||g.push(d),s.createElement(f,(0,l.Z)({},E,{ref:t,className:c().apply(void 0,[r].concat(g,h))}))}));u.displayName="Col",t.Z=u},6187:function(e,t,a){"use strict";var l=a(7462),n=a(3366),r=a(5900),c=a.n(r),s=a(7294),m=a(9541),i=["bsPrefix","fluid","as","className"],o=s.forwardRef((function(e,t){var a=e.bsPrefix,r=e.fluid,o=e.as,u=void 0===o?"div":o,f=e.className,E=(0,n.Z)(e,i),d=(0,m.vE)(a,"container"),g="string"==typeof r?"-"+r:"-fluid";return s.createElement(u,(0,l.Z)({ref:t},E,{className:c()(f,r?""+d+g:d)}))}));o.displayName="Container",o.defaultProps={fluid:!1},t.Z=o},994:function(e,t,a){"use strict";var l=a(7462),n=a(3366),r=a(5900),c=a.n(r),s=a(7294),m=a(9541),i=["bsPrefix","className","noGutters","as"],o=["xl","lg","md","sm","xs"],u=s.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,u=e.noGutters,f=e.as,E=void 0===f?"div":f,d=(0,n.Z)(e,i),g=(0,m.vE)(a,"row"),h=g+"-cols",v=[];return o.forEach((function(e){var t,a=d[e];delete d[e];var l="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&v.push(""+h+l+"-"+t)})),s.createElement(E,(0,l.Z)({ref:t},d,{className:c().apply(void 0,[r,g,u&&"no-gutters"].concat(v))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.Z=u},9541:function(e,t,a){"use strict";a.d(t,{vE:function(){return r}});var l=a(7294),n=l.createContext({});n.Consumer,n.Provider;function r(e,t){var a=(0,l.useContext)(n);return e||a[t]||t}},7997:function(e,t,a){"use strict";var l=a(7294),n=a(5444);t.Z=function(e){var t=e.data,a=t.image,r=t.title,c=t.url,s=t.date;return l.createElement("div",{className:"latestBlogItem"},l.createElement("div",{className:"lbi_thumb"},l.createElement("img",{src:a,alt:r})),l.createElement("div",{className:"lbi_details"},l.createElement(n.Link,{className:"lbid_date",to:c},s),l.createElement("h2",null,l.createElement(n.Link,{to:c},r)),l.createElement(n.Link,{className:"learnM",to:c},"Learn More")))}},5978:function(e,t,a){"use strict";var l=a(7294),n=a(9876);t.Z=function(){return l.createElement(l.Fragment,null,l.createElement("aside",{className:"widget search-widget"},l.createElement("form",{method:"post",action:"#",className:"searchform"},l.createElement("input",{type:"search",placeholder:"Search here...",name:"s",id:"s"}))),l.createElement("aside",{className:"widget recent_posts"},l.createElement("h3",{className:"widget_title"},"Latest Posts"),l.createElement("div",{className:"meipaly_post_widget"},n.Qg.map((function(e,t){var a=e.title,n=e.image,r=e.url;return l.createElement("div",{className:"mpw_item",key:t},l.createElement("img",{src:n,alt:""}),l.createElement("a",{href:r},a))})))),l.createElement("aside",{className:"widget categories"},l.createElement("h3",{className:"widget_title"},"Categories"),l.createElement("div",{className:"meipaly_categorie_widget"},l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"#"},"Business")),l.createElement("li",null,l.createElement("a",{href:"#"},"Introductions")),l.createElement("li",null,l.createElement("a",{href:"#"},"One Page Template")),l.createElement("li",null,l.createElement("a",{href:"#"},"Parallax Effects")),l.createElement("li",null,l.createElement("a",{href:"#"},"New Technologies")),l.createElement("li",null,l.createElement("a",{href:"#"},"Video Backgrounds"))))),l.createElement("aside",{className:"widget"},l.createElement("h3",{className:"widget_title"},"Tags:"),l.createElement("div",{className:"meipaly_tagcloude_widget"},l.createElement("a",{href:"#"},"Business,")," ",l.createElement("a",{href:"#"},"Agency,")," ",l.createElement("a",{href:"#"},"Digital,")," ",l.createElement("a",{href:"#"},"Technology,"),l.createElement("a",{href:"#"},"Parallax,")," ",l.createElement("a",{href:"#"},"Innovative,")," ",l.createElement("a",{href:"#"},"Professional,"),l.createElement("a",{href:"#"},"Experience,"))))}},5610:function(e,t,a){"use strict";var l=a(7294),n=a(9876);t.Z=function(){var e=n.yA.light;return l.createElement("footer",{className:"footer_1"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-5 col-sm-6 col-md-5"},l.createElement("aside",{className:"widget aboutwidget"},l.createElement("a",{href:"/"},l.createElement("img",{src:e,alt:""})),l.createElement("p",null,"Selamat datang ke Cyberoket Technology"))),l.createElement("div",{className:"col-lg-4 col-sm-4 col-md-4"},l.createElement("aside",{className:"widget contact_widgets"},l.createElement("h3",{className:"widget_title"},"contact"),l.createElement("p",null,"Kajang",l.createElement("br",null),"Selangor, Malaysia"),l.createElement("p",null,"P: +6013-2716575"),l.createElement("p",null,"E: ",l.createElement("a",{href:"#"},"cyberokettechnology@gmail.com")))),l.createElement("div",{className:"col-lg-3 col-sm-2 col-md-3"},l.createElement("aside",{className:"widget social_widget"},l.createElement("h3",{className:"widget_title"},"social"),l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"#"},l.createElement("i",{className:"fa fa-twitter"}),"Twitter")),l.createElement("li",null,l.createElement("a",{href:"#"},l.createElement("i",{className:"fa fa-facebook-square"}),"Facebook")),l.createElement("li",null,l.createElement("a",{href:"#"},l.createElement("i",{className:"fa fa-youtube-play"}),"Youtube")))))),l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-12 col-sm-12 text-center"},l.createElement("div",{className:"copyright"},"© copyright ",(new Date).getFullYear()," by"," ",l.createElement("a",{href:"#"},"cyberoket.com"))))))}},5097:function(e,t,a){"use strict";var l=a(7294),n=a(9876),r=a(6187),c=a(994),s=a(7408),m=a(7859),i=a(3530),o=a(5444);t.Z=function(){var e=(0,l.useState)(!1),t=e[0],a=e[1],u=(0,l.useContext)(m.c),f=u.searchStatus,E=u.updateSearchStatus,d=(0,l.useContext)(i.p),g=d.menuStatus,h=d.updateMenuStatus,v=function(){window.scrollY>70?a(!0):window.scrollY<70&&a(!1)};return(0,l.useEffect)((function(){return window.addEventListener("scroll",v),function(){window.removeEventListener("scroll",v)}}),[t]),l.createElement("header",{className:"header_01 "+(!0===t?"fixedHeader animated flipInX":null),id:"header"},l.createElement(r.Z,{fluid:!0},l.createElement(c.Z,{className:"justify-content-between"},l.createElement(s.Z,{className:"col-6",lg:2,md:3,sm:3},l.createElement("div",{className:"logo"},l.createElement(o.Link,{to:"/"},l.createElement("img",{src:n.yA.light,alt:""})))),l.createElement(s.Z,{lg:8,sm:8,md:7,className:"d-none d-lg-block "},l.createElement("nav",{className:"mainmenu text-center"},l.createElement("ul",null,n.H9.map((function(e,t){return l.createElement("li",{key:t,className:void 0!==e.subItems?"menu-item-has-children":""},l.createElement(o.Link,{to:e.url},e.name),void 0!==e.subItems?l.createElement("ul",{className:"sub-menu"},e.subItems.map((function(e,t){return l.createElement("li",{key:t},l.createElement(o.Link,{to:e.url},e.name))}))):null)}))))),l.createElement(s.Z,{lg:2,md:2,sm:4,className:"col-6"},l.createElement("div",{className:"navigator text-right"},l.createElement("a",{className:"search searchToggler",href:"#",onClick:function(e){e.preventDefault(),E(!f)}},l.createElement("i",{className:"mei-magnifying-glass"})),l.createElement("a",{href:"#",className:"menu mobilemenu d-none d-md-none d-lg-none"},l.createElement("i",{className:"mei-menu"})),l.createElement("a",{id:"open-overlay-nav",className:"menu hamburger",onClick:function(e){e.preventDefault(),h(!g)},href:"#"},l.createElement("i",{className:"mei-menu"})))))))}},5035:function(e,t,a){"use strict";var l=a(7294);t.Z=function(e){var t=e.title,a=e.name;return l.createElement("section",{className:"pageBanner"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-12"},l.createElement("div",{className:"banner_content text-center"},l.createElement("h4",null,l.createElement("a",{href:"/"},"home")," - ",a),l.createElement("h2",null,t))))))}},4118:function(e,t,a){"use strict";var l=a(7294);t.Z=function(){return l.createElement("div",{className:"meipaly_paginations text-center"},l.createElement("a",{className:"prev",href:"#"},l.createElement("i",{className:"fa fa-angle-left"})),l.createElement("span",{className:"current"},"01"),l.createElement("a",{href:"#"},"02"),l.createElement("a",{href:"#"},"5"),l.createElement("a",{className:"next",href:"#"},l.createElement("i",{className:"fa fa-angle-right"})))}},2026:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var l=a(7294),n=a(5610),r=a(2728),c=a(5035),s=a(6187),m=a(994),i=a(7408),o=a(5978),u=a(4118),f=a(9876),E=a(7997),d=function(){return l.createElement("section",{className:"commonSection blogPage"},l.createElement(s.Z,null,l.createElement(m.Z,null,l.createElement(i.Z,{lg:8,sm:8},l.createElement(m.Z,null,f.M$.map((function(e,t){return l.createElement(i.Z,{lg:6,sm:12,md:6,key:t},l.createElement(E.Z,{data:e}))}))),l.createElement(u.Z,null)),l.createElement(i.Z,{lg:4,sm:4,className:"sidebar"},l.createElement(o.Z,null)))))},g=a(3530),h=a(7859),v=a(5097),p=function(){return l.createElement(g.Z,null,l.createElement(h.Z,null,l.createElement(r.Z,{PageTitle:"Blog 03 Page"},l.createElement(v.Z,null),l.createElement(c.Z,{title:"Blog 03",name:"Blog"}),l.createElement(d,null),l.createElement(n.Z,null))))}},7462:function(e,t,a){"use strict";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},l.apply(this,arguments)}a.d(t,{Z:function(){return l}})},3366:function(e,t,a){"use strict";function l(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}a.d(t,{Z:function(){return l}})}}]);
//# sourceMappingURL=component---src-pages-blog-3-js-3160b9ffbdefe2b75899.js.map