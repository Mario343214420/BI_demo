Vue.component('rc-table', {
  template: `
    <div class="rc-table" :style="boxStyle">
      <div v-if="!!rcTableData.titleOption" class="title-bar">
        <span>{{rcTableData.titleOption.title}}</span>
        <span v-if="!!rcTableData.titleOption.toggleBtn" 
              @click="rcTableData.titleOption.toggleBtn.type==='more'?vm.showModal('more'):btnType=!btnType">
              {{rcTableData.titleOption.toggleBtn.type==='more'?"更多":(btnType?"占比":"数量")}}
        </span>
      </div>
      <div v-if="!!rcTableData.topBarOption" class="top-bar" flex>
        <img :src="rcTableData.topBarOption.imgUrl">
        <div>
          <p>{{rcTableData.topBarOption.name}}</p>
          <p>{{rcTableData.topBarOption.msg}}</p>
        </div>
      </div>
      <div class="table">
        <b-table size="small" 
                 :columns="rcTableData.columns"
                 :data="btnType?rcTableData.data:rcTableData.percentData" border disabled-hover>
        </b-table>
        <b-scrollbar style="height: 100%;" always>
          <slot></slot>
        </b-scrollbar>
      </div>
    </div>`,
  props: {
    rect: {
      type: Array, // x,y,w,h [460,462],[940,944]
      default () {
        return [40, 20, 460, 462, 1000]
      }
    },
    rcTableData:{
      type:Object,
      default:{}
    },

  },
  data () {
    return {
      btnType:true,
      btnName:''
    }
  },
  created () {

  },
  watch: {
    btnType(n,o){
    }
  },
  computed: {
    boxStyle () {
      return {
        position: 'absolute',
        left: this.rect[0] + 'px',
        top: this.rect[1] + 'px',
        width: this.rect[2] + 'px',
        height: this.rect[3] + 'px',
        zIndex: this.rect[4] ? this.rect[4] : 1000
      }
    }
  },
  methods: {
    btnFun(msg){
      if(msg==='more'){
        this.btnName = "更多"
      }else{
        if (this.btnType){
          this.btnName = "数量"
        }else{
          this.btnName = "占比"
        }
      }
    }
  }
})
