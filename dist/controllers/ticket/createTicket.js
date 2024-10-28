"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createTicketService_1 = __importDefault(require("../../services/ticket/createTicketService"));
const qrcode_1 = __importDefault(require("qrcode"));
const createTicketRoute = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, vatin } = req.body;
        if (!firstName || !lastName || !vatin) {
            res.status(400).json({ success: false, message: "Missing fields" });
            return;
        }
        const ticket = yield (0, createTicketService_1.default)(vatin, firstName, lastName);
        if (ticket) {
            const qrCodeUrl = `${process.env.FRONTEND_URL}/tickets/${ticket.id}`;
            const qrCodeImage = yield qrcode_1.default.toDataURL(qrCodeUrl);
            res.status(200).json({
                success: true,
                ticketId: ticket.id,
                qrCode: qrCodeImage,
                qrCodeUrl,
            });
        }
        else {
            console.log("hary");
            res.status(400).json({
                success: false,
                message: "Maximum of 3 tickets allowed for this OIB",
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "something went wrong" });
    }
});
exports.default = createTicketRoute;
