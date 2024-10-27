import { Request, Response } from "express";
import getNumberOfTicketsService from "../../services/ticket/getNumberOfTicketsService";

const getNumberOfTickets = async (req: Request, res: Response) => {
  try {
    const ticketNumber = await getNumberOfTicketsService();
    console.log(ticketNumber);

    res.status(200).json({ success: true, data: ticketNumber });
  } catch (error) {
    console.log("error" + error);
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

export default getNumberOfTickets;
