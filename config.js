// config.js — Taboo Game Configuration
// Edit these values to change how the game plays.

const CONFIG = {
  // Default timer duration in seconds
  defaultTimer: 60,

  // Timer choices shown on the home screen (seconds)
  timerOptions: [30, 45, 60, 90],

  // Max cards shown per turn (0 = unlimited until timer runs out)
  cardsPerTurn: 0,

  // If true, skipping a card deducts 1 point
  skipPenalty: false,

  // Number of taboo words shown per card
  tabooCount: 5,

  // Default difficulty
  defaultDifficulty: "easy",

  // Game title shown on home screen
  title: "Taboo!",
  subtitle: "Say it without saying it! 🎯",

  // Team names (used in 2-team mode)
  teamNames: ["Team A", "Team B"],
  teamColors: ["#e74c3c", "#2980b9"],
};
