<template>
  <div id="app">
    <narBar></narBar>
    <router-view />
  </div>
</template>

<script>
import narBar from '@/view/common/navBar.vue';

export default {
  components: {
    narBar
  },
};
</script>
<style>
body {
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}
</style>
