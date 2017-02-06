export interface GameModel {
  _id?: string,
  _rev?: string,
  playerOne: PlayerInfo,
  playerTwo: PlayerInfo,
  targetscore: number
}

export interface PlayerInfo {
  name: string,
  hasTurn: boolean,
  innings?: Array<Inning>
}

export interface Inning {
  inning?: number,
  run: number,
  foul: boolean,
  score?: number
}
