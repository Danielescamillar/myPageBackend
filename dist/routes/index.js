"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/index.ts
const express_1 = __importDefault(require("express"));
const skillRoutes_1 = __importDefault(require("./skillRoutes"));
const profileRoute_1 = __importDefault(require("./profileRoute"));
const experienceRoute_1 = __importDefault(require("./experienceRoute"));
const turn_1 = __importDefault(require("./TicTacToe/turn"));
const board_1 = __importDefault(require("./TicTacToe/board"));
const router = express_1.default.Router();
router.use('/api/skills', skillRoutes_1.default);
router.use('/api/profile', profileRoute_1.default);
router.use('/api/experience', experienceRoute_1.default);
router.use('/api/ticTacToe/turn', turn_1.default);
router.use('/api/ticTacToe/board', board_1.default);
exports.default = router;
