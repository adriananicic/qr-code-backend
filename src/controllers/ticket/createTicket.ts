import { Request, Response } from "express";
import createTicketService from "../../services/ticket/createTicketService";
import QRCode from "qrcode";

const createTicketRoute = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, vatin } = req.body;

    if (!firstName || !lastName || !vatin) {
      res.status(400).json({ success: false, message: "Missing fields" });
      return;
    }

    const ticket = await createTicketService(vatin, firstName, lastName);

    if (ticket) {
      const qrCodeUrl = `${process.env.FRONTEND_URL}/tickets/${ticket.id}`;
      const qrCodeImage = await QRCode.toDataURL(qrCodeUrl);

      res.status(200).json({
        success: true,
        ticketId: ticket.id,
        qrCode: qrCodeImage,
        qrCodeUrl,
      });
    } else {
      console.log("hary");
      res.status(400).json({
        success: false,
        message: "Maximum of 3 tickets allowed for this OIB",
      });
    }
  } catch (error) {
    console.log(error);

    res.status(500).json({ success: false, message: "something went wrong" });
  }
};

export default createTicketRoute;
