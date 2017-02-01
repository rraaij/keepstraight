export interface GameModel {
  _id?: string,
  _rev?: string,
  playerOne: PlayerInfo,
  playerTwo: PlayerInfo,
  targetscore: number,
  playerOneStarts: boolean,
  playerTurn?: number
}

interface PlayerInfo {
  name: string,
  innings?: Inning[]
}

interface Inning {
  nr: number,
  run: number,
  foul: boolean,
  score: number
}
