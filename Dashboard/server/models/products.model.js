module.exports=(connection,DataTypes)=>{
    const Product = connection.define('products', {
        imageUrl:{
            type:DataTypes.STRING,
            allowNull:false
        },

        productName: {
            type: DataTypes.STRING,
            allowNull: false
          },

          productDescription:DataTypes.STRING,

          productPrice: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          
          productQuantity: {
            type: DataTypes.INTEGER,
            allowNull: false
          }
    }
    )
    return Product
} 