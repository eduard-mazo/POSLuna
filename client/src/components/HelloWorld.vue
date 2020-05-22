<template lang='pug'>
  v-container
    v-row.text-center
      v-col.mb-4
        h1.display-2.font-weight-bold.mb-3
          | {{value[1][0]}}
        
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      value: {}
    }),
    beforeMount(){
      this.getName();
    },
    methods: {
      async getName() {
        const res = await fetch('api/v1/xm');
        this.value = await res.json();
      }
    }
  }
</script>
