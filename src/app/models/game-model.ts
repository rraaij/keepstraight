export interface GameModel {
  _id?: string,
  _rev?: string,
  playerOne: PlayerInfo,
  playerTwo: PlayerInfo,
  targetscore: number,
  playerTurn: number
}

export interface PlayerInfo {
  name: string,
  innings?: Array<Inning>
}

export interface Inning {
  nr: number,
  run: number,
  foul: boolean,
  score: number
}
