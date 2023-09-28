const express = require('express')
const router2 = express.Router()

const {getAll,getOne,add,update,deleted} = require('../controllers/product.controller')

router2.get('/getAll',getAll)
router2.get('/:productName',getOne)
router2.post('/add',add)
router2.put('/update/:id',update)
router2.delete('/delete/:id',deleted)

module.exports = router2