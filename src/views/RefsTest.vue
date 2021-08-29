<template>
  <div class="reactive-test">
    <div>ref {{ count }}</div>
    <div>reactive {{ object }}</div>
    <input v-model="text" />
  </div>
</template>

<script>
import { reactive, ref, toRef, toRefs ,customRef} from "@vue/reactivity";
import { watchEffect } from '@vue/runtime-core';
// import { watchEffect } from '@vue/runtime-core';
// import { h, reactive, ref } from "vue";
export default {
  name: "ReactiveTest",
  components: {
    
  },
  data() {
    return {
      name: "sensedefender",
    };
  },
  setup() {
    let count = ref(1);
    count.value = 2;
    const object = reactive({count});
    console.log(count,"object",object);
    const countRef = toRef(object,'count');
    countRef.value ++;
    object.count ++;
    const fooRef = toRef(object,'foo');
    console.log("fooref",fooRef,"countref",countRef);
    const state = reactive({
      foo: 1,
      bar: 2
    });
    const stateToRefs = toRefs(state);
    console.log("state:",state,"stateToRefs:",stateToRefs);
    let text = useDebouncedRef('hello');
    watchEffect(()=>{
      console.log(text,"text")
    });
    return {
      count,
      object,
      text
    };
  },
};
function useDebouncedRef(value, delay = 200) {
  let timeout
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      }
    }
  })
}
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
