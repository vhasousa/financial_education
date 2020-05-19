import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import User from '../models/User';

import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ message: 'Validations fail' });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    /**
     * Verify the email being passed to see if user exists
     */

    if (!user) {
      return res.status(401).json({ message: 'User does not exists' });
    }

    /**
     * Check if the password does match
     */

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ message: 'Password does not match' });
    }

    const { id, name } = user;

    /**
     * returning data from user and you token
     */

    return res.json({
      id,
      name,
      email,
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
