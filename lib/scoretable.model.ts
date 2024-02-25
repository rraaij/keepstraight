import { PlayerEnum, Score, ScoreUpdateInfo } from "./game.model";

export class ScoreTable {
  constructor(public scores: Score[]) {}

  getScoresForPlayer(player: PlayerEnum) {
    const playerScores = this.scores.filter((s) => s.player === player);
    playerScores.forEach((score) => {
      if (score.inning === 1) {
        score.total = score.run;
      } else {
        score.total = (playerScores[score.inning - 2]?.total ?? 0) + score.run;
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
    this.scores.push({
      player,
      inning: lastInning + 1,
      run: possibleRun - scoreInfo.ballsOnTable,
      foul: scoreInfo.endedInFoul,
    });
    return this;
  }

  getCurrentScore(player: PlayerEnum) {
    return (
      this.scores.find(
        (s) => s.player === player && s.inning === this.getLastInning(player),
      )?.total ?? 0
    );
  }

  private getLastInning(player: PlayerEnum) {
    return this.scores.filter((s) => s.player === player).length === 0
      ? 0
      : Math.max(
          ...this.scores
            .filter((s) => s.player === player)
            .map((s) => s.inning),
        ) ?? 0;
  }
}
