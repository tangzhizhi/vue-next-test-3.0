<template>
  <div id="nav">
    <!-- <h1>VUE3.0 分享</h1> -->
    <div><router-link to="/vueThree">vue3使用</router-link></div>
    <div><router-link to="/reactiveApi">响应性API</router-link></div>
    <div><router-link to="/promiseTest">promiseTest</router-link></div>
    <!-- <div>123{{ $tng }}{{ $options.hello }}{{ user }}</div>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/helloSetup">helloSetup</router-link> |
    <router-link to="/reactiveTest">reactiveTest</router-link> |
    <router-link to="/refsTest">refsTest</router-link> |
    <router-link to="/reactiveProxy">reactiveProxy</router-link> | -->
  </div>
  <router-view />
</template>
<script>
export default {
  inject: ["user"],
  install(app) {
    const version = Number(app.version.split(".")[0]);
    if (version < 3) {
      console.warn("This plugin requires Vue 3");
    }
    // ...
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  div {
    margin-bottom: 20px;
  }
}
</style>
