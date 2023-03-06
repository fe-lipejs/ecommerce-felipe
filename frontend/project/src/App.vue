<template>
  <head>
    
    <link
      href="http://fonts.googleapis.com/css?family=Roboto"
      rel="stylesheet"
      type="text/css"
    />
  </head>
  <NavBar />
  <body>
    <router-view />
  </body>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: "Roboto", sans-serif;
}
</style>
<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>
