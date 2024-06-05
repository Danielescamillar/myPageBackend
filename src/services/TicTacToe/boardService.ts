
import { Board } from '../../models/TicTacToe/boardModel';
import BoardModel, { BoardDocument } from '../../db/models/TicTacToe/boardModel';

export const getBoard = async (): Promise<Board[]> => {
  try {
    const board = await BoardModel.find();
    return board.map(mapToBoard);
  } catch (error: any) {
    throw new Error(`Failed to get board: ${error.message}`);
  }
};

export const createBoard = async (body: string): Promise<Board | null> => {
  try {
    const board = await BoardModel.create(body);
    return board ? mapToBoard(board) : null;
  } catch (error: any) {
    throw new Error(`Failed to get board: ${error.message}`);
  }
};

export const deleteBoard = async (): Promise<Board | null> => {
  try {
    const board = await BoardModel.deleteOne();
    return null
  } catch (error: any) {
    throw new Error(`Failed to delete board: ${error.message}`);
  }
};

// Función para mapear el documento de mongoose a un objeto Board
const mapToBoard = (userBoard: BoardDocument): Board => ({
  board: userBoard.board,

});
