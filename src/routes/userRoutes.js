import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);

export default router;

/*

index -> listar todos os usuarios -> GET
store/create -> cria um novo usuario -> POST
delete -> apaga um usuario -> DELETE
show -> mostra um usuario -> GET
update -> atualiza um usuario -> PATCH (altera somente um valor) ou PUT (envia objeto e altera)

*/
