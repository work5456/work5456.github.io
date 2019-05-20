<template>
  <div class="route-main">
    <router-link to="/main">main</router-link>
    <br>
    <router-link to="/login">login</router-link>
    <br>
    <router-link to="/main/mainChild">mainChild</router-link>
    <router-view></router-view>
    <div class="cmn-center-middle">
      <div>
        <q-btn class="circle bg-primary" :style="circleStyle">订餐</q-btn>
      </div>
      <div>
        <q-btn class="circle bg-secondary" :style="circleStyle">洗车</q-btn>
      </div>
      <div>
        <q-btn class="circle bg-light-blue" :style="circleStyle">超市</q-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  computed: {
    circleStyle() {
      const height = window.innerHeight - 200;
      return {
        width: height / 3 + "px",
        height: height / 3 + "px"
      };
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.$router.push({path:'/login'})
    // }, 1000);
  }
};
</script>

<style lang="scss">
  .route-main{
    position:relative;
    .circle{
      border-radius: 50%;
      margin: 10px;
      color: #fff;
      font-size: 6vw;
    }
  }
</style>
