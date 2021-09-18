<template>
  <div class="vue-three">
    <h3>reactive</h3>
    <h3>defineProperty</h3>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
// import { h, reactive, ref } from "vue";
export default {
  name: "VueThree",
  components: {},
  data() {
    return {
      name: "sensedefender",
    };
  },
  setup() {
    const data = reactive({
      title: "VUE3.0 分享",
    });
    return {
      ...toRefs(data),
    };
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
