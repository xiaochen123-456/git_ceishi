const express = require('express')
const router = express.Router()


// Logo相关路由
router.use('/admin/product/baseIradmark/',require('./Logo'))
// sku相关路由
// router.use('/admin/product/sku/',require('./Sku'))
// 商品添加路由
// router.use('/admin/product/addgoods/',require('./addgoods'))





module.exports = router