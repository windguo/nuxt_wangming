exports.ids=[2],exports.modules={21:function(t,e,n){var content=n(23);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(5).default;t.exports.__inject__=function(t){o("54a0e240",content,!0,t)}},22:function(t,e,n){"use strict";n.r(e);var o=n(21),r=n.n(o);for(var d in o)"default"!==d&&function(t){n.d(e,t,function(){return o[t]})}(d);e.default=r.a},23:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".container[data-v-f9914794]{width:70%;margin:auto;text-align:center;padding-top:100px}ul[data-v-f9914794]{list-style-type:none;padding:0}ul li[data-v-f9914794]{border:1px solid #ddd;padding:20px;text-align:left}ul li a[data-v-f9914794]{color:grey}p[data-v-f9914794]{font-size:20px}a[data-v-f9914794]{color:#41b883}",""])},24:function(t,e,n){"use strict";n.r(e);var o=n(20),r=n.n(o),d={async asyncData({params:t}){let[e,n]=await Promise.all([r.a.get(`https://www.yishuzi.com.cn/wangming_xiaochengxu_api/?getJson=content&id=${t.id}`),r.a.get("https://www.yishuzi.com.cn/wangming_xiaochengxu_api/?getJson=column&classid=0")]);return console.log("pageRes",e.data.result),console.log("countRes",n.data.result),{post:e.data.result,posts:n.data.result}},head(){return{title:this.post.title+" 网名大全 wangming.org.cn"}}},l=n(1);var component=Object(l.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._ssrNode("<h1 data-v-f9914794>"+t._ssrEscape(t._s(t.post.title))+"</h1> <pre data-v-f9914794>"+t._ssrEscape(t._s(t.post.newstime)+" "+t._s(t.post.diggtop)+" "+t._s(t.post.username))+"</pre> "),t._ssrNode("<ul data-v-f9914794>","</ul>",t._l(t.posts,function(e,o){return t._ssrNode("<li data-v-f9914794>","</li>",[n("NuxtLink",{attrs:{to:{name:"wangming-id",params:{id:e.id}}}},[t._v("\n        "+t._s(e.title)+"\n      ")]),t._ssrNode(' <div class="bottom" data-v-f9914794>'+t._ssrEscape(t._s(e.newstime))+"</div>")],2)}),0),t._ssrNode(" "),t._ssrNode("<p data-v-f9914794>","</p>",[n("NuxtLink",{attrs:{to:"/"}},[t._v("\n      返回首页\n    ")])],1)],2)},[],!1,function(t){var e=n(22);e.__inject__&&e.__inject__(t)},"f9914794","2be50e07");e.default=component.exports}};
//# sourceMappingURL=5c8ac68789b2a46868a5.js.map