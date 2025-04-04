import { FastifyRequest, FastifyReply } from "fastify"
import { LoginUserService } from "../../service/Auth/LoginUserService"



class LoginUserController {
    async handle (request: FastifyRequest, reply: FastifyReply) {
        const { email, password } = request.body as {email: string, password: string}

        if(!email || !password) {
          reply.status(400).send({ message: "Todos os campos são requiridos"})
         }

        try {
           
            const loginUserService = new LoginUserService()
           
            const login = await loginUserService.execute({email, password})
          reply.send(login);
        } catch (error: any)  {
          return reply.status(400).send({ erro: true, message: error.message})
        }
    }
}

export { LoginUserController }