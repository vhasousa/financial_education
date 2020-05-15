import Module from '../models/Module';
import Content from '../models/Content';
import Attach from '../models/Attach';

class ModuleController {
  async store(req, res) {
    /**
     * Receives in the body of the request all the contents related to this modules
     * and the data from this module.
     */
    const { contents, ...data } = req.body;
    const module = await Module.create(data);

    if (contents && contents.length > 0) {
      module.setContents(contents);
    }

    return res.json(module);
  }

  async index(req, res) {
    const module = await Module.findAll({
      attributes: ['number', 'description'],
      include: [
        {
          association: 'contents',
          through: {
            attributes: [],
          },
          attributes: ['title', 'content'],
          include: [
            {
              model: Attach,
              as: 'attaches',
              attributes: ['name', 'path', 'url'],
            },
          ],
        },
      ],
    });

    return res.json(module);
  }
}

export default new ModuleController();
