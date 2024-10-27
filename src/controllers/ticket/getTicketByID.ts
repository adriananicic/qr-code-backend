import { Request, Response } from "express";
import getTicketByIDService from "../../services/ticket/getTicketByIDService";

const getTicketByIDRoute = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const ticket = await getTicketByIDService(id);

    if (!ticket) {
      res.status(404).json({ success: false, message: "Ticket not found" });
      return;
    }

    res.status(200).json({ success: true, data: ticket });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

export default getTicketByIDRoute;
