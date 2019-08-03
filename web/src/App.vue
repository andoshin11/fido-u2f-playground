<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello, world!'
    }
  },
  mounted() {
    console.log('instance mounted')
  }
}
</script>

