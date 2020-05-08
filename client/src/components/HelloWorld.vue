<template lang='pug'>
  v-container
    v-row.text-center
      v-col.mb-4
        h1.display-2.font-weight-bold.mb-3
          | {{value}}
        
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
        // const value = await res.json();
        this.value = await res.text();
        console.log(this.value, 'hi!', res.status);
      }
    }
  }
</script>
