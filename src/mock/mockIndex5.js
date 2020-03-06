var arr = [1, 2, 3, 4, 5, 6]
Mock.mock('/redList', {
  'list|20-30': [
    {'name': '红名单名称', 'num|1-100': 1},
  ],
});
Mock.mock('/blackList', {
  'list|20-30': [
    {'name': '黑名单名称', 'num|1-100': 1},
  ],
});
Mock.mock('/rbChartData', {
  'redBarChartData': [1004, 600, 500, 700, 1000, 2000, 1400, 2000],
  'blackBarChartData': [1888, 1200, 1100, 1000, 780, 670, 500, 600],
  'redLineChartData': [1888, 1200, 1100, 1000, 910, 890],
  'blackLineChartData': [1888, 1200, 1100, 1000, 910, 890],
  'firLineChartData':{
      red: [12000, 13000, 14000, 15000, 16000, 17000],
      black: [11000, 12000, 13000, 14000, 15000, 15555]
   },
   'firBarChartData':{
       sps:[40,100,40,100],
       use:[20,40,20,50]
    }
});
Mock.mock('/grJcData', {
  list: [
    {name: '张三', 'count|1-20': 5, 'total|20-100': 5},
    {name: '郭小宁', 'count|1-20': 6, 'total|20-100': 7},
    {name: '李明', 'count|1-20': 4, 'total|20-100': 4},
    {name: '高校校', 'count|1-20': 5, 'total|20-100': 5},
    {name: '刘翔', 'count|1-20': 2, 'total|20-100': 2},
    {name: '白鹭', 'count|1-20': 1, 'total|20-100': 1},
    {name: '李白', 'count|1-20': 3, 'total|20-100': 3}
  ]
})
Mock.mock('/qyJcData', {
  list: [
    {name: '企业1', 'count|1-20': 1, 'total|20-100': 5},
    {name: '企业2', 'count|1-20': 6, 'total|20-100': 7},
    {name: '企业3', 'count|1-20': 4, 'total|20-100': 4},
    {name: '企业4', 'count|1-20': 5, 'total|20-100': 5},
    {name: '企业5', 'count|1-20': 2, 'total|20-100': 2},
    {name: '企业6', 'count|1-20': 1, 'total|20-100': 1},
    {name: '企业7', 'count|1-20': 3, 'total|20-100': 3},
    {name: '企业8', 'count|1-20': 3, 'total|20-100': 3},
    {name: '企业9', 'count|1-20': 3, 'total|20-100': 3},
    {name: '企业10', 'count|1-20': 3, 'total|20-100': 3},
    {name: '企业11', 'count|1-20': 3, 'total|20-100': 3},
    {name: '企业12', 'count|1-20': 3, 'total|20-100': 3},
    {name: '企业13', 'count|1-20': 3, 'total|20-100': 3},
    {name: '企业14', 'count|1-20': 3, 'total|20-100': 3}
  ]
})
Mock.mock('/grJcDetail', function (options) {
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
Mock.mock('/qyJcDetail', function (options) {
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
Mock.mock('/jcChartData', {
  total: [800, 500, 660, 444, 333, 444, 555, 888, 666, 333],
  used: [111, 222, 333, 123, 111, 123, 321, 222, 111, 222],
  list: ['部门名称1', '部门名称2', '部门名称3', '部门名称4', '部门名称5',
    '部门名称6', '部门名称7', '部门名称8', '部门名称9', '部门名称10']
})
