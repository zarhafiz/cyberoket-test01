"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[682],{1597:function(e,a,t){var l=t(1616),s=t(7734);function n(){return n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},n.apply(this,arguments)}var i={update:function(){var e=this,a=e.rtl,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var n,i=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,r=e.pagination.$el,o=e.params.loop?Math.ceil((i-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?((n=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup))>i-1-2*e.loopedSlides&&(n-=i-2*e.loopedSlides),n>o-1&&(n-=o),n<0&&"bullets"!==e.params.paginationType&&(n=o+n)):n=void 0!==e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===t.type&&e.pagination.bullets&&e.pagination.bullets.length>0){var c,p,m,d=e.pagination.bullets;if(t.dynamicBullets&&(e.pagination.bulletSize=d.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(e.isHorizontal()?"width":"height",e.pagination.bulletSize*(t.dynamicMainBullets+4)+"px"),t.dynamicMainBullets>1&&void 0!==e.previousIndex&&(e.pagination.dynamicBulletIndex+=n-e.previousIndex,e.pagination.dynamicBulletIndex>t.dynamicMainBullets-1?e.pagination.dynamicBulletIndex=t.dynamicMainBullets-1:e.pagination.dynamicBulletIndex<0&&(e.pagination.dynamicBulletIndex=0)),c=n-e.pagination.dynamicBulletIndex,m=((p=c+(Math.min(d.length,t.dynamicMainBullets)-1))+c)/2),d.removeClass(t.bulletActiveClass+" "+t.bulletActiveClass+"-next "+t.bulletActiveClass+"-next-next "+t.bulletActiveClass+"-prev "+t.bulletActiveClass+"-prev-prev "+t.bulletActiveClass+"-main"),r.length>1)d.each((function(e){var a=(0,l.Z)(e),s=a.index();s===n&&a.addClass(t.bulletActiveClass),t.dynamicBullets&&(s>=c&&s<=p&&a.addClass(t.bulletActiveClass+"-main"),s===c&&a.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),s===p&&a.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next"))}));else{var u=d.eq(n),v=u.index();if(u.addClass(t.bulletActiveClass),t.dynamicBullets){for(var g=d.eq(c),b=d.eq(p),h=c;h<=p;h+=1)d.eq(h).addClass(t.bulletActiveClass+"-main");if(e.params.loop)if(v>=d.length-t.dynamicMainBullets){for(var C=t.dynamicMainBullets;C>=0;C-=1)d.eq(d.length-C).addClass(t.bulletActiveClass+"-main");d.eq(d.length-t.dynamicMainBullets-1).addClass(t.bulletActiveClass+"-prev")}else g.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),b.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next");else g.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),b.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next")}}if(t.dynamicBullets){var f=Math.min(d.length,t.dynamicMainBullets+4),E=(e.pagination.bulletSize*f-e.pagination.bulletSize)/2-m*e.pagination.bulletSize,x=a?"right":"left";d.css(e.isHorizontal()?x:"top",E+"px")}}if("fraction"===t.type&&(r.find((0,s.Wc)(t.currentClass)).text(t.formatFractionCurrent(n+1)),r.find((0,s.Wc)(t.totalClass)).text(t.formatFractionTotal(o))),"progressbar"===t.type){var w;w=t.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";var y=(n+1)/o,N=1,k=1;"horizontal"===w?N=y:k=y,r.find((0,s.Wc)(t.progressbarFillClass)).transform("translate3d(0,0,0) scaleX("+N+") scaleY("+k+")").transition(e.params.speed)}"custom"===t.type&&t.renderCustom?(r.html(t.renderCustom(e,n+1,o)),e.emit("paginationRender",r[0])):e.emit("paginationUpdate",r[0]),e.params.watchOverflow&&e.enabled&&r[e.isLocked?"addClass":"removeClass"](t.lockClass)}},render:function(){var e=this,a=e.params.pagination;if(a.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var t=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,l=e.pagination.$el,n="";if("bullets"===a.type){var i=e.params.loop?Math.ceil((t-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&!e.params.loop&&i>t&&(i=t);for(var r=0;r<i;r+=1)a.renderBullet?n+=a.renderBullet.call(e,r,a.bulletClass):n+="<"+a.bulletElement+' class="'+a.bulletClass+'"></'+a.bulletElement+">";l.html(n),e.pagination.bullets=l.find((0,s.Wc)(a.bulletClass))}"fraction"===a.type&&(n=a.renderFraction?a.renderFraction.call(e,a.currentClass,a.totalClass):'<span class="'+a.currentClass+'"></span> / <span class="'+a.totalClass+'"></span>',l.html(n)),"progressbar"===a.type&&(n=a.renderProgressbar?a.renderProgressbar.call(e,a.progressbarFillClass):'<span class="'+a.progressbarFillClass+'"></span>',l.html(n)),"custom"!==a.type&&e.emit("paginationRender",e.pagination.$el[0])}},init:function(){var e=this;e.params.pagination=(0,s.Up)(e.$el,e.params.pagination,e.params.createElements,{el:"swiper-pagination"});var a=e.params.pagination;if(a.el){var t=(0,l.Z)(a.el);0!==t.length&&(e.params.uniqueNavElements&&"string"==typeof a.el&&t.length>1&&(t=e.$el.find(a.el)),"bullets"===a.type&&a.clickable&&t.addClass(a.clickableClass),t.addClass(a.modifierClass+a.type),"bullets"===a.type&&a.dynamicBullets&&(t.addClass(""+a.modifierClass+a.type+"-dynamic"),e.pagination.dynamicBulletIndex=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),"progressbar"===a.type&&a.progressbarOpposite&&t.addClass(a.progressbarOppositeClass),a.clickable&&t.on("click",(0,s.Wc)(a.bulletClass),(function(a){a.preventDefault();var t=(0,l.Z)(this).index()*e.params.slidesPerGroup;e.params.loop&&(t+=e.loopedSlides),e.slideTo(t)})),(0,s.l7)(e.pagination,{$el:t,el:t[0]}),e.enabled||t.addClass(a.lockClass))}},destroy:function(){var e=this,a=e.params.pagination;if(a.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var t=e.pagination.$el;t.removeClass(a.hiddenClass),t.removeClass(a.modifierClass+a.type),e.pagination.bullets&&e.pagination.bullets.removeClass(a.bulletActiveClass),a.clickable&&t.off("click",(0,s.Wc)(a.bulletClass))}}};a.Z={name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){(0,s.cR)(this,{pagination:n({dynamicBulletIndex:0},i)})},on:{init:function(e){e.pagination.init(),e.pagination.render(),e.pagination.update()},activeIndexChange:function(e){(e.params.loop||void 0===e.snapIndex)&&e.pagination.update()},snapIndexChange:function(e){e.params.loop||e.pagination.update()},slidesLengthChange:function(e){e.params.loop&&(e.pagination.render(),e.pagination.update())},snapGridLengthChange:function(e){e.params.loop||(e.pagination.render(),e.pagination.update())},destroy:function(e){e.pagination.destroy()},"enable disable":function(e){var a=e.pagination.$el;a&&a[e.enabled?"removeClass":"addClass"](e.params.pagination.lockClass)},click:function(e,a){var t=a.target;if(e.params.pagination.el&&e.params.pagination.hideOnClick&&e.pagination.$el.length>0&&!(0,l.Z)(t).hasClass(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&t===e.navigation.nextEl||e.navigation.prevEl&&t===e.navigation.prevEl))return;!0===e.pagination.$el.hasClass(e.params.pagination.hiddenClass)?e.emit("paginationShow"):e.emit("paginationHide"),e.pagination.$el.toggleClass(e.params.pagination.hiddenClass)}}}}},5035:function(e,a,t){var l=t(7294);a.Z=function(e){var a=e.title,t=e.name;return l.createElement("section",{className:"pageBanner"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-12"},l.createElement("div",{className:"banner_content text-center"},l.createElement("h4",null,l.createElement("a",{href:"/"},"home")," - ",t),l.createElement("h2",null,a))))))}},1220:function(e,a,t){t.r(a),t.d(a,{default:function(){return T}});var l=t(7294),s=t(5610),n=t(2728),i=t(5035),r=t(9876),o=function(){var e=r.hW.sectionContent,a=r.hW.gallery,t=r.hW.counter;return l.createElement("section",{className:"commonSection"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-6 col-sm-12 col-md-6"},l.createElement("h4",{className:"sub_title"}," ",e.subTitle," ")," ",l.createElement("h2",{className:"sec_title"}," ",e.title," ")," ")," ",l.createElement("div",{className:"col-lg-6 col-sm-12 col-md-6"},l.createElement("div",{className:"agency_img1"},l.createElement("img",{src:a[0],alt:""}))," ")," ",l.createElement("div",{className:"col-lg-12 col-sm-12"},l.createElement("div",{className:"agency_img2"},l.createElement("img",{src:a[1],alt:""}))," ",l.createElement("div",{className:"compay_date"},l.createElement("h5",null," ",t.title," ")," ",l.createElement("h2",null," ",t.number," ")," ")," ")," ")," ")," ")},c=t(9529),p=t(5074),m=t(6187),d=t(994),u=t(7408),v=t(7717),g=t(7992),b=function(){var e=(0,l.useState)(!1),a=e[0],t=e[1],s=r.up.sectionContent,n=r.up.video;return l.createElement(l.Fragment,null,l.createElement("section",{className:"commonSection our_work"},l.createElement("div",{className:"videoWrap_2"},l.createElement("img",{src:n.image,alt:n.title}),l.createElement("div",{className:"play_video"},l.createElement("a",{onClick:function(e){e.preventDefault(),t(!0)},href:"#",className:"video_popup"},l.createElement("i",{className:"fa fa-play"})),l.createElement("h2",null,n.title))),l.createElement(m.Z,null,l.createElement(d.Z,null,l.createElement(u.Z,{lg:6,sm:12}),l.createElement(u.Z,{lg:6,sm:12},l.createElement("div",{className:"ab_detail_wrap"},l.createElement(v.Z,{data:s})))))),l.createElement(g.Z,{channel:"youtube",autoplay:!0,isOpen:a,videoId:n.ID,onClose:function(){return t(!1)}}))},h=t(8284),C=t(2682),f=t(3455),E=t(7734),x=t(1616);function w(){return w=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},w.apply(this,arguments)}var y={init:function(){var e=this,a=e.params.thumbs;if(e.thumbs.initialized)return!1;e.thumbs.initialized=!0;var t=e.constructor;return a.swiper instanceof t?(e.thumbs.swiper=a.swiper,(0,E.l7)(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),(0,E.l7)(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1})):(0,E.Kn)(a.swiper)&&(e.thumbs.swiper=new t((0,E.l7)({},a.swiper,{watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!1})),e.thumbs.swiperCreated=!0),e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",e.thumbs.onThumbClick),!0},onThumbClick:function(){var e=this,a=e.thumbs.swiper;if(a){var t=a.clickedIndex,l=a.clickedSlide;if(!(l&&(0,x.Z)(l).hasClass(e.params.thumbs.slideThumbActiveClass)||null==t)){var s;if(s=a.params.loop?parseInt((0,x.Z)(a.clickedSlide).attr("data-swiper-slide-index"),10):t,e.params.loop){var n=e.activeIndex;e.slides.eq(n).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,n=e.activeIndex);var i=e.slides.eq(n).prevAll('[data-swiper-slide-index="'+s+'"]').eq(0).index(),r=e.slides.eq(n).nextAll('[data-swiper-slide-index="'+s+'"]').eq(0).index();s=void 0===i?r:void 0===r?i:r-n<n-i?r:i}e.slideTo(s)}}},update:function(e){var a=this,t=a.thumbs.swiper;if(t){var l="auto"===t.params.slidesPerView?t.slidesPerViewDynamic():t.params.slidesPerView,s=a.params.thumbs.autoScrollOffset,n=s&&!t.params.loop;if(a.realIndex!==t.realIndex||n){var i,r,o=t.activeIndex;if(t.params.loop){t.slides.eq(o).hasClass(t.params.slideDuplicateClass)&&(t.loopFix(),t._clientLeft=t.$wrapperEl[0].clientLeft,o=t.activeIndex);var c=t.slides.eq(o).prevAll('[data-swiper-slide-index="'+a.realIndex+'"]').eq(0).index(),p=t.slides.eq(o).nextAll('[data-swiper-slide-index="'+a.realIndex+'"]').eq(0).index();i=void 0===c?p:void 0===p?c:p-o==o-c?t.params.slidesPerGroup>1?p:o:p-o<o-c?p:c,r=a.activeIndex>a.previousIndex?"next":"prev"}else r=(i=a.realIndex)>a.previousIndex?"next":"prev";n&&(i+="next"===r?s:-1*s),t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(i)<0&&(t.params.centeredSlides?i=i>o?i-Math.floor(l/2)+1:i+Math.floor(l/2)-1:i>o&&t.params.slidesPerGroup,t.slideTo(i,e?0:void 0))}var m=1,d=a.params.thumbs.slideThumbActiveClass;if(a.params.slidesPerView>1&&!a.params.centeredSlides&&(m=a.params.slidesPerView),a.params.thumbs.multipleActiveThumbs||(m=1),m=Math.floor(m),t.slides.removeClass(d),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(var u=0;u<m;u+=1)t.$wrapperEl.children('[data-swiper-slide-index="'+(a.realIndex+u)+'"]').addClass(d);else for(var v=0;v<m;v+=1)t.slides.eq(a.realIndex+v).addClass(d)}}},N={name:"thumbs",params:{thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-container-thumbs"}},create:function(){(0,E.cR)(this,{thumbs:w({swiper:null,initialized:!1},y)})},on:{beforeInit:function(e){var a=e.params.thumbs;a&&a.swiper&&(e.thumbs.init(),e.thumbs.update(!0))},slideChange:function(e){e.thumbs.swiper&&e.thumbs.update()},update:function(e){e.thumbs.swiper&&e.thumbs.update()},resize:function(e){e.thumbs.swiper&&e.thumbs.update()},observerUpdate:function(e){e.thumbs.swiper&&e.thumbs.update()},setTransition:function(e,a){var t=e.thumbs.swiper;t&&t.setTransition(a)},beforeDestroy:function(e){var a=e.thumbs.swiper;a&&e.thumbs.swiperCreated&&a&&a.destroy()}}},k=t(1597),I=t(1587),Z=t(7619);t(4506);C.Z.use([f.Z,N,k.Z]);var A=function(){var e=(0,l.useState)(null),a=e[0],t=e[1],s=r.mx.sectionContent,n=r.mx.posts;return l.createElement("section",{className:"commonSection testimonial_2"},l.createElement(m.Z,null,l.createElement(d.Z,{className:"testimoniTab"},l.createElement(u.Z,{lg:5},l.createElement("h4",{className:"sub_title color_aaa"},s.subTitle),l.createElement("h2",{className:"sec_title white"},s.subTitle),l.createElement(I.t,Object.assign({id:"testimonial_2_thumb",onSwiper:t},{slidesPerView:3,slidesPerGroup:3,spaceBetween:0,speed:1400,pagination:{el:"#testimonials-carousel-pagination",type:"bullets",clickable:!0},autoplay:{delay:5e3}}),n.map((function(e,a){var t=e.name,s=e.designation,n=e.image;return l.createElement(Z.o,{key:a},l.createElement("div",{className:"control_item"},l.createElement("a",{href:"#tab_"+a,"data-toggle":"tab"},l.createElement("span",null,l.createElement("img",{src:n,alt:t})),l.createElement("div",{className:"author_detail"},l.createElement("h5",null,t),l.createElement("h6",null,s)))))})))),l.createElement(u.Z,{lg:7},l.createElement("div",{className:"swiper-pagination",id:"testimonials-carousel-pagination"}),l.createElement("div",{className:"tab-content"},l.createElement(I.t,Object.assign({thumbs:{swiper:a}},{speed:1400,mousewheel:!0,slidesPerView:1,autoplay:{delay:5e3}}),n.map((function(e,a){var t=e.content,s=e.date;return l.createElement(Z.o,{key:a},l.createElement("div",{className:"testi_con"},l.createElement("p",null,t),l.createElement("span",null,s)))}))))))))},S=function(){var e=(0,l.useState)(1),a=e[0],t=e[1],s=r.iT.sectionContent,n=r.iT.posts;return l.createElement("section",{className:"commonSection chooseUs"},l.createElement(m.Z,null,l.createElement(d.Z,null,l.createElement(u.Z,{lg:12,className:"text-center"},l.createElement(v.Z,{data:s}))),l.createElement("div",{id:"tabs"},l.createElement(d.Z,null,l.createElement(u.Z,{lg:12},l.createElement("ul",{className:"chooseUs_title"},n.map((function(e,s){var n=e.title;return l.createElement("li",{key:s,className:a===s?"active":" "},l.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),t(s)}},n))}))))),l.createElement("div",{className:"tab-content"},n.map((function(e,t){return t===a?l.createElement("div",{className:"tab-pane fade show active animated fadeIn",id:"tes_tab_"+t,key:t},l.createElement(d.Z,{className:0==t%2?" ":"flex-lg-row-reverse"},l.createElement(u.Z,{lg:7},l.createElement("div",{className:"wh_choose"},l.createElement("p",null,e.content),l.createElement("ul",null,e.lists.map((function(e,a){var t=e.item;return l.createElement("li",{key:a},l.createElement("i",{className:"fa fa-check-square"})," ",t)}))))),l.createElement(u.Z,{lg:5},l.createElement("div",{className:"chose_img"},l.createElement("img",{src:e.image,alt:"chose_img-"+t}))))):null}))))))},_=t(5097),B=t(7859),P=t(3530),T=function(){return l.createElement(P.Z,null,l.createElement(B.Z,null,l.createElement(n.Z,{PageTitle:"About Us Page"},l.createElement(_.Z,null),l.createElement(i.Z,{title:"About Us",name:"About"}),l.createElement(o,null),l.createElement(A,null),l.createElement(h.Z,null),l.createElement(p.Z,null),l.createElement(b,null),l.createElement(S,null),l.createElement(c.Z,{extraClassName:"ready"}),l.createElement(s.Z,null))))}}}]);
//# sourceMappingURL=component---src-pages-about-js-1efda7568d61a4382821.js.map