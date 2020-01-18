<!--  -->
<template>
   <div class=''>
     <city-head  />
     <city-search :cityList = "cityList" @changeAlphabet = "changeAlphabet"/>
     <city-list :alphabetIndex = "alphabetIndex" :nowCity = "nowCity" :hostCityList = "hostCityList" :cityList = "cityList" />
     <city-alphabet :alphabetList = "alphabetList" @changeAlphabet = "changeAlphabet"  />
   </div>
</template>

<script>
import cityHead from './components/CityHead'
import CitySearch from './components/CitySearch'
import CityList from './components/CityList'
import CityAlphabet from './components/CityAlphabet'
import * as requireConfig from '@/config/require'

export default {
  components: {
    cityHead,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      nowCity: '北京',
      hostCityList: [],
      cityList: [],
      alphabetIndex: null, // 当前所在的字母的索引
      alphabetList: []
    }
  },
  methods: {
    // 点击字母表或者在字母表上滑动时,改变滚动条的位置,展示当前字母下的城市
    changeAlphabet (key) {
      console.log(key)
      this.alphabetIndex = key
    }
  },
  created () {},
  mounted () {
    this.$axios.post('/api/getCityData').then((res) => {
      console.log(res)
      if (res && res.data && res.data.code === requireConfig.REQUIRE_OK) {
        let data = res.data.data
        console.log(data)
        // 获取热门城市
        this.hostCityList = data.hotCities
        // 获取所有城市的首字母,以及该首字母下所有的城市
        this.alphabetList = Object.keys(data.cities)
        this.cityList = data.cities
      }
    })
  }
}
</script>

<style lang = "less" scoped>

</style>
