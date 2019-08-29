<template>
  <div class="comment-wrapper">
    <div class="items">
      <div class="item" v-for="(comment,index) in commentList" :key="index">
        <div class="left">
          <img :src="comment.user.avatarUrl" alt />
        </div>
        <div class="right">
          <div class="top">
            <span class="user">{{comment.user.nickname}}:</span>
            <span class="content">{{comment.content}}</span>
          </div>
          <div class="bottom">
            <div class="time">2016年9月18日</div>
            <div class="like-wrapper">
              <span>👍</span>
              ({{comment.likedCount}})
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commentList: []
    };
  },
  created() {
    if (this.$route.params.id === ".") {
      return;
    }
    this.axios
      .get(
        `https://autumnfish.cn/comment/hot?id=${this.$route.params.id}&type=0`
      )
      .then(res => {
        this.commentList = res.data.hotComments;
      });
  }
};
</script>

<style>
@import url("../assets/css/comment.css");
</style>