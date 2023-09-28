const express = require('express')
const router3 = express.Router()

const {getAll,getOne,add,update,deleted} = require('../controllers/categories.controller')

router3.get('/getAll',getAll)
router3.get('/:id',getOne)
router3.post('/add',add)
router3.put('/update/:id',update)
router3.delete('/delete/:id',deleted)

module.exports = router3