import Lesson from '../models/Lesson';
import Module from '../models/Module';
import Content from '../models/Content';
import Attach from '../models/Attach';
import User from '../models/User';

class LessonController {
  async store(req, res) {
    const classRoom = await Lesson.create(req.body);

    return res.json(classRoom);
  }

  async index(req, res) {
    /**
     * Searching for all the content through modules in the lessons
     */
    const user = await User.findOne({ where: { id: req.userId } });

    const { grade_id } = user;

    const lesson = await Lesson.findAll({
      where: { grade_id },
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
