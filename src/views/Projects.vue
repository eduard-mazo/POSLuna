<template lang='pug'>
  div.projects
    v-subheader Projects
    v-container.my-5
      v-layout.mb-3.mx-0(row)
        v-btn(small text color="grey" @click="sortby('title')")
          v-icon(left small) fa-folder fa-fw
          span.text-lowercase by Projects
        v-btn(small text color="grey" @click="sortby('person')")
          v-icon(left small) fas fa-male fa-fw
          span.text-lowercase by person
      v-card(flat tile v-for='item in projects' :key="item.title")
        v-layout(row :class="`pa-3 mx-0 project  ${item.status}`")
          v-flex(xs12 md6)
            div.caption.grey--text Project title
            div {{item.title}}
          v-flex(xs6 sm4 md2)
            div.caption.grey--text Person
            div {{item.person}}
          v-flex(xs6 sm4 md2)
            div.caption.grey--text Due by
            div {{item.due}}
          v-flex(xs2 sm4 md2)
            div.text-right
              v-chip(small :class="`${item.status} white--text caption my-2`") {{item.status}}
        v-divider
</template>

<script>

export default {
  data() {
    return {
      projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'}
      ]
    }
  },
  methods: {
    sortby(prop) {
      // console.log(prop);ß
      this.projects.sort((a,b) => { return (a[prop] < b[prop]) ? 1 : -1});
    }
  }
};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.complete {
  background: #3cd1c2 !important;
}
.v-chip.ongoing {
  background: #ffaa2c !important;
}
.v-chip.overdue {
  background: #f83e70 !important;
}
</style>
