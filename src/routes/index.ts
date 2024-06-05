// src/routes/index.ts
import express from 'express';
import skillRoutes from './skillRoutes';
import profileRoutes from './profileRoute';
import experienceRoutes from './experienceRoute';
import turn from './TicTacToe/turn';
import board from './TicTacToe/board';

const router = express.Router();

router.use('/api/skills', skillRoutes);
router.use('/api/profile', profileRoutes);
router.use('/api/experience', experienceRoutes);
router.use('/api/ticTacToe/turn', turn);
router.use('/api/ticTacToe/board', board);

export default router;
