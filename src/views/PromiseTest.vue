<template>
  <div class="vue-three"></div>
</template>

<script>
import MyPromiseTest from "./promise.js";
export default {
  name: "VueThree",
  components: {},
  methods: {},
  setup() {
    console.log(MyPromiseTest, "=====");
    // const init = (options) => {
    //   return new MyPromiseTest((resolve, reject) => {
    //     if (options.id) {
    //       console.log("你是唯一");
    //       resolve(options);
    //     } else {
    //       console.log("不行，不行");
    //       reject("options不存在");
    //     }
    //   });
    // };
    // init({})
    //   .then((val) => {
    //     console.log("then===", val);
    //   })
    //   .catch((val) => {
    //     console.log("catch====", val);
    //   })
    //   .finally(() => {
    //     console.log("finnally===");
    //   });
    return {};
  },
};
</script>
<style lang="scss" scoped>
.vue-three {
  text-align: left;
  margin-left: 500px;
  div {
    height: 30px;
  }
}
</style>
