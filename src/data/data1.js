import Mock from 'mockjs'
const data5 = Mock.mock({
    'list|7':[
    
    	{
    		'lei|+1':66,
    		'citylist|1-4': [
		    	{
		    		'hhh':"@csentence(1,4)",
		    		'city|2-7':[
		    			{
		    				'classID|+1': 0,
		    				'dqlist':"@city()"
		    			}
		    		]
		    	}
	    	]
    	}
    ]
})

var mok1 = Mock.mock('http://www.souhu.com/api.php','post',(req)=>{
	var lei=eval(req.body);
	var navarr = [];
	data5.list.map(function(item){
		if(lei==item.lei){
			navarr = item.citylist;
		}
	})
	return navarr;
})
export default mok1;

