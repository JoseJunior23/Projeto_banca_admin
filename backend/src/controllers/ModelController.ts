import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Factory } from "../entities/Factory";
import { Model } from "../entities/Model";

class ModelController {
  async store(request: Request, response: Response) {
    try {
      const modelRepository = getRepository(Model);
      const factoryRepository = getRepository(Factory);


      const { reference, description, par_value, pesponto_value, colacao_value, factory } = request.body

      const existsModel = await modelRepository.findOne({ where: { reference } });
      if (existsModel) {
        return response.status(409).json({ message: 'Modelo já cadastrado !!!' })
      }

      const model = modelRepository.create({
        reference,
        description,
        par_value,
        pesponto_value,
        colacao_value,
        factory
      })

      await modelRepository.save(model)

      return response.status(201).json(model)
    } catch (e) {
      return response.status(500).json({ message: 'Internal server error 💣' })
    }

  }

  async index(request: Request, response: Response) {
    try {
      const modelRepository = getRepository(Model);
      const models = await modelRepository.find();
      return response.json(models)
    } catch (e) {
      return response.status(500).json({ message: 'Internal server error 💣' })
    }
  }

  async show(request: Request, response: Response) {
    try {
      const modelRepository = getRepository(Model);
      const { id } = request.params;
      const model = await modelRepository.findOne(id);
      return response.json(model)
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
      const modelRepository = getRepository(Model);
      const model = await modelRepository.findOne(id)
      if (!model) {
        return response.status(400).json({ message: 'Modelo  não encontrado' })
      }

      await modelRepository.update(id, request.body)
      return response.status(200).json({ message: 'Modelo Atualizado com sucesso' })
    } catch (e) {
      return response.status(500).json({ message: 'Internal server error 💣' })
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const modelRepository = getRepository(Model);
      const { id } = request.body;
      await modelRepository.delete(id);
      return response.status(200).json({ message: 'Modelo deletado com sucesso' })
    } catch (e) {
      return response.status(500).json({ message: 'Internal server error 💣' })
    }
  }
}

export default new ModelController;