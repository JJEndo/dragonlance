import React from "react";
import HeroCard from "./HeroCard";
import MonsterCard from "./MonsterCard";
import { Hero, Monster } from "../types";

interface GameAreaProps {
  heroes: Hero[];
  monsters: Monster[];
  rewards: string[];
  combatLog: string[];
  background: string;
  raidComplete: boolean;
}

const GameArea: React.FC<GameAreaProps> = ({
  heroes,
  monsters,
  rewards,
  combatLog,
  background,
  raidComplete,
}) => (
  <div
    className="flex-grow bg-cover bg-center"
    style={{ backgroundImage: `url('${background}')` }}
  >
    <div className="flex justify-between p-4">
      <div className="flex space-x-4">
        {heroes.map((hero) => (
          <HeroCard key={hero.name} hero={hero} />
        ))}
      </div>
      <div className="flex space-x-4">
        {monsters.map((monster) => (
          <MonsterCard key={monster.name} monster={monster} />
        ))}
      </div>
    </div>
    <div className="p-4 mt-4 bg-gray-800 text-white rounded shadow-md">
      <h3 className="font-bold text-lg">Recompensas:</h3>
      <ul>
        {rewards.map((reward, index) => (
          <li key={index}>{reward}</li>
        ))}
      </ul>
    </div>
    <div className="p-4 mt-4 bg-gray-800 text-white rounded shadow-md">
      <h3 className="font-bold text-lg">Registro de Combate:</h3>
      <ul>
        {combatLog.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
    {raidComplete && (
      <div className="p-4 mt-4 bg-green-800 text-white text-center rounded shadow-md">
        <h2 className="text-2xl font-bold">
          ¡Los héroes llegan a la cámara mortuoria del rey!
        </h2>
      </div>
    )}
  </div>
);

export default GameArea;
