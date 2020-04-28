<template lang="pug">
 v-app
  NavBar
  v-content.mx-4.mb-4
        router-view
</template>

<script>
import HelloWorld from './components/HelloWorld';
import NavBar from './components/NavBar';

export default {
  name: 'App',

  components: {
    HelloWorld,
    NavBar,
  },

  data: () => ({
    //
  }),
};
</script>
