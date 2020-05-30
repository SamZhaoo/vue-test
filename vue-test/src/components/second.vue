<template>
    <div>
        <p>男生：{{man}}</p>
        <p>女生：{{woman}}</p>
        <p>人数：{{humanSum}}</p>
        <son>
            <p slot="yi">有没有son啊</p>
            <p slot="er">还有没有son啊</p>
        </son>
    </div>
</template>

<script>
import son from './son'
import {mapState, mapGetters} from 'vuex'
export default {
  data () {
    return {
    }
  },
  components: {
    son
  },
  computed: {
    ...mapState(['man', 'woman']),
    ...mapGetters([
      'humanSum'
    ])
  }
}
</script>
