import { PlayerEnum, Score } from "../lib/game.model";

export const SCORES: Score[] = [
  {
    player: PlayerEnum.PLAYER_ONE,
    inning: 1,
    score: 10,
    foul: false,
    total: 10,
  },
  {
    player: PlayerEnum.PLAYER_TWO,
    inning: 1,
    score: 43,
    foul: false,
    total: 10,
  },
  { player: PlayerEnum.PLAYER_ONE, inning: 2, score: 1, foul: true, total: 10 },
  {
    player: PlayerEnum.PLAYER_TWO,
    inning: 2,
    score: 18,
    foul: false,
    total: 10,
  },
  {
    player: PlayerEnum.PLAYER_ONE,
    inning: 3,
    score: 21,
    foul: false,
    total: 10,
  },
  {
    player: PlayerEnum.PLAYER_TWO,
    inning: 3,
    score: 11,
    foul: false,
    total: 10,
  },
  {
    player: PlayerEnum.PLAYER_ONE,
    inning: 4,
    score: 39,
    foul: false,
    total: 10,
  },
  {
    player: PlayerEnum.PLAYER_TWO,
    inning: 4,
    score: 32,
    foul: true,
    total: 10,
  },
  {
    player: PlayerEnum.PLAYER_ONE,
    inning: 5,
    score: 12,
    foul: false,
    total: 10,
  },
  {
    player: PlayerEnum.PLAYER_TWO,
    inning: 5,
    score: 13,
    foul: false,
    total: 10,
  },
  {
    player: PlayerEnum.PLAYER_ONE,
    inning: 6,
    score: 25,
    foul: false,
    total: 10,
  },
  {
    player: PlayerEnum.PLAYER_TWO,
    inning: 6,
    score: 28,
    foul: true,
    total: 10,
  },
  {
    player: PlayerEnum.PLAYER_ONE,
    inning: 7,
    score: 10,
    foul: false,
    total: 10,
  },
  {
    player: PlayerEnum.PLAYER_TWO,
    inning: 7,
    score: 7,
    foul: false,
    total: 10,
  },
  { player: PlayerEnum.PLAYER_ONE, inning: 8, score: 9, foul: true, total: 10 },
  {
    player: PlayerEnum.PLAYER_TWO,
    inning: 8,
    score: 0,
    foul: false,
    total: 10,
  },
  {
    player: PlayerEnum.PLAYER_ONE,
    inning: 9,
    score: 0,
    foul: false,
    total: 10,
  },
  {
    player: PlayerEnum.PLAYER_TWO,
    inning: 9,
    score: 19,
    foul: true,
    total: 10,
  },
  {
    player: PlayerEnum.PLAYER_ONE,
    inning: 10,
    score: 65,
    foul: false,
    total: 10,
  },
  {
    player: PlayerEnum.PLAYER_TWO,
    inning: 10,
    score: 33,
    foul: false,
    total: 10,
  },
];