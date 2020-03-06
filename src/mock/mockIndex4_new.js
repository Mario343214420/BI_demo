Mock.mock('/creditTrend', {
  data: {
    city: {
      count: [7000, 6500, 8500, 6000, 5500, 8000],
      average: [6000, 5000, 7000, 5000, 6000, 4500]
    },
    town: {
      count: [7200, 6700, 8700, 6200, 5700, 8200],
      average: [6200, 5200, 7200, 5200, 6200, 4700]
    }
  }
})
Mock.mock('/rcTableData', {
  data: {
    // new add
    zrrRcTableData: {
      data: [
        { lv: 'AAA', percent: '30%', count: 66666 },
        { lv: 'AA', percent: '20%', count: 55555 },
        { lv: 'A+', percent: '10%', count: 44444 },
        { lv: 'A', percent: '30%', count: 33333 },
        { lv: 'A-', percent: '20%', count: 22222 },
        { lv: 'B', percent: '10%', count: 11111 },
        { lv: 'C', percent: '30%', count: 66666 },
        { lv: 'D', percent: '20%', count: 66666 }
      ],
      columns: [
        { title: '信用等级', key: 'lv', align: 'center' },
        { title: '占比', key: 'percent', align: 'center' },
        { title: '入口', key: 'count', align: 'center' }
      ],
      titleOption: {
        title: '市级信用情况'
      },
      topBarOption: {
        imgUrl: '../images/add-icon3.png',
        // imgUrl:"../images/icon3.png",
        name: '自然人等级分布',
        msg: '人口数：9999999'
      }
    },
    qyRcTableData: {
      data: [
        { lv: 'AAA', percent: '30%', count: 66666 },
        { lv: 'AA', percent: '20%', count: 55555 },
        { lv: 'A+', percent: '10%', count: 44444 },
        { lv: 'A', percent: '30%', count: 33333 },
        { lv: 'A-', percent: '20%', count: 22222 },
        { lv: 'B', percent: '10%', count: 11111 },
        { lv: 'C', percent: '30%', count: 66666 },
        { lv: 'D', percent: '20%', count: 66666 }
      ],
      columns: [
        { title: '信用等级', key: 'lv', align: 'center' },
        { title: '占比', key: 'percent', align: 'center' },
        { title: '入口', key: 'count', align: 'center' }
      ],
      titleOption: {
        title: ''
      },
      topBarOption: {
        // imgUrl:"../images/add-icon3.png",
        imgUrl: '../images/icon3.png',
        name: '企业等级分布',
        msg: '人口数：8888888'
      }
    }
  }
})
Mock.mock('/ctPercentData', {
  data: {
    // new add
    city: {
      title: {
        text: ['提报信息总量', '信用指标总量'],
        subtext: ['100', '200']
      },
      count: [
        { value: 5, name: '指标1' },
        { value: 15, name: '指标2' },
        { value: 25, name: '指标3' },
        { value: 20, name: '指标4' },
        { value: 35, name: '指标5' },
        { value: 30, name: '指标6' },
        { value: 40, name: '指标7' }
      ],
      percent: [
        { value: 25, name: '负面信息' },
        { value: 75, name: '正面信息' }
      ]
    },
    town: {
      title: {
        text: ['提报信息总量', '信用指标总量'],
        subtext: ['100', '200']
      },
      count: [
        { value: 5, name: '指标1' },
        { value: 15, name: '指标2' },
        { value: 25, name: '指标3' },
        { value: 20, name: '指标4' },
        { value: 35, name: '指标5' },
        { value: 30, name: '指标6' },
        { value: 40, name: '指标7' }
      ],
      percent: [
        { value: 30, name: '负面信息' },
        { value: 70, name: '正面信息' }
      ]
    }
  }
})
Mock.mock('/creditLv', {
  data: {
    cityCreditLvTableData: {
      data: [
        { job: '村支书记', lv5: 456, lv4: 456, lv3: 456, lv2: 456, lv1: 456, lv0: 456 },
        { job: '党委书记', lv5: 123, lv4: 123, lv3: 126, lv2: 456, lv1: 41, lv0: 56 },
        { job: '会计', lv5: 456, lv4: 456, lv3: 456, lv2: 456, lv1: 456, lv0: 456 },
        { job: '科员', lv5: 456, lv4: 456, lv3: 456, lv2: 456, lv1: 456, lv0: 456 },
        { job: '处长', lv5: 456, lv4: 456, lv3: 456, lv2: 456, lv1: 456, lv0: 456 },
        // { job: '村长', lv5: 456, lv4: 456, lv3: 456, lv2: 456, lv1: 456, lv0: 456 },
        // { job: '办事员', lv5: 456, lv4: 456, lv3: 456, lv2: 456, lv1: 456, lv0: 456 },
        // { job: '主任', lv5: 456, lv4: 456, lv3: 456, lv2: 456, lv1: 456, lv0: 456 }
      ],
      percentData: [
        { job: '村支书记', lv5: '50%', lv4: '30%', lv3: '10%', lv2: '6%', lv1: '3%', lv0: '1%' },
        { job: '党委书记', lv5: '50%', lv4: '30%', lv3: '10%', lv2: '6%', lv1: '3%', lv0: '1%' },
        { job: '会计', lv5: '50%', lv4: '30%', lv3: '10%', lv2: '6%', lv1: '3%', lv0: '1%' },
        { job: '科员', lv5: '50%', lv4: '30%', lv3: '10%', lv2: '6%', lv1: '3%', lv0: '1%' },
        { job: '处长', lv5: '50%', lv4: '30%', lv3: '10%', lv2: '6%', lv1: '3%', lv0: '1%' },
        // { job: '村长', lv5: '50%', lv4: '30%', lv3: '10%', lv2: '6%', lv1: '3%', lv0: '1%' },
        // { job: '办事员', lv5: '50%', lv4: '30%', lv3: '10%', lv2: '6%', lv1: '3%', lv0: '1%' },
        // { job: '主任', lv5: '50%', lv4: '30%', lv3: '10%', lv2: '6%', lv1: '3%', lv0: '1%' }
      ],
      columns: [
        { title: '类别/等级', key: 'job',width:'100', align: 'center' },
        { title: '五星', key: 'lv5', align: 'center' },
        { title: '四星', key: 'lv4', align: 'center' },
        { title: '三星', key: 'lv3', align: 'center' },
        { title: '二星', key: 'lv2', align: 'center' },
        { title: '一星', key: 'lv1', align: 'center' },
        { title: '零星', key: 'lv0', align: 'center' }
      ],
      titleOption: {
        title: '市级重点人群信用等级分布情况',
        toggleBtn: { type: 'toggle' }
      }
    },
    townCreditLvTableData: {
      data: [
        { job: '村支书记', lv5: 456, lv4: 456, lv3: 456, lv2: 456, lv1: 456, lv0: 456 },
        { job: '党委书记', lv5: 123, lv4: 123, lv3: 126, lv2: 456, lv1: 41, lv0: 56 },
        { job: '会计', lv5: 456, lv4: 456, lv3: 456, lv2: 456, lv1: 456, lv0: 456 },
        { job: '科员', lv5: 456, lv4: 456, lv3: 456, lv2: 456, lv1: 456, lv0: 456 },
        { job: '处长', lv5: 456, lv4: 456, lv3: 456, lv2: 456, lv1: 456, lv0: 456 },
        // { job: '村长', lv5: 456, lv4: 456, lv3: 456, lv2: 456, lv1: 456, lv0: 456 },
        // { job: '办事员', lv5: 456, lv4: 456, lv3: 456, lv2: 456, lv1: 456, lv0: 456 },
        // { job: '主任', lv5: 456, lv4: 456, lv3: 456, lv2: 456, lv1: 456, lv0: 456 }
      ],
      percentData: [
        { job: '村支书记', lv5: '50%', lv4: '30%', lv3: '10%', lv2: '6%', lv1: '3%', lv0: '1%' },
        { job: '党委书记', lv5: '50%', lv4: '30%', lv3: '10%', lv2: '6%', lv1: '3%', lv0: '1%' },
        { job: '会计', lv5: '50%', lv4: '30%', lv3: '10%', lv2: '6%', lv1: '3%', lv0: '1%' },
        { job: '科员', lv5: '50%', lv4: '30%', lv3: '10%', lv2: '6%', lv1: '3%', lv0: '1%' },
        { job: '处长', lv5: '50%', lv4: '30%', lv3: '10%', lv2: '6%', lv1: '3%', lv0: '1%' },
        // { job: '村长', lv5: '50%', lv4: '30%', lv3: '10%', lv2: '6%', lv1: '3%', lv0: '1%' },
        // { job: '办事员', lv5: '50%', lv4: '30%', lv3: '10%', lv2: '6%', lv1: '3%', lv0: '1%' },
        // { job: '主任', lv5: '50%', lv4: '30%', lv3: '10%', lv2: '6%', lv1: '3%', lv0: '1%' }
      ],
      columns: [
        { title: '类别/等级', key: 'job',width:'100', align: 'center' },
        { title: '五星', key: 'lv5', align: 'center' },
        { title: '四星', key: 'lv4', align: 'center' },
        { title: '三星', key: 'lv3', align: 'center' },
        { title: '二星', key: 'lv2', align: 'center' },
        { title: '一星', key: 'lv1', align: 'center' },
        { title: '零星', key: 'lv0', align: 'center' }
      ],
      titleOption: {
        title: 'xx镇级信用等级分布情况',
        toggleBtn: { type: 'percent' }
      }
    },
    cityFundAnalyzeTableData: {
      data: [
        { name: '村支书记', size: 456, msg: 456, time: 456 },
        { name: '党委书记', size: 123, msg: 123, time: 126 },
        { name: '会计', size: 456, msg: 456, time: 456 },
        { name: '科员', size: 456, msg: 456, time: 456 },
        { name: '处长', size: 456, msg: 456, time: 456 },
        // { name: '村长', size: 456, msg: 456, time: 456 },
        // { name: '办事员', size: 456, msg: 456, time: 456 },
        // { name: '主任', size: 456, msg: 456, time: 456 }
      ],
      columns: [
        { title: '村街名称', key: 'name', align: 'center' },
        { title: '村级基本规模', key: 'size', align: 'center' },
        { title: '本年度累计发放情况', key: 'msg', align: 'center' },
        { title: '发放次数', key: 'time', align: 'center' }
      ],
      titleOption: {
        title: '市级信用基金发放情况分析',
        toggleBtn: { type: 'more' }
      }
    },
    townFundAnalyzeTableData: {
      data: [
        { name: '村支书记', size: 456, msg: 456, time: 456 },
        { name: '党委书记', size: 123, msg: 123, time: 126 },
        { name: '会计', size: 456, msg: 456, time: 456 },
        { name: '科员', size: 456, msg: 456, time: 456 },
        { name: '处长', size: 456, msg: 456, time: 456 },
        // { name: '村长', size: 456, msg: 456, time: 456 },
        // { name: '办事员', size: 456, msg: 456, time: 456 },
        // { name: '主任', size: 456, msg: 456, time: 456 }
      ],
      columns: [
        { title: '村街名称', key: 'name', align: 'center' },
        { title: '村级基本规模', key: 'size', align: 'center' },
        { title: '本年度累计发放情况', key: 'msg', align: 'center' },
        { title: '发放次数', key: 'time', align: 'center' }
      ],
      titleOption: {
        title: 'xx镇信用基金发放情况',
        toggleBtn: { type: 'more' }
      }
    }
  }
})
Mock.mock('/town', function () {
  return 1
})
