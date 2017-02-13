export interface Game {
  _id?: string,
  _rev?: string,
  playerOne: Player,
  playerTwo: Player,
  targetscore: number,
  possibleRun: number
}

export interface Player {
  name: string,
  hasTurn: boolean,
  consecutiveFouls: number,
  hasWon?: boolean,
  innings?: Array<Inning>
}

export interface Inning {
  inning?: number,
  run: number,
  foul: boolean,
  score?: number
}
