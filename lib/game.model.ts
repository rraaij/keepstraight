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

export class ScoreTable {
  private _scores: Score[];

  constructor(public scores: Score[]) {
    this._scores = scores;
  }

  getScoresForPlayer(player: PlayerEnum) {
    const playerScores = this._scores.filter((s) => s.player === player);
    playerScores.forEach((score) => {
      if (score.inning === 1) {
        score.total = score.score;
      } else {
        score.total =
          (playerScores[score.inning - 2]?.total ?? 0) + score.score;
      }
    });
    return playerScores;
  }

  submitScore(
    player: PlayerEnum,
    possibleRun: number,
    scoreInfo: ScoreUpdateInfo,
  ) {
    const lastInning = this.getLastInning(player);
    this._scores.push({
      player,
      inning: lastInning + 1,
      score: possibleRun - scoreInfo.ballsOnTable,
      foul: scoreInfo.endedInFoul,
    });
    return this;
  }

  getCurrentScore(player: PlayerEnum) {
    return (
      this._scores.find(
        (s) => s.player === player && s.inning === this.getLastInning(player),
      )?.total ?? 0
    );
  }

  private getLastInning(player: PlayerEnum) {
    return this._scores.filter((s) => s.player === player).length === 0
      ? 0
      : Math.max(
          ...this._scores
            .filter((s) => s.player === player)
            .map((s) => s.inning),
        ) ?? 0;
  }
}

/*****************************************
 * The Model used by the Zustand GameStore
 */
export type Game = {
  setup: SetupInfo;
  scoreTable: ScoreTable;
  playerAtTable: PlayerEnum;
  possibleRun: number;
  isUpdateScoreVisible: boolean;
  startGame: (setupInfo: SetupInfo) => void;
  rerack: () => void;
  showUpdateScore: (show: boolean) => void;
  updateScore: (scoreUpdateInfo: ScoreUpdateInfo) => void;
};
