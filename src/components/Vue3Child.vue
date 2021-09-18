<template>
  <div class="setup-child">
    <h3>{{ title }}</h3>
    <button @click="handlerClick">emit</button>
  </div>
</template>

<script>
// import { watchEffect } from "vue";
export default {
  name: "SetupChild",
  emits: ["childClick"],
  props: {
    title: String,
  },
  setup(props, { attrs, emit }) {
    console.log(`title is: ` + props);
    console.log(attrs, "=====");
    const handlerClick = () => {
      emit("childClick");
    };
    return {
      handlerClick,
    };
  },
};
</script>
<style lang="scss" scoped>
.setup-child {
  text-align: left;
  margin-left: 20px;
  div {
    height: 30px;
  }
}
</style>
