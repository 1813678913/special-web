<template>
  <div class="homeBox">
      <p id="by">{{pp}}</p>
  </div>
</template>

<script>
import { home } from "@/api/home";
export default {
  name: "homeBy",
  data() {
    return {
        pp:''
    };
  },
  created(){
      this.aaa()
  },
  methods: {
    aaa() {
      home().then((res) => {
          console.log(res.data.message)
          this.pp=res.data.message;
      });
    },
  },
};
</script>

<style lang="scss" scoped>

#by{
   font-size: 26px;

}


</style>
