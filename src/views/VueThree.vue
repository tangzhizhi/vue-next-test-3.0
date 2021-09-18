<template>
  <div class="vue-three">
    <ul>
      <li v-for="item in list" :key="item.id">{{ item }}</li>
      <li @click="showChild">showChild</li>
    </ul>
    <Vue3Child v-if="visible" :title="title" @childClick="handlerClick" />
    <br /><br />
    <div>
      <h4>result <button @click="clear">clear</button></h4>
      <div v-html="msg"></div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import { computed, watchEffect, watch } from "vue";
import Vue3Child from "../components/Vue3Child";
export default {
  name: "VueThree",
  components: {
    Vue3Child,
  },
  data() {
    return {
      list: ["createApp", "setup", "watch", "computed", "emits"],
    };
  },
  methods: {},
  setup() {
    const foo = { count: 1 };
    const data = reactive({
      name: "props",
      visible: false,
      count: 1,
      msg: "",
      title: "子页面",
    });
    const showChild = () => {
      data.visible = !data.visible;
    };
    const state = reactive({
      id: 1,
      attributes: {
        name: "",
      },
    });

    watch(
      () => state,
      (state, prevState) => {
        console.log(
          "not deep",
          state.attributes.name,
          prevState.attributes.name
        );
      }
    );

    watch(
      () => state,
      (state, prevState) => {
        console.log("deep", state.attributes.name, prevState.attributes.name);
      },
      { deep: true }
    );
    state.attributes.name = "Alex"; // 日志: "deep" "Alex" "Alex"
    // watch(
    //   () => data,
    //   (val, prev) => {
    //     console.log("current val:", val, "prev val:", prev);
    //   },
    //   { immediate: true }
    // );
    // watch([toRef(data, "visible")], ([visible], [prevVisible]) => {
    //   console.log("array ==current val:", visible, "prev val:", prevVisible);
    // });
    data.msg += "=======================";
    watchEffect(() => {
      data.msg += `<br/><br/>watchEffect: ${JSON.stringify(foo)}`;
    });
    // watch(data, (val, prev) => {
    //   console.log(val, "ssssssss", prev);
    // });
    // const plusOne = computed(() => data.count + 1, {
    //   onTrack(e) {
    //     // triggered when count.value is tracked as a dependency
    //     console.log(e, "======track");
    //   },
    // }); //
    // data.msg += `<br/><br/>computed getter: ${plusOne.value}`;
    const plusOne = computed(
      {
        get: () => {
          console.log("=====get", foo.count);
          return foo.count + 1;
        },
        set: (val) => {
          console.log(val, "=====set");
          foo.count = val - 1;
        },
      },
      {
        onTrack() {
          // triggered when count.value is tracked as a dependency
          console.log("======track");
        },
        onTrigger() {
          // triggered when count.value is tracked as a dependency
          console.log("======onTrigger");
        },
      }
    );

    plusOne.value++;
    data.msg += `<br/><br/>computed getter: ${plusOne.value}`;
    const handlerClick = () => {
      data.msg += `<br/><br/>childClick`;
    };
    const clear = () => {
      data.msg = "";
    };
    return {
      ...toRefs(data),
      showChild,
      plusOne,
      handlerClick,
      clear,
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
