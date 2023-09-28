module.exports=(connection,DataTypes)=>{
    const Admin = connection.define('admins', {
        userName:DataTypes.STRING,
        password:DataTypes.STRING
    }
    )
    return Admin
} 