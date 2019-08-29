<template>
  <div id="player">
    <h2 class="title">黑云音乐</h2>
    <div class="search">
      <input type="text" v-model="keywords" @keyup.enter="searchMusic()"/>
      <button>
        <span class="iconfont icon-search" @click="searchMusic()"></span>
      </button>
    </div>
    <div class="tab-wrapper">
      <!-- tab栏 -->
      <div class="tab-bar">
        <router-link to="`/results/${keywords}`" class="bar-item">搜索结果</router-link>
        <router-link to="`/player/${id}`" class="bar-item">歌曲播放</router-link>
        <router-link to="`/video/${mvid}`" class="bar-item">mv</router-link>
        <router-link to="`/comment/${id}`" class="bar-item">歌曲评论</router-link>
      </div>
      <!-- 对应的内容区域 -->
      <div class="tab-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keywords:'周杰伦'
    }
  },
  methods: {
    searchMusic(){
      this.$router.push(`/results/${this.keywords}`)
    }
  },
};
</script>

<style>
@import url("./assets/css/index.css");
@import url("./assets/css/iconfont.css");
</style>
