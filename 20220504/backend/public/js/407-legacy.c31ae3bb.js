"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[407],{407:function(t,e,o){o.r(e),o.d(e,{default:function(){return l}});var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("글을 수정하는 곳입니다")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),o("br"),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.memo,expression:"memo"}],attrs:{cols:"30",rows:"10"},domProps:{value:t.memo},on:{input:function(e){e.target.composing||(t.memo=e.target.value)}}}),t._v(" "),o("br"),o("button",{on:{click:t.upadatememo}},[t._v("제출")])])},i=[],m={data(){return{title:"",memo:""}},created(){this.$http.get("/api/memo/"+this.$route.params.id).then((t=>{this.title=t.data.title,this.memo=t.data.memo}))},methods:{upadatememo(){this.$http.put("/api/memo/"+this.$route.params.id,{data:{title:this.title,memo:this.memo}}).then((t=>{console.log(t.data)})),this.$router.push("/")}}},n=m,r=o(1),s=(0,r.Z)(n,a,i,!1,null,null,null),l=s.exports}}]);
//# sourceMappingURL=407-legacy.c31ae3bb.js.map