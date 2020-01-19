<template>
   <div class='ticket-list'>
     <div class="ticket-item" v-for = "(item,index) in ticketList" :key = "index" >
       <!-- 某一张票 -->
       <p v-if="!item.children"> <span class="iconfont iconyouhuijuan-xianxing ticket"/>&nbsp;{{item.title}}</p>
       <!-- 某一类票(未展开) -->
       <p v-else> {{item.title}} <span class="iconfont iconln_jiantouyou"/></p>
       <!-- 某一类票(已展开) -->
       <!-- <p v-if="ticketListStatus[index] == 2"> {{item.title}} <span class="iconfont iconln_jiantouxia"/></p> -->
       <ticket-list class = "child" v-if = "item.children" :ticketList = "item.children" />
     </div>
   </div>
</template>

<script>
export default {
  name: 'ticketList',
  components: {},
  props: {
    ticketList: Array,
    isStart: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isExpand: false // 是否展开
    }
  },
  methods: {},
  computed: {
    // 票卷的状态
    ticketListStatus () {
      let res = Array(this.ticketList.length)
      this.ticketList.map((item, index) => {
        let status = 0
        if (item.children) {
          status = 1
        }
        res.push(status)
      })
      return res
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang = "less" scoped>
.ticket-list{
  display: flex;
  flex-direction: column;
  align-items: center;
  .ticket-item{
    width:100%;
    color: #333;
    font-size: .32rem;
    line-height: .88rem;
    text-indent: .4rem;
    .child{
      margin-left: .5rem;
    }

    p{
      display: flex;
      line-height: 1rem;
      height: 1rem;
    }
  }
  .ticket{
    color: #01BCD4;
    font-size: .5rem;
  }
}
</style>
