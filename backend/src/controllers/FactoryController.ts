import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Factory } from "../entities/Factory";

class FactoryController {
  async store(request: Request, response: Response) {
    try {
      const factoryRepository = getRepository(Factory);

      const { corporate_name, fantasy_name } = request.body

      const existsFactory = await factoryRepository.findOne({ where: { corporate_name } });
      if (existsFactory) {
        return response.status(409).json({ message: 'Fornecedor de seviço cadastrado !!!' })
      }

      const factory = factoryRepository.create({
        corporate_name,
        fantasy_name
      })

      await factoryRepository.save(factory)

      return response.status(201).json(factory)
    } catch (e) {
      return response.status(500).json({ message: 'Internal server error 💣' })
    }

  }

  async index(request: Request, response: Response) {
    try {
      const factoryRepository = getRepository(Factory);
      const factorys = await factoryRepository.find();
      return response.json(factorys)
    } catch (e) {
      return response.status(500).json({ message: 'Internal server error 💣' })
    }
  }

  async show(request: Request, response: Response) {
    try {
      const factoryRepository = getRepository(Factory);
      const { id } = request.params;
      const factory = await factoryRepository.findOne(id);
      return response.json(factory)
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
      const factoryRepository = getRepository(Factory);
      const factory = await factoryRepository.findOne(id)
      if (!factory) {
        return response.status(400).json({ message: 'Fornecedor de serviço não encontrado' })
      }

      await factoryRepository.update(id, request.body)
      return response.status(200).json({ message: 'Fornecedor de serviço Atualizado com sucesso' })
    } catch (e) {
      return response.status(500).json({ message: 'Internal server error 💣' })
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const factoryRepository = getRepository(Factory);
      const { id } = request.body;
      await factoryRepository.delete(id);
      return response.status(200).json({ message: 'Fornecedor de serviço deletado com sucesso' })
    } catch (e) {
      return response.status(500).json({ message: 'Internal server error 💣' })
    }
  }

}

export default new FactoryController;