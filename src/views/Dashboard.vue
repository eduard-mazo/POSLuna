<template lang='pug'>
  div.dashboard
    v-subheader Dashboard
    v-container.my-5.ml-5
      v-expansion-panels(accordion=false)
        v-expansion-panel(v-for="(item,i) in 5" :key="i")
          v-expansion-panel-header Item
          v-expansion-panel-content Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</template>

<script>

export default {
  components: {},
};
</script>
