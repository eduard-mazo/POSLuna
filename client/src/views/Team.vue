<template lang='pug'>
  div.team
    v-subheader Team
    v-container.my-5
      v-row
        v-flex(xs12 sm6 md4 lg3 v-for="person in team" :key='person.name')
          v-card.text-center.ma-3(flat color='grey lighten-5')
            v-responsive.pt-4
              v-avatar(size='100')
                img(:src="`${person.avatar}`")
            v-card-text
              .subheading.one-line {{person.name.toUpperCase()}}
              .grey--text {{person.role}}
            v-card-actions
              v-btn(text small color='grey')
                v-icon(small left) fab fa-facebook-messenger
                span Message
</template>

<script>
/* eslint-disable */ 
export default {
  data() {
    return {
      team: [
        { name: 'EDUARD ALFONSO MAZO QUINTERO', role: 'Prof A Operaciones Negocios', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg' },
        { name: 'EDUAR ALEXANDER MAZO MONTERO', role: 'Prof A Operaciones Negocios', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
        { name: 'CESAR ARROYAVE', role: 'Tecnologo', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
        { name: 'FERNANDO JIMENEZ', role: 'Tecnico', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        { name: 'WILSON USUGA', role: 'Tecnico', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' }
      ]
    }
  }
};
</script>

<style scoped>
div.v-card__text div.subheading.one-line {
  overflow: hidden !important; 
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
}
</style>