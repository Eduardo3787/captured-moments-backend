import { FastifyRequest, FastifyReply } from "fastify"
import { UploadFileService } from "../../service/Upload/UploadFileService";


class UploadFileController {
    async handle (request: FastifyRequest, reply: FastifyReply) {
      const file = (request as any).file
   
   if(!file.filename) {
    reply.status(400).send({ message: "No file uploaded"})
   }

   try {
    const uploadFileService = new UploadFileService()
    const uploadfile = await uploadFileService.execute({file})

      reply.status(201).send({uploadfile})
   } catch (error: any)  {
    return reply.status(400).send({ erro: true, message: error.message})
   }

    }
}

export { UploadFileController }