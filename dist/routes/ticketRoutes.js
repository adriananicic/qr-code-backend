"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getAllTickets_1 = __importDefault(require("../controllers/ticket/getAllTickets"));
const getTicketByID_1 = __importDefault(require("../controllers/ticket/getTicketByID"));
const createTicket_1 = __importDefault(require("../controllers/ticket/createTicket"));
const checkAuthJwt_1 = require("../middleware/checkAuthJwt");
const getNumberOfTickets_1 = __importDefault(require("../controllers/ticket/getNumberOfTickets"));
const checkJwt_1 = require("../middleware/checkJwt");
const ticketRouter = express_1.default.Router();
ticketRouter.get("/count", getNumberOfTickets_1.default);
ticketRouter.get("/", checkAuthJwt_1.checkAuthJwt, getAllTickets_1.default);
ticketRouter.get("/:id", checkAuthJwt_1.checkAuthJwt, getTicketByID_1.default);
ticketRouter.post("/create", checkJwt_1.checkJwt, createTicket_1.default);
exports.default = ticketRouter;
