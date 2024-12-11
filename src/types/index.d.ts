export interface Hero {
    name: string;
    race: string;
    equipment: {
      mainHand: { name: string; bonus: number };
      secondaryHand: { name: string; bonus: number };
    };
    armor: string;
    maxLife: number;
    life: number;
    attack: number;
    defense: number;
  }
  
  export interface Monster {
    name: string;
    attack: number;
    defense: number;
    maxLife: number;
    life: number;
    mainHand: string;
  }