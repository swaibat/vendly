'use strict';
module.exports = (sequelize, DataTypes) => {
  const productFile = sequelize.define('productFile', {
    name:DataTypes.STRING,
    ProductId: {
      type: 'integer',
      onDelete: 'CASCADE',
      allowNull: false,
      references: {
        model: 'Product',
        key: 'id',
      },
    },
    size: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {});
  productFile.associate = function(models) {
    // associations can be defined here
  };
  return productFile;
};