import User from '../models/User';

class UserController {
  async store(req, res) {
    const { email } = req.body;

    const userExists = await User.findOne({ where: { email } });

    /**
     * Checking if the user exists
     */
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const { name, password, student } = await User.create(req.body);

    return res.json({ name, email, student });
  }

  async index(req, res) {
    const user = await User.findAll({
      attributes: ['name'],
      include: [
        {
          association: 'schools',
          attributes: ['name'],
        },
        { association: 'grades', attributes: ['number', 'level'] },
      ],
    });

    return res.json(user);
  }
}

export default new UserController();
