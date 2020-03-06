// 获取企业top100Mock
Mock.mock('/getDataBase', {
  impBaseVal: [
    {
      index: "1",
      trade: '建筑',
      count: '999',
      per: '888',
      _highlight: true,
      chartData: [200, 404, 408, 503, 402, 1009]
    },
    {
      index: "2",
      trade: '渔业',
      count: '999',
      per: '888',
      chartData: [999, 404, 408, 503, 402, 900]
    },
    {
      index: "3",
      trade: '旅游业',
      count: '999',
      per: '888',
      chartData: [888, 404, 408, 503, 402, 800]
    },
    {
      index: "4",
      trade: '建筑',
      count: '999',
      per: '888',
      chartData: [777, 404, 408, 503, 402, 700]
    },
    {
      index: "5",
      trade: '渔业',
      count: '999',
      per: '888',
      chartData: [666, 404, 408, 503, 402, 600]
    },
    {
      index: "6",
      trade: '旅游业',
      count: '999',
      per: '888',
      chartData: [444, 404, 408, 503, 402, 500]
    },
    {
      index: "7",
      trade: '建筑',
      count: '999',
      per: '888',
      chartData: [200, 404, 408, 503, 402, 400]
    },
    {
      index: "8",
      trade: '渔业',
      count: '999',
      per: '888',
      chartData: [200, 404, 408, 503, 402, 200]
    },
    {
      index: "9",
      trade: '旅游业',
      count: '999',
      per: '888',
      chartData: [200, 404, 408, 503, 402, 1009]
    },
    {
      index: "10",
      trade: '旅游业',
      count: '999',
      per: '888',
      chartData: [200, 404, 408, 503, 402, 1009]
    },
  ],
  punishVal: [
    {
      index: '1',
      trade: '运输行业',
      count: '2000',
      average: '22',
    },
    {
      index: '2',
      trade: '运输行业',
      count: '1800',
      average: '10',
    },
    {
      index: '3',
      trade: '运输行业',
      count: '1790',
      average: '9',
    },
    {
      index: '4',
      trade: '运输行业',
      count: '1600',
      average: '8',
    },
    {
      index: '5',
      trade: '运输行业',
      count: '1500',
      average: '6',
    }
  ],
  hyCreditLv: [
    {title: '信用等级', key: 'list', width: '150px', align: 'center'},
    {title: 'AAA', key: 'lv8', align: 'center'},
    {title: 'AA', key: 'lv7', align: 'center'},
    {title: 'A+', key: 'lv6', align: 'center'},
    {title: 'A', key: 'lv5', align: 'center'},
    {title: 'A-', key: 'lv4', align: 'center'},
    {title: 'B', key: 'lv3', align: 'center'},
    {title: 'C', key: 'lv2', align: 'center'},
    {title: 'D', key: 'lv1', align: 'center'},
  ],
  hyCreditLvVal: [
    {
      list: '运输行业',
      lv8: '1050',
      lv7: '1045',
      lv6: '1044',
      lv5: '1044',
      lv4: '1044',
      lv3: '1044',
      lv2: '1044',
      lv1: '1044',
    },
    {
      list: '餐饮行业',
      lv8: '1049',
      lv7: '1045',
      lv6: '1044',
      lv5: '1044',
      lv4: '1044',
      lv3: '1044',
      lv2: '1044',
      lv1: '1044',
    },
    {
      list: '服务行业',
      lv8: '1049',
      lv7: '1045',
      lv6: '1044',
      lv5: '1044',
      lv4: '1044',
      lv3: '1044',
      lv2: '1044',
      lv1: '1044',
    },
    {
      list: '保险行业',
      lv8: '1049',
      lv7: '1045',
      lv6: '1044',
      lv5: '1044',
      lv4: '1044',
      lv3: '1044',
      lv2: '1044',
      lv1: '1044',
    },
    {
      list: '互联网行业',
      lv8: '1049',
      lv7: '1045',
      lv6: '1044',
      lv5: '1044',
      lv4: '1044',
      lv3: '1044',
      lv2: '1044',
      lv1: '1044',
    },
    {
      list: '运输行业',
      lv8: '1050',
      lv7: '1045',
      lv6: '1044',
      lv5: '1044',
      lv4: '1044',
      lv3: '1044',
      lv2: '1044',
      lv1: '1044',
    },
    {
      list: '餐饮行业',
      lv8: '1049',
      lv7: '1045',
      lv6: '1044',
      lv5: '1044',
      lv4: '1044',
      lv3: '1044',
      lv2: '1044',
      lv1: '1044',
    },
    {
      list: '服务行业',
      lv8: '1049',
      lv7: '1045',
      lv6: '1044',
      lv5: '1044',
      lv4: '1044',
      lv3: '1044',
      lv2: '1044',
      lv1: '1044',
    },
    {
      list: '保险行业',
      lv8: '1049',
      lv7: '1045',
      lv6: '1044',
      lv5: '1044',
      lv4: '1044',
      lv3: '1044',
      lv2: '1044',
      lv1: '1044',
    },
    {
      list: '互联网行业',
      lv8: '1049',
      lv7: '1045',
      lv6: '1044',
      lv5: '1044',
      lv4: '1044',
      lv3: '1044',
      lv2: '1044',
      lv1: '1044',
    },
  ],
  rbNameListPercVal2: [
    {
      index: "1",
      trade: '建筑',
      redList: '6%',
      blackList: '6%',
      unusual: '6%',
      chartData: [
        {
          name: '红名单',
          type: 'line',
          data: [200, 404, 408, 503, 402, 900]
        },
        {
          name: '黑名单',
          type: 'line',
          data: [400, 705, 502, 609, 304, 800]
        },
        {
          name: '异常经营占比',
          type: 'line',
          data: [300, 802, 603, 704, 606, 700]
        },
      ]
    },
    {
      index: "2",
      trade: '渔业',
      redList: '6%',
      blackList: '6%',
      unusual: '6%',
      chartData: [
        {
          name: '红名单',
          type: 'line',
          data: [999, 404, 408, 503, 402, 700]
        },
        {
          name: '黑名单',
          type: 'line',
          data: [400, 705, 502, 609, 304, 800]
        },
        {
          name: '异常经营占比',
          type: 'line',
          data: [300, 802, 603, 704, 606, 900]
        },
      ]
    },
    {
      index: "3",
      trade: '旅游业',
      redList: '6%',
      blackList: '6%',
      unusual: '6%',
      chartData: [
        {
          name: '红名单',
          type: 'line',
          data: [888, 404, 408, 503, 402, 900]
        },
        {
          name: '黑名单',
          type: 'line',
          data: [777, 705, 502, 609, 304, 800]
        },
        {
          name: '异常经营占比',
          type: 'line',
          data: [300, 802, 603, 704, 606, 700]
        },
      ]
    },
    {
      index: "4",
      trade: '建筑',
      redList: '6%',
      blackList: '6%',
      unusual: '6%',
      chartData: [
        {
          name: '红名单',
          type: 'line',
          data: [777, 404, 408, 503, 402, 1009]
        },
        {
          name: '黑名单',
          type: 'line',
          data: [400, 705, 502, 609, 304, 800]
        },
        {
          name: '异常经营占比',
          type: 'line',
          data: [300, 802, 603, 704, 606, 700]
        },
      ]
    },
    {
      index: "5",
      trade: '渔业',
      redList: '6%',
      blackList: '6%',
      unusual: '6%',
      chartData: [
        {
          name: '红名单',
          type: 'line',
          data: [666, 404, 408, 503, 402, 1009]
        },
        {
          name: '黑名单',
          type: 'line',
          data: [400, 705, 502, 609, 304, 1001]
        },
        {
          name: '异常经营占比',
          type: 'line',
          data: [300, 802, 603, 704, 606, 1007]
        },
      ]
    },
    {
      index: "6",
      trade: '旅游业',
      redList: '6%',
      blackList: '6%',
      unusual: '88%',
      chartData: [
        {
          name: '红名单',
          type: 'line',
          data: [444, 404, 408, 503, 402, 1009]
        },
        {
          name: '黑名单',
          type: 'line',
          data: [400, 705, 502, 609, 304, 1001]
        },
        {
          name: '异常经营占比',
          type: 'line',
          data: [300, 802, 603, 704, 606, 1007]
        },
      ]
    },
    {
      index: "7",
      trade: '建筑',
      redList: '6%',
      blackList: '6%',
      unusual: '6%',
      chartData: [
        {
          name: '红名单',
          type: 'line',
          data: [200, 404, 408, 503, 402, 1009]
        },
        {
          name: '黑名单',
          type: 'line',
          data: [400, 705, 502, 609, 304, 1001]
        },
        {
          name: '异常经营占比',
          type: 'line',
          data: [300, 802, 603, 704, 606, 1007]
        },
      ]
    },
    {
      index: "8",
      trade: '渔业',
      redList: '77%',
      blackList: '7%',
      unusual: '77%',
      chartData: [
        {
          name: '红名单',
          type: 'line',
          data: [200, 404, 408, 503, 402, 1009]
        },
        {
          name: '黑名单',
          type: 'line',
          data: [400, 705, 502, 609, 304, 1001]
        },
        {
          name: '异常经营占比',
          type: 'line',
          data: [300, 802, 603, 704, 606, 1007]
        },
      ]
    },
    {
      index: "9",
      trade: '旅游业',
      redList: '8%',
      blackList: '88%',
      unusual: '8%',
      chartData: [
        {
          name: '红名单',
          type: 'line',
          data: [200, 404, 408, 503, 402, 1009]
        },
        {
          name: '黑名单',
          type: 'line',
          data: [400, 705, 502, 609, 304, 1001]
        },
        {
          name: '异常经营占比',
          type: 'line',
          data: [300, 802, 603, 704, 606, 1007]
        },
      ]
    },
    {
      index: "10",
      trade: '旅游业',
      redList: '88%',
      blackList: '8%',
      unusual: '8%',
      chartData: [
        {
          name: '红名单',
          type: 'line',
          data: [200, 404, 408, 503, 402, 1009]
        },
        {
          name: '黑名单',
          type: 'line',
          data: [400, 705, 502, 609, 304, 1001]
        },
        {
          name: '异常经营占比',
          type: 'line',
          data: [300, 802, 603, 704, 606, 1007]
        },
      ]
    },
  ],//百分比数据
  //红黑名单
  rbNameListPerc: [
    {title: '排名', width: 62, key: 'index', align: 'center'},
    {title: '行业名称', width: 122, key: 'trade', align: 'center'},
    {title: '红名单', width: 90, key: 'redList', align: 'center'},
    {title: '黑名单', width: 90, key: 'blackList', align: 'center'},
    {title: '异常经营名录', width: 90, key: 'unusual', align: 'center'}
  ],
  rbNameListPercVal: [
    {
      index: "1",
      trade: '建筑',
      redList: '666',
      blackList: '666',
      unusual: '666',
      _highlight: true,
      chartData: [
        {
          name: '红名单',
          type: 'line',
          data: [200, 404, 408, 503, 402, 900]
        },
        {
          name: '黑名单',
          type: 'line',
          data: [400, 705, 502, 609, 304, 800]
        },
        {
          name: '异常经营占比',
          type: 'line',
          data: [300, 802, 603, 704, 606, 700]
        },
      ]
    },
    {
      index: "2",
      trade: '渔业',
      redList: '777',
      blackList: '777',
      unusual: '777',
      chartData: [
        {
          name: '红名单',
          type: 'line',
          data: [999, 404, 408, 503, 402, 700]
        },
        {
          name: '黑名单',
          type: 'line',
          data: [400, 705, 502, 609, 304, 800]
        },
        {
          name: '异常经营占比',
          type: 'line',
          data: [300, 802, 603, 704, 606, 900]
        },
      ]
    },
    {
      index: "3",
      trade: '旅游业',
      redList: '888',
      blackList: '888',
      unusual: '888',
      chartData: [
        {
          name: '红名单',
          type: 'line',
          data: [888, 404, 408, 503, 402, 900]
        },
        {
          name: '黑名单',
          type: 'line',
          data: [777, 705, 502, 609, 304, 800]
        },
        {
          name: '异常经营占比',
          type: 'line',
          data: [300, 802, 603, 704, 606, 700]
        },
      ]
    },
    {
      index: "4",
      trade: '建筑',
      redList: '666',
      blackList: '666',
      unusual: '666',
      chartData: [
        {
          name: '红名单',
          type: 'line',
          data: [777, 404, 408, 503, 402, 1009]
        },
        {
          name: '黑名单',
          type: 'line',
          data: [400, 705, 502, 609, 304, 800]
        },
        {
          name: '异常经营占比',
          type: 'line',
          data: [300, 802, 603, 704, 606, 700]
        },
      ]
    },
    {
      index: "5",
      trade: '渔业',
      redList: '777',
      blackList: '777',
      unusual: '777',
      chartData: [
        {
          name: '红名单',
          type: 'line',
          data: [666, 404, 408, 503, 402, 1009]
        },
        {
          name: '黑名单',
          type: 'line',
          data: [400, 705, 502, 609, 304, 1001]
        },
        {
          name: '异常经营占比',
          type: 'line',
          data: [300, 802, 603, 704, 606, 1007]
        },
      ]
    },
    {
      index: "6",
      trade: '旅游业',
      redList: '888',
      blackList: '888',
      unusual: '888',
      chartData: [
        {
          name: '红名单',
          type: 'line',
          data: [444, 404, 408, 503, 402, 1009]
        },
        {
          name: '黑名单',
          type: 'line',
          data: [400, 705, 502, 609, 304, 1001]
        },
        {
          name: '异常经营占比',
          type: 'line',
          data: [300, 802, 603, 704, 606, 1007]
        },
      ]
    },
    {
      index: "7",
      trade: '建筑',
      redList: '666',
      blackList: '666',
      unusual: '666',
      chartData: [
        {
          name: '红名单',
          type: 'line',
          data: [200, 404, 408, 503, 402, 1009]
        },
        {
          name: '黑名单',
          type: 'line',
          data: [400, 705, 502, 609, 304, 1001]
        },
        {
          name: '异常经营占比',
          type: 'line',
          data: [300, 802, 603, 704, 606, 1007]
        },
      ]
    },
    {
      index: "8",
      trade: '渔业',
      redList: '777',
      blackList: '777',
      unusual: '777',
      chartData: [
        {
          name: '红名单',
          type: 'line',
          data: [200, 404, 408, 503, 402, 1009]
        },
        {
          name: '黑名单',
          type: 'line',
          data: [400, 705, 502, 609, 304, 1001]
        },
        {
          name: '异常经营占比',
          type: 'line',
          data: [300, 802, 603, 704, 606, 1007]
        },
      ]
    },
    {
      index: "9",
      trade: '旅游业',
      redList: '888',
      blackList: '888',
      unusual: '888',
      chartData: [
        {
          name: '红名单',
          type: 'line',
          data: [200, 404, 408, 503, 402, 1009]
        },
        {
          name: '黑名单',
          type: 'line',
          data: [400, 705, 502, 609, 304, 1001]
        },
        {
          name: '异常经营占比',
          type: 'line',
          data: [300, 802, 603, 704, 606, 1007]
        },
      ]
    },
    {
      index: "10",
      trade: '旅游业',
      redList: '888',
      blackList: '888',
      unusual: '888',
      chartData: [
        {
          name: '红名单',
          type: 'line',
          data: [200, 404, 408, 503, 402, 1009]
        },
        {
          name: '黑名单',
          type: 'line',
          data: [400, 705, 502, 609, 304, 1001]
        },
        {
          name: '异常经营占比',
          type: 'line',
          data: [300, 802, 603, 704, 606, 1007]
        },
      ]
    },
  ],//默认红黑名单显示数据
  rbNameListPercVal1: [
    {
      index: "1",
      trade: '建筑',
      redList: '666  6%',
      blackList: '666  6%',
      unusual: '666  6%',
      chartData: [
        {
          name: '红名单',
          type: 'line',
          data: [200, 404, 408, 503, 402, 900]
        },
        {
          name: '黑名单',
          type: 'line',
          data: [400, 705, 502, 609, 304, 800]
        },
        {
          name: '异常经营占比',
          type: 'line',
          data: [300, 802, 603, 704, 606, 700]
        },
      ]
    },
    {
      index: "2",
      trade: '渔业',
      redList: '777  6%',
      blackList: '777  6%',
      unusual: '777  6%',
      chartData: [
        {
          name: '红名单',
          type: 'line',
          data: [999, 404, 408, 503, 402, 700]
        },
        {
          name: '黑名单',
          type: 'line',
          data: [400, 705, 502, 609, 304, 800]
        },
        {
          name: '异常经营占比',
          type: 'line',
          data: [300, 802, 603, 704, 606, 900]
        },
      ]
    },
    {
      index: "3",
      trade: '旅游业',
      redList: '888  6%',
      blackList: '888  6%',
      unusual: '888  6%',
      chartData: [
        {
          name: '红名单',
          type: 'line',
          data: [888, 404, 408, 503, 402, 900]
        },
        {
          name: '黑名单',
          type: 'line',
          data: [777, 705, 502, 609, 304, 800]
        },
        {
          name: '异常经营占比',
          type: 'line',
          data: [300, 802, 603, 704, 606, 700]
        },
      ]
    },
    {
      index: "4",
      trade: '建筑',
      redList: '666  6%',
      blackList: '666  6%',
      unusual: '666  6%',
      chartData: [
        {
          name: '红名单',
          type: 'line',
          data: [777, 404, 408, 503, 402, 1009]
        },
        {
          name: '黑名单',
          type: 'line',
          data: [400, 705, 502, 609, 304, 800]
        },
        {
          name: '异常经营占比',
          type: 'line',
          data: [300, 802, 603, 704, 606, 700]
        },
      ]
    },
    {
      index: "5",
      trade: '渔业',
      redList: '777  6%',
      blackList: '777  6%',
      unusual: '777  6%',
      chartData: [
        {
          name: '红名单',
          type: 'line',
          data: [666, 404, 408, 503, 402, 1009]
        },
        {
          name: '黑名单',
          type: 'line',
          data: [400, 705, 502, 609, 304, 1001]
        },
        {
          name: '异常经营占比',
          type: 'line',
          data: [300, 802, 603, 704, 606, 1007]
        },
      ]
    },
    {
      index: "6",
      trade: '旅游业',
      redList: '888  6%',
      blackList: '888  6%',
      unusual: '888  6%',
      chartData: [
        {
          name: '红名单',
          type: 'line',
          data: [444, 404, 408, 503, 402, 1009]
        },
        {
          name: '黑名单',
          type: 'line',
          data: [400, 705, 502, 609, 304, 1001]
        },
        {
          name: '异常经营占比',
          type: 'line',
          data: [300, 802, 603, 704, 606, 1007]
        },
      ]
    },
    {
      index: "7",
      trade: '建筑',
      redList: '666  6%',
      blackList: '666  6%',
      unusual: '666  6%',
      chartData: [
        {
          name: '红名单',
          type: 'line',
          data: [200, 404, 408, 503, 402, 1009]
        },
        {
          name: '黑名单',
          type: 'line',
          data: [400, 705, 502, 609, 304, 1001]
        },
        {
          name: '异常经营占比',
          type: 'line',
          data: [300, 802, 603, 704, 606, 1007]
        },
      ]
    },
    {
      index: "8",
      trade: '渔业',
      redList: '777  6%',
      blackList: '777  6%',
      unusual: '777  6%',
      chartData: [
        {
          name: '红名单',
          type: 'line',
          data: [200, 404, 408, 503, 402, 1009]
        },
        {
          name: '黑名单',
          type: 'line',
          data: [400, 705, 502, 609, 304, 1001]
        },
        {
          name: '异常经营占比',
          type: 'line',
          data: [300, 802, 603, 704, 606, 1007]
        },
      ]
    },
    {
      index: "9",
      trade: '旅游业',
      redList: '888  6%',
      blackList: '888  6%',
      unusual: '888  6%',
      chartData: [
        {
          name: '红名单',
          type: 'line',
          data: [200, 404, 408, 503, 402, 1009]
        },
        {
          name: '黑名单',
          type: 'line',
          data: [400, 705, 502, 609, 304, 1001]
        },
        {
          name: '异常经营占比',
          type: 'line',
          data: [300, 802, 603, 704, 606, 1007]
        },
      ]
    },
    {
      index: "10",
      trade: '旅游业',
      redList: '888  6%',
      blackList: '888  6%',
      unusual: '888  6%',
      chartData: [
        {
          name: '红名单',
          type: 'line',
          data: [200, 404, 408, 503, 402, 1009]
        },
        {
          name: '黑名单',
          type: 'line',
          data: [400, 705, 502, 609, 304, 1001]
        },
        {
          name: '异常经营占比',
          type: 'line',
          data: [300, 802, 603, 704, 606, 1007]
        },
      ]
    },
  ],//常规数据
});
Mock.mock('/getDataBase2', {
  'comsDataList1': getDataRc('RCData-czqy'),
  'comsDataList2': getDataRc('RCData-zdqy'),
  iptCreditLvVal: [
    {
      list: '机关事业单位人员',
      lv8: 1050,
      lv7: 1045,
      lv6: 1044,
      lv5: 1044,
      lv4: 1044,
      lv3: 1044,
      lv2: 1044,
      lv1: 1044,
    },
    {
      list: '党员',
      lv8: 1049,
      lv7: 1045,
      lv6: 1044,
      lv5: 1044,
      lv4: 1044,
      lv3: 1044,
      lv2: 1044,
      lv1: 1044,
    },
    {
      list: '教师',
      lv8: 1048,
      lv7: 1045,
      lv6: 1044,
      lv5: 1044,
      lv4: 1044,
      lv3: 1044,
      lv2: 1044,
      lv1: 1044,
    },
    {
      list: "医护人员",
      lv8: 1047,
      lv7: 1045,
      lv6: 1044,
      lv5: 1044,
      lv4: 1044,
      lv3: 1044,
      lv2: 1044,
      lv1: 1044,
    },
  ],
  iptCreditLvValPerc: [
    {
      list: '机关事业单位人员',
      lv8: '1%',
      lv7: '1%',
      lv6: '1%',
      lv5: '1%',
      lv4: '1%',
      lv3: '1%',
      lv2: '1%',
      lv1: '1%',
    },
    {
      list: '党员',
      lv8: '2%',
      lv7: '2%',
      lv6: '2%',
      lv5: '2%',
      lv4: '2%',
      lv3: '2%',
      lv2: '2%',
      lv1: '2%',
    },
    {
      list: '教师',
      lv8: '3%',
      lv7: '3%',
      lv6: '3%',
      lv5: '3%',
      lv4: '3%',
      lv3: '3%',
      lv2: '3%',
      lv1: '3%',
    },
    {
      list: "医护人员",
      lv8: '3%',
      lv7: '3%',
      lv6: '3%',
      lv5: '3%',
      lv4: '3%',
      lv3: '3%',
      lv2: '3%',
      lv1: '3%',
    },
  ],//百分比数据
  agesCreditLvData: [
    {
      list: '<30',
      lv8: 10,
      lv7: 58,
      lv6: 2335,
      lv5: 129271,
      lv4: 15838,
      lv3: 181,
      lv2: 365,
      lv1: 430,
    },
    {
      list: '30-40',
      lv8: 146,
      lv7: 327,
      lv6: 4731,
      lv5: 140975,
      lv4: 29150,
      lv3: 1022,
      lv2: 871,
      lv1: 1123,
    },
    {
      list: '40-50',
      lv8: 340,
      lv7: 592,
      lv6: 7304,
      lv5: 143194,
      lv4: 25492,
      lv3: 1296,
      lv2: 912,
      lv1: 1361,
    },
    {
      list: "50-60",
      lv8: 207,
      lv7: 322,
      lv6: 6442,
      lv5: 144985,
      lv4: 14347,
      lv3: 1029,
      lv2: 645,
      lv1: 1008,
    },
    {
      list: ">60",
      lv8: 118,
      lv7: 199,
      lv6: 6466,
      lv5: 233833,
      lv4: 4453,
      lv3: 504,
      lv2: 295,
      lv1: 404,
    },
  ],//各年龄段信用等级
  agesCreditLvDataPerc: [
    {
      list: '<30',
      lv8: '0.01%',
      lv7: '0.03%',
      lv6: '1.57%',
      lv5: '87.05%',
      lv4: '10.66%',
      lv3: '0.12%',
      lv2: '0.24%',
      lv1: '0.29%',
    },
    {
      list: '30-40',
      lv8: '0.10%',
      lv7: '0.22%',
      lv6: '3.19%',
      lv5: '79.05%',
      lv4: '19.63%',
      lv3: '0.68%',
      lv2: '0.58%',
      lv1: '0.75%',
    },
    {
      list: '40-50',
      lv8: '0.19%',
      lv7: '0.33%',
      lv6: '4.095%',
      lv5: '79.33%',
      lv4: '14.29%',
      lv3: '0.72%',
      lv2: '0.51%',
      lv1: '0.76%',
    },
    {
      list: "50-60",
      lv8: '0.11%',
      lv7: '0.17%',
      lv6: '3.56%',
      lv5: '85.79%',
      lv4: '7.94%',
      lv3: '0.57%',
      lv2: '0.35%',
      lv1: '0.55%',
    },
    {
      list: ">60",
      lv8: '0.06%',
      lv7: '0.11%',
      lv6: '3.82%',
      lv5: '94.94%',
      lv4: '2.63%',
      lv3: '0.29%',
      lv2: '0.17%',
      lv1: '0.24%',
    },
  ],//各年龄段信用等级
  ringChartData:getDataRc('RCData-czqyzb'),//环形图
  ring2ChartData:getDataRc('RCData-zdqyzb'),//环形图2
  ringChartData2:getDataRc('RCData-zbxx'),//环形图
})
Mock.mock('/getMsgBarData', {
  msgBarData: {
    ipt: {
      'comCount': 56,
      'msgCount': 1460
    },
    grow: {
      'comCount': 54,
      'msgCount': 647
    }
  }
})

Mock.mock('http://test/api1', 'post', function (options) {
  function getBody(options) {
    let post = options.body && JSON.parse(options.body);
    return post.arr;
  }//请求数据序列化
  var arr = getBody(options)

  var resData = {
    redData: [15, 20, 25, 40],
    blackData: [40, 25, 25, 10]
  }//返回数据
  return resData
});

Mock.mock('http://test/api2', 'post', function (options) {
  function getBody(options) {
    let post = options.body && JSON.parse(options.body);
    return post.arr;
  }//请求数据序列化
  var arr = getBody(options)
  var resData = {
    redData6: [10, 10, 10, 10, 10, 5, 15, 5, 15, 10],
    blackData7: [10, 10, 10, 10, 10, 5, 15, 5, 15, 10]
  }//返回数据
  return resData
});

var corp = [54800, 22486, 22486]
var deptSub = [
  {dept: '交通部', num: 768435},
  {dept: '公安部', num: 68553},
];
var streetSub = [
  {dept: '港西镇', num: 768435},
  {dept: '寻山街道', num: 68553},
];

Mock.mock('/detail', function (options) {
  var countries = [
    {content: '给予依法限制取得政府性资金支持、限制补贴性资金支持等多项惩戒限制。', dept: '交通部'},
    {content: '海关高级认证企业、优秀志愿者、纳税信用A级纳税人等6个联合激励对象给予多项激励', dept: '财政部'},
    {content: '对信用状况良好的信息主体，行政机关以及法律、法规授权的具有管理公共事务职能的组织在法定权限范围内可以采取激励措施', dept: '交通部'},
  ];

  function getBody(options) {
    let key = options.body && JSON.parse(options.body);
    return key;
  }//请求数据序列化
  const key = getBody(options);

  function reback(param) {
    var i = Math.floor(Math.random() * param);
    var arr = [];
    for (var x = 0; x < i; x++) {
      var y = Math.floor(Math.random() * 3);
      arr.push(countries[y])
    }
    return arr
  }

  var list = reback(10)
  return list;
})
