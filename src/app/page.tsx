"use client";
import NavBar from "../components/NavBar";
import GameArea from "../components/GameArea";
import Footer from "../components/Footer";
import { Hero, Monster } from "../types";
import {
  heroes as initialHeroes,
  monsters as initialMonsters,
  recompensasDisponibles,
} from "../data";
import { useState } from "react";

const Home: React.FC = () => {
  const [heroes, setHeroes] = useState<Hero[]>(initialHeroes);
  const [monsters] = useState<Monster[]>(initialMonsters); // Los monstruos permanecen siempre
  const [rewards, setRewards] = useState<string[]>([]);
  const [combatLog, setCombatLog] = useState<string[]>([]);
  const [battles, setBattles] = useState(0); // Lleva la cuenta de batallas
  const [background, setBackground] = useState(
    "/assets/backgrounds/battle.jpg"
  ); // Fondo dinámico
  const [raidComplete, setRaidComplete] = useState(false); // Controla si terminó la raid

  const handleStartBattle = () => {
    if (battles >= 5) return; // Limitar a 5 batallas

    // Elegir héroe y monstruo aleatoriamente
    const hero = heroes[Math.floor(Math.random() * heroes.length)];
    const monster = monsters[Math.floor(Math.random() * monsters.length)];

    // Simular el combate
    const heroAttack = hero.attack + hero.equipment.mainHand.bonus;
    const monsterAttack = monster.attack;

    let log = `El héroe ${hero.name} atacó al monstruo ${monster.name} con ${hero.equipment.mainHand.name} causando ${heroAttack} de daño.`;
    let reward = "";

    if (heroAttack > monster.defense) {
      // El héroe gana
      log += ` ¡El monstruo ${monster.name} fue derrotado!`;
      reward =
        recompensasDisponibles[
          Math.floor(Math.random() * recompensasDisponibles.length)
        ];
      setRewards((prevRewards) => [...prevRewards, reward]);
    } else {
      // El monstruo gana
      log += ` ¡El monstruo ${monster.name} contraatacó causando ${monsterAttack} de daño!`;
      setHeroes((prevHeroes) =>
        prevHeroes.map((h) =>
          h.name === hero.name
            ? { ...h, life: Math.max(0, h.life - monsterAttack) }
            : h
        )
      );
    }

    setCombatLog((prevLog) => [...prevLog, log]);
    setBattles((prevBattles) => prevBattles + 1);

    // Cambiar fondo y mostrar mensaje final si se completaron 5 batallas
    if (battles + 1 === 5) {
      setBackground("/assets/backgrounds/crypt.jpg");
      setRaidComplete(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <NavBar onStartBattle={handleStartBattle} />
        <GameArea
          heroes={heroes}
          monsters={monsters}
          rewards={rewards}
          combatLog={combatLog}
          background={background}
          raidComplete={raidComplete}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
