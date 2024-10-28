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
const getNumberOfTicketsService_1 = __importDefault(require("../../services/ticket/getNumberOfTicketsService"));
const getNumberOfTickets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ticketNumber = yield (0, getNumberOfTicketsService_1.default)();
        console.log(ticketNumber);
        res.status(200).json({ success: true, data: ticketNumber });
    }
    catch (error) {
        console.log("error" + error);
        res.status(500).json({ success: false, message: error.message });
    }
});
exports.default = getNumberOfTickets;