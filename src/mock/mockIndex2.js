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

