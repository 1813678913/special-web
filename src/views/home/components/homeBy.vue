<template>
  <div class="homeBox">
      <p id="by">{{biaoyu}}</p>
  </div>
</template>

<script>
import { home } from "@/api/home";
export default {
  name: "homeBy",
  data() {
    return {
        biaoyu:''
    };
  },
  created(){
      this.speak()
  },
  methods: {
    speak() {
      home().then((res) => {
          console.log(res.data.message)
          this.biaoyu=res.data.message;
      });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
