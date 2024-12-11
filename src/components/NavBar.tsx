import React from "react";

interface NavBarProps {
  onStartBattle: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ onStartBattle }) => (
  <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold">DragonLance</h1>
    <button
      onClick={onStartBattle}
      className="bg-red-500 px-4 py-2 rounded hover:bg-red-700"
    >
      Iniciar Batalla
    </button>
  </nav>
);

export default NavBar;
