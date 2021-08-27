<template>
  <div class="hello-setup">
    <div>ref {{ count }}</div>
    <div>reactive {{ object }}</div>
    <SetupChild :name="name" :count="count" />
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import SetupChild from "../components/SetupChild.vue";
// import { h, reactive, ref } from "vue";
export default {
  name: "HelloSetup",
  components: {
    SetupChild,
  },
  data() {
    return {
      name: "sensedefender",
    };
  },
  setup() {
    let count = ref(0);
    const object = reactive({ foo: "bar" });

    setTimeout(() => {
      count.value++;
      console.log(count, "====", object);
    }, 1000);
    return {
      count,
      object,
    };
    // return () => h("div", [count.value, object.foo]); // 渲染函数优先级比template高
  },
};
</script>
<style lang="scss" scoped>
.hello-setup {
  text-align: left;
  margin-left: 500px;
  div {
    height: 30px;
  }
}
</style>
