// src/controllers/skillController.ts
import { Request, Response } from 'express';
import * as turnService from '../../services/TicTacToe/turnService';

export const getTurns = async (req: Request, res: Response) => {
    const turn = await turnService.getTurn();
    res.json(turn);
};

export const createTurn = async (req: Request, res: Response) => {
    const body = req.body;
    const turn = await turnService.createTurn(body);

    if (turn) {
        res.status(201).json(turn);
    } else {
        res.status(404).json({ message: 'Turn not created' });
    }
};

export const deleteTurn = async (req: Request, res: Response) => {
    await turnService.deleteTurn();
    res.status(204).json({ message: 'eliminado correctamente' });
};
