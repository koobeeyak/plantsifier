
module.exports = (sequelize, DataTypes) => {
  const Plant = sequelize.define('Plant', {
    commonName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shortDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    longDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {});
  Plant.associate = (models) => {
    Plant.hasMany(models.Employee, {
      foreignKey: 'favoritePlantId',
    });
  };
  return Plant;
};
