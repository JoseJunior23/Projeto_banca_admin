import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Factory } from "../entities/Factory";
import { Plano } from "../entities/Plano";

class PlanoController {
  async store(request: Request, response: Response) {
    try {
      const planoRepository = getRepository(Plano);
      const factoryRepository = getRepository(Factory);

      const { variation, description, entry_date, plano_factory, factory } = request.body

      const factoryExits = await factoryRepository.findOne(factory)
      if (!factoryExits) {
        return response.status(409).json({ message: 'id do plano não encontrado !!!' })
      }

      const plano = planoRepository.create({
        variation,
        description,
        entry_date,
        plano_factory,
        factory: factoryExits
      })

      await planoRepository.save(plano)

      return response.status(201).json(plano)
    } catch (e) {
      return response.status(500).json({ message: 'Internal server error 💣' })
    }

  }

  async index(request: Request, response: Response) {
    try {
      const planoRepository = getRepository(Plano);
      const planos = await planoRepository.find();
      return response.json(planos)
    } catch (e) {
      return response.status(500).json({ message: 'Internal server error 💣' })
    }
  }

  async show(request: Request, response: Response) {
    try {
      const planoRepository = getRepository(Plano);
      const { id } = request.params;
      const plano = await planoRepository.findOne(id);
      return response.json(plano)
    } catch (e) {
      return response.status(500).json({ message: 'Internal server error 💣' })
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params
      if (!id) {
        return response.status(400).json({ message: 'Erro na validação do Id' })
      }
      const planoRepository = getRepository(Plano);
      const plano = await planoRepository.findOne(id)
      if (!plano) {
        return response.status(400).json({ message: 'Plano não encontrado' })
      }

      await planoRepository.update(id, request.body)
      return response.status(200).json({ message: 'Plano Atualizado com sucesso 👍' })
    } catch (e) {
      return response.status(500).json({ message: 'Internal server error 💣' })
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const planoRepository = getRepository(Plano);
      const { id } = request.body;
      await planoRepository.delete(id);
      return response.status(200).json({ message: 'Plano deletado com sucesso' })
    } catch (e) {
      return response.status(500).json({ message: 'Internal server error 💣' })
    }
  }

}

export default new PlanoController;