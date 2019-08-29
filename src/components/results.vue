<template>
  <div class="result-wrapper">
    <div class="song" v-for="songs in songList" :key="songs.id">
      <div class="name">
        <span class="iconfont icon-play" @click="playMusic(songs.id)"></span>
        <a href="" @click.prevent="toComment(songs.id)">{{ songs.name }}</a>
        <span class="iconfont icon-editmedia" @click="toVideo(songs.mvid)" v-if="songs.mvid"></span>
      </div>
      <div class="singer">{{ songs.artists | filterSinger }}</div>
      <div class="album">《{{ songs.album.name }}》</div>
      <div class="time">{{ songs.duration | formatTime }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        songList:[]
    };
  },
  methods: {
      playMusic(id){
          this.$router.push(`/player/${id}`)
      },
      toVideo(mvid){
          this.$router.push(`/video/${mvid}`)
      },
      toComment(id){
          this.$router.push(`/comment/${id}`)
      }
  },
  created() {
    this.axios
      .get(
        `https://autumnfish.cn/search?keywords=${this.$route.params.keywords}`
      )
      .then(res => {
          this.songList = res.data.result.songs;
      });
  },
  filters:{
      filterSinger(singer){
          let singerList = [];
          for(var i = 0;i<singer.length;i++){
            singerList.push(singer[i].name);
          }
          return singerList.join('/');
      },
      formatTime(time){
          let tss = Math.floor(time/1000);
          let mm = Math.floor(tss/60).toString().padStart(2,'0');
          let ss = Math.floor(tss%60).toString().padStart(2,'0');
          return `${mm}:${ss}`;
      }
  }
};
</script>

<style>
@import url("../assets/css/results.css");
</style>