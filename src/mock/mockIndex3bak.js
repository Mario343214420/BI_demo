Mock.mock('/redList', {
	
  'data': getDataRc('RCData-redList')   
})

Mock.mock('/blackList', {
  'data':getDataRc('RCData-blackList')
})
Mock.mock('/qyJcDetail', {


'list': getDataRc('RCData-qyJcDetail')

})

Mock.mock('/qyJlDetail', {
  'list': getDataRc('RCData-qyJlDetail')
  
})

Mock.mock('/cunZhanbi', {
  data: getDataRc('RCData-cunZhanbi') 
})

Mock.mock('/cunShuliang', {
  data:  getDataRc('RCData-cunShuliang') 
})

Mock.mock('/getMapData', {

  'data': getDataRc('RCData-getMapData') 

})
