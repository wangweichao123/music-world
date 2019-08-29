<template>
  <div class="video" v-if="isReady">
    <div class="title-wrapper">
      <span class="tag">MV</span>
      <span class="title">{{ videoList.name }}</span>
      <span class="artist">{{ videoList.artistName }}</span>
    </div>
    <video :src="videoList.brs[240]" controls></video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoList: [],
      isReady:false
    };
  },
  created() {
    this.axios
      .get(`https://autumnfish.cn/mv/detail?mvid=${this.$route.params.mvid}`)
      .then(res => {
        this.videoList = res.data.data;
        this.isReady = true;
      }).catch(err=>{
          this.isReady = false;
      });
  }
};
</script>

<style>
@import url("../assets/css/video.css");
</style>