import React from "react";
import Image from "next/image";
import { Monster } from "../types";

interface MonsterCardProps {
  monster: Monster;
}

const MonsterCard: React.FC<MonsterCardProps> = ({ monster }) => {
  return (
    <div className="bg-cover p-4 rounded shadow-md text-center border-solid border-2 border-sky-500 grid content-center justify-items-center"
    style={{backgroundImage: `url(/assets/backgrounds/mazmorra.png)`}}>
      <Image
        src={`/assets/monsters/${monster.name.toLowerCase()}.png`}
        alt={monster.name}
        width={150}
        height={150}
        className="rounded-lg drop-shadow-lg backdrop-invert bg-white/30"
      />
      <div className="bg-black text-white grid content-center items-center self-center p-4 outline outline-offset-2 outline-blue-500 mt-8">
        <h2 className="text-xl font-bold">{monster.name}</h2>
        <p>
          Vida: {monster.life}/{monster.maxLife}
        </p>
        <p>Ataque: {monster.attack}</p>
        <p>Defensa: {monster.defense}</p>
        <p>Arma: {monster.mainHand}</p>
      </div>
    </div>
  );
};

export default MonsterCard;
