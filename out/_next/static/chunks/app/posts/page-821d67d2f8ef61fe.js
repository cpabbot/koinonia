(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[991],{678:function(t,e,s){Promise.resolve().then(s.t.bind(s,3479,23)),Promise.resolve().then(s.bind(s,9836))},9836:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return p}});var n=s(7437),o=s(2265);async function r(){let t=await fetch("https://q3rj22ezm0.execute-api.us-east-1.amazonaws.com/posts",{cache:"no-store"});return t.json()}async function i(t){let e={content:t.get("content")},s=await fetch("https://q3rj22ezm0.execute-api.us-east-1.amazonaws.com/posts",{method:"POST",body:JSON.stringify(e)});return s}async function a(t){let e=await fetch("https://q3rj22ezm0.execute-api.us-east-1.amazonaws.com/posts/".concat(t),{method:"DELETE"});return e}var c=s(6599),u=s.n(c);function p(){let[t,e]=(0,o.useState)([]),[s,c]=(0,o.useState)(!0),[p,f]=(0,o.useState)(!1),[l,_]=(0,o.useState)();(0,o.useEffect)(()=>{let t=async()=>{try{c(!0);let t=await r();e(t.Items),c(!1)}catch(t){_("Error fetching data")}finally{c(!1)}};t()},[p]);let m=t=>{let{item:e}=t;return(0,n.jsxs)("div",{className:u().postListing,children:[(0,n.jsx)("span",{children:e.content.S}),(0,n.jsx)("button",{className:"button",onClick:()=>h(e.postID.S),children:"delete"})]})},h=t=>{a(t).then(()=>{f(!p)})};return s?(0,n.jsx)("p",{children:"Loading..."}):l?(0,n.jsxs)("p",{children:["Error: ",l]}):(0,n.jsxs)("div",{className:u().postsList,children:[(0,n.jsxs)("form",{action:t=>{i(t).then(()=>{f(!p)})},className:u().form,children:[(0,n.jsx)("input",{type:"text",name:"content",className:u().input}),(0,n.jsx)("button",{type:"submit",className:u().submit,children:"Submit"})]}),t.map(t=>(0,n.jsx)(m,{item:t},t.postID.S))]})}},6599:function(t){t.exports={postsList:"PostList_postsList__zp66g",postListing:"PostList_postListing__TD4WB",form:"PostList_form__3hbdL",input:"PostList_input__ifdoh",submit:"PostList_submit__uV4cz"}},3479:function(t){t.exports={main:"page_main__IoJZG"}},622:function(t,e,s){"use strict";var n=s(2265),o=Symbol.for("react.element"),r=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(t,e,s){var n,c={},u=null,p=null;for(n in void 0!==s&&(u=""+s),void 0!==e.key&&(u=""+e.key),void 0!==e.ref&&(p=e.ref),e)r.call(e,n)&&!a.hasOwnProperty(n)&&(c[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===c[n]&&(c[n]=e[n]);return{$$typeof:o,type:t,key:u,ref:p,props:c,_owner:i.current}}e.jsx=c,e.jsxs=c},7437:function(t,e,s){"use strict";t.exports=s(622)}},function(t){t.O(0,[971,472,744],function(){return t(t.s=678)}),_N_E=t.O()}]);