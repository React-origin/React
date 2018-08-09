import Mock from "mockjs"
var  Data = Mock.mock({
    'list': [       
                {
                    goodsID:1001,
                    name: "上海往返香港3晚4日自由行|港龙航空 华丽海景酒店或同级  送香港4天WIFI 团签（L签）可现询",
                    month_string:"8月、9月",
                    cover_image:"https://img.sfystatic.com/upload/images/product-cover/42/02/1004874.jpg",
                    recommended_reason:"送香港4天WIFI",
                    price:1899       
                 },
                 {
                    goodsID:1002,
                    name: "上海出发 新加坡转机 内飞上岛 马尔代夫罗宾逊努努岛7日5晚自由行|一价全包餐型 新开业岛屿 优质浮潜",
                    month_string:"8月",
                    cover_image:"https://img.sfystatic.com/upload/images/product-cover/2c/90/1010675.jpg",
                    recommended_reason:"优选航班 品质住宿 2017年11月新开岛屿",
                    price:2999
                 },
                 {
                    goodsID:1003,
                    name: "上海出发清迈+清莱4晚6日跟团游|吉祥直飞 清迈4晚优选酒店 蓝白庙 嘟嘟车巡游古城 赠人妖秀 1天自由活动",
                    month_string:"8月、9月",
                    cover_image:"https://img.sfystatic.com/upload/images/product-cover/06/b9/1010559.jpg",
                    recommended_reason:"景点全覆盖：蓝白庙+大象营+双龙寺+嘟嘟车游古城+魏功甘古城",
                    price:2999
                    
                 },
              
    ]
})

Mock.mock("http://www.baidu.com/api","post",(req) => {
    var id=eval(req.body)
    var arr=[]
    Data.list.map(function(item){
        if(item.goodsID==id){
            arr.push(item)
        }
       
    })
    return arr;
})
export default Data;
