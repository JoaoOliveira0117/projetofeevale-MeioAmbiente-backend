import Controller from '../../config/api/controller.js';
import asyncHandler from '../../http/asyncHandler.js';
import UserService from '../../services/user.js';

/**
 * @swagger
 * /users:
 *  post:
 *    tags: ['User']
 *    summary: Cria um usuário e retorna-o
 *    description: Cria um usuário e retorna-o
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *    responses:
 *      201:
 *        description: Usuário criado
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 */

class CreateUserController extends Controller {
  async handle() {
    const { body } = this.req;
    const service = new UserService();

    const data = await service.create(body);

    return this.success(data);
  }
}

export default asyncHandler(CreateUserController);
