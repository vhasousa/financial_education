import mongoose from 'mongoose';
import User from '../models/User';
import Question from '../schemas/Question';

class ScoreController {
  async store(req, res) {
    const { alternative } = req.body;

    /**
     * Search for the question in the body of the request where
     * isCorrect is true and the id is equal from the id in the body
     */

    const question = await Question.aggregate([
      { $unwind: '$alternatives' },
      {
        $match: {
          $and: [
            {
              'alternatives._id': mongoose.Types.ObjectId(alternative),
            },
            { 'alternatives.isCorrect': true },
          ],
        },
      },
    ]);

    if (!question[0]) {
      return res.json({ message: 'eroouu' });
    }
    return res.json({ message: 'certa' });
  }
}

export default new ScoreController();
