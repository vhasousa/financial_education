import Sequelize, { Model } from 'sequelize';

class Lesson extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Module, { foreignKey: 'module_id', as: 'module' });
    this.belongsTo(models.Content, {
      through: 'modules',
    });
  }
}

export default Lesson;
