import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Module from '../app/models/Module';
import Lesson from '../app/models/Lesson';
import Content from '../app/models/Content';
import Attach from '../app/models/Attach';
import User from '../app/models/User';

const models = [Module, Lesson, Content, Attach, User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
