import { create } from "zustand";
import { PlayerEnum, ScoreUpdateInfo, SetupInfo } from "./game.model";
import { ScoreTable } from "./scoretable.model";

type Game = {
  setup: SetupInfo;
  scoreTable: ScoreTable;
  playerAtTable: PlayerEnum;
  possibleRun: number;
  startGame: (setupInfo: SetupInfo) => void;
  rerack: () => void;
  updateScore: (scoreUpdateInfo: ScoreUpdateInfo) => void;
};

export const useGameStore = create<Game>((set) => ({
  setup: {
    playerOne: "Player 1",
    playerTwo: "Player 2",
    targetScore: 50,
    startingPlayer: PlayerEnum.PLAYER_ONE,
  },
  scoreTable: new ScoreTable([]),
  playerAtTable: PlayerEnum.PLAYER_ONE,
  possibleRun: 14,

  startGame: (setupInfo: SetupInfo) => {
    set({ setup: setupInfo, playerAtTable: setupInfo.startingPlayer });
  },

  rerack: () => {
    set((state) => ({ possibleRun: state.possibleRun + 14 }));
  },

  updateScore: (scoreUpdateInfo: ScoreUpdateInfo) => {
    set((state) => ({
      scoreTable: state.scoreTable.submitScore(
        state.playerAtTable,
        state.possibleRun,
        scoreUpdateInfo,
      ),
      possibleRun: scoreUpdateInfo.ballsOnTable,
      playerAtTable:
        state.playerAtTable === PlayerEnum.PLAYER_ONE
          ? PlayerEnum.PLAYER_TWO
          : PlayerEnum.PLAYER_ONE,
    }));
  },
}));
