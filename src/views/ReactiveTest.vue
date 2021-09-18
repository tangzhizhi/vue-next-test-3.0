<template>
  <div class="reactive-test">
    <div>ref {{ count }}</div>
    <div>reactive {{ object }}</div>
  </div>
</template>

<script>
import {
  isProxy,
  isReactive,
  reactive,
  readonly,
  ref,
  toRaw,
  shallowReactive,
} from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";
// import { h, reactive, ref } from "vue";
export default {
  name: "ReactiveTest",
  components: {},
  data() {
    return {
      name: "sensedefender",
    };
  },
  setup() {
    let name = "tcz";
    let count = ref(0);
    const object = reactive({ count });
    console.log(object.count === count.value, "===ref", count, "==name", name);
    const copy = readonly(object);

    watchEffect(() => {
      console.log(copy.count, "===watch");
    });
    object.count++;
    copy.count++;
    console.log(
      "is proxy object ",
      isProxy(object),
      "is proxy copy:",
      isProxy(copy)
    );
    console.log(
      "is reactive object ",
      isReactive(object),
      "is reactive copy:",
      isReactive(copy)
    );
    const foo = {};
    const reactiveFoo = reactive(foo);
    console.log(reactiveFoo, "  toRaw", foo);
    console.log(toRaw(copy), "reactive  toraw", toRaw(reactiveFoo) === foo);
    toRaw(reactiveFoo).id = "123";
    console.log(reactiveFoo, "reactivefoo ");
    const foo1 = reactive({
      nested: {},
    });
    foo1.nested.name = "childname";
    const bar = reactive({
      foo: foo1,
      nested: foo1.nested,
    });
    foo1.name = "tcz";
    console.log(
      "markRaw:",
      foo1.nested,
      "bar :",
      bar.nested,
      "===",
      foo1.nested === bar.nested
    );
    const state = shallowReactive({
      foo: 1,
      nested: {
        bar: 2,
      },
    });
    state.foo += 1;
    console.log(
      "obj",
      state,
      "state isreactive",
      isReactive(state),
      "nested 嵌套对象",
      isReactive(state.nested),
      state.foo,
      bar.foo
    );
    state.nested.bar++; // 非响应式
    return {
      count,
      object,
    };
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
