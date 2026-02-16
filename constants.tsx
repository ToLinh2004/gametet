import React from "react";
import { Denomination, GameCard } from "./types";

export const INITIAL_NOTES = [
  "Chúc mừng năm mới Bính Ngọ 2026!",
  "Lật mỗi bao lì xì để nhận lộc đầu năm.",
  "Tìm bao lì xì 500.000đ để nhận pháo hoa rực rỡ!",
  "Vận may đang chờ đón bạn.",
];

export const DEFAULT_DENOMINATIONS: Denomination[] = [
  { text: "10.000 đ", amount: 10000 },
  { text: "20.000 đ", amount: 20000 },
  { text: "50.000 đ", amount: 50000 },
  { text: "100.000 đ", amount: 100000 },
  { text: "200.000 đ", amount: 200000 },
  { text: "500.000 đ", amount: 500000 },
  { text: "Lộc Xuân 2026", amount: 226000 },
  { text: "Lộc Phát", amount: 68000 },
  { text: "Tài Lộc", amount: 88000 },
];

// Generate 35 cards for a nice grid
export const generateGameCards = (
  pool: Denomination[] = DEFAULT_DENOMINATIONS,
): GameCard[] => {
  const cards: GameCard[] = [];
  const activePool = pool.length > 0 ? pool : DEFAULT_DENOMINATIONS;

  for (let i = 0; i < 35; i++) {
    const randomVal = activePool[Math.floor(Math.random() * activePool.length)];
    cards.push({
      id: i,
      value: randomVal.text,
      amount: randomVal.amount,
      isOpened: false,
    });
  }
  // Shuffle cards
  return cards.sort(() => Math.random() - 0.5);
};
