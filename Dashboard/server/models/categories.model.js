module.exports=(connection,DataTypes)=>{
    const Category = connection.define('categories', {
        categoryName:DataTypes.STRING,
    }
    )
    return Category
} 