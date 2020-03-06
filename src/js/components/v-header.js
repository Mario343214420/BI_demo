Vue.component('v-header', {
  template: `
    <div class="v-header">
      <div class="label">{{label}}</div>
      <div class="btn">
        <slot>
<!--          <a class="active">全市信用综合分析平台</a>-->
<!--          <a>个人信用分析</a>-->
<!--          <a>企业信用分析</a>-->
<!--          <a>镇街信用分析</a>-->
<!--          <a>信用奖惩分析</a>-->
        </slot>
      </div>
<!--      <div class="btn right">-->
<!--        <a>镇街信用分析</a>-->
<!--        <a>信用奖惩分析</a>-->
<!--      </div>-->
      <div class="date">{{date}}</div>
    </div>`,
  props: {
    label: {
      type: String,
      default: '主标题'
    },
    activeMenu: {
      type: Number,
      default: 0
    },
  },
  data() {
    return {
      date: ''
    }
  },
  created() {
    this.setTime()
    setInterval(() => {
      this.setTime()
    }, 1000)
  },
  methods: {
    setTime() {
      let myDate = new Date()
      let year = myDate.getFullYear()    //获取完整的年份(4位,1970-????)
      let month = myDate.getMonth() + 1      //获取当前月份(0-11,0代表1月)
      let day = myDate.getDate()        //获取当前日(1-31)

      let h = myDate.getHours(), m = myDate.getMinutes(), s = myDate.getSeconds();
      h <= 9 ? h = '0' + h : h;
      m <= 9 ? m = '0' + m : m;
      s <= 9 ? s = '0' + s : s;
      this.date = `${year}年  ${month}月${day}日 ${h}:${m}:${s}`
    }
  }
})
