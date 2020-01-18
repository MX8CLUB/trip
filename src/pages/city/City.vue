<!--  -->
<template>
   <div class=''>
     <city-head />
     <city-search />
     <city-list />
     <city-alphabet />
   </div>
</template>

<script>
import cityHead from './components/CityHead'
import CitySearch from './components/CitySearch'
import CityList from './components/CityList'
import CityAlphabet from './components/CityAlphabet'

export default {
  components: {
    cityHead,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
    }
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang = "less" scoped>

</style>
