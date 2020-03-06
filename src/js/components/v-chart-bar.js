/**
 * v-chart-bar data 格式
 * {index:'前方数据项、排名',name:'数据名称',value:'数据显示值',percent:'计算百分比',label:'尾端显示样式'}
 */
Vue.component('v-chart-bar', {
  template: `
    <div class="v-chart-bar">
      <div class="item" v-for="(item,index) in data" flex="cross:center" v-if="index < maxLength"
            @click="$emit('on-click',item)">
        <div v-if="leftShow" :style="leftStyle">{{ item.name }}</div>
        <div class="index" v-if="!leftShow||!hideIndex" :style="{color:index<3?'#fff':'#fff'}">{{index + startIndex}}</div>
        <div class="chart" flex-box="1">
          <template v-if="!leftShow">
            <div v-if="legendPos==='justify'" class="legend" flex="main:justify">
              <span style="color: #fff;font-size:18px;">{{item.name}}</spanclass>
              <span v-if="!hideValue">{{item.value}}</span>
            </div>
            <div v-else class="legend">
              <span :style="{color: nameColor }">{{item.name}}&nbsp;&nbsp;</span>
              <span v-if="!hideValue">{{item.value}}</span>
            </div>
          </template>
          <b-progress :percent="item.percent" status="text" :bg-color="bgColor" :color="barColor">
            <span :style="{color: labelColor ,fontSize:'16px'}">{{item.label}}</span>
          </b-progress>
        </div>
      </div>
    </div>`,
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    startIndex: {
      type: Number,
      default: 1
    },
    hideIndex: Boolean,
    hideValue: Boolean,
    legendPos: {
      type: String,
      default: 'justify' // justify left
    },
    leftShow: Boolean,
    leftStyle: {
      type: Object,
      default () {
        return {
          fontSize: '12px',
          width: '60px',
          color: '#0b87ed',
          textAlign: 'right',
          paddingRight: '5px'
        }
      }
    },
    maxLength: {
      type: Number,
      default: 100
    },
    nameColor: {
      type: String,
      default: '#fff'
    },
    labelColor: {
      type: String,
      default: '#fff'
    },
    barColor: {
      type: String,
      default: '#2d8cf0'
    },
    bgColor: {
      type: String,
      default: 'transparent'
    }
  }
})
