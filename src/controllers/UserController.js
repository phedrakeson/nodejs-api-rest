import User from '../models/User';
import HttpError from '../utils/messages/HttpError';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json({
        ok: true,
        novoUser,
      });
    } catch (error) {
      return res.status(400).json(new HttpError(error.errors.map((err) => err.message)));
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      return res.json(user);
    } catch (error) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json(new HttpError(['ID não enviado.']));
      }
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json(new HttpError(['Usuário não existe.']));
      }

      const novosDados = await user.update(req.body);
      return res.json(novosDados);
    } catch (error) {
      return res.json(null);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json(new HttpError(['ID não enviado.']));
      }
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json(new HttpError(['Usuário não existe.']));
      }

      await user.destroy();
      return res.json(null);
    } catch (error) {
      return res.json(null);
    }
  }
}

export default new UserController();
