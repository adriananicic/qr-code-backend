import { Request, Response } from "express";
import getAllTicketsService from "../../services/ticket/getAllTicketsService";

const getAllTicketsRoute = async (req: Request, res: Response) => {
  try {
    const tickets = await getAllTicketsService();

    if (!tickets) {
      res.send({ success: false, message: "There are no tickets created" });
      return;
    }

    console.log(tickets);
    res.status(200).json({ success: true, data: tickets });
    return;
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

export default getAllTicketsRoute;
