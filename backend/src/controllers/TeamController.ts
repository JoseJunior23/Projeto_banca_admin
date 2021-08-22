import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Team } from "../entities/Team";

class TeamController {
  async store(request: Request, response: Response) {
    try {
      const teamRepository = getRepository(Team);
      const { name, description } = request.body;

      const teamExists = await teamRepository.findOne({ where: { name } });
      if (teamExists) {
        return response.status(409).json({ message: ' Existe um time com este nome 🥵' });
      };

      const team = teamRepository.create({
        name,
        description
      });

      await teamRepository.save(team);
      return response.status(201).json(team)

    } catch (error) {
      return response.status(500).json({ message: 'Internal server error 💣' })
    };
  };

  async index(request: Request, response: Response) {
    try {
      const teamRepository = getRepository(Team);
      const teams = await teamRepository.find();
      return response.status(200).json(teams);

    } catch (e) {
      return response.status(500).json({ message: 'Internal server error 💣' });
    };
  };

  async show(request: Request, response: Response) {
    try {
      const teamRepository = getRepository(Team);
      const { id } = request.params;
      const team = await teamRepository.findOne(id);
      return response.json(team);

    } catch (e) {
      return response.status(500).json({ message: 'Internal server error 💣' });
    };
  };

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      if (!id) {
        return response.status(400).json({ message: 'Erro na validação do Id 🥴' });
      }
      const teamRepository = getRepository(Team);
      const team = await teamRepository.findOne(id);
      if (!team) {
        return response.status(400).json({ message: 'Grupo(equipe) não encontrado 😨' });
      };

      await teamRepository.update(id, request.body);
      return response.status(200).json({ message: 'Grupo(equipe) Atualizada com sucesso 👍' });
    } catch (e) {
      return response.status(500).json({ message: 'Internal server error 💣' });
    };
  };

  async delete(request: Request, response: Response) {
    try {
      const teamRepository = getRepository(Team);
      const { id } = request.body;
      await teamRepository.delete(id);
      return response.status(200).json({ message: 'Grupo(equipe) deletada com sucesso 👍' });
    } catch (e) {
      return response.status(500).json({ message: 'Internal server error 💣' });
    };
  };
};

export default new TeamController;