(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7139574b"],{"0203":function(t,e,a){"use strict";var s=a("3ebd");e["a"]={listZelNodes:function(){return Object(s["a"])().get("/daemon/listzelnodes")},zelnodeCount:function(){return Object(s["a"])().get("/daemon/getzelnodecount")}}},1505:function(t,e,a){"use strict";var s={cumulus:"#36c9a5",nimbus:"#ff9f43",stratus:"#ea5455"};e["a"]=s},"49f5":function(t,e,a){"use strict";a.d(e,"a",(function(){return m}));var s=a("2b0e"),r=a("c637"),o=a("a723"),i=a("d82f"),n=a("cf75"),c=a("8c18"),u=a("cf07");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){d(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var b=Object(i["j"])(u["b"],["label","labelHtml"]),h=Object(n["d"])(Object(i["m"])(p(p({},b),{},{animated:Object(n["c"])(o["g"],!1),height:Object(n["c"])(o["t"]),max:Object(n["c"])(o["o"],100),precision:Object(n["c"])(o["o"],0),showProgress:Object(n["c"])(o["g"],!1),showValue:Object(n["c"])(o["g"],!1),striped:Object(n["c"])(o["g"],!1)})),r["nb"]),m=s["default"].extend({name:r["nb"],mixins:[c["a"]],provide:function(){return{bvProgress:this}},props:h,computed:{progressHeight:function(){return{height:this.height||null}}},render:function(t){var e=this.normalizeSlot();return e||(e=t(u["a"],{props:Object(n["e"])(b,this.$props)})),t("div",{staticClass:"progress",style:this.progressHeight},[e])}})},cf07:function(t,e,a){"use strict";a.d(e,"b",(function(){return b})),a.d(e,"a",(function(){return h}));var s=a("2b0e"),r=a("c637"),o=a("a723"),i=a("8690"),n=a("7b1e"),c=a("a8c8"),u=a("3a58"),l=a("cf75"),p=a("fa73"),d=a("8c18"),b=Object(l["d"])({animated:Object(l["c"])(o["g"],null),label:Object(l["c"])(o["t"]),labelHtml:Object(l["c"])(o["t"]),max:Object(l["c"])(o["o"],null),precision:Object(l["c"])(o["o"],null),showProgress:Object(l["c"])(o["g"],null),showValue:Object(l["c"])(o["g"],null),striped:Object(l["c"])(o["g"],null),value:Object(l["c"])(o["o"],0),variant:Object(l["c"])(o["t"])},r["ob"]),h=s["default"].extend({name:r["ob"],mixins:[d["a"]],inject:{bvProgress:{default:function(){return{}}}},props:b,computed:{progressBarClasses:function(){var t=this.computedAnimated,e=this.computedVariant;return[e?"bg-".concat(e):"",this.computedStriped||t?"progress-bar-striped":"",t?"progress-bar-animated":""]},progressBarStyles:function(){return{width:this.computedValue/this.computedMax*100+"%"}},computedValue:function(){return Object(u["b"])(this.value,0)},computedMax:function(){var t=Object(u["b"])(this.max)||Object(u["b"])(this.bvProgress.max,0);return t>0?t:100},computedPrecision:function(){return Object(c["c"])(Object(u["c"])(this.precision,Object(u["c"])(this.bvProgress.precision,0)),0)},computedProgress:function(){var t=this.computedPrecision,e=Object(c["e"])(10,t);return Object(u["a"])(100*e*this.computedValue/this.computedMax/e,t)},computedVariant:function(){return this.variant||this.bvProgress.variant},computedStriped:function(){return Object(n["b"])(this.striped)?this.striped:this.bvProgress.striped||!1},computedAnimated:function(){return Object(n["b"])(this.animated)?this.animated:this.bvProgress.animated||!1},computedShowProgress:function(){return Object(n["b"])(this.showProgress)?this.showProgress:this.bvProgress.showProgress||!1},computedShowValue:function(){return Object(n["b"])(this.showValue)?this.showValue:this.bvProgress.showValue||!1}},render:function(t){var e,a=this.label,s=this.labelHtml,r=this.computedValue,o=this.computedPrecision,n={};return this.hasNormalizedSlot()?e=this.normalizeSlot():a||s?n=Object(i["a"])(s,a):this.computedShowProgress?e=this.computedProgress:this.computedShowValue&&(e=Object(u["a"])(r,o)),t("div",{staticClass:"progress-bar",class:this.progressBarClasses,style:this.progressBarStyles,attrs:{role:"progressbar","aria-valuemin":"0","aria-valuemax":Object(p["g"])(this.computedMax),"aria-valuenow":Object(u["a"])(r,o)},domProps:n},e)}})},d6e4:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var s=a("2b0e"),r=a("b42e"),o=a("c637"),i=a("a723"),n=a("cf75"),c=Object(n["d"])({textTag:Object(n["c"])(i["t"],"p")},o["p"]),u=s["default"].extend({name:o["p"],functional:!0,props:c,render:function(t,e){var a=e.props,s=e.data,o=e.children;return t(a.textTag,Object(r["a"])(s,{staticClass:"card-text"}),o)}})},f3ae:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-overlay",{attrs:{show:t.historyStatsLoading,variant:"transparent",blur:"5px"}},[a("b-row",{staticClass:"match-height"},[a("b-col",{attrs:{md:"12",lg:"6",xxl:"4"}},[a("b-card",{attrs:{"no-body":""}},[a("b-card-body",{staticClass:"d-flex justify-content-between align-items-center"},[a("div",[a("h2",{staticClass:"mt-0 truncate"},[t._v(" Total Nodes: "+t._s(t.totalNodes)+" ")])]),a("b-avatar",{attrs:{size:"48",variant:"light-success"}},[a("feather-icon",{attrs:{size:"24",icon:"ServerIcon"}})],1)],1),a("vue-apex-charts",{attrs:{type:"donut",height:"400",width:"100%",options:t.nodeData.chartOptions,series:t.nodeData.series}})],1)],1),a("b-col",{attrs:{md:"12",lg:"6",xxl:"8"}},[a("b-card",{attrs:{"no-body":""}},[a("b-card-body",{staticClass:"d-flex justify-content-between align-items-center"},[a("div",[a("h2",{staticClass:"mt-0 truncate"},[t._v(" Node History ")])])]),a("div",{staticClass:"mt-auto"},[a("vue-apex-charts",{attrs:{type:"area",height:"400",width:"100%",options:t.nodeHistoryData.chartOptions,series:t.nodeHistoryData.series}})],1)],1)],1)],1)],1),a("b-overlay",{attrs:{show:t.supplyLoading,variant:"transparent",blur:"5px"}},[a("b-row",{staticClass:"match-height"},[a("b-col",{attrs:{md:"12",lg:"6",xxl:"4"}},[a("b-card",{attrs:{"no-body":""}},[a("b-card-body",{staticClass:"d-flex justify-content-between align-items-center"},[a("div",[a("h2",{staticClass:"mt-0 truncate"},[t._v(" Locked Supply: "+t._s(t.beautifyValue(t.lockedSupply,0))+" ")])]),a("b-avatar",{attrs:{size:"48",variant:"light-success"}},[a("feather-icon",{attrs:{size:"24",icon:"LockIcon"}})],1)],1),a("vue-apex-charts",{attrs:{type:"donut",height:"300",options:t.lockedSupplyData.chartOptions,series:t.lockedSupplyData.series}})],1)],1),a("b-col",{attrs:{md:"12",lg:"6",xxl:"8"}},[a("b-card",{attrs:{"no-body":""}},[a("b-card-body",[a("div",[a("h2",{staticClass:"mt-0 truncate"},[t._v(" FLUX Supply ")])]),a("div",[a("b-card-text",{staticClass:"mt-2"},[t._v(" Total Supply ")]),a("h3",[t._v(" "+t._s(t.beautifyValue(t.maxSupply,0))+" FLUX ")])],1),a("hr"),a("div",[a("b-card-text",[t._v("Circulating Supply")]),a("b-row",[a("b-col",{attrs:{xl:"4",md:"6",sm:"12"}},[a("h3",[t._v(" "+t._s(t.beautifyValue(t.circulatingSupply,0))+" FLUX ")])]),a("b-col",{attrs:{xl:"8",md:"6",sm:"12"}},[a("b-progress",{staticClass:"mt-25",attrs:{value:t.circulatingSupply,max:t.maxSupply,variant:"success",height:"10px"}})],1)],1)],1),a("hr"),a("div",[a("b-card-text",[t._v("Locked Supply")]),a("b-row",[a("b-col",{attrs:{xl:"4",md:"6",sm:"12"}},[a("h3",[t._v(" "+t._s(t.beautifyValue(t.lockedSupply,0))+" FLUX ")])]),a("b-col",{attrs:{xl:"8",md:"6",sm:"12"}},[a("b-progress",{staticClass:"mt-25",attrs:{value:t.lockedSupply,max:t.circulatingSupply,variant:"success",height:"10px"}})],1)],1)],1)])],1)],1)],1)],1)],1)},r=[],o=a("2909"),i=a("1da1"),n=(a("96cf"),a("a9e3"),a("b680"),a("b64b"),a("159b"),a("ac1f"),a("5319"),a("9b03")),c=a("205f"),u=a("6197"),l=a("d6e4"),p=a("a15b"),d=a("b28b"),b=a("e8a3"),h=a("49f5"),m=a("1321"),f=a.n(m),g=a("14d2"),y=a("1505"),v=a("0203"),x=a("bc3a"),O={components:{BOverlay:n["a"],BCard:c["a"],BCardBody:u["a"],BCardText:l["a"],BRow:p["a"],BCol:d["a"],BAvatar:b["a"],BProgress:h["a"],VueApexCharts:f.a,ToastificationContent:g["a"]},data:function(){var t=this;return{historyStatsLoading:!0,supplyLoading:!0,totalNodes:0,nodeData:{chartOptions:{chart:{toolbar:{show:!1}},dataLabels:{enabled:!0},labels:["Cumulus","Nimbus","Stratus"],legend:{show:!1},stroke:{width:0},colors:[y["a"].cumulus,y["a"].nimbus,y["a"].stratus],tooltip:{y:{formatter:function(e){return t.beautifyValue(e,0)}}}},series:[]},nodeHistoryData:{chartOptions:{colors:[y["a"].cumulus,y["a"].nimbus,y["a"].stratus],labels:["Cumulus","Nimbus","Stratus"],grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0},stacked:!0},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.2,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{formatter:function(e){return new Date(e).toLocaleString("en-GB",t.timeoptions)}}}},series:[]},lockedSupplyData:{chartOptions:{chart:{toolbar:{show:!1}},dataLabels:{enabled:!0},labels:["Cumulus","Nimbus","Stratus"],legend:{show:!1},stroke:{width:0},colors:[y["a"].cumulus,y["a"].nimbus,y["a"].stratus],tooltip:{y:{formatter:function(e){return t.beautifyValue(e,0)}}}},series:[]},maxSupply:44e7,lockedSupply:0,lockedSupplyPerc:0,circulatingSupply:0,circulatingSupplyPerc:0}},mounted:function(){this.getHistoryStats(),this.getCircSupply()},methods:{getCircSupply:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.supplyLoading=!0,e.next=3,x.get("https://explorer.runonflux.io/api/statistics/circulating-supply");case 3:return a=e.sent,t.circulatingSupply=a.data,t.circulatingSupplyPerc=Number((t.circulatingSupply/44e7*100).toFixed(2)),e.next=8,t.getZelNodeCount();case 8:t.supplyLoading=!1;case 9:case"end":return e.stop()}}),e)})))()},getHistoryStats:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,s,r,i,n,c,u,l,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.historyStatsLoading=!0,e.next=4,x.get("https://stats.runonflux.io/fluxhistorystats");case 4:a=e.sent,t.fluxHistoryStats=a.data.data,t.historyStatsLoading=!1,s=Object.keys(t.fluxHistoryStats),r=Math.max.apply(Math,Object(o["a"])(s)),i=1e4*t.fluxHistoryStats[r].cumulus,n=25e3*t.fluxHistoryStats[r].nimbus,c=1e5*t.fluxHistoryStats[r].stratus,u=[],l=[],p=[],s.forEach((function(e){u.push([Number(e),t.fluxHistoryStats[e].cumulus]),l.push([Number(e),t.fluxHistoryStats[e].nimbus]),p.push([Number(e),t.fluxHistoryStats[e].stratus])})),t.totalNodes=t.fluxHistoryStats[r].cumulus+t.fluxHistoryStats[r].nimbus+t.fluxHistoryStats[r].stratus,t.lockedSupplyData.series=[i,n,c],t.nodeData.series=[t.fluxHistoryStats[r].cumulus,t.fluxHistoryStats[r].nimbus,t.fluxHistoryStats[r].stratus],t.nodeHistoryData.series=[{name:"Cumulus",data:u},{name:"Nimbus",data:l},{name:"Stratus",data:p}],e.next=26;break;case 22:e.prev=22,e.t0=e["catch"](0),console.log(e.t0),t.$toast({component:g["a"],props:{title:"Unable to fetch history stats",icon:"InfoIcon",variant:"danger"}});case 26:case"end":return e.stop()}}),e,null,[[0,22]])})))()},getZelNodeCount:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,s,r,o,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v["a"].zelnodeCount();case 3:a=e.sent,s=a.data.data,r=s["stratus-enabled"],o=s["nimbus-enabled"],i=s["cumulus-enabled"],n=1e5*r+25e3*o+1e4*i,t.lockedSupply=n,t.lockedSupplyPerc=Number((n/t.circulatingSupply*100).toFixed(2)),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()},beautifyValue:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,a=t.toFixed(e);return a.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}}},S=O,j=a("2877"),w=Object(j["a"])(S,s,r,!1,null,null,null);e["default"]=w.exports}}]);
//# sourceMappingURL=chunk-7139574b.97e11ce7.js.map