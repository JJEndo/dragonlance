import { Hero, Monster } from "../types";

export const heroes: Hero[] = [
  {
    name: "Tanis",
    race: "Semielfo",
    equipment: {
      mainHand: { name: "Arco", bonus: 3 },
      secondaryHand: { name: "Espada", bonus: 2 },
    },
    armor: "Ropa élfica",
    maxLife: 200,
    life: 200,
    attack: 10,
    defense: 8,
  },
  {
    name: "Flint",
    race: "Enano",
    equipment: {
      mainHand: { name: "Hacha", bonus: 2 },
      secondaryHand: { name: "Ballesta", bonus: 2 },
    },
    armor: "Cota de malla",
    maxLife: 180,
    life: 180,
    attack: 12,
    defense: 9,
  },
  {
    name: "Tas",
    race: "Kender",
    equipment: {
      mainHand: { name: "Honda", bonus: 4 },
      secondaryHand: { name: "Daga", bonus: 2 },
    },
    armor: "Armadura de cuero",
    maxLife: 150,
    life: 150,
    attack: 8,
    defense: 7,
  },
];

export const monsters: Monster[] = [
  { name: "Goblin", attack: 10, defense: 3, maxLife: 30, life: 30, mainHand: "Daga" },
  { name: "Orco", attack: 8, defense: 2, maxLife: 35, life: 35, mainHand: "Hacha oxidada" },
  { name: "Murloc", attack: 9, defense: 3, maxLife: 25, life: 25, mainHand: "Trucha de río" },
  { name: "Lobo", attack: 7, defense: 2, maxLife: 40, life: 40, mainHand: "Colmillos" },
];

export const recompensasDisponibles: string[] = [
  "Espada mágica",
  "Anillo de invisibilidad",
  "Escudo legendario",
  "Armadura dorada",
  "Poción de vida",
  "Hacha oxidada",
  "Pergamino de hechizo",
  "Llave de la cripta",
  "Casco encantado",
  "Botas de velocidad",
  "Gema roja",
  "Calcetín mojado",
];
