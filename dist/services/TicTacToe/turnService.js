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
exports.deleteTurn = exports.createTurn = exports.getTurn = void 0;
const turnModel_1 = __importDefault(require("../../db/models/TicTacToe/turnModel"));
const getTurn = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const turn = yield turnModel_1.default.find();
        return turn.map(mapToTurn);
    }
    catch (error) {
        throw new Error(`Failed to get turn: ${error.message}`);
    }
});
exports.getTurn = getTurn;
const createTurn = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const turn = yield turnModel_1.default.create(body);
        return turn ? mapToTurn(turn) : null;
    }
    catch (error) {
        throw new Error(`Failed to get turn: ${error.message}`);
    }
});
exports.createTurn = createTurn;
const deleteTurn = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const turn = yield turnModel_1.default.deleteOne();
        return null;
    }
    catch (error) {
        throw new Error(`Failed to delete turn: ${error.message}`);
    }
});
exports.deleteTurn = deleteTurn;
// Función para mapear el documento de mongoose a un objeto Turn
const mapToTurn = (userTurn) => ({
    turn: userTurn.turn,
});
