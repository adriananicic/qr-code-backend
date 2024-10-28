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
const client_1 = __importDefault(require("../../prisma/client"));
const createTicketService = (vatin, firstName, lastName) => __awaiter(void 0, void 0, void 0, function* () {
    const numberOfTicketsWithVatin = yield client_1.default.ticket.count({
        where: { vatin },
    });
    if (numberOfTicketsWithVatin >= 3)
        return false;
    const ticket = yield client_1.default.ticket.create({
        data: {
            firstName: firstName,
            lastName: lastName,
            vatin: vatin,
            createdAt: new Date(),
        },
    });
    return ticket;
});
exports.default = createTicketService;
