
import { Turn } from '../../models/TicTacToe/turnModel';
import TurnModel, { TurnDocument } from '../../db/models/TicTacToe/turnModel';

export const getTurn = async (): Promise<Turn[]> => {
  try {
    const turn = await TurnModel.find();
    return turn.map(mapToTurn);
  } catch (error: any) {
    throw new Error(`Failed to get turn: ${error.message}`);
  }
};

export const createTurn = async (body: string): Promise<Turn | null> => {
  try {
    const turn = await TurnModel.create(body);
    return turn ? mapToTurn(turn) : null;
  } catch (error: any) {
    throw new Error(`Failed to get turn: ${error.message}`);
  }
};

export const deleteTurn = async (): Promise<Turn | null> => {
  try {
    const turn = await TurnModel.deleteOne();
    return null
  } catch (error: any) {
    throw new Error(`Failed to delete turn: ${error.message}`);
  }
};

// Función para mapear el documento de mongoose a un objeto Turn
const mapToTurn = (userTurn: TurnDocument): Turn => ({
  turn: userTurn.turn,

});
