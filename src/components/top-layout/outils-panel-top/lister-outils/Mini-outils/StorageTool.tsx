"use client";

import React from "react";
import { HardDrive } from "lucide-react";
import { OutilComponent } from "../types";

const StorageTool: OutilComponent = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="mini-outil-card w-32 h-32 bg-white dark:bg-gray-800 rounded-xl 
                shadow-lg hover:shadow-xl transition-all duration-200 
                flex flex-col items-center justify-center cursor-pointer
                border border-gray-200 dark:border-gray-700
                p-4 hover:scale-105"
    >
      <div className="icon-container mb-2 text-theme-p">
        <HardDrive size={48} strokeWidth={1.5} />
      </div>
      <span className="text-sm font-medium text-theme-p">Stockage</span>
    </div>
  );
};

StorageTool.Data = {
  id: "storage",
  nom: "Stockage",
  component: StorageTool,
};

export default StorageTool;
