import React, { useState } from "react";
import { Hero, Monster } from "../types";

interface CombatLogicProps {
  heroes: Hero[];
  monsters: Monster[];
  onCombatEnd: (rewards: string[]) => void;
}

const CombatLogic: React.FC<CombatLogicProps> = ({ heroes, monsters, onCombatEnd }) => {
  const [rewards, setRewards] = useState<string[]>([]);
  const recompensasDisponibles = [
    "Espada mágica", "Anillo de invisibilidad", "Escudo legendario",
    "Armadura dorada", "Poción de vida", "Hacha oxidada",
    "Pergamino de hechizo", "Llave de la cripta", "Casco encantado",
    "Botas de velocidad", "Gema roja", "Calcetín mojado",
  ];

  const simulateBattle = () => {
    // Lógica del combate
    const hero = heroes[Math.floor(Math.random() * heroes.length)];
    const monster = monsters[Math.floor(Math.random() * monsters.length)];

    // Resultado del combate
    if (hero.attack + hero.equipment.mainHand.bonus > monster.defense) {
      const reward = recompensasDisponibles[Math.floor(Math.random() * recompensasDisponibles.length)];
      setRewards((prev) => [...prev, reward]);
    }

    onCombatEnd(rewards);
  };

  return (
    <button onClick={simulateBattle} className="bg-green-500 px-4 py-2 rounded">
      Simular Combate
    </button>
  );
};

export default CombatLogic;
