import Module from '../models/Module';

class ModuleController {
  async store(req, res) {
    const module = await Module.create(req.body);

    return res.json(module);
  }

  async index(req, res) {
    const module = await Module.findAll({
      include: { association: 'content' },
    });

    return res.json(module);
  }
}

export default new ModuleController();
