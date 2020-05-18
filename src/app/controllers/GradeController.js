import Grade from '../models/Grade';

class GradeController {
  async store(req, res) {
    const grade = await Grade.create(req.body);

    return res.json(grade);
  }
}

export default new GradeController();
