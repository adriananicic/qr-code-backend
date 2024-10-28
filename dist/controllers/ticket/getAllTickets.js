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
const getAllTicketsService_1 = __importDefault(require("../../services/ticket/getAllTicketsService"));
const getAllTicketsRoute = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tickets = yield (0, getAllTicketsService_1.default)();
        if (!tickets) {
            res.send({ success: false, message: "There are no tickets created" });
            return;
        }
        console.log(tickets);
        res.status(200).json({ success: true, data: tickets });
        return;
    }
    catch (error) {
        console.log("ALSHDLJASHFLHASLDK:====  " + error);
        res.status(500).json({ success: false, message: error.message });
    }
});
exports.default = getAllTicketsRoute;
