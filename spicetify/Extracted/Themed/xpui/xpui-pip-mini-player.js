"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[3667],{72954:(e,t,i)=>{i.d(t,{w:()=>m});var n=i(30758),s=i(97500),a=i.n(s),r=i(62955),o=i(31417),l=i(881),c=i(9547);const d="pvGZ831aNzHTQMZ8CA_u";var u=i(86070);const m=(0,n.memo)((function({onClick:e=(()=>{}),size:t,className:i,uri:s,sharingInfo:m,interactionData:h,ariaLabel:g=o.Ru.get("mwp.list.item.share"),condensedAll:x,placement:p,semanticColor:v,disableTooltip:k}){const{onCopyLink:C}=(0,c.L)({sharingInfo:m,uri:s,interactionData:h}),b=(0,n.useCallback)((()=>{C(),e()}),[e,C]);return(0,u.jsx)(l.a,{ariaLabel:g,size:t,onClick:b,className:a()(d,i),icon:r.C,condensedAll:x,placement:p,condensed:!0,semanticColor:v,disableTooltip:k})}))},67787:(e,t,i)=>{i.d(t,{z:()=>s});var n=i(24653);const s=()=>{const{togglePanel:e,isActive:t}=(0,n.C)();return{isPickerOpen:t,triggerRef:{current:null},toggleDevicePicker(t){e(t)}}}},4041:(e,t,i)=>{i.d(t,{a:()=>g});var n=i(30758),s=i(97500),a=i.n(s),r=i(31417),o=i(64143),l=i(29543),c=i(53133),d=i(60384),u=i(61451),m=i(5805),h=i(86070);const g=({context:e,item:t,className:i,onClick:s=(()=>{})})=>{const{dislikeEndpoint:g,shouldShowFeedbackControls:x}=(0,l.d)(e),{enqueueSnackbar:p}=(0,c.d)(),v=e.metadata?.[u.W.CONTEXT_DESCRIPTION]??"",{setDislikeFeedback:k}=(0,d.I)({uri:t.uri,setFeedbackPath:g,contextUri:e.uri}),C=(0,n.useCallback)((async()=>{k(),p(r.Ru.get("feedback.hide-song",v)),s?.()}),[k,p,v,s]);return(0,m.v)(t)&&x?(0,h.jsx)(o.O,{className:a()(i,{"control-button":!i,"control-button-feedback":!i}),isDisliked:!1,onClick:C}):null}},52450:(e,t,i)=>{i.r(t),i.d(t,{PiPMiniPlayer:()=>Di});var n=i(30758),s=i(97500),a=i.n(s),r=i(14343),o=i(46900),l=i(31417),c=i(33625),d=i(95530),u=i(44119),m=i(58192),h=i(83654),g=i(82909),x=i(82804),p=i(65238),v=i(10856),k=i(42156),C=i(67787),b=i(9856),N=i.n(b);const y=()=>!0===N().getParser(window.navigator.userAgent).satisfies({chrome:">=123",edge:">=127"}),j=()=>{y()&&window.focus()};var f=i(43013),w=i(79237),S=i(69693),B=i(21549),P=i(41434);const R="ZTvigd5RaqxtTdBzGide",D="jxNXLdUZfNhmCuYDbAKP",E="BBABURh2CZ6if4dMvq3j";var L=i(86070);const T=()=>{const{isPlayingRemotely:e,connectionStatus:t,remoteDeviceName:i,remoteDeviceType:n}=(0,w.v)((e=>{const t=(0,f.V)(e);return{isPlayingRemotely:t.isPlayingRemotely,connectionStatus:t.connectionStatus,remoteDeviceName:t.remoteDevice?.name,remoteDeviceType:t.remoteDevice?.type}}),P.a),{spec:s,logger:a}=(0,B.r)(v.s,{}),{triggerRef:r,toggleDevicePicker:o,isPickerOpen:l}=(0,C.z)(),{currentSession:c}=(0,S.D)(),u=Boolean(c?.active);if(!(e&&i&&n)&&!u)return(0,L.jsx)(L.Fragment,{});const m=(0,k.$A)(n||"unknown",t);return(0,L.jsxs)("div",{className:R,children:[(0,L.jsx)(m,{size:"xsmall",className:D,role:"presentation",semanticColor:"textPositive"}),(0,L.jsx)(g.r,{title:i,children:(0,L.jsx)(p.Y,{component:"button",onClick:()=>{const e=s.activeDeviceButtonFactory(),{interactionId:t}=a.logInteraction(l?e.hitUiHide():e.hitUiReveal());o(t),j()},ref:r,className:E,semanticColor:"textPositive",children:(0,L.jsx)(d.E,{variant:"bodySmall","aria-live":"polite",semanticColor:"textPositive",children:i})})},"context-item-connection-status")]})};var I=i(58110),M=i(13464),O=i(48555),A=i(29543),F=i(87182),z=i(25357),W=i(24620),U=i(85907);const _=({uri:e,spec:t,logger:i})=>{const s=(0,n.useRef)(e);s.current=e;const a=(0,F.z)(),r=(0,n.useMemo)((()=>t.playerControlsFactory()),[t]),o=(0,n.useCallback)((e=>{let t=null;"pause"===e?t=r.playPauseButtonFactory().hitPause({itemToBePaused:s.current}):"resume"===e&&(t=r.playPauseButtonFactory().hitResume({itemToBeResumed:s.current})),t&&i.logInteraction(t)}),[i,r]),l=(0,n.useCallback)((e=>{const t=r.likeButtonFactory(),n=e?t.hitLike({itemToBeLiked:s.current}):t.hitRemoveLike({itemNoLongerLiked:s.current});i.logInteraction(n)}),[i,r]),c=(0,n.useCallback)((()=>{const e=a.getState();if(!e)return;const t=r.previousButtonFactory().hitSkipToPrevious(H(e));i.logInteraction(t)}),[i,a,r]),d=(0,n.useCallback)((()=>{const e=a.getState();if(!e)return;const t=r.nextButtonFactory().hitSkipToNext(H(e));i.logInteraction(t)}),[i,a,r]),u=(0,n.useCallback)((e=>{const t=r.repeatButtonFactory();let n=null;switch(e){case z.p.REPEAT_TRACK:n=t.hitRepeatOneEnable();break;case z.p.REPEAT_CONTEXT:n=t.hitRepeatEnable();break;case z.p.REPEAT_NONE:n=t.hitRepeatDisable();break;default:(0,U.k)(e)}n&&i.logInteraction(n)}),[i,r]),m=(0,n.useCallback)((e=>{const t=e?"shuffle":"linear",n=e?"linear":"shuffle",a=r.shuffleButtonFactory({uri:s.current}).hitSelectShuffleMode({previousMode:n,selectedMode:t});i.logInteraction(a)}),[i,r]),h=(0,n.useCallback)((e=>{const t=r.volumeMuteButtonFactory();i.logInteraction("muted"===e?t.hitMutePlayback():t.hitUnmutePlayback())}),[i,r]),g=(0,n.useCallback)((e=>{const t=r.volumeBarFactory();i.logInteraction(t.hitSetVolume({newVolumePercentage:V(e)}))}),[i,r]),x=(0,n.useCallback)((e=>{const t=r.volumeBarFactory();i.logInteraction(t.dragSetVolume({newVolumePercentage:V(e)}))}),[i,r]),p=(0,n.useCallback)((e=>{const t=r.seekBackwardButtonFactory();i.logInteraction(t.hitSeekByTime({msSeekedOffset:e}))}),[i,r]);return{onClickSeekForward:(0,n.useCallback)((e=>{const t=r.seekForwardButtonFactory();i.logInteraction(t.hitSeekByTime({msSeekedOffset:e}))}),[i,r]),onClickSeekBack:p,onClickPlayPause:o,onClickLike:l,onClickSkipPrevious:c,onClickSkipNext:d,onClickRepeat:u,onClickShuffle:m,onClickVolumeButton:h,onClickVolumeBar:g,onDragVolumeBar:x,onClickShare:(0,n.useCallback)((()=>{const e=r.shareButtonFactory({uri:s.current});i.logInteraction(e.hitCopyToClipboard())}),[i,r]),onClickProgressBar:(0,n.useCallback)((e=>{const t=r.progressBarFactory();i.logInteraction(t.hitSeekToTime({msToSeekTo:e}))}),[i,r]),onDragProgressBar:(0,n.useCallback)((e=>{const t=r.progressBarFactory();i.logInteraction(t.dragSeekToTime({msToSeekTo:e}))}),[i,r])}};function H(e){return{itemToBeSkipped:e.item?.uri||"",positionMs:(0,W.s)(e)??-1,totalContentMs:e.duration??-1}}function V(e){return Math.floor(100*e)}var Z=i(16514),q=i(70521),K=i(29997),Q=i(45627),J=i(5805);const Y="d_srhjvwD_GUA3bcCWe4",X="Y1sIRIE9_S2jPP9L89qs",G="_qTFf4L4feIZxZ9RCcca",$="xLVzUYXestVWzpfiOPxA",ee="alofN0D4rOdnu0Y6xfcw",te="iKzG3nPAIAbL5CZAbKJU",ie="b6HgoPaw7SCowvemSx0g",ne="qFpig0a2GKNJnWJFd1db",se="PuRqtCWIESfTs0d2dULt",ae="fEVqL0T4qWVkozlVqGcy",re="lcyebQsHz0j8IkDXTAlB",oe="enGtDaA6WTTvIFhZz1wz",le="Kj0qWPCL3_VrCWRyNrMD",ce="Jo4RE0VhDecfPElNZucO";let de=function(e){return e.xs="small",e.sm="medium",e.md="large",e}({});const ue=({item:e,spec:t,logger:i,size:n=de.xs,className:s})=>{const r=e.uri,o=(0,K.X)(),l=(0,c.L)(),d=l?.context,{shouldShowFeedbackControls:u}=(0,A.d)(d),{onClickLike:m}=_({uri:r,spec:t,logger:i});return(0,J.v)(e)&&d?o&&(0,q.N)(e)?(0,L.jsx)("div",{className:ce,children:(0,L.jsx)(Z.o,{contextUri:e.metadata?.context_uri,id:e.uid??void 0,uri:e.uri,isActive:!0})}):(0,L.jsxs)("div",{className:le,children:[(0,L.jsx)(O.a,{context:d,item:e}),(0,L.jsx)(M.b,{size:u?de.xs:n,uri:r,onClick:m,className:a()(re,s),showDelayOnHover:1e3,isMiniPlayer:!0})]}):(0,Q.p)(e)?(0,L.jsx)(I.b,{size:n,uri:r,onClick:m,className:a()(re,s),condensed:!0}):null};var me=i(82992),he=i(62642),ge=i(75497);const xe="yb0n1ZOvcsGEP6MtzpHw",pe="wigNir143xMt4ihKMqrK",ve="jbCLA5mslXPNLClPNh8h",ke="srBfv7LB0I9QnzxBpeTV",Ce="V2fqnNTxbJBIOeX14ZFW",be="N5WQok6ioU_Dmf0F0O31",Ne="NZlJ5gYuUaWvALQ2gGfg",ye="r5_6Dsophi0MbO6WWawA",je="kWWqvihyBXMNH5W5rCwb",fe="CsqhW5xDG4TO3VV20IZJ";const we=({item:e,onClick:t,className:i,isSmallWidth:n})=>{const{spec:s,logger:r}=(0,B.r)(o.w,{}),l=(0,ge.N)(e)?u.Q.getAdTitle(e)??e.name:e.name,c=(0,ge.N)(e)?u.Q.getAdSubtitle():e.name,p=(0,me.K)(),v=function(e){switch(e){case"SMALL":return{title:"bodySmall",subtitle:"marginal"};case"MEDIUM":return{title:"bodyMedium",subtitle:"bodySmall"};default:return{title:"titleSmall",subtitle:"bodySmall"}}}(p.vertical),k="SMALL"===p.vertical,{connectionStatus:C}=(0,w.v)((e=>({connectionStatus:(0,f.V)(e).connectionStatus})),P.a);return(0,L.jsxs)("div",{className:a()(xe,i),children:[(0,L.jsx)("div",{className:Ce,children:(0,L.jsxs)(g.r,{title:l,children:[(0,L.jsx)(d.E,{"data-testid":"context-item-info-title",as:"div",variant:v.title,className:be,dir:"auto",children:(0,L.jsx)(h.R,{item:e,onClick:t,adUrl:(0,ge.N)(e)?e.url:void 0,children:l})}),C===he.zP.CONNECTED&&(0,L.jsxs)(d.E,{"data-testid":"context-item-info-subtitles",as:"div",variant:v.title,className:a()(k?Ne:ke,be),semanticColor:"textSubdued",children:[(0,L.jsx)("span",{className:a()(ye,{[je]:!k}),children:"•"}),(0,L.jsx)(m.n,{item:e,onClick:t})]})]},`${e.uri}-context-item-info-title`)}),(0,L.jsx)(x.l,{className:fe,item:e,size:k?"xsmall":"small",variant:k?"marginal":"bodySmall",enableVideoButton:!0,isSmallWidth:n}),(0,L.jsx)("div",{className:Ne,children:C===he.zP.CONNECTED?(0,L.jsx)(T,{}):(0,L.jsx)(g.r,{title:c,children:(0,L.jsx)(d.E,{"data-testid":"context-item-info-subtitles",as:"div",variant:v.subtitle,className:Ne,semanticColor:"textSubdued",children:(0,L.jsx)(m.n,{item:e,onClick:t})})},`${e.uri}-context-item-info-subtitles`)}),!k&&!(0,ge.N)(e)&&(0,L.jsx)("div",{className:pe,children:(0,L.jsx)("div",{className:ve,children:(0,L.jsx)(ue,{item:e,spec:s,logger:r,size:de.sm})})})]})};var Se=i(85387),Be=i(86677),Pe=i(65503),Re=i(54454),De=i(82432),Ee=i(19329);const Le="U7qJ1UbUI0C76xXqYVQY",Te="wSLUJtAztEeB6cSHzEjf",Ie="ivh1pWB_obHbkRTZRwlA",Me="giy3mj7QBOoIdj6wwTpe",Oe="FZZUfZ2ShpHjnzy_P6Kb",Ae="CppZQsRDE7tQVl_Uo22Y";i(28145),i(48261);const Fe=n.memo((({spec:e,logger:t})=>{const{openURLWithSessionTransfer:i}=(0,Ee.L)(),s=(0,De.D)("loggedin_upgrade_button"),a=(0,Se.Zp)(),r=(0,Re.k)(),{url:o,isExternal:c}=r,u=(0,n.useCallback)((()=>{let n;!1===c?(a("/premium"),n=e.upsellComponentFactory().upsellButtonFactory().hitUiNavigate({destination:"/premium"})):(i(s(o),"_blank"),n=e.upsellComponentFactory().upsellButtonFactory().hitNavigateToExternalUri({destination:o})),t.logInteraction(n)}),[c,t,a,e,i,s,o]);return(0,L.jsx)("div",{className:Le,children:(0,L.jsxs)("div",{className:Te,children:[(0,L.jsx)(d.E,{variant:"titleSmall",dir:"auto",className:Ie,children:l.Ru.get("web-player.pip-mini-player.upsell.title")}),(0,L.jsx)(d.E,{variant:"bodySmall",semanticColor:"textSubdued",className:Me,children:l.Ru.get("web-player.pip-mini-player.upsell.subtitle")}),(0,L.jsxs)("div",{className:Ae,children:[(0,L.jsx)(Be.$,{onClick:u,size:"small",children:l.Ru.get("web-player.pip-mini-player.upsell.cta-button")}),(0,L.jsx)(Pe.H,{size:"small",onClick:()=>{const e=window.documentPictureInPicture?.window;e&&e.resizeTo(e.outerWidth-e.innerWidth+300,e.outerHeight-e.innerHeight+300)},className:Oe,children:l.Ru.get("action-trigger.button.not-now")})]})]})})}));var ze=i(39148),We=i(21082);const Ue="document-pip-hover-element",_e="document-pip-cover-art",He="document-pip-cover-art-placeholder";var Ve=i(24723),Ze=i(29778);function qe(e,t,i,n){try{if(!e)return i;const s=getComputedStyle(e);if(!s)return i;const a=s.getPropertyValue(t),r=parseInt(a.replace(n,""),10);return isNaN(r)?i:r}catch(e){return i}}var Ke=i(38501),Qe=i(97844),Je=i(22984),Ye=i(27102),Xe=i(82935);const Ge="wF7I8x6BNoB5TCxuQM6p",$e="mTVLkxm92ETj9KUKj6We",et="_ZzrZWfp7kDAE2lh9_Wc",tt="Z7EJBI5IBlrJ1ze7IeeW",it="v5BmE36Bbgt7MSjmR6Xc",nt="CAQW4b5xnSED1cuM6jcp",st="Pvgy7FmdedDiDBpWdtwf",at="GSgApqjTNqV1hBpu3zeT",rt="cRGZivJEkNn8_Q7kaHpT",ot="jOhwShRZLQkG51TckxOL",lt="Jgem6BNDvKfWTBl3cX4W",ct="ePoosDhdXDFF4p3vqKLd",dt="QGE_nRKg4bMbNKF_e7PM",ut="ddMrU_P5vADrfZCD5KQP",mt="x591ODwZ11KBAWKS6SiE",ht="yyE7Kg8ClZLrYU03bSoA",gt="GJYNq4mAAnZScLzJPrZb",xt="mBYWBXnQ_1G3IS2q0zUM",pt="F7RVFhPYBKleXl4ulrwe",vt="Q4qOSqJZ_dfNRxOBhsGE",kt="hix4I_WU5iQPehn_m5h2",Ct="gOpH1qSy5WZp_dGqBjSO",bt="ZeSR2WPUGMRnwFnGoYp3",Nt="NEKBj5FX847wFAhR57Bm",yt="dahc71cxY4Nzk6ebA2ZW",jt="vYL9B3OtXRb7_BrVMqPs",ft="dJY9K_yl2SIFh2sQav8J",wt="B62SqNdB5yicbOhkDWDy",St="ixLnBGpFXBDXJBwJAFN2",Bt="xG6CoSo4Qt0PDw74JLdM",Pt="COvUYZFLWyAYMoZxYBWV",Rt="gDC7KBL5Cbad2gkb2ECA",Dt="YjoaIyvleWu6L_m3iqwr",Et="UqNXNAlAlrI35gbbTIlL",Lt="JWR17pOvN2l0NGHVAi9Q",Tt="RwUrgB_h_amNMENcAmKM",It="UuWUqZ0KXYAc2I1R_tdl";const Mt=({item:e,imageUrl:t})=>{const i=(0,ze.b)(e),n=(0,L.jsx)(Je._,{className:mt,src:t,loading:"eager",testid:_e,children:(0,L.jsx)("div",{className:ht,children:(0,L.jsx)(Qe.s,{size:"xlarge",type:e.type,"data-testid":He})})});return i.url?(0,L.jsx)(We.N,{className:ut,to:i.url,children:n}):n},Ot=()=>{const{item:e,context:t}=(0,c.L)()??{},i=(0,n.useMemo)((()=>(0,Xe.h)(e?.images??void 0,{desiredSize:640,desiredLabel:"large"})),[e?.images,640]),s=(0,f.l)(),o=(0,r.NC)(Ke.a4n),{isYourDJNarrator:l}=(0,Ze.CV)(),d=(0,n.useRef)(null),u=(0,n.useCallback)((()=>{if(!d.current)return;const e=d.current?.children[0];if(!e)return;const{offsetWidth:t,offsetHeight:i}=d.current;let n=Math.min(t,i);n=Math.min(n,640),1===qe(e,"--extra-padding",0,"")&&(n-=Math.max(Math.min(.1*n,64),12)),e.width=e.height=n}),[]),m=(0,Ye.ox)();(0,n.useEffect)((()=>(m?.addEventListener("resize",u),()=>{m?.removeEventListener("resize",u)})),[u,m]);const h=e&&function(e){return"video"===e.mediaType||"mixed"===e.mediaType}(e),g=(0,ge.N)(e);let x=!h;!h||!s&&o||(x=!0);const p=(0,n.useMemo)((()=>x&&!g&&y()),[g,x]);let v;v=l?(0,L.jsx)(Ve.aU,{}):g?(0,L.jsx)(Mt,{item:e,imageUrl:i}):(0,L.jsx)(Je._,{className:mt,src:i,loading:"eager",testid:_e,children:(0,L.jsx)("div",{className:ht,children:(0,L.jsx)(Qe.s,{size:"xlarge",type:e?.type,"data-testid":He})})});const k=(0,n.useCallback)((()=>{p&&j()}),[p]),C=(0,n.useCallback)((e=>{"Enter"===e.key&&k()}),[k]);return e&&t&&x?(0,L.jsx)("div",{className:a()(ct,{[dt]:p}),ref:e=>{d.current=e,u()},role:"button",tabIndex:p?0:-1,onClick:k,onKeyDown:C,children:v}):null};var At=i(83812),Ft=i(82846);const zt="_VL_FbQlIp3QJVkhobVP",Wt="QXzDLfTNA9Jec6iN3jCK",Ut=({children:e,hideBackground:t})=>{const i=(0,Ft.w)({contrast:"highContrast"}),n=(0,Ft.w)({contrast:"minContrast"});return(0,L.jsx)("div",{className:a()(zt,{[Wt]:!t&&i&&n}),"data-testid":"pip-hover-element",style:{"--background-base":i?.["--background-base"],"--background-base-min-contrast":n?.["--background-base"]},children:e})},_t="Y8QW_i_NBCdoV5J6qE6w",Ht="xcYkdasLqYE_e5pNhWAd",Vt=({children:e,hideBackground:t})=>(0,L.jsx)("div",{className:a()(_t,{[Ht]:!t}),"data-testid":"pip-hover-element",children:e}),Zt=({children:e,hideBackground:t})=>(0,L.jsx)(At.u,{property:Ke.HO,renderOldExperience:()=>(0,L.jsx)(Vt,{hideBackground:t,children:e}),renderNewExperience:()=>(0,L.jsx)(Ut,{hideBackground:t,children:e})});var qt=i(15327),Kt=i(233),Qt=i(7315),Jt=i(29195),Yt=i(31193),Xt=i(909),Gt=i(92849),$t=i(95752);const ei=()=>(0,L.jsx)("svg",{width:"7",height:"8",viewBox:"0 0 7 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:it,children:(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.37397 1.94965C6.60829 1.71534 6.60829 1.33544 6.37397 1.10113C6.13966 0.866812 5.75976 0.866812 5.52544 1.10113L3.47461 3.15196L1.42422 1.10157C1.18991 0.86726 0.81001 0.86726 0.575695 1.10158C0.341381 1.33589 0.341381 1.71579 0.575695 1.9501L2.62608 4.00049L0.575696 6.05087C0.341381 6.28519 0.341381 6.66509 0.575696 6.8994C0.81001 7.13372 1.18991 7.13372 1.42422 6.8994L3.47461 4.84902L5.52544 6.89985C5.75976 7.13416 6.13966 7.13416 6.37397 6.89985C6.60829 6.66554 6.60829 6.28564 6.37397 6.05132L4.32314 4.00049L6.37397 1.94965Z",fill:"#912616"})}),ti=n.memo((({className:e})=>"SMALL"!==(0,me.K)().vertical?(0,L.jsx)(qt.U,{className:e}):(0,L.jsx)(Kt.M,{className:e}))),ii=({className:e})=>{const{setVideoPlayerUIFlag:t}=(0,Yt.d)(),{onClick:i}=(0,Gt.D)({}),s=(0,n.useCallback)((()=>{t(Xt.n.documentPip,!1),i()}),[t,i]),r=(0,Jt.mv)();return(0,L.jsxs)("div",{style:{display:"var(--mini-player-drag-display)"},className:a()(e,et),children:[(0,L.jsx)("button",{className:tt,onClick:s,children:r.operatingSystem===$t.f.macOS?(0,L.jsx)(ei,{}):(0,L.jsx)(Qt.M,{size:"xsmall",className:it})}),(0,L.jsx)(ti,{className:st}),(0,L.jsx)("div",{className:nt})]})};var ni=i(85172),si=i(40638),ai=i(97827),ri=i(7259),oi=i(22726),li=i(72954),ci=i(99701);const di=({onClick:e,item:t,className:i,showDelayOnHover:n})=>(0,L.jsx)(ci.Zp,{label:(0,oi.gHQ)(t.uri)?l.Ru.get("context-menu.copy-episode-link"):l.Ru.get("context-menu.copy-track-link"),showDelay:n,children:(0,L.jsx)("div",{className:a()(i),children:(0,L.jsx)(li.w,{sharingInfo:null,uri:t.uri,onClick:e,size:"small",interactionData:{type:"click",intent:"share"},disableTooltip:!0,ariaLabel:(0,oi.gHQ)(t.uri)?l.Ru.get("context-menu.copy-episode-link"):l.Ru.get("context-menu.copy-track-link"),className:te})})});var ui=i(56507),mi=i(32277),hi=i(13947);const gi=n.memo((({pipWindowSize:e,item:t,spec:i,logger:n,direction:s,volumeIconRef:r})=>{const{onClickPlayPause:o,onClickVolumeButton:l,onClickVolumeBar:c,onDragVolumeBar:d,onClickSeekBack:u,onClickSeekForward:m}=_({uri:t.uri,spec:i,logger:n}),h=(0,si.YQ)(d,500,{leading:!1,trailing:!0});return"DEFAULT"===e.vertical?(0,L.jsx)(ai.v3,{onClick:m,className:Y}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("div",{className:ft,children:(0,L.jsx)(ri.M,{mode:ri.V.SHOW_SLIDER_ON_HOVER,sliderSize:80,sliderDirection:s,onToggleMuteClick:l,onVolumeBarClick:c,onVolumeBarDrag:h,className:Y,volumeIconRef:r,isMiniPlayer:!0,showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:jt,children:(0,L.jsx)(ai.hC,{onClick:u,className:Y,showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:Nt,children:(0,L.jsx)(ai.xJ,{onClick:o,className:a()(Y,oe),showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:yt,children:(0,L.jsx)(ai.v3,{onClick:m,className:Y,showDelayOnHover:1e3})})]})})),xi=n.memo((({item:e,spec:t,logger:i,pipWindowSize:n,direction:s,volumeIconRef:r})=>{const{onClickPlayPause:o,onClickSkipPrevious:l,onClickSkipNext:c,onClickVolumeButton:d,onClickVolumeBar:u,onDragVolumeBar:m,onClickSeekBack:h,onClickSeekForward:g,onClickShare:x}=_({uri:e.uri,spec:t,logger:i}),p=(0,si.YQ)(m,500,{leading:!1,trailing:!0}),v="SMALL"===n.vertical,k="DEFAULT"===n.vertical,C="SMALL"===n.horizontal,b=k&&!C;return(0,L.jsxs)(L.Fragment,{children:[v&&(0,L.jsx)("div",{className:jt,children:(0,L.jsx)("div",{className:X,children:(0,L.jsx)(ue,{item:e,spec:t,logger:i,className:a()(Y,re,"encore-base-set")})})}),(0,L.jsx)("div",{className:wt,children:(0,L.jsx)(ri.M,{mode:ri.V.SHOW_SLIDER_ON_HOVER,sliderSize:80,sliderDirection:v?"horizontal":s,onToggleMuteClick:d,onVolumeBarClick:u,onVolumeBarDrag:p,className:Y,volumeIconRef:r,isMiniPlayer:!0,showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:ft,children:(0,L.jsx)(ai.hC,{onClick:h,className:se,showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:Bt,children:(0,L.jsx)(ai.dQ,{onClick:l,className:ie,showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:Nt,children:(0,L.jsx)(ai.xJ,{iconSize:b?"medium":"small",onClick:o,className:a()(Y,oe),showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:St,children:(0,L.jsx)(ai.$K,{onClick:c,className:ne,showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:yt,children:(0,L.jsx)(ai.v3,{onClick:g,className:ae,showDelayOnHover:1e3})}),!v&&(0,L.jsx)(di,{item:e,onClick:x,className:Y,showDelayOnHover:1e3}),v&&(0,L.jsx)("div",{className:Pt,children:(0,L.jsx)(di,{item:e,onClick:x,className:Y,showDelayOnHover:1e3})})]})})),pi=n.memo((({item:e,spec:t,logger:i,pipWindowSize:n,direction:s,volumeIconRef:r})=>{const{onClickPlayPause:o,onClickSkipPrevious:l,onClickSkipNext:c,onClickVolumeButton:d,onClickVolumeBar:u,onDragVolumeBar:m,onClickShuffle:h,onClickRepeat:g,onClickShare:x}=_({uri:e.uri,spec:t,logger:i}),p=(0,si.YQ)(m,500,{leading:!1,trailing:!0}),v="SMALL"===n.vertical,k="DEFAULT"===n.vertical,C="SMALL"===n.horizontal,b=k&&!C;return(0,L.jsxs)(L.Fragment,{children:[v&&(0,L.jsx)("div",{className:X,children:(0,L.jsx)("div",{className:jt,children:(0,L.jsx)(ue,{item:e,spec:t,logger:i,className:a()(Y,re,"encore-base-set")})})}),!v&&(0,L.jsx)("div",{className:wt,children:(0,L.jsx)(ri.M,{mode:ri.V.SHOW_SLIDER_ON_HOVER,sliderSize:80,sliderDirection:s,onToggleMuteClick:d,onVolumeBarClick:u,onVolumeBarDrag:p,className:Y,volumeIconRef:r,isMiniPlayer:!0,showDelayOnHover:1e3})}),v&&(0,L.jsx)("div",{className:wt,children:(0,L.jsx)(ri.M,{mode:ri.V.SHOW_SLIDER_ON_HOVER,sliderSize:80,sliderDirection:"horizontal",onToggleMuteClick:d,onVolumeBarClick:u,onVolumeBarDrag:p,className:Y,volumeIconRef:r,isMiniPlayer:!0,showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:a()(Bt,Y),children:(0,L.jsx)(mi.w,{renderEnabled:()=>(0,L.jsx)(ui.a,{size:"small",withSnackbar:!1,className:$,showDelayOnHover:1e3}),renderDisabled:()=>(0,L.jsx)(ai.uP,{onClick:h,className:$,showDelayOnHover:1e3})})}),(0,L.jsx)("div",{className:ft,children:(0,L.jsx)(ai.dQ,{onClick:l,className:G,showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:Nt,children:(0,L.jsx)(ai.xJ,{iconSize:b?"medium":"small",onClick:o,className:a()(Y,oe),showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:yt,children:(0,L.jsx)(ai.$K,{onClick:c,className:G,showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:St,children:(0,L.jsx)(ai.s_,{onClick:g,className:ee,showDelayOnHover:1e3})}),!v&&(0,L.jsx)(di,{item:e,onClick:x,className:Y,showDelayOnHover:1e3}),v&&(0,L.jsx)("div",{className:Pt,children:(0,L.jsx)(di,{item:e,onClick:x,className:Y,showDelayOnHover:1e3})})]})})),vi=n.memo((({item:e,spec:t,logger:i})=>{const s=e.uri,[a,r]=n.useState("vertical"),o=n.useRef(null),l=(0,me.K)();if(n.useEffect((()=>{if(o.current){const e=o.current.getBoundingClientRect().top;r(e-26<80?"horizontal":"vertical")}}),[l.height]),!s)return null;if((0,ge.N)(e))return(0,L.jsx)(gi,{item:e,spec:t,logger:i,pipWindowSize:l,direction:a,volumeIconRef:o});const c=function(e){if((0,Q.p)(e)||(0,hi.d)(e))return"audio"===e.mediaType||"mixed"===e.mediaType;return!1}(e);return c?(0,L.jsx)(xi,{item:e,spec:t,logger:i,pipWindowSize:l,direction:a,volumeIconRef:o}):(0,L.jsx)(pi,{item:e,spec:t,logger:i,pipWindowSize:l,direction:a,volumeIconRef:o})}));var ki=i(85771);const Ci=n.memo((({item:e,spec:t,logger:i,onDragEnd:s,onDragStart:a})=>{const r=e.uri,{onClickProgressBar:o,onDragProgressBar:l}=_({uri:r,spec:t,logger:i}),c=(0,n.useCallback)(((e,t)=>{switch(t){case"drag":return l(e);case"hit":return o(e);default:return(0,U.k)(t)}}),[o,l]);return(0,L.jsx)(ki.x,{isPreview:!1,onChange:c,onDragStart:a,onDragEnd:s,timerPlacement:"above"})}));function bi(e){if(!e)return null;return{width:e.innerWidth,height:e.innerHeight}}var Ni=i(42878);var yi=i(19616),ji=i(53133),fi=i(83158),wi=i(37948),Si=i(33449),Bi=i(5179),Pi=i(50671);const Ri=()=>(0,L.jsxs)("svg",{className:It,width:"9",height:"9",viewBox:"0 0 9 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,L.jsx)("line",{x1:"0.823223",y1:"8.82322",x2:"8.82322",y2:"0.823223",stroke:"#727272",strokeWidth:"0.5"}),(0,L.jsx)("line",{x1:"4.82322",y1:"8.82322",x2:"8.82322",y2:"4.82322",stroke:"#727272",strokeWidth:"0.5"})]}),Di=(0,n.memo)((()=>{const e=(0,n.useRef)(null),[t,i]=(0,n.useState)(!1),s=(0,me.K)(),d="SMALL"===s.vertical,u="SMALL"===s.horizontal,[m,h]=(0,n.useState)(null),[g,x]=(0,n.useState)(null),p=(0,n.useRef)(null),[v,k]=(0,n.useState)(!1),{item:C,context:b}=(0,c.L)()??{},N=640,f="xlarge",w=(0,r.NC)(Ke.Ln9),S=(0,n.useMemo)((()=>(0,Xe.h)(C?.images??void 0,{desiredSize:N,desiredLabel:f})),[C?.images,N]),P=(0,Bi.H)(),R=(0,wi.z)(S,"transparent"),D=(0,r.NC)(Ke.a4n);(0,fi.M)({desiredSize:N,desiredLabel:f});const{spec:E,logger:T}=(0,B.r)(o.w,{});(({spec:e,logger:t})=>{const i=(0,Ye.ox)(),s=(0,n.useRef)(null);null===s.current&&(s.current=bi(i)),(0,Ni.s)((()=>{const n=bi(i);null!==n&&null!==s.current&&(t.logInteraction(e.dragUiResize2d({startWidthPx:s.current.width,startHeightPx:s.current.height,endWidthPx:n.width,endHeightPx:n.height})),s.current=n)}),{throttleTime:500,leading:!1,trailing:!0})})({logger:T,spec:E}),(({spec:e,logger:t,pipWindow:i})=>{(0,n.useEffect)((()=>{if(!i)return;const n=n=>{if(n.currentTarget===i){const i=e.windowControlsFactory().closeButtonFactory().hitUiHide();t.logInteraction(i)}};return i.addEventListener("pagehide",n),()=>{i.removeEventListener("pagehide",n)}}),[t,i,e])})({logger:T,spec:E,pipWindow:window.documentPictureInPicture?.window??null});const{setVideoPlayerUIFlag:I}=(0,Yt.d)(),[M,O]=(0,n.useState)("");(0,n.useLayoutEffect)((()=>{O($e)}),[]),(0,n.useEffect)((()=>{D&&I(Xt.n.documentPip,!0)}),[D,I]);const{enqueueSnackbar:A}=(0,ji.d)(),F=(0,n.useCallback)((e=>{var t;(t=e.target)&&"object"==typeof t&&"nodeName"in t&&"A"===t.nodeName&&"_blank"!==e.target.target&&(y()?j():A(l.Ru.get("web-player.pip-mini-player.snackbar.link-opened-in-main-window")))}),[A]);((e,t)=>{const i=(0,Ye.ox)(),s=t??i;(0,n.useEffect)((()=>{e&&s&&(s.document.title=e)}),[e,s])})(l.Ru.get("web-player.pip-mini-player.window-title"));const z=(0,n.useRef)(null),W=(0,r.NC)(Ke.HYy),U=(0,Pi.t)(E,W),[_,H]=(0,n.useState)(!1),[V,Z]=(0,n.useState)(!1),q=(0,n.useRef)(null),K=(0,n.useRef)(null),Q=(0,n.useCallback)((()=>{H(!0),q.current&&clearTimeout(q.current),q.current=setTimeout((()=>{H(!1);const e=qe(z.current,"--mouse-active-over-controls-fadeout-timeout",300,"ms");K.current&&clearTimeout(K.current),K.current=setTimeout((()=>{K.current=null}),e)}),1e3)}),[]),J=(0,n.useCallback)((()=>{K.current||H(!1)}),[]),Y=(0,n.useCallback)((()=>{Z(!0)}),[]),X=(0,n.useCallback)((()=>{Z(!1)}),[]),G=(0,n.useCallback)((()=>{i(!0)}),[]),$=(0,n.useCallback)((()=>{i(!1)}),[]),ee=(0,n.useCallback)((()=>{k(!0)}),[]),te=(0,n.useCallback)((()=>{k(!1),$()}),[$]),ie=(0,n.useCallback)((()=>{if(p.current){const e=p.current.getBoundingClientRect(),t=.5,i=.5,n=e.width*t-10,s=e.width*i-10;h(n),x(s)}}),[]);(0,n.useEffect)((()=>{ie()}),[s.width,s.height,ie]),(0,n.useEffect)((()=>{const e=()=>{ie()};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[ie]),(0,n.useEffect)((()=>{const e=new ResizeObserver(ie),t=p.current;return t&&e.observe(t),()=>{t&&e.unobserve(t)}}),[ie]);const ne=(0,n.useCallback)((e=>{if(!t)return;if(p.current){const t=p.current.getBoundingClientRect(),i=(e.clientX-t.left)/t.width,n=1-i,s=t.width*i-10,a=t.width*n-10;s>40&&a>80&&(h(s),x(a))}}),[t]);if(!C||!b)return null;const se=function(e){return"video"===e.mediaType||"mixed"===e.mediaType}(C),ae=(0,ge.N)(C),re=!w&&!ae,oe={"--background-color":R,"--background-image-url":`url(${S})`,"--background-image-width":"640px","--background-image-height":"640px","--player-controls-max-width":ae?"140px":"260px",display:"var(--mini-player-display)",cursor:t?"grabbing":"default"};return(0,L.jsxs)(yi.SnackbarProvider,{domRootRef:e,children:[(0,L.jsxs)("div",{ref:z,className:a()("encore-dark-theme","encore-small-devices-theme",Ge),style:{"--mini-player-display":"none","--mini-player-drag-display":"none"},children:[(0,L.jsx)(ii,{}),(0,L.jsxs)("div",{className:a()(rt,ot),style:oe,ref:U,onMouseLeave:te,onMouseEnter:ee,children:[re&&(0,L.jsx)(Fe,{spec:E,logger:T}),(0,L.jsx)(Si.d,{dynamicColors:P,children:(0,L.jsx)(Zt,{hideBackground:se,children:(0,L.jsx)("div",{className:lt,id:"document-pip-main-container",children:(0,L.jsx)(Ot,{})})})}),!d&&(0,L.jsx)(we,{item:C,className:Ct,onClick:F,isSmallWidth:u}),d?(0,L.jsxs)("div",{ref:p,className:bt,style:{display:"grid",gridTemplateColumns:`${m}px 20px ${g}px`,gridTemplateAreas:"'contextinfo divider playercontrols'"},dir:"ltr",role:"button",tabIndex:0,onMouseMove:ne,onMouseUp:$,onMouseLeave:$,children:[(0,L.jsx)("div",{className:Lt,children:(0,L.jsx)(we,{item:C,className:Ct,onClick:F,isSmallWidth:u})}),v&&!u&&(0,L.jsx)("div",{className:a()(Rt,{[Et]:t}),onMouseDown:G,dir:"ltr",role:"button",tabIndex:0,children:(0,L.jsx)("div",{className:Dt,dir:"ltr"})}),(0,L.jsxs)("div",{className:a()("encore-over-media-set",gt,{[kt]:_||V,[vt]:(0,ge.N)(C)}),dir:"ltr","data-testid":Ue,onMouseEnter:Q,onMouseMove:Q,onMouseLeave:J,children:[(0,L.jsx)("div",{className:a()(xt,Tt),dir:"ltr",children:(0,L.jsx)(vi,{item:C,spec:E,logger:T})}),(0,L.jsx)("div",{className:a()(pt),dir:"ltr",children:(0,L.jsx)(Ci,{item:C,spec:E,logger:T,onDragEnd:X,onDragStart:Y})})]})]}):(0,L.jsxs)("div",{className:a()("encore-over-media-set",gt,{[kt]:_||V,[vt]:(0,ge.N)(C)}),dir:"ltr","data-testid":Ue,onMouseEnter:Q,onMouseMove:Q,onMouseLeave:J,children:[(0,L.jsx)("div",{className:a()(xt),dir:"ltr",children:(0,L.jsx)(vi,{item:C,spec:E,logger:T})}),(0,L.jsx)("div",{className:a()(pt),dir:"ltr",children:(0,L.jsx)(Ci,{item:C,spec:E,logger:T,onDragEnd:X,onDragStart:Y})})]})]}),(0,L.jsx)("div",{className:M,children:(0,L.jsx)(ni.B,{fadeIn:!1})}),(0,L.jsx)("div",{ref:e,className:at})]}),(0,L.jsx)(Ri,{})]})}))},29543:(e,t,i)=>{i.d(t,{d:()=>n});const n=e=>{const t=e?.metadata?.["dislike-endpoint"]??null;return{dislikeEndpoint:t,shouldShowFeedbackControls:"1"===e?.metadata?.["dislike-feedback-available"]&&null!==t}}},48555:(e,t,i)=>{i.d(t,{a:()=>n.a});var n=i(4041)},85771:(e,t,i)=>{i.d(t,{x:()=>n.x});var n=i(98676)},97827:(e,t,i)=>{i.d(t,{$K:()=>c.$,dQ:()=>l.d,hC:()=>a.h,s_:()=>s.s,uP:()=>o.u,v3:()=>r.v,w0:()=>d.w,xJ:()=>n.x});var n=i(92699),s=i(85601),a=i(12253),r=i(61711),o=i(89059),l=i(97127),c=i(62747),d=i(83019)},7259:(e,t,i)=>{i.d(t,{M:()=>n.M,V:()=>n.V});var n=i(86286)},16514:(e,t,i)=>{i.d(t,{o:()=>w});var n=i(30758),s=i(97500),a=i.n(s),r=i(65503),o=i(52898),l=i(41562),c=i(14503),d=i(22726),u=i(31417),m=i(99701),h=i(38165),g=i(98712),x=i(51354),p=i(608),v=i(11893),k=i(33329),C=i(21549);const b="VcqCvLW71lZT4kqnCgt0";var N=i(86070);const y=({contextUri:e="",uri:t,id:i=t,className:s,canAdd:d})=>{const{description:v}=(0,p.f)(),y=(0,k.s)(),{spec:j}=(0,C.r)(c.A,{data:{uri:e}}),f=(0,n.useCallback)((()=>{y.logInteraction(j.undoButtonFactory({uri:t}).hitUiHide())}),[y,j,t]),w=(0,n.useCallback)((()=>{y.logInteraction(j.removeRecommendationButtonFactory({uri:t}).hitRemoveRecommendation({recommendedItemUri:t,contextUri:e}))}),[e,y,j,t]),S=(0,n.useCallback)((()=>{y.logInteraction(j.addRecommendationButtonFactory({uri:t}).hitAddToPlaylist({playlist:e,itemToBeAdded:t}))}),[e,y,j,t]),{removeRecommendation:B,addRecommendation:P,canRemoveRecommendation:R,canAddRecommendation:D}=(0,h.t)({uri:t,uid:i,contextUri:e,onUndo:f,onRemoveRecommendation:w,onAddRecommendation:S}),E=(0,n.useCallback)((()=>v?u.Ru.get("web-player.smart-shuffle.add-to-playlist-button",v):u.Ru.get("web-player.smart-shuffle.add-to-playlist-button-fallback")),[v]),L=(0,x.y)();return(0,N.jsxs)("div",{className:a()(b,s),children:[R&&(0,N.jsx)(m.Zp,{label:u.Ru.get("web-player.smart-shuffle.removed-from-recommendations-button"),children:(0,N.jsx)(r.H,{onClick:B,iconOnly:o.P,size:L===g.E.MEDIUM?"medium":"small","aria-label":u.Ru.get("web-player.smart-shuffle.removed-from-recommendations-button"),condensedAll:!0})}),d&&D&&(0,N.jsx)(m.Zp,{label:E(),children:(0,N.jsx)(r.H,{onClick:P,iconOnly:l.P,size:L===g.E.MEDIUM?"medium":"small","aria-label":E(),condensedAll:!0})})]})},j=e=>{const t=(0,v.J)(e.contextUri);return(0,N.jsx)(y,{...e,canAdd:t?.canAdd??!1})},f=e=>(0,N.jsx)(y,{...e,canAdd:!0}),w=e=>e.contextUri&&(0,d.tbX)(e.contextUri)?(0,N.jsx)(j,{...e,contextUri:e.contextUri}):e.contextUri&&(0,d.Z0m)(e.contextUri)?(0,N.jsx)(f,{...e,contextUri:e.contextUri}):(0,N.jsx)(y,{...e,canAdd:!1})},29997:(e,t,i)=>{i.d(t,{X:()=>n.X});var n=i(41364)},92849:(e,t,i)=>{i.d(t,{D:()=>d});var n=i(30758),s=i(86996);var a=i(31193),r=i(909),o=i(89402),l=i(29634),c=i(21549);const d=({item:e,onClick:t})=>{const i=(0,o.W)(),{capabilities:{isEnabled:d},isOpen:u,close:m,open:h,canOpen:g}=(0,l.H)(),{videoPlayerMode:x}=(0,a.d)(),{spec:p,logger:v}=(0,c.r)(s.h9,{data:{identifier:x===r.K.cinemaLegacy?s.gw.CINEMA:s.gw.DESKTOP}}),k=(0,n.useCallback)((()=>{let n;d&&(u?(m(),e?.uri&&v.logInteraction(p.pipButtonFactory({uri:e.uri}).hitUiHide()),n="close-picture-in-picture"):(h(),e?.uri&&(({spec:e,logger:t,uri:i})=>{const n=window.documentPictureInPicture;if(!n)return;const s=a=>{setTimeout((()=>{const n=a.window?.innerWidth,s=a.window?.innerHeight;if(!n||!s)return;const r=e.pipButtonFactory({uri:i}).hitUiOpenWindow({widthPx:n,heightPx:s});t.logInteraction(r)}),100),n.removeEventListener("enter",s)};n.addEventListener("enter",s)})({spec:p,logger:v,uri:e.uri}),n="show-picture-in-picture"),t?.(!u,e?.uri),i({type:"click",intent:n,targetUri:e?.uri,itemIdSuffix:"picture-in-picture-toggle"}))}),[m,d,u,e?.uri,v,t,i,h,p]);return{showButton:g,isActive:u,onClick:k}}},60384:(e,t,i)=>{i.d(t,{I:()=>c});var n=i(30758),s=i(1599),a=i(72671);var r=i(87182),o=i(29074),l=i(2679);const c=({uri:e,setFeedbackPath:t,removeFeedbackPath:i,contextUri:c})=>{const d=(0,r.z)(),u=(0,o.m)(),{isPlaying:m}=(0,l.te)(e),h=(0,n.useCallback)((()=>{c&&u.resync(c)}),[c,u]);return{setDislikeFeedback:(0,n.useCallback)((async()=>{t&&(await((e,t,i)=>{const n=t.replace("<reason>","LOCAL_NOT_APPROPRIATE_FOR_CONTEXT").replace("<track-uri>",i);return e.build().withMethod("POST").withHost(a.L1).withPath(n).withEndpointIdentifier("/<feature>/feedback/").send()})(s.n.getInstance(),t,e),h(),m&&d.skipToNext())}),[t,e,h,m,d]),removeDislikeFeedback:(0,n.useCallback)((async()=>{i&&(await((e,t,i)=>{const n=t.replace("<reason>","LOCAL_NOT_APPROPRIATE_FOR_CONTEXT").replace("<track-uri>",i);return e.build().withMethod("DELETE").withHost(a.L1).withPath(n).withEndpointIdentifier("/<feature>/feedback/").send()})(s.n.getInstance(),i,e),h())}),[i,h,e])}}},5179:(e,t,i)=>{i.d(t,{H:()=>r});var n=i(23300),s=i(58685),a=i(82935);function r(){const e=(0,s.o)((e=>e?.item),((e,t)=>e?.uri===t?.uri)),t=(0,a.h)(e?.images||void 0,{desiredLabel:"large",desiredSize:600})??e?.images?.[0]?.url??"",{data:i}=(0,n.g)([t]);return i??null}},28145:(e,t,i)=>{i.d(t,{A:()=>n});const n={videoPlayerContainer:"ngkFeIGFyNUaxRspbs5H"}}}]);
//# sourceMappingURL=xpui-pip-mini-player.js.map