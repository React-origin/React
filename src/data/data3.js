import Mock from "mockjs"
const data3 = Mock.mock({
    'list|20':[
    
    	{
    		'goodsid|+1':100,
    		'detail': [
		    	{
				
					"title":"@ctitle(15,30)",
					'money':"@natural( 154, 1000 )",
		    		'img|4':[					
                        {
                            'img':"@dataImage('690x388')"
                        }						
                    ],
		    		'num':"@natural( 68,8888 )"
		    	}
	    	]
    	}
    ]
})
var Mock1 =Mock.mock("http://www.baidu.com/api","post",(req) => {
    // 列表页传来的id---->req.body
    var goodsID=eval(req.body)
    //    console.log(goodsID)
      var arr=[]
    data3.list.map(function(item){
        if(goodsID==item.goodsid){
            arr=item.detail
            // console.log(arr)
        }
       
    })
    return arr;
})

export default Mock1;
