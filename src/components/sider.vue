<template>
  <div>
    <el-carousel indicator-position="outside" class="swaper">
      <el-carousel-item v-for="(item,index) in bannerList" :key="index">
        <img :src="item.imageUrl" alt />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerList: []
    };
  },
  // 发请求获取图片
  created() {
    this.axios.get("/banner").then(res => {
      console.log(res);
      this.bannerList = res.data.banners;
    });
  }
};
</script>

<style>
.swaper{
    margin-top: 20px;
}
</style>