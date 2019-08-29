<template>
  <div class="player">
    <div class="left">
      <img class="disc" src="../assets/img/disc.png" alt />
      <img class="cover" src="../assets/img/cover.png" alt />
    </div>
    <div class="right" v-if="isSingerList">
      <div class="title">
        <img src="../assets/img/tag.png" alt />
        <span>{{ singerList.name }}</span>
      </div>
      <div class="singer">
        歌手:
        <span>{{ singerList.ar | singerName }}</span>
      </div>
      <div class="album">
        所属专辑:
        <span>{{ singerList.al.name }}</span>
      </div>
      <audio class="audio" controls :src="songUrl"></audio>
      <ul class="lyric-container">
        <li class="lyric" v-for="(words, index) in songWords" :key="index">{{ words | showWord }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      songUrl: "",
      singerList: [],
      songWords: [],
      isSingerList: false
    };
  },
  created() {
    this.axios
      .get(`https://autumnfish.cn/song/url?id=${this.$route.params.id}`)
      .then(res => {
        this.songUrl = res.data.data[0].url;
      });
    this.axios
      .get(`https://autumnfish.cn/song/detail?ids=${this.$route.params.id}`)
      .then(res => {
        this.singerList = res.data.songs[0];
        this.isSingerList = true;
      })
      .catch(err => {
        this.isSingerList = false;
      });
    this.axios
      .get(`https://autumnfish.cn/lyric?id=${this.$route.params.id}`)
      .then(res => {
        this.songWords = res.data.lrc.lyric.split("\n");
      });
  },
  filters: {
    singerName(singer) {
      let singerArr = [];
      for (var i = 0; i < singer.length; i++) {
        singerArr.push(singer[i].name);
      }
      return singerArr.join("/");
    },
    showWord(words){
        return words.split(']')[1];
    }
  }
};
</script>

<style>
@import url("../assets/css/player.css");
</style>