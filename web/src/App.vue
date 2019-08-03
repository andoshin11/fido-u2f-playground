<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      msg: 'Hello, world!'
    }
  },
  mounted() {
    console.log('instance mounted')
  }
})
</script>
