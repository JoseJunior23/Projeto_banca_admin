import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Employee } from "../entities/Employee";

class EmployeeController {
  async store(request: Request, response: Response) {
    try {
      const employeeRepository = getRepository(Employee);
      const { name, nickname, phone } = request.body

      const employeeExists = await employeeRepository.findOne({ where: { nickname } });
      if (employeeExists) {
        return response.status(409).json({ message: 'Este apelido ja foi cadastrado 🥵' })
      }

      const employee = employeeRepository.create({
        name,
        nickname,
        phone
      });

      await employeeRepository.save(employee);
      return response.status(201).json(employee)

    } catch (e) {
      return response.status(500).json({ message: 'Internal server error 💣' })
    }
  }

  async index(request: Request, response: Response) {
    try {
      const employeeRepository = getRepository(Employee);
      const employees = await employeeRepository.find();
      return response.status(200).json(employees)

    } catch (e) {
      return response.status(500).json({ message: 'Internal server error 💣' })
    }
  }

  async show(request: Request, response: Response) {
    try {
      const employeeRepository = getRepository(Employee);
      const { id } = request.params;
      const employee = await employeeRepository.findOne(id);
      return response.json(employee)

    } catch (e) {
      return response.status(500).json({ message: 'Internal server error 💣' })
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params
      if (!id) {
        return response.status(400).json({ message: 'Erro na validação do Id 🥴' })
      }
      const employeeRepository = getRepository(Employee);
      const employee = await employeeRepository.findOne(id)
      if (!employee) {
        return response.status(400).json({ message: 'Funcionario não encontrado 😨' })
      }

      await employeeRepository.update(id, request.body)
      return response.status(200).json({ message: 'Funcionario Atualizado com sucesso 👍' })
    } catch (e) {
      return response.status(500).json({ message: 'Internal server error 💣' })
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const employeeRepository = getRepository(Employee);
      const { id } = request.body;
      await employeeRepository.delete(id);
      return response.status(200).json({ message: 'Funcionario deletado com sucesso 👍' })
    } catch (e) {
      return response.status(500).json({ message: 'Internal server error 💣' })
    }
  }

}

export default new EmployeeController;