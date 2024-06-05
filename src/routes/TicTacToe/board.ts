// src/routes/skillRoutes.ts
import express from 'express';
import * as boardController from '../../controllers/TicTacToe/boardController';

const router = express.Router();
console.log("board route")
router.get('/', boardController.getBoard);
router.post('/', boardController.createBoard);
router.delete('/', boardController.deleteBoard);

export default router;
