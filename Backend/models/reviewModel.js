module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define("review", {
    rating: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false, // Ensure product_id is required for each review
      references: {
        model: 'products', // Referencing the products table
        key: 'id', // Referencing the id column of the products table
      },
    },
  });

  return Review;
};
