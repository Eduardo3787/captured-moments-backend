import { FastifyRequest, FastifyReply } from "fastify"
import { GetUserService } from "../../service/Auth/GetUserService";




class GetUserController {
    async handle (request: FastifyRequest, reply: FastifyReply) {
        const { user } = request


   if (!user) {
    return reply.status(400).send({ error: true, message: "User is required!" })
   }

   try {
    const createUserService = new GetUserService();

    const createUser = await createUserService .execute({ user })
     
     return reply.status(200).send(createUser)
   } catch (error: any)  {
       return reply.status(400).send({ erro: true, message: error.message})
     }
        
    }
}

export { GetUserController }