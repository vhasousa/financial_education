import Sequelize, { Model } from 'sequelize';

class Module extends Model {
  static init(sequelize) {
    super.init(
      {
        number: Sequelize.INTEGER,
        description: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Content, {
      through: 'module_contents',
      as: 'contents',
      foreignKey: 'module_id',
    });
  }
}

export default Module;
