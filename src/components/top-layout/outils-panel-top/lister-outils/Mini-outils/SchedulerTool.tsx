'use client'

import React from 'react'
import { Clock } from 'lucide-react'

interface SchedulerToolProps {
  onClick?: () => void
}

const SchedulerTool: React.FC<SchedulerToolProps> = ({ onClick }) => {
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
        <Clock size={48} strokeWidth={1.5} />
      </div>
      <span className="text-sm font-medium text-theme-p">
        Planificateur
      </span>
    </div>
  )
}

SchedulerTool.Data = {
  id: 'scheduler-tool',
  nom: 'Planificateur',
  component: SchedulerTool
}

export default SchedulerTool 