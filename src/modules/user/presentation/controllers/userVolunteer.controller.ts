import { Request, Response } from "express";
import { UserVolunteerService } from "../../../../services/userVolunteer.service";
import { prisma } from "../../../../config/prisma";

class UserVolunteerController {
  private userVolunteerService = new UserVolunteerService(prisma);

  async addUserToVolunteer(req: Request, res: Response): Promise<Response> {
    try {
      const { userId, volunteerId } = req.params;
      const userVolunteer = await this.userVolunteerService.addUserToVolunteer(
        userId,
        volunteerId
      );
      return res.status(201).json(userVolunteer);
    } catch (error) {
      return res.status(500).json({ error: (error as Error).message });
    }
  }

  async getVolunteersByUserId(req: Request, res: Response): Promise<Response> {
    try {
      const { userId } = req.params;
      const volunteers =
        await this.userVolunteerService.getVolunteersByUserId(userId);
      return res.status(200).json(volunteers);
    } catch (error) {
      return res.status(500).json({ error: (error as Error).message });
    }
  }

  async getUsersByVolunteerId(req: Request, res: Response): Promise<Response> {
    try {
      const { volunteerId } = req.params;
      const users =
        await this.userVolunteerService.getUsersByVolunteerId(volunteerId);
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ error: (error as Error).message });
    }
  }
}

export default UserVolunteerController;
