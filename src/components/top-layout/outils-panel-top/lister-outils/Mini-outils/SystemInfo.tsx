'use client'

import React from 'react'
import { Cpu } from 'lucide-react'

interface SystemInfoProps {
  onClick?: () => void
}

const SystemInfo: React.FC<SystemInfoProps> = ({ onClick }) => {
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
        <Cpu size={48} strokeWidth={1.5} />
      </div>
      <span className="text-sm font-medium text-theme-p">
        Système
      </span>
    </div>
  )
}

SystemInfo.Data = {
  id: 'system-info',
  nom: 'Système',
  component: SystemInfo
}

export default SystemInfo 