const {Sequelize,DataTypes}= require ('sequelize')

const connection = new Sequelize('ecommerce','root','root',{
    host:"127.0.0.1",
    dialect:'mysql'
})


connection.authenticate()
.then(()=>console.log('ay jomla'))
.catch((error)=>console.log(error))

const Admin=require('./admin.model')(connection,DataTypes)
const Product=require('./products.model')(connection,DataTypes)
const Category=require('./categories.model')(connection,DataTypes)

Admin.hasMany(Product)
Product.belongsTo(Admin)
Category.hasMany(Product)
Product.belongsTo(Category)


const db = {}
db.admin=Admin
db.product=Product
db.category=Category
db.connection=connection



connection.sync({force: false })
.then(()=>{console.log('jawek 6 zit')})
.catch((error)=>console.log(error))


module.exports= db