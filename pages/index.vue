
<template>
  <div class="container">
    <ul>
      <li v-for="(wangming, index) in posts" :key="index">
        <NuxtLink :to="{ name: 'wangming-id', params: { id: wangming.id } }">
          {{ wangming.title }}
        </NuxtLink>
        <div class="bottom">{{wangming.newstime}}</div>
      </li>
      <button @click="loadNext">加载下一页</button>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
var page= 1;
export default {
  asyncData({ req, params }) {
    return axios.get('https://www.yishuzi.com.cn/wangming_xiaochengxu_api/?getJson=column&classid=9999&page=1&pageSize=10')
      .then((res) => {
        return { posts: res.data.result}
      })
  },
  head: {
    title: '网名大全 wangming.org.cn'
  },
  methods:{
    loadNext:function(){
      page=page+1;
      return axios.get('https://www.yishuzi.com.cn/wangming_xiaochengxu_api/?getJson=column&classid=9999&page=' + page)
      .then((res) => {
        this.posts = this.posts.concat(res.data.result)
      })
    }
  }
}
</script>
