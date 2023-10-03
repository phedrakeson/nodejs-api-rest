import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'teste teste',
      sobrenome: 'teste123',
      email: 'teste@gmail.com',
      idade: 112,
      altura: 6.8,
      peso: 12,
    });
    res.json({
      ok: true,
      novoAluno,
    });
  }
}

export default new HomeController();
