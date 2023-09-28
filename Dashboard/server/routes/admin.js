const express = require('express')
const router = express.Router()

const {getAll,getOne,add,update,deleted} = require('../controllers/admin.controller')

router.get('/getAll',getAll)
router.get('/:id',getOne)
router.post('/add',add)
router.put('/update/:id',update)
router.delete('/delete/:id',deleted)

module.exports = router