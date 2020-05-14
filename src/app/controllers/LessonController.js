import Lesson from '../models/Lesson';
import Module from '../models/Module';
import Content from '../models/Content';
import Attach from '../models/Attach';

class LessonController {
  async store(req, res) {
    const classRoom = await Lesson.create(req.body);

    return res.json(classRoom);
  }

  async index(req, res) {
    /**
     * Searching for all the content through modules in the lessons
     */

    const lesson = await Lesson.findAll({
      attributes: ['title', 'description'],
      include: [
        {
          association: 'module',
          attributes: ['number', 'description'],
          include: [
            {
              association: 'contents',
              attributes: ['title', 'content'],
              through: {
                attributes: [],
              },
              include: [
                {
                  model: Attach,
                  as: 'attaches',
                  attributes: ['name', 'path', 'url'],
                },
              ],
            },
          ],
        },
      ],
    });
    return res.json(lesson);
  }
}

export default new LessonController();
