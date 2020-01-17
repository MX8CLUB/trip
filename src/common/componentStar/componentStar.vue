<template>
  <div :class = " className "></div>
</template>

<script>
export default {
  props: {
    starNum: {
      type: Number,
      default: 10,
      required: false
    }
  },
  computed: {
    className () {
      console.log(`star${this.starNum}`)
      return `star star${this.starNum}`
    }
  }
}
</script>

<style lang = "less" scoped>
.star {
  height: 11px;
  width: 55px;
  margin: auto 2px;
  background: no-repeat url("./star.png");
}
.star10 {
  background-position: 0px 0px;
}
.star9 {
  background-position: 0px -11px;
}
.star8 {
  background-position: 0px -22px;
}
.star7 {
  background-position: 0px -33px;
}
.star6 {
  background-position: 0px -44px;
}
.star5 {
  background-position: 0px -55px;
}
.star4 {
  background-position: 0px -66px;
}
.star3 {
  background-position: 0px -77px;
}
.star2 {
  background-position: 0px -88px;
}
.star1 {
  background-position: 0px -99px;
}
.star0 {
  background-position: 0px -110px;
}
</style>
