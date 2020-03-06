// 获取企业
Mock.mock('/getCountriesData', {
  'pers|8': [
    {
      'count|1000-3600': 1,
      'perc|0-100': 1,
      lv: 'AAA'
    }
  ],
  'coms|8': [
    {
      'count|1000-3600': 1,
      'perc|0-100': 1,
      lv: 'AAA'
    }
  ]
});
//
Mock.mock('/cunZhanbi', {
  list:[
    {type:'村支书记',s5:"10%",s4:"13%",s3:"14%",s2:"16%",s1:"15%",s0:"11%"},
    {type:'村委会主任',s5:"12%",s4:"13%",s3:"14%",s2:"16%",s1:"15%",s0:"11%"},
    {type:'会计',s5:"13%",s4:"13%",s3:"14%",s2:"16%",s1:"15%",s0:"11%"},
    {type:'两委人员',s5:"15%",s4:"13%",s3:"14%",s2:"16%",s1:"15%",s0:"11%"},
    {type:'妇联主席',s5:"19%",s4:"13%",s3:"14%",s2:"16%",s1:"15%",s0:"11%"}
    ]
});
//
Mock.mock('/cunShuliang', {
  list:[
    {type:'村支书记',s5:800,s4:700,s3:600,s2:500,s1:400,s0:300},
    {type:'村委会主任',s5:800,s4:700,s3:600,s2:500,s1:400,s0:300},
    {type:'会计',s5:800,s4:700,s3:600,s2:500,s1:400,s0:300},
    {type:'两委人员',s5:800,s4:700,s3:600,s2:500,s1:400,s0:300},
    {type:'妇联主席',s5:800,s4:700,s3:600,s2:500,s1:400,s0:300}
  ]
});
// 获取企业
Mock.mock('/getAnalyzeData', {
  'analyzeVal|20': [
    {
      'index|+1': 1,
      name: 'xxxxx镇街名称',
      'average|1-1000': 1,
      'pers|1-1000': 1,
      'total|1-1000': 1,
      'hundred|1-1000': 1,
      chartData: [
        {
          name: '数据量',
          type: 'line',
          data: [100,200,300,400,500,600,700]
        },
        {
          name: '平均分',
          type: 'line',
          data: [400,200,100,500,600,300,200]
        }
      ]
    },
  ],//村居专项分析数据
});
// 获取人口
Mock.mock('/compareData', function (options) {
  var countries = [
    {name: '乡镇一', pers: 999, msgs: 1000, hundred: 2000, credit: 3000},
    {name: '乡镇二', pers: 888, msgs: 1000, hundred: 2000, credit: 3000},
    {name: '乡镇三', pers: 777, msgs: 1000, hundred: 2000, credit: 3000},
    {name: '村一', pers: 777, msgs: 1000, hundred: 2000, credit: 3000},
    {name: '村二', pers: 777, msgs: 1000, hundred: 2000, credit: 3000},
    {name: '村三', pers: 777, msgs: 1000, hundred: 2000, credit: 3000}
  ];

  function getBody(options) {
    let key = options.body && JSON.parse(options.body);
    return key;
  }//请求数据序列化
  const key = getBody(options);
  function reback(param) {
    let arr = []
    for (var i = 0; i < countries.length; i++) {
      for (var j = 0;j< param.length; j++) {
        if(countries[i].name===param[j]){
          arr.push(countries[i])
        }
      }
    }
    return arr
  }
  return reback(key.list);
});


