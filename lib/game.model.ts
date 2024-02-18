export type SetupInfo = {
  playerOne: string;
  playerTwo: string;
  targetScore: number;
  startingPlayer: PlayerEnum;
};

export enum PlayerEnum {
  PLAYER_ONE = "Player 1",
  PLAYER_TWO = "Player 2",
}

export type ScoreUpdateInfo = {
  ballsOnTable: number;
  endedInFoul: boolean;
};

export type Score = {
  player: PlayerEnum;
  inning: number;
  score: number;
  foul: boolean;
  total?: number;
};
