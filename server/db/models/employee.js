
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  Employee.associate = (models) => {
    Employee.belongsTo(models.Plant, {
      foreignKey: 'favoritePlantId',
      onDelete: 'SET NULL',
    });
  };
  return Employee;
};
