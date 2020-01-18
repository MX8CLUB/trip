<template>
  <div class="wraper">
    <div class='search'>
     <input v-model="searchKey" type="text" placeholder="输入城市名或拼音">
    </div>
    <ul v-show="showSearch" class = "search-content">
      <li
        v-for="(item,index) in searchList" :key = "item.id"
        @click = "handleSearchItem(item)" class = "search-item">
        {{item.name}}
      </li>
      <li v-show = "noData" class = "search-item">
        没有找到匹配数据
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    cityList: Object | Array
  },
  data () {
    return {
      searchKey: '',
      searchList: [],
      showSearch: false
    }
  },
  computed: {
    noData () {
      return !this.searchList.length
    }
  },
  methods: {
    handleSearchItem (val) {
      this.searchKey = val.name
      this.$emit('changeAlphabet', val.name)

      setTimeout(() => {
        this.showSearch = false
      }, 300)
    }
  },
  watch: {
    searchKey () {
      this.showSearch = !!this.searchKey
      if (this.searchKey) {
        let res = []
        try {
          Object.keys(this.cityList).map(key => {
            this.cityList[key].map((item, index) => {
              if (item.spell.indexOf(this.searchKey) != -1 || item.name.indexOf(this.searchKey) != -1) {
                item.alphabet = key
                res.push(item)
                if (res.length >= 20) {
                  throw 'over'
                }
              }
            })
          })
        } catch (e) {

        } finally {
          this.searchList = res
        }
      }
    }
  }
}
</script>

<style lang = "less" scoped>
.search{
  height: .65rem;
  padding: .1rem;
  text-align: center;
  background-color: @bgColor;
  input{
    width: 95%;
    height: .65rem;
    line-height: .65rem;
    text-align: center;
    color: #666;
    border-radius: .12rem;
  }
}
.search-content{
  position: absolute;
  background-color: #eee;
  z-index : 1;
  bottom: 0;
  top:1.8rem;
  width: 100%;
  .search-item{
    line-height: .62rem;
    padding-left: .2rem;
    background: #fff;
    color: #666;
  }
}
</style>
