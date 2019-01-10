
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Employees', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    username: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    favoritePlantId: {
      allowNull: true,
      type: Sequelize.INTEGER,
      onDelete: 'SET NULL',
      references: {
        model: 'Plants',
        key: 'id',
        as: 'favoritePlantId',
      },
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Employees'),
};
