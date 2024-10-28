import express from "express";
import getAllTicketsRoute from "../controllers/ticket/getAllTickets";
import getTicketByIDRoute from "../controllers/ticket/getTicketByID";
import createTicketRoute from "../controllers/ticket/createTicket";
import { checkAuthJwt } from "../middleware/checkAuthJwt";
import getNumberOfTickets from "../controllers/ticket/getNumberOfTickets";
import { checkJwt } from "../middleware/checkJwt";

const ticketRouter = express.Router();

ticketRouter.get("/count", getNumberOfTickets);
ticketRouter.get("/", checkAuthJwt, getAllTicketsRoute);
ticketRouter.get("/:id", checkAuthJwt, getTicketByIDRoute);
ticketRouter.post("/create", checkJwt, createTicketRoute);

export default ticketRouter;
