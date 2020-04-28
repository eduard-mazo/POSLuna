<template lang="pug">
  v-row(justify="center")
    v-dialog(v-model="dialog" persistent max-width="600px")
      template(v-slot:activator="{ on }")
        v-btn(color="teal" dark v-on="on") Update profile
      v-card
        v-card-title
          span(class="headline") User
        v-card-text
          v-row.mx-0(align='center')
            v-col(cols='12')
              v-form(ref='form'  v-model='valid', :lazy-validation='lazy')
                v-text-field(prepend-icon="far fa-laugh-beam" v-model='name', :counter='10', :rules='nameRules', label='Name', required)
                v-text-field(prepend-icon="far fa-envelope" v-model='email', :rules='emailRules', label='E-mail', required)
                v-row
                  v-col(cols="12" sm="6")
                    v-menu(v-model='menu' :close-on-content-click='false' transition='scale-transition' min-width='290px')
                      template(v-slot:activator='{ on }')
                        v-text-field(v-model='date' :value="date" label='Birthday date' prepend-icon='fas fa-birthday-cake' readonly='' v-on='on')
                      v-date-picker(v-model='date')
                  v-col(cols="12" sm="6")
                    v-menu(v-model='menu2' :close-on-content-click='false' transition='scale-transition' min-width='290px')
                      template(v-slot:activator='{ on }')
                        v-text-field(v-model='date2' :value="date2" label='Birthday date' prepend-icon='fas fa-birthday-cake' readonly='' v-on='on')
                      v-date-picker(v-model='date2')
        v-card-actions
          v-spacer
          v-btn(color="teal darken-1" text @click='reset') Close
          v-btn(color="teal darken-1" text @click="validate") Save
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'profile',
  computed: mapGetters(['allProfiles']),
  data() {
    return {
      dialog: false,
      date: null,
      date2: null,
      menu: false,
      menu2: false,
      valid: true,
      name: '',
      email: '',
      select: null,
      checkbox: false,
      lazy: false,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
    }
  },
  methods: {
    ...mapActions(['fetchData', 'openSnackbar']),
    validate () {
      if (this.$refs.form.validate()) {
        this.dialog = false;
        this.openSnackbar();
      }
    },
    reset () {
      this.$refs.form.reset();
      this.dialog = false;
      this.fetchData();
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  }
}
</script>

<style>

</style>
