"use strict";(self.webpackChunkgithack=self.webpackChunkgithack||[]).push([[84],{7084:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var r,o,i,a,d,c,l,u,s,h,f,p=t(2791),m=t(7689),x=t(2426),b=t.n(x),y=t(168),g=t(7691),Y=g.default.div(r||(r=(0,y.Z)(["\n  width: 100%;\n  height: 30px;\n  display: flex;\n  justify-content: space-between;\n\n  @media screen and (min-width: ",") {\n    width: 290px;\n    height: 34px;\n    justify-content: flex-start;\n    gap: 8px;\n  }\n"])),(function(n){return n.theme.breakpoints.table})),M=g.default.button(o||(o=(0,y.Z)(["\n  width: 200px;\n  height: 30px;\n  padding: 6px 12px;\n  background-color: ",";\n  border: ",";\n  border-radius: ",";\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.125;\n  text-align: center;\n  text-transform: uppercase;\n  color: ",";\n  @media screen and (min-width: ",") {\n    height: 34px;\n    padding: 8px 12px;\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.radii.small}),(function(n){return n.theme.fonts.heading}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.breakpoints.table}),(function(n){return n.theme.fontSizes.m})),k=g.default.button(i||(i=(0,y.Z)(["\n  width: 38px;\n  height: 34px;\n  background-color: ",";\n  border: ",";\n  border-radius: ",";\n  cursor: pointer;\n  color: ",";\n"])),(function(n){return n.theme.colors.second_backgrond_mode}),(function(n){return n.theme.colors.calendar_out_border}),(function(n){return n.theme.radii.small}),(function(n){return n.theme.colors.primary_text_mode})),w=(0,g.default)(k)(a||(a=(0,y.Z)(["\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-right: none;\n"]))),j=(0,g.default)(k)(d||(d=(0,y.Z)(["\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n"]))),v=t(184),H=function(n){var e=n.today,t=n.typeSelect,r=n.todayHandler,o=n.prevHandler,i=n.nextHandler,a=(0,m.UO)().currentDay;return(0,v.jsxs)(Y,{children:[(0,v.jsx)(M,{onClick:r,children:"month"===t?e.format("MMMM YYYY"):e.format("D  MMMM YYYY ")}),(0,v.jsx)(w,{onClick:o,disabled:a===b()().format("YYYY-MM-DD")||a===b()().format("YYYY-MM"),children:"<"}),(0,v.jsx)(j,{onClick:i,children:">"})]})},D=g.default.div(c||(c=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n"]))),_=g.default.button(l||(l=(0,y.Z)(["\n  width: 82px;\n  height: 34px;\n  border: none;\n  border-radius: ",";\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.125;\n  text-align: center;\n  color: ",";\n  cursor: pointer;\n\n  background-color: ",";\n\n  @media screen and (min-width: ",") {\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.radii.small}),(function(n){return n.theme.fonts.heading}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.isActive?n.theme.colors.period_type_btn_active_content:n.theme.colors.primary}),(function(n){return n.isActive?n.theme.colors.period_type_btn_active:n.theme.colors.period_type_btn_not_active}),(function(n){return n.theme.breakpoints.table}),(function(n){return n.theme.fontSizes.m})),S=(0,g.default)(_)(u||(u=(0,y.Z)(["\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-right: 1px solid rgba(62, 133, 243, 0.2);\n"]))),Z=(0,g.default)(_)(s||(s=(0,y.Z)(["\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n"]))),z=function(n){var e=n.typeSelect,t=n.typeMonthHendler,r=n.typeDayHendler;return(0,v.jsxs)(D,{children:[(0,v.jsx)(S,{isActive:"month"===e,onClick:t,children:"Month"}),(0,v.jsx)(Z,{isActive:"day"===e,onClick:r,children:"Day"})]})},C=g.default.div(h||(h=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  align-items: flex-start;\n  margin-bottom: 24px;\n\n  @media screen and (min-width: ",") {\n    min-width: 704px;\n    height: 34px;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 32px;\n  }\n\n  @media screen and (min-width: ",") {\n    width: 100%;\n    height: 34px;\n    display: flex;\n    justify-content: space-between;\n\n    margin-bottom: 38px;\n  }\n"])),(function(n){return n.theme.breakpoints.table}),(function(n){return n.theme.breakpoints.desktop})),A=function(n){var e=n.today,t=n.typeSelect,r=n.todayHandler,o=n.prevHandler,i=n.nextHandler,a=n.typeMonthHendler,d=n.typeDayHendler;return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(C,{children:[(0,v.jsx)(H,{today:e,typeSelect:t,todayHandler:r,prevHandler:o,nextHandler:i}),(0,v.jsx)(z,{typeSelect:t,typeMonthHendler:a,typeDayHendler:d})]})})},L=g.default.div(f||(f=(0,y.Z)(["\n  // moved to MainLayout.styled.js\n  /* padding: 0 20px;\n\n  @media screen and (min-width: ",") {\n    padding: 0 32px;\n  }\n\n  @media screen and (min-width: ",") {\n    padding: 0 32px;\n  } */\n"])),(function(n){return n.theme.breakpoints.table}),(function(n){return n.theme.breakpoints.desktop})),O=function(){var n=(0,m.s0)(),e=(0,m.UO)(),t=e.currentDay,r=e.currentDate,o=(0,m.TH)().pathname,i=o.includes("/calendar/day")?"day":"month",a=r||t;(0,p.useEffect)((function(){"/calendar"!==o&&"/calendar/"!==o||n("/calendar/month/".concat(b()().format("YYYY-MM-DD")))}),[o,n]);return(0,v.jsxs)(L,{children:[(0,v.jsx)(A,{today:b()(a),typeSelect:i,todayHandler:function(){},prevHandler:function(){n("/calendar/".concat(i,"/").concat(b()(a).subtract(1,i).format("YYYY-MM-DD")))},nextHandler:function(){n("/calendar/".concat(i,"/").concat(b()(a).add(1,i).format("YYYY-MM-DD")))},typeMonthHendler:function(){n("/calendar/month/".concat(a))},typeDayHendler:function(){n("/calendar/day/".concat(b()().format("YYYY-MM-DD")))}}),(0,v.jsx)(p.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading..."}),children:(0,v.jsx)(m.j3,{})})]})}}}]);
//# sourceMappingURL=84.27e6daa3.chunk.js.map