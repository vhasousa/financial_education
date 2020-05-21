import Content from '../models/Content';
import Module from '../models/Module';

class ContentController {
  async store(req, res) {
    const contents = await Content.create(req.body);

    return res.json(contents);
  }

  // async index(req, res) {
  //   const content = await Content.findAll({
  //     attributes: ['id'],
  //     include: [{ association: 'module',  }],
  //   });
  // }
}

export default new ContentController();
