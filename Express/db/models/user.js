'use strict';
const {
  Model
} = require('sequelize');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    setPassword(password){
      this.salt = crypto.randomBytes(16).toString('hex');
      this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 32, 'sha256').toString('hex');
    }
    validatePassword(password){
      const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 32, 'sha256').toString('hex');
      return this.hash === hash;
    }
    generateJWT(){
      const today = new Date();
      const expirationDate = new Date(today);
      expirationDate.setDate(today.getDate() + 60);

      return jwt.sign({
        email: this.email,
        id: this.id,
        exp: parseInt(expirationDate.getTime() / 1000, 10),
      }, 'secret');
    }
    toAuthJSON(){
      return {
        id: this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        token: this.generateJWT(),
      };
    }

  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    hash: DataTypes.STRING,
    salt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
