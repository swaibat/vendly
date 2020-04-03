

export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Plans', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    link: {
      type: Sequelize.STRING
    },
    amount: {
      type: Sequelize.INTEGER
    },
    description: {
      type: Sequelize.STRING
    },
    adons: {
      type: Sequelize.JSONB
    },
    type: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Plans')
};
