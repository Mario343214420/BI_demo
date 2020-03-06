// 获取企业
Mock.mock('/getCountriesData', {
  'pers':getDataRc('RCData-CountriesData')['zrp'],
  'coms': getDataRc('RCData-CountriesData')['fo']
});
//
Mock.mock('/cunZhanbi', {
  list:getDataRc('RCData-cunZhanbi') 
});
//
Mock.mock('/cunShuliang', {
  list:getDataRc('RCData-cunShuliang') 
});
// 获取企业
Mock.mock('/getAnalyzeData', {
  'analyzeVal': getDataRc('RCData-getMapData') 
});
// 获取人口
Mock.mock('/compareData', function (options) {

  var countries = getDataRc('RCData-mapData2');
  var cu= getDataRc('RCData-CJData');
  Array.from(cu,(x)=>{countries.push(x)});
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

Mock.mock('/getMapData', {

	  'data': getDataRc('RCData-getMapData') 

	})

