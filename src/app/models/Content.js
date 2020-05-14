import Sequelize, { Model } from 'sequelize';

class Content extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        content: Sequelize.TEXT,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Attach, {
      foreignKey: 'attach_id',
      as: 'attaches',
    });
    this.belongsToMany(models.Module, {
      foreignKey: 'module_id',
      through: 'module_contents',
      as: 'modules',
    });
  }
}

export default Content;
