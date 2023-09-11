// const express = require('express')
// const router = express.Router()


// // 获取Logo资料
// router.get('/:page/:limit',async(req,res,next)=>{

//   var page = req.params.page
//   var limit =req.params.limit


// // 全部数据
//   const record = [{
//     "code": 0,
//     "data": {
//       "current": 0,
//       "pages": 0,
//       "records": [
//         {
//           "category3Id": 0,
//           "description": "string",
//           "id": 0,
//           "spuImageList": [
//             {
//               "id": 0,
//               "imgName": "string",
//               "imgUrl": "string",
//               "spuId": 0
//             }
//           ],
//           "spuName": "string",
//           "spuSaleAttrList": [
//             {
//               "baseSaleAttrId": 0,
//               "id": 0,
//               "saleAttrName": "string",
//               "spuId": 0,
//               "spuSaleAttrValueList": [
//                 {
//                   "baseSaleAttrId": 0,
//                   "id": 0,
//                   "isChecked": "string",
//                   "saleAttrName": "string",
//                   "saleAttrValueName": "string",
//                   "spuId": 0
//                 }
//               ]
//             }
//           ],
//           "tmId": 0
//         }
//       ],
//       "searchCount": true,
//       "size": 0,
//       "total": 0
//     },
//     "message": "string",
//     "ok": true
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