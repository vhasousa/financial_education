module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('lessons', 'module_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'modules',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('lessons', 'module_id');
  },
};
