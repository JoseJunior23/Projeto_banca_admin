import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Model } from "../entities/Model";
import { Plano } from "../entities/Plano";
import { PlanoInformation } from "../entities/PlanoInformation";
import { Team } from "../entities/Team";

class PlanoInformationController {
  async store(request: Request, response: Response) {
    try {
      const planoInformationRepository = getRepository(PlanoInformation);
      const teamRepository = getRepository(Team);
      const planoRepository = getRepository(Plano);
      const modelRepository = getRepository(Model);

      const {
        entry_date,
        departure_date,
        ficha_producao,
        total_pairs,
        billed,
        billed_date,
        payment_date,
        team,
        plano,
        model
      } = request.body

      const existsPlanoInformation = await planoInformationRepository.findOne({ where: { ficha_producao } });
      if (existsPlanoInformation) {
        return response.status(409).json({ message: 'Ficha já cadastrada !!!' })
      }
      // const teamExits = await teamRepository.findOne(team);
      // if (!teamExits) {
      //   return response.status(409).json({ message: 'id do grupo não encontrado !!!' })
      // }
      // const planoExits = await planoRepository.findOne(plano)
      // if (!planoExits) {
      //   return response.status(409).json({ message: 'id do plano não encontrado !!!' })
      // }
      // const modelExits = await planoRepository.findOne(model)
      // if (!modelExits) {
      //   return response.status(409).json({ message: 'id do modelo não encontrado !!!' })
      // }

      const planoInformation = planoInformationRepository.create({
        entry_date,
        departure_date,
        ficha_producao,
        total_pairs,
        billed,
        billed_date,
        payment_date,
        team,
        plano,
        model
      })

      await planoInformationRepository.save(planoInformation)

      return response.status(201).json(planoInformation)
    } catch (e) {
      return response.status(500).json({ message: 'Internal server error 💣' })
    }

  }

  async index(request: Request, response: Response) {
    try {
      const planoInformationRepository = getRepository(PlanoInformation);
      const planoInformations = await planoInformationRepository.find();
      return response.json(planoInformations)
    } catch (e) {
      return response.status(500).json({ message: 'Internal server error 💣' })
    }
  }

  async show(request: Request, response: Response) {
    try {
      const planoInformationRepository = getRepository(PlanoInformation);
      const { id } = request.params;
      const planoInformation = await planoInformationRepository.findOne(id);
      return response.json(planoInformation)
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
      const planoInformationRepository = getRepository(PlanoInformation);
      const planoInformation = await planoInformationRepository.findOne(id)
      if (!planoInformation) {
        return response.status(400).json({ message: 'Secão não encontrada' })
      }

      await planoInformationRepository.update(id, request.body)
      return response.status(200).json({ message: 'Secão Atualizada com sucesso' })
    } catch (e) {
      return response.status(500).json({ message: 'Internal server error 💣' })
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const planoInformationRepository = getRepository(PlanoInformation);
      const { id } = request.body;
      await planoInformationRepository.delete(id);
      return response.status(200).json({ message: 'Secão deletada com sucesso' })
    } catch (e) {
      return response.status(500).json({ message: 'Internal server error 💣' })
    }
  }
}

export default new PlanoInformationController;