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
exports.deleteBoard = exports.createBoard = exports.getBoard = void 0;
const boardModel_1 = __importDefault(require("../../db/models/TicTacToe/boardModel"));
const getBoard = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const board = yield boardModel_1.default.find();
        return board.map(mapToBoard);
    }
    catch (error) {
        throw new Error(`Failed to get board: ${error.message}`);
    }
});
exports.getBoard = getBoard;
const createBoard = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const board = yield boardModel_1.default.create(body);
        return board ? mapToBoard(board) : null;
    }
    catch (error) {
        throw new Error(`Failed to get board: ${error.message}`);
    }
});
exports.createBoard = createBoard;
const deleteBoard = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const board = yield boardModel_1.default.deleteOne();
        return null;
    }
    catch (error) {
        throw new Error(`Failed to delete board: ${error.message}`);
    }
});
exports.deleteBoard = deleteBoard;
// Función para mapear el documento de mongoose a un objeto Board
const mapToBoard = (userBoard) => ({
    board: userBoard.board,
});
