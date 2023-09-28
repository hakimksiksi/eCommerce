const db = require('../models/index')

module.exports={
    getAll: async(req,res)=>{
        try {
            const getAll=await db.product.findAll({})
            res.json(getAll)
        } catch (error) {
            throw error
        }
    },
    getOne: async(req,res)=>{
        try {
            const getOne=await db.product.findOne({where:{productName:req.params.productName}})
            res.json(getOne)
        } catch (error) {
           throw error 
        }
    },
    add: async(req,res)=>{
        try {
            const add = await db.product.create(req.body)
            res.json(add)
        } catch (error) {
            throw error
        }
    },
    update: async(req,res)=>{
        try {
            const update = await db.product.update(req.body,{where:{id:req.params.id}})
            res.json(update)
        } catch (error) {
            throw error
        }
    },
    deleted: async(req,res)=>{
        try {
          const deleted = await db.product.destroy({where:{id:req.params.id}})
          res.json(deleted)
        } catch (error) {
           throw error 
        }
    }
}