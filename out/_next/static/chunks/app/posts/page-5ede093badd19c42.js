(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[991],{678:function(t,e,s){Promise.resolve().then(s.t.bind(s,3479,23)),Promise.resolve().then(s.bind(s,9836))},9836:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return f}});var n=s(7437),o=s(2265);async function r(){let t=await fetch("https://q3rj22ezm0.execute-api.us-east-1.amazonaws.com/posts",{cache:"no-store"});return t.json()}async function i(t){let e={content:t.get("content")},s=await fetch("https://q3rj22ezm0.execute-api.us-east-1.amazonaws.com/posts",{method:"POST",body:JSON.stringify(e)});return s}var a=s(6599),c=s.n(a);let u=t=>{let{item:e}=t;return(0,n.jsx)("div",{className:c().postListing,children:(0,n.jsx)("span",{children:e.content.S})})};function f(){let[t,e]=(0,o.useState)([]),[s,a]=(0,o.useState)(!0),[f,p]=(0,o.useState)();return((0,o.useEffect)(()=>{let t=async()=>{try{let t=await r();e(t.Items)}catch(t){p("Error fetching data")}finally{a(!1)}};t()},[s]),s)?(0,n.jsx)("p",{children:"Loading..."}):f?(0,n.jsxs)("p",{children:["Error: ",f]}):(0,n.jsxs)("div",{className:c().postsList,children:[(0,n.jsxs)("form",{action:i,className:c().form,children:[(0,n.jsx)("input",{type:"text",name:"content",className:c().input}),(0,n.jsx)("button",{type:"submit",className:c().submit,children:"Submit"})]}),t.map(t=>(0,n.jsx)(u,{item:t},t.postID.S))]})}},6599:function(t){t.exports={postsList:"PostList_postsList__zp66g",postListing:"PostList_postListing__TD4WB",form:"PostList_form__3hbdL",input:"PostList_input__ifdoh",submit:"PostList_submit__uV4cz"}},3479:function(t){t.exports={main:"page_main__IoJZG"}},622:function(t,e,s){"use strict";var n=s(2265),o=Symbol.for("react.element"),r=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(t,e,s){var n,c={},u=null,f=null;for(n in void 0!==s&&(u=""+s),void 0!==e.key&&(u=""+e.key),void 0!==e.ref&&(f=e.ref),e)r.call(e,n)&&!a.hasOwnProperty(n)&&(c[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===c[n]&&(c[n]=e[n]);return{$$typeof:o,type:t,key:u,ref:f,props:c,_owner:i.current}}e.jsx=c,e.jsxs=c},7437:function(t,e,s){"use strict";t.exports=s(622)}},function(t){t.O(0,[971,472,744],function(){return t(t.s=678)}),_N_E=t.O()}]);