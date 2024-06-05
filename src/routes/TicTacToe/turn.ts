// src/routes/skillRoutes.ts
import express from 'express';
import * as turnController from '../../controllers/TicTacToe/turnController';

const router = express.Router();
router.get('/', turnController.getTurns);
router.post('/', turnController.createTurn);
router.delete('/', turnController.deleteTurn);

export default router;
