<template lang="pug">
  nav
    v-app-bar.grey.lighten-5(flat app)
      v-app-bar-nav-icon(@click='drawer = !drawer')
      v-toolbar-title.text-uppercase.grey--text
        span.font-weight-thin Pos
        span Luna
      v-spacer
      v-btn(text color='grey' v-if='isLog')
        span Sign Out
        v-icon(right) fa-sign-out-alt
      v-btn(text color='grey' v-else)
        span Sign In
        v-icon(right) fa-sign-in-alt
    v-navigation-drawer(v-model='drawer' app dark)
      v-layout(column align-center)
        v-flex.my-5
          v-avatar(size='100')
            img(src="https://cdn.vuetifyjs.com/images/lists/1.jpg")
          p.white--text.subheading.mt-1 Eduard Mazo
        profile
      v-list
        v-list-item.d-flex.justify-center(v-for='item in items' :key="item.title" router :to='item.route')
          v-list-item-icon
            v-icon(size="20" v-text="item.icon")
          v-list-item-content
            v-list-item-title(v-text="item.title")

</template>


<script>
import profile from './profile'
// import { mapGetters, mapActions } from 'vuex'
export default {
  components: {profile},
  data() {
    return {
      drawer: true,
      items: [
        { title: 'DashBoard', icon: 'fa-tachometer-alt fa-fw', route: '/dashboard'},
        { title: 'Projects', icon: 'fa-folder fa-fw', route: '/projects' },
        { title: 'Team', icon: 'fa-users fa-fw', route: '/team' }
      ]
    }
  },
  // computed: mapGetters(['isLog']),
  // methods: mapActions(['checkSession']),
  // created() {
  //   this.checkSession();
  // }
}
</script>

<style>

</style>
