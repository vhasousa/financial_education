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

  /**
   *Relationship with modules, where we are making reference to de the tables module
   *directaly and through other table to relate with the content
   */

  static associate(models) {
    this.belongsTo(models.Module, { foreignKey: 'module_id', as: 'module' });
    this.belongsTo(models.Content, {
      through: 'modules',
    });
    this.belongsTo(models.Grade, { foreignKey: 'grade_id', as: 'grade' });
  }
}

export default Lesson;
