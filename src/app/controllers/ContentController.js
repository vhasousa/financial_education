import Content from '../models/Content';

class ContentController {
  async store(req, res) {
    const content = await Content.create(req.body);

    return res.json(content);
  }
}

export default new ContentController();
