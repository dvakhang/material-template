module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('USER', {
      username: { type: DataTypes.STRING(100) },
      email: { type: DataTypes.STRING(100) },
      password: { type: DataTypes.STRING(100) },
    })
  
    return User;
  }