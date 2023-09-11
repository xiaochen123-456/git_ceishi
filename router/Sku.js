// const express = require('express')
// const router = express.Router()



// // 获取Logo资料
// router.get('/:page/:limit',async(req,res,next)=>{

//   var page = req.params.page
//   var limit =req.params.limit


// // 全部数据
//   const record = [{
//     "id": 1,
//     "tmName": "Dole都乐",
//     "logoUrl": "https://image2.cn10.cn/upload/images/20210428/18052394209_207x90.gif"
//   },
//   {
//     "id": 2,
//     "tmName": "佳农Goodfarmer",
//     "logoUrl": "https://image2.cn10.cn/upload/images/20201217/09110699078_207x90.gif"
//   },
//   {
//     "id": 3,
//     "tmName": "佳沃JOYVIO",
//     "logoUrl": "https://image2.cn10.cn/upload/images/20211113/18361866842_207x90.gif"
//   },
//   {
//     "id": 4,
//     "tmName": "Zespri佳沛",
//     "logoUrl": "https://image.maigoo.com/upload/images/20230526/17532021253_207x90.gif"
//   },
//   {
//     "id": 5,
//     "tmName": "褚橙",
//     "logoUrl": "https://image2.cn10.cn/upload/images/20221114/17584346034_207x90.gif"
//   },
//   {
//     "id": 6,
//     "tmName": "Driscolls怡颗莓",
//     "logoUrl": "https://image2.cn10.cn/upload/images/20210608/09045285381_207x90.gif"
//   },
//   {
//     "id": 7,
//     "tmName": "17.5°橙",
//     "logoUrl": "https://image3.cnpp.cn/upload/images/20201224/18014579284_207x90.gif"
//   },
//   {
//     "id": 8,
//     "tmName": "华圣果业",
//     "logoUrl": "https://image.maigoo.com/upload/images/20210114/18033285414_207x90.gif"
//   },
//   {
//     "id": 9,
//     "tmName": "枝纯",
//     "logoUrl": "https://image3.cnpp.cn/upload/images/20221216/17534027100_207x90.gif"
//   },
//   {
//     "id": 10,
//     "tmName": "齐峰缘",
//     "logoUrl": "https://image.maigoo.com/upload/images/20230526/17532199404_207x90.gif"
//   },
//   {
//     "id": 11,
//     "tmName": "ROCKIT乐淇",
//     "logoUrl": "https://image2.cn10.cn/upload/images/20230209/10253818009_207x90.png"
//   },
//   {
//     "id": 12,
//     "tmName": "欢乐果园JOYTREE",
//     "logoUrl": "https://image3.cnpp.cn/upload/images/20210323/18082136238_207x90.gif"
//   },
//   {
//     "id": 13,
//     "tmName": "新奇士水果Sunkist",
//     "logoUrl": "https://image2.cn10.cn/upload/images/20201222/09104417582_207x90.gif"
//   }]

// // 存放每页数组
//   const records = []

//   function all(){
//     //   4                  13/4
//     let num = Math.ceil(13/limit) //总页数
//     // page 每页数据
//     for (let i = 0; i < num; i++) {
//       records.push(record.splice(0,limit))
//     }

//   }
//   console.log(records);
//     try{
//       all()
//         // 处理请求
//       var arr = {
//         "code": 200,
//         "message": "成功",
//             "data": {
//               "records":records[page-1],
//               "total": 13,
//               "size": 13,
//               "current": page,
//               "searchCount": true,
//               "pages":limit,
//             },
//         "ok": true
//       }
//       res.send(JSON.stringify(arr))
//     }catch(err){
//         next(err)
//     }

// })

 

// module.exports = router