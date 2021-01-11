<template>
  <div id="login_wrap">
    <div class="login_box">
      <div class="title_box">
        <span>欢迎光临<svg-icon iconClass="icon8" class="svg"></svg-icon></span> 
        <h3>
          今天也要充满希望呢!
        </h3>
    
      </div>
      <!-- loginform表单 -->
      <LoginForm></LoginForm>
    </div>
    <!-- 背景动画 -->
    <LoginBg></LoginBg>
  </div>
</template>
<script>
import LoginForm from "./components/loginForm";
import LoginBg from "./components/loginBg";
export default {
  name: "login",
  components: {
    LoginForm,
    LoginBg,
  },
};
</script>
<style scoped lang="scss">
.login_box {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  z-index: 1;

  .title_box {
    z-index: 2;
    color: white;
    width: 330px;
    font-family: 楷体;

    margin: 0;
    background: -webkit-linear-gradient(
      left,
      #ffffff,
      #ff0000 6.25%,
      #ff7d00 12.5%,
      #ffff00 18.75%,
      #00ff00 25%,
      #00ffff 31.25%,
      #0000ff 37.5%,
      #ff00ff 43.75%,
      #ffff00 50%,
      #ff0000 56.25%,
      #ff7d00 62.5%,
      #ffff00 68.75%,
      #00ff00 75%,
      #00ffff 81.25%,
      #0000ff 87.5%,
      #ff00ff 93.75%,
      #ffff00 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    animation: masked-animation 2s infinite linear;
  }
  @keyframes masked-animation {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -100%, 0;
    }
  }

  span {
    width: 135px;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 10px;
  }

  h3 {
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 9px;
  }

  p {
    font-weight: 600;
    margin: 10px 0;
    letter-spacing: 2px;
  }
}
</style>
