<template>
    <div>
        <p>{{msg1}}</p>
        <button @click="nextPage()">跳转</button>
    </div>
</template>
<script>
export default {
  data () {
    return {
      msg1: 1
    }
  },
  methods: {
    nextPage () {
      this.$router.push({path: 'second'})
    }
  }
}
</script>

<style>

</style>
