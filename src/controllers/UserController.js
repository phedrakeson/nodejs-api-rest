import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      res.json({
        ok: true,
        novoUser,
      });
    } catch (error) {
      res.status(400).json({
        message: 'Ocorreu um erro inesperado.',
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
