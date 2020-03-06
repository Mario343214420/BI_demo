var arr = [1, 2, 3, 4, 5, 6]
Mock.mock('/redList', {
  'list': getDataRc('RCData-redList')   
})
Mock.mock('/blackList', {
  'list': getDataRc('RCData-blackList')
})
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
})
Mock.mock('/grJcData', {
  list:getDataRc('RCData-jlFoData-1')
})
Mock.mock('/qyJcData', {
  list:getDataRc('RCData-jcQyData-1')
})
Mock.mock('/grJcDetail',  {
	 list:getDataRc('RCData-qyJlDetail')
})
Mock.mock('/qyJcDetail',  {
	

	  list:getDataRc('RCData-qyJcDetail')
})
Mock.mock('/jcChartData', {
  total: Array.from(getDataRc('RCData-deptNumData-1'),(a)=>{return a.num}),
  used: Array.from(getDataRc('RCData-deptNumData-1'),(a)=>{return a.cont}),
  list: Array.from(getDataRc('RCData-deptNumData-1'),(a)=>{return a.dept})
})
