"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[6575],{3808:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(667294),i=n(616550),r=n(741983),o=n(340523),s=n(5859),l=n(149722),u=n(961550),m=n(408998),c=n(995026);function d(){let e=(0,l.Z)(),t=(0,o.F)(),{isRTL:n}=(0,s.B)(),d=(0,i.TH)(),p=(0,i.k6)(),_=d.search,h=(0,c.Z)(d)&&!n&&e.isAuth&&!e.isPartner&&!(0,r.OK)(d);return(0,a.useEffect)(()=>{_.includes("enable_vertical_nav")&&((0,m.M)(),p.push("/"),window.location.reload())},[_,p]),{enabled:h&&t.checkExperiment("web_vertical_nav").anyEnabled,group:h?t.checkExperiment("web_vertical_nav").group:u.lR.NONE}}},922719:(e,t,n)=>{n.d(t,{CC:()=>i,Ll:()=>o,XF:()=>r});let a=(e,t,n)=>({x:Math.floor(e*Math.cos(n)),y:Math.floor(t*Math.sin(n))}),i=(e,t)=>a(t/2,e/2,2*Math.random()*Math.PI),r=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,o=e=>["@-webkit-keyframes","@keyframes"].map(t=>e.map(e=>t+" "+e).join("\n")).join("\n")},775089:(e,t,n)=>{n.r(t),n.d(t,{default:()=>M});var a=n(667294),i=n(883119),r=n(214877),o=n(103322);function s(e,t,n){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:String(a))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let l={},u=e=>{let t=e.__id||e.id;return"string"==typeof t&&t||null};class m{constructor(){s(this,"idMap",new Map),s(this,"objMap",new WeakMap)}get(e){let t=u(e);return this.objMap.get(e)??(t?this.idMap.get(t):void 0)}has(e){let t=u(e);return this.objMap.has(e)??(!!t&&this.idMap.has(t))}set(e,t){let n=u(e);n&&this.idMap.set(n,t),this.objMap.set(e,t)}reset(){this.idMap=new Map,this.objMap=new WeakMap}}var c=n(401111),d=n(547643),p=n(667677),_=n(213377),h=n(406893),b=n(340523),f=n(5859),w=n(554786),y=n(953565),v=n(84768),x=n(785893);function g({analyticsData:e,children:t,idx:n,isMeasuring:i,masonryV2ExpName:r,masonryV2ExpGroup:s}){let l=(0,w.ZP)(),{isAuthenticated:u}=(0,f.B)(),m=(0,v.MM)();return(0,a.useEffect)(()=>{if(e.current[n]){let{fetchTimestamp:t,measureTimestamp:a,hasRendered:o,pageCount:c}=e.current[n]??{},d={deviceType:l,experimentName:r,experimentGroup:s,handlerId:m,isAuthenticated:u,pageCount:c};i&&!a&&(e.current[n].measureTimestamp=Date.now(),(0,y.LY)("webapp.masonry.itemMeasureStart",Date.now()-t,{tags:d})),i||o||((0,y.LY)("webapp.masonry.itemRenderStart",Date.now()-a,{tags:d}),e.current[n].hasRendered=!0)}},[i]),(0,x.jsx)(o.Z,{name:"MasonryItem",children:t})}function M(e){let{align:t,cacheKey:n,id:s,isGridCentered:u=!0,items:M,layout:E,loadItems:C,masonryRef:S,optOutFluidGridExperiment:$=!1,renderItem:k,scrollContainerRef:O,virtualize:N=!0,_getColumnSpanConfig:j,_dynamicHeights:R,useLoadingState:T}=e,A=(0,w.ZP)(),{isAuthenticated:I,isRTL:L}=(0,f.B)(),{logContextEvent:W}=(0,r.v)(),D=(0,b.F)(),Z="desktop"===A,P=(0,v.MM)(),B=(0,a.useRef)(M.map(()=>({fetchTimestamp:Date.now(),measureTimestamp:Date.now(),hasRendered:!1,pageCount:0}))),{_loadingStateItems:F,_renderLoadingStateItems:V}=(0,p.Z)({useLoadingState:T}),{experimentalColumnWidth:H,experimentalGutter:z,anyEnabled:G}=(0,c.Z)("flexible"!==E&&!$),Y=e.serverRender??!!Z,U="flexible"===E||"desktop"!==A||G,X=Y?"serverRenderedFlexible":"flexible",J=e.columnWidth??H??_.yF;U&&(J=Math.floor(J));let K=e.gutterWidth??z??(Z?_.oX:1),Q=e.minCols??_.yc,q=(0,a.useRef)(0),ee=J+K,et=function(e){if(null==e)return;let t=function(e){let t=l[e];return t&&t.screenWidth===window.innerWidth||(l[e]={screenWidth:window.innerWidth}),l[e]}(e);return t.measurementCache||(t.measurementCache=new m),t.measurementCache}(n),en=(0,a.useCallback)(()=>O?.current||window,[O]),ea=(0,a.useRef)(!0),{anyEnabled:ei}=D.checkExperiment("web_masonry_ssr_container_query"),er=u&&ea.current?"centered":"",{className:eo,styles:es}=function(e){let t=`m_${Object.keys(e).reduce((t,n)=>{let a=e[n];return null==a||"object"==typeof a||"function"==typeof a?t:"boolean"==typeof a?t+(a?"t":"f"):t+a},"").replace(/\:/g,"\\:")}`,{flexible:n,gutterWidth:a,isRTL:i,itemWidth:r,maxColumns:o,minColumns:s,items:l,_getColumnSpanConfig:u}=e,m=u?l.map((e,t)=>({index:t,columnSpanConfig:u(e)??1})).filter(e=>1!==e.columnSpanConfig):[],c=r+a,d=Array.from({length:o+1-s},(e,t)=>t+s).map(e=>{let l=e===s?0:e*c,u=e===o?null:(e+1)*c-.01,{styles:d,numberOfVisibleItems:p}=m.reduce((i,o)=>{let{columnSpanConfig:s}=o,l=Math.min(function({columnCount:e,columnSpanConfig:t}){return"number"==typeof t?t:t[e<=2?"sm":e<=4?"md":e<=8?"lg":"xl"]??1}({columnCount:e,columnSpanConfig:s}),e),u=null!=o.index&&i.numberOfVisibleItems>=l+o.index,m=n?100/e*l:r*l+a*(l-1),{numberOfVisibleItems:c}=i;return u?c-=l-1:o.index<c&&(c+=1),{styles:i.styles.concat(function({className:e,index:t,columnSpanConfig:n,visible:a,width:i,flexible:r}){let o="number"==typeof n?n:btoa(JSON.stringify(n));return r?`
      .${e} .static[data-column-span="${o}"]:nth-child(${t+1}) {
        visibility: ${a?"visible":"hidden"} !important;
        position: ${a?"inherit":"absolute"} !important;
        width: ${i}% !important;
      }`:`
      .${e} .static[data-column-span="${o}"]:nth-child(${t+1}) {
        visibility: ${a?"visible":"hidden"} !important;
        position: ${a?"inherit":"absolute"} !important;
        width: ${i}px !important;
      }`}({className:t,index:o.index,columnSpanConfig:s,visible:u,width:m,flexible:n})),numberOfVisibleItems:c}},{styles:"",numberOfVisibleItems:e}),_=n?`
      .${t} .static {
        box-sizing: border-box;
        width: calc(100% / ${e}) !important;
      }
    `:`
      .${t} {
        max-width: ${e*c}px;
      }

      .${t} .static {
        width: ${r}px !important;
      }
    `;return{minWidth:l,maxWidth:u,styles:`
      .${t} .static:nth-child(-n+${p}) {
        position: static !important;
        visibility: visible !important;
        float: ${i?"right":"left"};
        display: block;
      }

      .${t} .static {
        padding: 0 ${a/2}px;
      }

      ${_}

      ${d}
    `}}),p=d.map(({minWidth:e,maxWidth:t,styles:n})=>`
    @container (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${n}
    }
  `),_=d.map(({minWidth:e,maxWidth:t,styles:n})=>`
    @media (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${n}
    }
  `),h=e.enableContainerQuery?`
    ${p.join("")}
    @supports not (container-type: inline-size) {
      ${_.join("")}
    }
  `:_.join("");return{className:t,styles:`
    .masonryContainer {
      container-type: inline-size;
    }

    .masonryContainer > .centered {
      margin-left: auto;
      margin-right: auto;
    }

    .${t} .static {
      position: absolute !important;
      visibility: hidden !important;
    }

    ${h}
  `}}({gutterWidth:K,flexible:U,items:M,isRTL:L,itemWidth:J,maxColumns:e.maxColumns??Math.max(M.length,_.g5),minColumns:Q,enableContainerQuery:ei||G,_getColumnSpanConfig:j}),el=`${er} ${eo}`.trim(),{anyEnabled:eu,expName:em,group:ec,isMeasureAllEnabled:ed}=(0,d.Z)(),ep=(0,a.useMemo)(()=>!et||M.every(e=>!et.has(e)),[]),e_=ec&&ep,eh=(0,a.useRef)(),eb=(0,a.useRef)(M.length),ef=(0,a.useRef)(0);(0,a.useEffect)(()=>{e_&&M.forEach((e,t)=>{B.current[t]||(B.current[t]={fetchTimestamp:Date.now(),measureTimestamp:0,hasRendered:!1,pageCount:ef.current})}),eb.current=M.length,ef.current+=1},[M]),(0,a.useEffect)(()=>{ea.current&&(ea.current=!1)},[]),(0,a.useEffect)(()=>{let e=()=>q.current+=1;return e_&&(eh.current=Date.now(),window.addEventListener("scroll",e)),()=>{if(e_){let t=B.current;window.removeEventListener("scroll",e);let n=t.filter(e=>!!e.measureTimestamp).length,a=t.filter(e=>e.hasRendered).length,i=eb.current,r={deviceType:A,experimentName:em,experimentGroup:ec,handlerId:P,isAuthenticated:I};(0,y.LY)("webapp.masonry.timeSpent",eh.current?Date.now()-eh.current:0,{tags:r}),(0,y.S0)("webapp.masonry.itemsFetched",i,{tags:r}),(0,y.S0)("webapp.masonry.itemsMeasured",n,{tags:r}),(0,y.S0)("webapp.masonry.itemsMeasuredPercentage",Math.floor(n/i*100),{tags:r}),(0,y.S0)("webapp.masonry.itemsRendered",a,{tags:r}),(0,y.S0)("webapp.masonry.itemsRenderedPercentage",Math.floor(a/i*100),{tags:r}),(0,y.S0)("webapp.masonry.scrollCount",q.current,{tags:r})}}},[]);let ew=(0,a.useCallback)(e=>e_?(0,x.jsx)(g,{analyticsData:B,idx:e.itemIdx,isMeasuring:e.isMeasuring,masonryV2ExpGroup:ec,masonryV2ExpName:em,children:(0,x.jsx)(o.Z,{name:"MasonryItem",children:k(e)})}):(0,x.jsx)(o.Z,{name:"MasonryItem",children:k(e)}),[k]);return(0,x.jsx)("div",{className:"masonryContainer","data-test-id":"masonry-container",id:s,style:G?{padding:`0 ${K/2}px`}:void 0,children:(0,x.jsxs)("div",{className:el,children:[Y&&ea.current?(0,x.jsx)(h.Z,{"data-test-id":"masonry-ssr-styles",unsafeCSS:es}):null,(0,x.jsx)(i.xu,{"data-test-id":"max-width-container",marginBottom:0,marginEnd:"auto",marginStart:"auto",marginTop:0,maxWidth:e.maxColumns?ee*e.maxColumns:void 0,children:eu?(0,x.jsx)(i.GX,{ref:e=>{S&&(S.current=e)},_dynamicHeights:R,_getColumnSpanConfig:j,_logTwoColWhitespace:e=>{let t=e.reduce((e,t)=>e+t),n=t/e.length;(0,y.S0)("webapp.masonry.twoColWhitespace",n,{sampleRate:1,tags:{columnWidth:J,minCols:Q}}),W({event_type:15878,component:14468,aux_data:{total_whitespace_px:t}}),W({event_type:16062,component:14468,aux_data:{average_whitespace_px:n}}),W({event_type:16063,component:14468,aux_data:{max_whitespace_px:Math.max(...e)}}),e.forEach(e=>{e>=50&&W({event_type:16261,component:14468}),e>=100&&W({event_type:16262,component:14468})})},_measureAll:ed,align:t,columnWidth:J,gutterWidth:K,items:M,layout:U?X:E??"basic",loadItems:C,measurementStore:et,minCols:Q,renderItem:ew,scrollContainer:en,virtualBufferFactor:.3,virtualize:N}):(0,x.jsx)(i.Rk,{ref:e=>{S&&(S.current=e)},_dynamicHeights:R,_getColumnSpanConfig:j,_loadingStateItems:F,_logTwoColWhitespace:e=>{let t=e.reduce((e,t)=>e+t),n=t/e.length;(0,y.S0)("webapp.masonry.twoColWhitespace",n,{sampleRate:1,tags:{columnWidth:J,minCols:Q}}),W({event_type:15878,component:14468,aux_data:{total_whitespace_px:t,average_whitespace_px:n,max_whitespace_px:Math.max(...e),min_whitespace_px:Math.min(...e)}})},_renderLoadingStateItems:V,align:t,columnWidth:J,gutterWidth:K,items:M,layout:U?X:E??"basic",loadItems:C,measurementStore:et,minCols:Q,renderItem:ew,scrollContainer:en,virtualBufferFactor:.3,virtualize:N})})]})})}},401111:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(3808),i=n(340523),r=n(5859),o=n(554786);let s=({isEligible:e})=>{let t=(0,o.ZP)(),{isAuthenticated:n}=(0,r.B)(),s=(0,i.F)(),{enabled:l}=(0,a.Z)();return"desktop"===t&&e?l?{anyEnabled:!0,group:"enabled_221_16"}:s.checkExperiment(n?"web_fluid_grid_desktop_auth":"web_fluid_grid_desktop_unauth"):{group:"",anyEnabled:!1}};function l(e=!0){let{group:t,anyEnabled:n}=s({isEligible:e}),a=t.match(/enabled_([\d]+)_([\d]+)/),i=a?parseInt(a[1],10):void 0,r=a?parseInt(a[2],10):void 0,o=r?Math.floor(r/4):void 0;return{anyEnabled:n,group:t,experimentalColumnWidth:i,experimentalGutter:r,experimentalGutterBoints:o}}},547643:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(340523),i=n(5859),r=n(84768);function o(e){let{isAuthenticated:t}=(0,i.B)(),{expName:n,anyEnabled:o,group:s}=function({experimentsClient:e,handlerId:t,isAuthenticated:n,skipActivation:a}){let{checkExperiment:i}=e,r=i(n?"web_masonry_v2_auth":"web_masonry_v2_unauth",{dangerouslySkipActivation:a});return r.group?{expName:n?"web_masonry_v2_auth":"web_masonry_v2_unauth",...r}:"www/[username]/[slug].js"!==t||n?"www/pin/[id].js"!==t||n?{expName:"",anyEnabled:!1,group:""}:{expName:"web_masonry_v2_unauth_pin",...i("web_masonry_v2_unauth_pin",{dangerouslySkipActivation:a})}:{expName:"web_masonry_v2_unauth_board",...i("web_masonry_v2_unauth_board",{dangerouslySkipActivation:a})}}({experimentsClient:(0,a.F)(),handlerId:(0,r.MM)(),isAuthenticated:t,skipActivation:e?.skipActivation??!1});return{expName:n,anyEnabled:o,group:s,isMeasureAllEnabled:"enabled_measure_all"===s||"enabled_measure_all_impression_fix"===s,isImpressionFixEnabled:"control_impression_fix"===s||"enabled_impression_fix"===s||"enabled_measure_all_impression_fix"===s}}},667677:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(667294),i=n(883119),r=n(876594),o=n(922719),s=n(406893),l=n(785893);let u=`pulsing {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
}`,m={backgroundColor:r._VP,animation:"pulsing 2s ease-out 0.5s infinite",borderRadius:r.Ev2};function c({data:e}){let{height:t}=e;return(0,l.jsxs)(a.Fragment,{children:[(0,l.jsx)(s.Z,{unsafeCSS:(0,o.Ll)([u])}),(0,l.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:m},"data-test-id":"skeleton-pin",children:(0,l.jsx)(i.xu,{height:t})})]})}function d({useLoadingState:e,numOfPins:t=50}){let n=(0,a.useMemo)(()=>Array.from({length:t}).reduce((e,t,n)=>[...e,{height:n%2==0?356:236}],[]),[t]);return{_loadingStateItems:e?n:void 0,_renderLoadingStateItems:e?({data:e})=>(0,l.jsx)(c,{data:e}):void 0}}},961550:(e,t,n)=>{n.d(t,{BO:()=>g,GC:()=>$,GJ:()=>b,L7:()=>_,Lc:()=>c,Mh:()=>u,Qf:()=>m,Qq:()=>S,Un:()=>k,X$:()=>C,Z7:()=>p,bT:()=>y,bd:()=>w,df:()=>d,iz:()=>N,kl:()=>f,lR:()=>O,m6:()=>M,mT:()=>x,pS:()=>v,uW:()=>E,zz:()=>h});var a,i,r=n(883119),o=n(876594),s=n(898518),l=n(983983);let u="right",m=72,c="VerticalNavContent",d=24,p="lg",_=16,h=16,b=392,f=12,w=o.mJW,y=o.Kuk,v=new r.H3([l.NW]),x=new r.Ry(l.fe-3),g=new r.H3([v,s.kl]),M=new r.H3([g]),E=2,C=8,S=3,$=12,k=((a={}).PINTEREST_LOGO="web.vertical_nav.pinterest_logo.click",a.HOME="web.vertical_nav.home.click",a.TODAY="web.vertical_nav.today.click",a.CREATE="web.vertical_nav.create.click",a.NEWS="web.vertical_nav.news.click",a.CONVERSATIONS="web.vertical_nav.conversations.click",a.AVATAR="web.vertical_nav.avatar.click",a.ACCOUNT_SWITCHER="web.vertical_nav.account_switcher.click",a.MORE_OPTIONS_OPT_OUT="web.vertical_nav.more_options.opt_out",a.MORE_OPTIONS="web.vertical_nav.more_options.click",a),O=((i={}).CONTROL="control",i.EMPLOYEES="employees",i.ENABLED="enabled",i.ENABLED_HOME_BUTTON="enabled_home_button",i.ENABLED_HOME_AND_LOGO="enabled_home_and_logo",i.NONE="",i),N=e=>({tags:{experimentGroup:e}})},408998:(e,t,n)=>{n.d(t,{M:()=>r,f:()=>i});var a=n(658583);let i=()=>{a.t8({name:"forced_experiments",purpose:"personalization",httpOnly:!1,duration:"30d"},JSON.stringify({web_vertical_nav:!1}))},r=()=>{a.zN("forced_experiments")}},995026:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(741983);function i(e){return!((0,a.Gl)(e)||(0,a.PY)(e)||(0,a.jC)(e)||(0,a.Xn)(e)||(0,a.b_)(e)||(0,a.oF)(e)||(0,a.dt)(e)||(0,a.x7)(e)||(0,a.cY)(e)||(0,a.bb)(e))}},898518:(e,t,n)=>{n.d(t,{CZ:()=>o,Db:()=>l,Lu:()=>r,kl:()=>a,sb:()=>s,t3:()=>i,to:()=>u});let a=new(n(883119)).Ry(700),i="defaultInboxView",r="newMessageView",o="newMessageSelectRecipientsView",s="invitesRequestsView",l="followInviteEducationView",u=64}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/6575-610b4e6353f56519.mjs.map