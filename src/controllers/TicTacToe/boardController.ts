// src/controllers/skillController.ts
import { Request, Response } from 'express';
import * as boardService from '../../services/TicTacToe/boardService';

export const getBoard = async (req: Request, res: Response) => {
    const board = await boardService.getBoard();
    res.json(board);
};

export const createBoard = async (req: Request, res: Response) => {
    const body = req.body;
    const board = await boardService.createBoard(body);

    if (board) {
        res.status(201).json(board);
    } else {
        res.status(404).json({ message: 'Board not created' });
    }
};

export const deleteBoard = async (req: Request, res: Response) => {
    const board = await boardService.deleteBoard();

    if (board) {
        res.status(201).json(board);
    } else {
        res.status(404).json({ message: 'Board not deleted' });
    }
};
