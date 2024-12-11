import React from "react";
import { Hero } from "../types";
import Image from "next/image";

interface HeroCardProps {
  hero: Hero;
}

const HeroCard: React.FC<HeroCardProps> = ({ hero }) => (
  <div
    className="relative p-4 rounded shadow-md text-center border-solid border-2 border-sky-500 grid content-center justify-items-center"
  >
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center filter blur-sm"
      style={{
        backgroundImage: `url(/assets/backgrounds/heroCard.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // Ajusta el tamaño del background
      }}
    ></div>

    {/* Foreground Content */}
    <div className="relative z-10 content-center justify-items-center">
      <Image
        src={`/assets/heroes/${hero.name.toLowerCase()}.jpg`}
        alt={hero.name}
        width={200}
        height={150}
        className="rounded-lg drop-shadow-lg"
      />
      <div className="bg-black text-white grid content-center items-center self-center p-4 outline outline-offset-2 outline-blue-500 mt-8">
        <h2 className="text-xl font-bold">{hero.name}</h2>
        <p>{hero.race}</p>
        <p>
          Vida: {hero.life}/{hero.maxLife}
        </p>
        <p>Armadura: {hero.armor}</p>
        <p>Ataque: {hero.attack}</p>
        <p>Defensa: {hero.defense}</p>
      </div>
    </div>
  </div>
);


export default HeroCard;
