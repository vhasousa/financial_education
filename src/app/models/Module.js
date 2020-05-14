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
      foreignKey: 'content_id',
      through: 'module_contents',
      as: 'contents',
    });
  }
}

export default Module;
