<template>
  <div class="setup-child">
    <div>props {{ name }}</div>
  </div>
</template>

<script>
// import { watchEffect } from "vue";
export default {
  name: "SetupChild",
  props: {
    name: String,
    count: Number,
  },
  setup(props, context) {
    console.log(`name is: ` + props);
    console.log(context.attrs, "=====");
    // watchEffect(() => {
    //   console.log(`name is: ` + props.count);
    // });

    return {};
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
