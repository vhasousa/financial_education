import Question from '../schemas/Question';

class QuestionController {
  async store(req, res) {
    const { description, alternatives, content } = req.body;

    const question = await Question.create({
      description,
      alternatives,
      content,
    });

    return res.json(question);
  }
}

export default new QuestionController();
