import Content from '../models/Content';
import Module from '../models/Module';

class ContentController {
  async store(req, res) {
    const contents = await Content.create(req.body);

    return res.json(contents);
  }
}

export default new ContentController();
