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
}

export default new UserController();
