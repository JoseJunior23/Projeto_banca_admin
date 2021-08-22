import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Employee } from "../entities/Employee";
import { Team } from "../entities/Team";
import { TeamInformation } from "../entities/TeamInformation";

class TeamInformationController {
  async store(request: Request, response: Response) {
    try {
      const teamInfoRepository = getRepository(TeamInformation);
      const teamRepository = getRepository(Team);
      const employeeRepository = getRepository(Employee);

      const { employee, team } = request.body;

      const existsTeam = await teamRepository.findOne(team);
      const existsEmployee = await employeeRepository.findOne(employee);


      const team_information = teamInfoRepository.create({
        employee: existsEmployee,
        team: existsTeam

      })

      await teamInfoRepository.save(team_information)

      return response.status(201).json(team_information)

    } catch (error) {
      return response.status(500).json({ message: 'Internal server error 💣' });
    };
  };

  async index(request: Request, response: Response) {
    try {
      const teamInfoRepository = getRepository(TeamInformation);
      const team_information = await teamInfoRepository.find();
      return response.status(200).json(team_information);

    } catch (e) {
      return response.status(500).json({ message: 'Internal server error 💣' });
    };
  };

  async show(request: Request, response: Response) {
    try {
      const teamInfoRepository = getRepository(TeamInformation);
      const { id } = request.params;
      const team_information = await teamInfoRepository.findOne(id);
      return response.json(team_information);

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
      const teamInfoRepository = getRepository(TeamInformation);
      const team_information = await teamInfoRepository.findOne(id);
      if (!team_information) {
        return response.status(400).json({ message: ' Informação do Grupo(equipe) não encontrado 😨' });
      };

      await teamInfoRepository.update(id, request.body);
      return response.status(200).json({ message: ' Informação Grupo(equipe) Atualizada com sucesso 👍' });
    } catch (e) {
      return response.status(500).json({ message: 'Internal server error 💣' });
    };
  };

  async delete(request: Request, response: Response) {
    try {
      const teamInfoRepository = getRepository(TeamInformation);
      const { id } = request.body;
      await teamInfoRepository.delete(id);
      return response.status(200).json({ message: 'Infromaçãodo Grupo(equipe) deletada com sucesso 👍' });
    } catch (e) {
      return response.status(500).json({ message: 'Internal server error 💣' });
    };
  };

}

export default new TeamInformationController;