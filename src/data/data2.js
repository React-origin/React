import Mock from 'mockjs'
const data2 = Mock.mock({
    'list|12-30':[
    
    	{
    		'classid|+1':0,
    		'imglist|0-7': [
		    	{
		    		'goodsid|+1': 100,
		    		'img':"@dataImage('690x388')",
		    		'num':"@natural( 68,8888 )"
		    	}
	    	]
    	}
    ]
})
var mok = Mock.mock('http://www.taobao.com/api.php','post',(req)=>{
	var classid=eval(req.body);
	var arr = [];
	data2.list.map(function(item){
		if(classid==item.classid){
			arr = item.imglist;
		}
	})
	return arr;
})
export default mok;