
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Plants', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    commonName: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    shortDescription: {
      allowNull: true,
      type: Sequelize.TEXT,
    },
    longDescription: {
      allowNull: true,
      type: Sequelize.TEXT,
    },
    imageUrl: {
      allowNull: true,
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
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Plants'),
};
