import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Session } from "../entities/Session";

class SessionController {
  async store(request: Request, response: Response) {
    try {
      const sessionRepository = getRepository(Session);

      const { name, description } = request.body

      const existsSession = await sessionRepository.findOne({ where: { name } });
      if (existsSession) {
        return response.status(409).json({ message: 'Seção já cadastrado !!!' })
      }

      const session = sessionRepository.create({
        name,
        description
      })

      await sessionRepository.save(session)

      return response.status(201).json(session)
    } catch (e) {
      return response.status(500).json('Database not found!!!')
    }

  }

  async index(request: Request, response: Response) {
    try {
      const sessionRepository = getRepository(Session);
      const sessions = await sessionRepository.find();
      return response.json(sessions)
    } catch (e) {
      return response.status(500).json('Database not found!!!')
    }
  }

  async show(request: Request, response: Response) {
    try {
      const sessionRepository = getRepository(Session);
      const { id } = request.params;
      const session = await sessionRepository.findOne(id);
      return response.json(session)
    } catch (e) {
      return response.status(500).json('Database not found!!!')
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params
      if (!id) {
        return response.status(400).json({ message: 'Erro na validação do Id' })
      }
      const sessionRepository = getRepository(Session);
      const session = await sessionRepository.findOne(id)
      if (!session) {
        return response.status(400).json({ message: 'Secão não encontrada' })
      }

      await sessionRepository.update(id, request.body)
      return response.status(200).json({ message: 'Secão Atualizada com sucesso' })
    } catch (e) {
      return response.status(500).json('Database not found!!!')
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const sessionRepository = getRepository(Session);
      const { id } = request.body;
      await sessionRepository.delete(id);
      return response.status(200).json({ message: 'Secão deletada com sucesso' })
    } catch (e) {
      return response.status(500).json('Database not found!!!')
    }
  }
}

export default new SessionController