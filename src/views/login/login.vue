<template>
  <div class="route-login">
    <div class="cmn-center-middle login-form">
      <div>
        <q-input v-model="username" float-label="请输入姓名" />
      </div>
      <div>
        <q-input v-model="mobile" float-label="请输入手机号" />
      </div>
      <div>
        <q-btn color="primary" :loading="loading" @click="login">登录</q-btn>
      </div>
      <div class="tip">
        温馨提示：如果提示未匹配到信息，请确认手机号和姓名是否正确或前往物业进行信息登记
      </div>
    </div>
    <div>
      {{ location }}
    </div>
  </div>
</template>

<script>
import { type } from "../../util";
const { isFalse } = type;

export default {
  data() {
    return {
      username: "",
      mobile: "",
      loading: false,
      location: window.location
    };
  },
  methods: {
    login() {
      if (isFalse(this.username)) {
        this.$q.notify({
          color: "negative",
          message: "请填写姓名!",
          timeout: 100,
          position: "top"
        });
        return;
      }
      this.$router.push({ path: "/main" });
    }
  },
  mounted() {
      alert(location.href.split('#')[0]);
    wx.config({
      debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: "wx6357a387a159722c", // 必填，公众号的唯一标识
      timestamp: 1558339436, // 必填，生成签名的时间戳
      nonceStr: "1hqd5tiw2oi", // 必填，生成签名的随机串
      signature: "a4e2862e794e27e0d85273a5f9b1c3e059d0084d", // 必填，签名
      jsApiList: ["uploadImage"] // 必填，需要使用的JS接口列表
    });
    wx.ready((res)=>{
        console.log('res',res);
    })
  }
};
</script>

<style lang="scss" >
.route-login {
  position: relative;
  .login-form {
    width: 90vw;
    // border: 1px solid var(--q-color-primary);
    border-radius: 5px;
    padding: 15px;
    padding-bottom: 45px;
    > div {
      padding: 5px 0;
      &.tip {
        margin-top: 40px;
        font-size: 14px;
        color: #bbb;
      }
      > button {
        width: 100%;
        margin-top: 30px;
        padding: 15px 0;
        font-size: 16px;
      }
    }
  }
}
</style>