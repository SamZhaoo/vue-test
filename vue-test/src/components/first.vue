<template>
    <div>
        <p>男生：{{man}}</p>
        <p>女生：{{woman}}</p>
        <p>人数：{{humanSum}}</p>
        <input type="text" v-model="manSum">
        <button @click="setSum()"> 确定</button>
        <button @click="nextPage()">跳转</button>
    </div>
</template>
<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
export default {
  data () {
    return {
      manSum: 0
    }
  },
  computed: {
    ...mapState(['man', 'woman']),
    ...mapGetters([
      'humanSum'
    ])
  },
  methods: {
    setSum () {
      this.setMan(this.manSum)
    },
    nextPage () {
      this.$router.push({path: 'second'})
    },
    ...mapMutations(['setMan'])
  },
  mounted () {
    console.log(...mapGetters)
    console.log(this.$store)
  }
}
</script>

<style>

</style>
