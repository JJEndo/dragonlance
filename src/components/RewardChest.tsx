import React from "react";

interface RewardChestProps {
  rewards: string[];
}

const RewardChest: React.FC<RewardChestProps> = ({ rewards }) => (
  <div className="bg-yellow-200 p-4 rounded shadow-md">
    <h3 className="text-lg font-bold">Recompensas</h3>
    <ul>
      {rewards.map((reward, index) => (
        <li key={index}>{reward}</li>
      ))}
    </ul>
  </div>
);

export default RewardChest;
