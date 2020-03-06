Vue.component('v-block', {
  template: `
    <div class="v-block" :style="boxStyle">
      <div class="header" v-if="!noHeader">
        <span>{{label}}</span>
      </div>
      <div class="content"><slot>content</slot></div>
      <div class="angle top-left"></div>
      <div class="angle top-right"></div>
      <div class="angle bottom-left"></div>
      <div class="angle bottom-right"></div>
    </div>`,
  props: {
    label: {
      type: String,
      default: '主标题'
    },
    rect: {
      type: Array, // x,y,w,h [460,462],[940,944]
      default () {
        return [40, 20, 460, 462]
      }
    },
    noHeader: Boolean
  },
  computed: {
    boxStyle () {
      return {
        position: 'absolute',
        left: this.rect[0] + 'px',
        top: this.rect[1] + 'px',
        width: this.rect[2] + 'px',
        height: this.rect[3] + 'px'
      }
    }
  }
})
