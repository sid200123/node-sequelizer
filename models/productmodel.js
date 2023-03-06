"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class productModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  productModel.init(
    {
      image: DataTypes.STRING,
      title: DataTypes.STRING,
      price: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      published: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "productModel",
    }
  );
  return productModel;
};
