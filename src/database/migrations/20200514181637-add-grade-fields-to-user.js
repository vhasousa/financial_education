module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'grade_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'grades',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('users', 'grade_id');
  },
};
