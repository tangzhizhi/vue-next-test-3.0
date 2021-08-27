<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button v-on:click="addToCart">Add to cart</button>
    <button v-on:click="addToCounter">Add to counter</button>
    <p>Cart({{ cart }}{{ counter }})</p>
  </div>
</template>
<script>
const mixin = {
  created() {
    console.log(this.cart);
  },
};
export default {
  name: "about",
  data() {
    return {
      cart: 1,
      counter: 0,
    };
  },
  created() {
    console.log(this.counter);
  },
  mixins: [mixin],
  renderTracked({ key, target, type }) {
    console.log(key, "---", target, "---", type);
    /* 当组件第一次渲染时，这将被记录下来:
    {
      key: "cart",
      target: {
        cart: 0
      },
      type: "get"
    }
    */
  },
  renderTriggered({ key, target, type }) {
    console.log({ key, target, type });
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    addToCounter() {
      this.counter += 1;
    },
  },
  setup() {
    console.log("hello setup");
    return {};
  },
};
</script>
