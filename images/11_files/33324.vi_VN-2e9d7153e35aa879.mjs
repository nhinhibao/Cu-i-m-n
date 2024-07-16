"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[33324],{658190:(e,t,r)=>{r.d(t,{Z:()=>v,e:()=>x});var i=r(667294),n=r(240684),o=r(883119),l=r(725619),s=r(503853),a=r(321329),d=r(363074),u=r(118923),c=r(832853),h=r(785893);let p=(0,n.ZP)({resolved:{},chunkName:()=>"app-www-video-VideoWrapper",isReady(e){let t=this.resolve(e);return!0===this.resolved[t]&&!!r.m[t]},importAsync:()=>Promise.all([r.e(93041),r.e(84452),r.e(95813)]).then(r.bind(r,131348)),requireAsync(e){let t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){return r(this.resolve(e))},resolve:()=>131348}),g=(0,c.Z)(()=>Promise.all([r.e(93041),r.e(84452),r.e(95813)]).then(r.bind(r,131348)),void 0,"app-www-video-VideoWrapper"),x=Object.freeze({white:"inverse",black:"default"}),m={defaultOverlay:{backgroundColor:"rgba(0, 0, 0, 0.4)"},hoverOverlay:{backgroundColor:"rgba(0, 0, 0, 0.6)"}},y=e=>(0,u.b)()?(0,h.jsx)(g,{...e}):(0,h.jsx)(p,{...e});function f({titleText:e,videoPin:t,videoPlaceholderImage:r}){return(0,h.jsx)(y,{aspectRatio:s.q4,captions:"",controls:!1,fallback:(0,h.jsx)(o.Ee,{alt:e||"",color:"rgb(111, 91, 77)",fit:"cover",naturalHeight:3,naturalWidth:2,src:r||t.metadata.thumbnail}),isAutoPlay:!0,loop:!0,onPlay:()=>{},onPlayError:()=>{},playing:!0,playsInline:!0,poster:r||t.metadata.thumbnail,src:t.url,volume:0})}function v({buttonAction:e,buttonCustomization:t,buttonText:r,experience:n,hideCompleteButton:u,imageAlt:c,imageUrl:p,openNewTab:g,storyType:x,titleColor:y,titleText:v,titleTextCustomization:b,videoPin:_,videoPlaceholderImage:j}){let[w,S]=(0,i.useState)(!1),{experience_id:C,placement_id:I}=n||{},P=(0,a.Z)(I),k=(0,d.Z)({onVisibilityChanged:e=>{e&&n&&"viewed"!==n.status&&void 0!==I&&void 0!==C&&(n.status="viewed",P.viewExperience(I,C,!1,!0))}}),E=()=>{n&&P.completeExperience(I,C,!1,!0)},Z=()=>{S(!0)},M=()=>{S(!1)},z="feed_card_video"===x?354:315,T=(0,s.zn)(x),O=T?l.f8:l.hm,A=T?l.sH:l.HI,{color:H,fontSize:D,fontStyle:R,fontWeight:U,horizontalAlignment:W}=(0,s.Mf)(b||{},"web"),{button_background_color:L,button_text_color:N}=t||{};return(0,h.jsxs)(o.xu,{ref:k,position:"relative",children:[(0,h.jsx)(o.xu,{onMouseEnter:Z,onMouseLeave:M,children:(0,h.jsxs)(o.rU,{accessibilityLabel:v,href:e,onBlur:M,onClick:E,onFocus:Z,target:g?"blank":null,underline:"none",children:[(0,h.jsxs)(o.xu,{dangerouslySetInlineStyle:{__style:{WebkitMaskImage:"-webkit-radial-gradient(white, black)"}},overflow:"hidden",position:"relative",rounding:4,children:[(0,h.jsx)(o.xu,{height:z,rounding:4,width:236,children:"feed_card_video"===x&&_?(0,h.jsx)(f,{titleText:v,videoPin:_,videoPlaceholderImage:j}):p&&(0,h.jsx)(o.Ee,{alt:c||"",color:"rgb(111, 91, 77)",fit:"cover",naturalHeight:4,naturalWidth:3,src:p})}),!T&&(0,h.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:w?m.hoverOverlay:m.defaultOverlay},height:z,left:!0,position:"absolute",top:!0,width:236}),(0,h.jsx)(O,{children:(0,h.jsx)(o.xv,{align:W,color:y,italic:"italics"===R,weight:U,children:(0,h.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{color:H??void 0,fontSize:D}},children:v})})})]}),!u&&T&&(0,h.jsx)(A,{children:(0,h.jsx)(o.xu,{alignItems:"center",color:"default",dangerouslySetInlineStyle:{__style:{backgroundColor:L}},display:"flex",height:48,justifyContent:"center",paddingX:2,rounding:"pill",children:(0,h.jsx)(o.xv,{weight:"bold",children:(0,h.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{color:N}},children:r})})})})]})}),!T&&(0,h.jsx)(A,{children:(0,h.jsx)(o.ZP,{accessibilityLabel:r,color:"gray",fullWidth:!0,href:e,onClick:E,size:"lg",text:r})})]})}},112390:(e,t,r)=>{r.d(t,{Z:()=>O});var i=r(397210),n=r(785893);function o({slotIndex:e,story:t}){return(0,n.jsx)(i.Z,{isInViewOrNext:!0,item:t.objects?.[0],slotIndex:e,story:t})}var l=r(883119);function s({story:e}){return(0,n.jsxs)(l.xu,{marginBottom:6,children:[(0,n.jsx)(l.xv,{align:"center",size:"500",weight:"bold",children:e.title?.format}),e.objects?.map((t,r)=>n.jsx(l.xu,{marginTop:4,children:n.jsx(i.Z,{component:14269,isInViewOrNext:!0,item:t,slotIndex:r,story:e,view:1,viewParameter:null})},r))]})}var a=r(666472),d=r(766746);function u({slotIndex:e,story:t,surface:r,viewType:i,viewParameter:o}){let s=(0,a.Z)({componentType:t.display_options?.content_display?.component_type,contextLogData:{story_type:t.story_type,content_ids:t.objects?.map(({type:e,id:t})=>`${e??""}:${t??""}`).join("|"),grid_index:e,story_id:t.id,total_object_count:t.objects?.length},impressionType:"Story",loggingId:t.id,slotIndex:e,viewParameter:o,viewType:i});return(0,n.jsx)(l.xu,{ref:s,children:(0,n.jsx)(d.default,{story:t,storyKey:{type:"deprecated",data:t},surface:r})})}var c=r(658190),h=r(667294),p=r(545007),g=r(616550),x=r(214877),m=r(25919);function y({experienceId:e,copy:{buttonText:t,subtitleText:r,titleText:i},path:o,pins:s,placementId:a}){let{logContextEvent:d}=(0,x.v)(),u=(0,p.I0)(),c=(0,g.k6)(),y=(0,m.Ig)(),f=(0,m.be)();(0,h.useEffect)(()=>{d({event_type:13,view_type:1,view_parameter:92,component:200,element:10551}),u(y(a,e,!1,!0))},[]);let v=(e,t)=>{let{height:r,url:i,width:o}=e.images.orig;return(0,n.jsx)(l.xu,{marginStart:0===t?0:2,children:(0,n.jsx)(l.zd,{height:72,rounding:2,width:48,children:(0,n.jsx)(l.Ee,{alt:"",color:"",fit:"cover",naturalHeight:r,naturalWidth:o,src:i})})},e.id)};return(0,n.jsxs)(l.kC,{alignItems:"stretch",dataTestId:"story-landing-page-card",direction:"column",flex:"grow",justifyContent:"start",children:[(0,n.jsx)(l.xu,{paddingY:1,children:(0,n.jsx)(l.X6,{align:"center",size:"400",children:i})}),(0,n.jsx)(l.xu,{paddingY:1,children:(0,n.jsx)(l.xv,{align:"center",children:r})}),(0,n.jsx)(l.xu,{alignItems:"center",display:"flex",justifyContent:"center",marginTop:1,paddingY:2,children:s&&s.map((e,t)=>v(e,t))}),(0,n.jsx)(l.xu,{alignSelf:"center",paddingY:2,children:(0,n.jsx)(l.zx,{fullWidth:!0,onClick:()=>{u(f(a,e,!1,!0)),d({event_type:101,view_type:1,view_parameter:92,component:200,element:10551}),c.push(o)},size:"lg",text:t})})]})}var f=r(140017),v=r(59545),b=r(340523),_=r(983983);function j({buttonAction:e,imageAlt:t,imageHeight:r,imageWidth:i,imageUrl:o,storyAuxData:s,subtitle:a,titleText:d}){let[u,c]=(0,h.useState)(!1),{checkExperiment:p}=(0,b.F)(),{logContextEvent:g}=(0,x.v)(),m=(0,f.ZP)(),{group:y}=p("hfp_homefeed_web_topic_module",{dangerouslySkipActivation:!0}),j=y.includes("pill"),w=y.includes("zoom"),S=(0,h.useRef)(null),C=(0,h.useRef)(null);(0,h.useEffect)(()=>{let e=()=>{if(u&&C.current&&S.current){let e=window.innerHeight-_.cI-424,t=Math.min((e-(C.current.getBoundingClientRect().top-80))/e*.3+1,1.3);S.current.style.transform=`scale(${t})`}};if(w)return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[u,w]);let I=e=>{g({event_type:101,view_type:1,view_parameter:92,component:14103,element:e,aux_data:s})},P=()=>{I(179)},k=()=>I();return(0,n.jsx)(v.Z,{onVisibilityChange:e=>{if(e&&e.length>0){let{intersectionRatio:t}=e[0];c(t>=1)}},options:{threshold:[1]},children:s=>(0,n.jsx)(l.xu,{dangerouslySetInlineStyle:{__style:{paddingBottom:"16px"}},children:(0,n.jsx)(l.Tg,{href:e,onTap:k,children:(0,n.jsx)(l.xu,{ref:s,height:424,width:236,children:o&&(0,n.jsxs)(l.xu,{position:"relative",children:[(0,n.jsx)(l.xu,{ref:C,dangerouslySetInlineStyle:{__style:{borderRadius:j?"200px":"16px",WebkitMaskImage:"-webkit-radial-gradient(white, black)"}},height:424,overflow:"hidden",width:236,children:(0,n.jsx)(l.xu,{ref:S,dangerouslySetInlineStyle:{__style:{transition:"transform ease-in-out .1s"}},height:424,width:236,children:(0,n.jsx)(l.Ee,{alt:t||"",fit:"cover",naturalHeight:r||424,naturalWidth:i||236,src:o})})}),(0,n.jsx)(l.xu,{bottom:!0,color:"inverse",dangerouslySetInlineStyle:{__style:{borderRadius:j?"200px":"16px"}},left:!0,opacity:.5,position:"absolute",right:!0,rounding:4,top:!0}),(0,n.jsxs)(l.xu,{alignItems:"center",bottom:!0,direction:"column",display:"flex",justifyContent:"end",left:!0,paddingX:4,paddingY:j?10:8,position:"absolute",right:!0,top:!0,children:[(0,n.jsx)(l.X6,{align:"center",color:"inverse",size:"500",children:d}),(0,n.jsx)(l.xu,{marginTop:j?2:1,children:(0,n.jsx)(l.xv,{align:"center",color:"inverse",size:"200",children:a})}),(0,n.jsx)(l.xu,{marginTop:j?4:6,children:(0,n.jsx)(l.zx,{color:"white",onClick:P,size:"lg",text:m.bt("Khám phá", "Explore", "homefeed_modules_utils.topic.title.prefix", undefined, true)})})]})]})})})})})}var w=r(444781),S=r(888973),C=r(325362),I=r(536793),P=r(213377),k=r(477458);let E=[{left:"40px",transform:"rotate(-5deg) scale(1.25)",scale:1.2},{top:"12px",left:"-25%",transform:"rotate(2deg)"},{top:"3px",right:"16px",transform:"rotate(5deg)"},{top:"18px",right:"-25%",transform:"rotate(-2deg)"}];function Z({images:e,text:t,url:r}){if(!t||!r||e.length<4)return null;let i=e.slice(0,4),o=t.length<=40?44:t.length<=60?50:34;return(0,n.jsx)(k.q,{children:({hovered:e,onMouseEnter:s,onMouseLeave:a})=>(0,n.jsx)(l.rU,{href:r,onBlur:a,onFocus:s,underline:"none",children:(0,n.jsxs)(l.xu,{onMouseEnter:s,onMouseLeave:a,overflow:"hidden",position:"relative",rounding:4,width:P.yF,children:[(0,n.jsx)(l.xu,{height:"100%",position:"absolute",width:P.yF,zIndex:new l.Ry(-1),children:(0,n.jsx)(l.zd,{height:"100%",wash:!0,width:P.yF,children:(0,n.jsx)(l.xu,{dangerouslySetInlineStyle:{__style:{filter:"blur(15px)",background:`linear-gradient(0deg, var(--wash-opacity-400-white-80, rgba(255, 255, 255, 0.80)) 0%, var(--wash-opacity-400-white-80, rgba(255, 255, 255, 0.80)) 100%), url(${i[0].url}) lightgray 50% / cover no-repeat`,scale:"125%"}},height:"100%",width:P.yF})})}),(0,n.jsx)(l.xu,{dangerouslySetInlineStyle:{__style:{marginTop:o+20}},height:Math.min(170,Math.max(...i.map(({height:e})=>e||1))),position:"relative",children:i.map(({url:e,height:t,width:r,dominant_color:i},o)=>(0,n.jsx)(l.xu,{dangerouslySetInlineStyle:{__style:{border:"1px solid white",...E[o]}},overflow:"hidden",position:"absolute",rounding:2,children:(0,n.jsx)(l.xu,{height:t,maxHeight:130,maxWidth:100,rounding:4,width:r,children:(0,n.jsx)(l.Ee,{alt:"",color:i||"transparent",fit:"cover",naturalHeight:t||1,naturalWidth:r||1,role:"presentation",src:e||""})})},e))}),(0,n.jsx)(l.xu,{marginBottom:8,marginEnd:4,marginStart:4,marginTop:2,children:(0,n.jsx)(l.xv,{color:"dark",lineClamp:4,size:"400",weight:"bold",children:t})}),(0,n.jsx)(l.xu,{color:"dark",height:"100%",opacity:e?.4:0,position:"absolute",top:!0,width:P.yF})]})})})}function M({pins:e,text:t,url:r}){let i=(0,h.useMemo)(()=>{let t=e?.map(e=>e.images?.["236x"]).filter(Boolean).slice(0,7);return t?[{type:"spacer"},t[0],{type:"spacer"},...t.slice(1,7),t[0],t[1],t[2]]:[]},[e]);return t&&r&&e&&!(i.length<9)?(0,n.jsx)(k.q,{children:({hovered:e,onMouseEnter:o,onMouseLeave:s})=>(0,n.jsx)(l.rU,{href:r,onBlur:s,onFocus:o,underline:"none",children:(0,n.jsxs)(l.xu,{onMouseEnter:o,onMouseLeave:s,overflow:"hidden",position:"relative",rounding:4,width:P.yF,children:[(0,n.jsx)(l.xu,{dangerouslySetInlineStyle:{__style:{left:"-23.3%",top:"-25px"}},position:"absolute",width:354,zIndex:new l.Ry(-1),children:(0,n.jsx)(l.Rk,{columnWidth:114,gutterWidth:6,items:i,minCols:3,renderItem:({data:e})=>{if("spacer"===e.type)return(0,n.jsx)(l.xu,{height:19});if(!e)return null;let t=114/(e.width??1),r=(e.height??1)*t;return(0,n.jsx)(l.zd,{height:r,rounding:2,wash:!0,width:114,children:(0,n.jsx)(l.xu,{height:r,width:114,children:(0,n.jsx)(l.Ee,{alt:"",color:e.dominant_color||"transparent",fit:"cover",naturalHeight:e.height||1,naturalWidth:e.width||1,role:"presentation",src:e.url||""})})})}})}),(0,n.jsx)(l.xu,{dangerouslySetInlineStyle:{__style:{marginTop:274}},children:(0,n.jsx)(l.xu,{dangerouslySetInlineStyle:{__style:{background:"var(--wash-opacity-400-white-40, rgba(255, 255, 255, 0.80))",backdropFilter:"blur(15px)"}},padding:4,children:(0,n.jsx)(l.xv,{color:"dark",lineClamp:4,size:"400",weight:"bold",children:t})})}),(0,n.jsx)(l.xu,{color:"dark",height:"100%",opacity:e?.4:0,position:"absolute",top:!0,width:P.yF})]})})}):null}let z={blended_modules_topic_pin_grid_article:14103},T={135:14269,136:14268};function O(e){let{checkExperiment:t}=(0,b.F)(),{itemIdx:r,story:i,surface:l,viewType:d,viewParameter:h}=e,p=(0,a.Z)({componentType:z[i.story_type]||T[i.container_type]||void 0,contextLogData:{story_id:i.id,story_type:i.story_type,...i.aux_fields},impressionType:"Story",loggingId:i.id,slotIndex:r,viewParameter:h,viewType:d});if("blended_modules_topic_pin_grid_article"===i.story_type){let{action:e,custom_properties:t,subtitle:o,title:l}=i;return(0,n.jsx)("div",{ref:p,className:"Module",children:(0,n.jsx)(j,{buttonAction:e.url,imageAlt:t.image_alt,imageHeight:t.height,imageUrl:t.image,imageWidth:t.width,slotIndex:r,storyAuxData:i.aux_fields,storyId:i.id,subtitle:o.format,titleText:l.format})})}switch(i.container_type){case 41:let{copy:g,custom_properties:x,experience:m,objects:f}=i;return(0,n.jsx)("div",{className:"Module","data-test-id":"story-card-container",children:(0,n.jsx)(y,{copy:(0,w.Z)(C.Z)(g),experienceId:m.experience_id,path:x.path,pins:f,placementId:m.placement_id})});case 66:{let{action:e,custom_properties:r,display_options:o,experience:l,objects:s,story_type:a,title:d}=i;if(!["related_query_shop_upsell_search","related_query_shop_upsell_closeup"].includes(a))return(0,n.jsx)("div",{ref:p,className:"Module",children:(0,n.jsx)(c.Z,{buttonAction:e.url,buttonCustomization:r.button_customization,buttonText:e.text,experience:l,hideCompleteButton:r.hide_complete_button,imageAlt:r.image_alt,imageUrl:r.image,openNewTab:r.open_new_tab,storyType:a,titleColor:c.e[o.title_text_color],titleText:d.format,titleTextCustomization:r.title_text_customization,videoPin:r.video_pin,videoPlaceholderImage:r.video_placeholder_image})});{let{anyEnabled:r,group:i}=t("related_query_shop_upsell_search"===a?"shopping_unit_search":"shopping_unit_closeup",{dangerouslySkipActivation:!0});if(!r)return null;let o=s?.map(e=>S.Z({imageSizeToImageMap:e.images,preferredSize:"236x"}));if("enabled_cards"===i)return o?.every(Boolean)?(0,n.jsx)(Z,{images:o,text:d.format,url:e.url}):null;return(0,n.jsx)(M,{pins:s,text:d.format,url:e.url})}}case 135:return(0,n.jsx)("div",{ref:p,className:"Module",children:(0,n.jsx)(s,{slotIndex:r,story:i})});case 136:return(0,n.jsx)("div",{ref:p,className:"Module",children:(0,n.jsx)(o,{slotIndex:r,story:i})});case 90:let v="recently_viewed"===i.story_type?"AuthHomefeedShoppingModule":void 0;return(0,n.jsx)("div",{className:"Module",children:(0,n.jsx)(u,{slotIndex:r,story:i,surface:v??l,viewParameter:h,viewType:d})});case 91:if("blended_module_type_topics_board_recs"===i.story_type||"board_style_pivot"===i.story_type){let e={item:{action:i.action,cover_images:i.objects[0].cover_images,dominant_colors:i.objects[0].dominant_colors,title:i.title,subtitle:i.subtitle,type:"explorearticle"},slotIndex:r,story:i,view:d,viewParameter:h};return(0,n.jsx)("div",{className:"Module",children:(0,n.jsx)(I.Z,{...e})})}return null;default:return null}}},105737:(e,t,r)=>{function i(e,t,r){if(e.length!==t.length)return!1;for(let i=0;i<e.length;i+=1)if(!o(e[i],t[i],r+1))return!1;return!0}function n(e,t,r){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let i in e)if(!(i in t)||!o(e[i],t[i],r+1))return!1;return!0}function o(e,t,r){if(r>=1e3)return!1;if(e===t)return!0;if(null==e||null==t||"object"!=typeof e&&"object"!=typeof t)return e!=e&&t!=t;let o=Object.prototype.toString.call(e);if(o!==Object.prototype.toString.call(t))return!1;switch(o){case"[object Array]":return i(e,t,r);case"[object Set]":return i(Array.from(e).sort(),Array.from(t).sort(),r);case"[object Object]":case"[object Arguments]":return n(e,t,r);case"[object Map]":return n(Object.fromEntries(e),Object.fromEntries(t),r);case"[object RegExp]":return e+""==t+"";case"[object Error]":return e.name===t.name&&e.message===t.message;default:return!1}}function l(e,t){return o(e,t,0)}r.d(t,{ZP:()=>l,qP:()=>i})},541841:(e,t,r)=>{r.d(t,{Z:()=>s});var i=r(667294),n=r(973935);function o(e,t,r){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:String(i))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class l extends i.Component{constructor(...e){super(...e),o(this,"observer",null),o(this,"handleVisibilityChanged",(e,t)=>{this.props.onVisibilityChange(e,t)})}componentDidMount(){let e=n.findDOMNode(this);e instanceof HTMLElement&&(this.node=e),this.node&&(this.observer=new window.IntersectionObserver(this.handleVisibilityChanged,this.props.options),this.observer.observe(this.node))}componentWillUnmount(){this.observer&&(this.observer.unobserve(this.node),delete this.observer)}render(){return i.Children.only(this.props.children)}}let s=l},321329:(e,t,r)=>{r.d(t,{Z:()=>s});var i=r(667294),n=r(179370),o=r(703404),l=r(5859);function s(e){let{mountedPlacements:t,completeExperience:r,dismissExperience:s,experiences:a,fetchAllExperiences:d,fetchAllExperiencesMulti:u,fetchExperienceForPlacements:c,triggerExperimentsForPlacement:h,viewExperience:p}=(0,n.M)(),{isBot:g}=(0,l.B)(),x=e&&!g?(0,o.MQ)(a,t,e):null;return(0,i.useMemo)(()=>({completeExperience:r,dismissExperience:s,experienceForPlacement:x,fetchAllExperiences:d,fetchAllExperiencesMulti:u,fetchExperienceForPlacements:c,triggerExperimentsForPlacement:h,viewExperience:p}),[r,s,x,d,u,c,h,p])}},59545:(e,t,r)=>{r.d(t,{Z:()=>l});var i=r(667294);function n(e,t,r){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:String(i))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class o extends i.Component{constructor(...e){super(...e),n(this,"ref",(0,i.createRef)()),n(this,"observer",null),n(this,"handleVisibilityChanged",(e,t)=>{this.props.onVisibilityChange(e,t)})}componentDidMount(){this.ref&&this.ref.current&&(this.observer=new window.IntersectionObserver(this.handleVisibilityChanged,this.props.options),this.observer.observe(this.ref.current))}componentWillUnmount(){null!==this.observer&&(this.observer.unobserve(this.ref.current),delete this.observer)}render(){return this.props.children(this.ref)}}let l=o},67288:(e,t,r)=>{r.d(t,{P:()=>o,Z:()=>n});var i=r(545007);function n(e){return e&&e[1000069]&&500417===e[1000069].experience_id&&e[1000069].display_data.hide_footer}function o(){let e=(0,i.v9)(({experiences:e})=>e);return!!e&&n(e)}},201417:(e,t,r)=>{r.d(t,{Z:()=>i});function i(e){return"object"==typeof e&&null!==e&&e.constructor===Object&&"[object Object]"===Object.prototype.toString.call(e)}},444781:(e,t,r)=>{r.d(t,{Z:()=>n});var i=r(201417);function n(e,t=!1){let r=(t,r)=>e(r);return e=>(function e(t,r=!1){return n=>{if(!(0,i.Z)(n))return r&&Array.isArray(n)?n.map(e(t,r)):n;let o={};return Object.keys(n).forEach(l=>{let s=t(n[l],l);(0,i.Z)(n[l])||r&&Array.isArray(n[l])?o[s]=e(t,r)(n[l]):o[s]=n[l]}),o}})(r,t)(e)}},888973:(e,t,r)=>{r.d(t,{Z:()=>n});let i=["orig","736x","564x","474x","236x","170x"],n=({imageSizeToImageMap:e,preferredSize:t})=>{let r=e[t];if(r)return{height:r.height,url:r.url,width:r.width};let n=i.indexOf(t);if(n>=0)for(let t=n+1;t<i.length;t+=1){let r=e[i[t]];if(r)return{height:r.height,url:r.url,width:r.width}}return{height:e["236x"]?.height,url:e["236x"]?.url,width:e["236x"]?.width}}},14583:(e,t,r)=>{r.d(t,{Z:()=>o});var i=r(667294),n=r(785893);function o({children:e,fallback:t}){return(0,n.jsx)(i.Suspense,{fallback:t||null,children:e})}},608516:(e,t,r)=>{r.d(t,{Z:()=>i});let i=r(14583).Z},627408:(e,t,r)=>{r.d(t,{Z:()=>y});var i=r(667294),n=r(541841),o=r(901855),l=r(5859),s=r(520893),a=r(503325);let{Provider:d,useMaybeHook:u}=(0,r(342513).Z)("timeSpentContext");var c=r(822987),h=r(19447),p=r(785893);function g(e,t,r){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:String(i))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class x extends i.Component{constructor(e){super(e),g(this,"componentWillUnmount",()=>{this.unregisterComponent()}),g(this,"getContext",()=>{let{clientTrackingParams:e,component:t,element:r,objectId:i,timeSpentContext:n,view:o,viewParameter:l}=this.props;return{view:o||n?.view,viewParameter:l||n?.viewParameter,component:t||n?.component,element:r,objectId:i||n?.objectId,clientTrackingParams:e||n?.clientTrackingParams,getParentUuid:()=>this.getUuid(),getGrandparentUuid:()=>this.getParentId()}}),g(this,"getLoggerContext",()=>{let e={...this.getContext()};return delete e.getParentUuid,e}),g(this,"getParentId",()=>{let{timeSpentContext:e,shouldUseGrandparentId:t=!1}=this.props;if(t&&e&&e.getGrandparentUuid){let t=e.getGrandparentUuid();if(t)return t}return e&&e.getParentUuid?e.getParentUuid():void 0}),g(this,"getUuid",()=>this.state.timedPair?this.state.timedPair.uuid:void 0),g(this,"getTimedPair",()=>this.state.timedPair),g(this,"setTimedPair",(e,t)=>{this.setState({timedPair:e},()=>{t&&t()})}),g(this,"isRegistered",!1),g(this,"registerComponent",()=>{this.props.timeSpentManager.registerComponent(this),this.isRegistered=!0}),g(this,"unregisterComponent",()=>{this.isRegistered&&(this.props.timeSpentManager.unregisterComponent(this),this.isRegistered=!1)}),g(this,"handleVisibilityChange",e=>{let{intersectionRatio:t}=e[0],{bottom:r,left:i,right:n,top:o}=e[0].intersectionRect;t>0?this.registerComponent():0===t&&(0===r&&0===i&&0===n&&0===o?this.unregisterComponent():this.registerComponent())}),this.state={timedPair:new a.Z(this.getLoggerContext())}}componentDidUpdate(e){!this.isRegistered||e.view===this.props.view&&e.viewParameter===this.props.viewParameter&&e.component===this.props.component&&e.element===this.props.element&&e.objectId===this.props.objectId&&(0,s.Z)(e.auxData,this.props.auxData)&&(0,s.Z)(e.viewData,this.props.viewData)||(this.unregisterComponent(),setTimeout(this.registerComponent))}render(){let{children:e}=this.props;return(0,p.jsx)(d,{value:this.getContext(),children:(0,p.jsx)(n.Z,{onVisibilityChange:this.handleVisibilityChange,options:{threshold:0},children:i.Children.only(e)})})}}function m(e){let t=(0,o.Hv)(),r=u(),n=(0,c.w)(),s=(0,h.H0)(),{requestIdentifier:a=""}=(0,l.B)(),d={app_instance_id:a.slice(0,8),...e.auxData??{}};return(0,i.useEffect)(()=>{n?.setHistoryStackContext(t)},[t,n]),(0,i.useEffect)(()=>{n?.setPins(s??{})},[s,n]),n?(0,p.jsx)(x,{...e,auxData:d,timeSpentContext:r,timeSpentManager:n,children:e.children}):e.children}m.displayName="TimeSpent";let y=m},830889:(e,t,r)=>{r.d(t,{Z:()=>l});var i=r(545007);let n=[1000069,1000075],o={};function l(){var e;return e=(0,i.v9)(({experiences:e})=>e),n.forEach(t=>{e[t]&&(void 0===o[t]||o[t].id!==e[t].id)&&(o[t]=e[t])}),o}},118923:(e,t,r)=>{r.d(t,{P:()=>l,b:()=>s});var i=r(340523),n=r(5859),o=r(528252);function l({checkExperiment:e,isAuthenticated:t,isEarlyHydrationEnabled:r}){return r||!!e&&e(t?"web_auth_lazy_component":"web_unauth_lazy_component").anyEnabled}function s(){let{checkExperiment:e}=(0,i.F)(),{isAuthenticated:t}=(0,n.B)();return l({checkExperiment:e,isAuthenticated:t,isEarlyHydrationEnabled:(0,o.z5)()})}},832853:(e,t,r)=>{r.d(t,{Z:()=>a});var i=r(667294),n=r(14583);let{Provider:o,useMaybeHook:l}=(0,r(342513).Z)("LazyComponent");var s=r(785893);function a(e,t,r){let o,a,d;let u=t?.ssr??!0?i.Suspense:n.Z,c=r=>{l(),t?.dynamicRequestKey,a||(a=(0,i.lazy)(()=>e(r)));let n=(0,i.useRef)(o??a).current;return(0,s.jsx)(u,{fallback:r.fallback||t?.fallback,children:(0,s.jsx)(n,{...r})})};function h(t){return d||(d=(async()=>o=(await e(t)).default)()),d}return c.preload=e=>{h(e)},c.load=e=>h(e),c}},528252:(e,t,r)=>{r.d(t,{DB:()=>d,SS:()=>s,WP:()=>o,z5:()=>a});var i=r(667294),n=r(706196);let o=(0,i.createContext)({anyEnabled:!1,group:""}),l={anyEnabled:!1,group:""};function s({experimentsClient:e,isAuthenticated:t,handlerId:r}){let{site:i}=(0,n.ac)(r??"");return"www"!==i?l:e?.checkExperiment(t?"web_early_hydration_auth":"web_early_hydration_unauth")??l}function a(){return(0,i.useContext)(o).anyEnabled}function d(){return(0,i.useContext)(o)}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/33324.vi_VN-2e9d7153e35aa879.mjs.map