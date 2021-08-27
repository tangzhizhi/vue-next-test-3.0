import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

let vueApp = createApp(App);
vueApp.use(store).use(router);
vueApp.config.errorHandler = function (err, vm, info) {
  console.log(err, vm, info, "errorHandler");
};
vueApp.config.warnHandler = function (msg, vm, trace) {
  console.log(msg, vm, trace, "warnHandler");
};
vueApp.config.globalProperties.$tng = "tang";
vueApp.config.optionMergeStrategies.hello = (parent, child) => {
  console.log(parent, child, "optionMergeStrategies");
  return `Hello, ${child}`;
};
vueApp.mixin({
  hello: "Vue",
});

vueApp.provide("user", "adminstrator");
vueApp.mount("#app");
