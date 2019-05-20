<template>
  <div id="app">
    <transition name="slide-left">
      <!-- <button @click="toggle" v-if="on" key="on">on</button>
      <button @click="toggle" v-else key="off">off</button> -->
      <router-view class="route"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      on: true
    };
  },
  methods: {
    toggle() {
      this.on = !this.on;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  height: 100vh;
  // text-align: center;
  // button{
  //   position: absolute;
  //   left: 40vw;
  // }
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fa-leave-active {
  transition: all 1s ease-in-out;
}

.slide-in-enter {
  transform: translateX(50px);
}
.slide-in-enter-active {
  transition: all 0.5s ease-in-out;
}
.slide-in-enter-to {
  transform: translateX(0);
}
.slide-in-leave-active {
  transition: all 0.5s ease-in-out;
  transform: translateX(-50px);
}
.slide-left-enter{
  transform: translate(50px);
  opacity: 0;
}
.slide-left-enter-active{
  transition: all 0.5s ease-in-out;
  opacity: 1;
}
.slide-left-enter-to{
  transform: translate(0);
  opacity: 1;
}
.slide-left-leave{
  transform: translateX(0);
  opacity: 0;
}
.slide-left-leave-active{
  transition: all 0.5s ease-in-out;
  opacity: 0;
}
.slide-left-leave-to{
  transform: translateX(-50px);
  opacity: 0;
}
</style>
