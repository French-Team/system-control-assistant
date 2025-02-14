'use client'

import React from 'react'
import { FileText } from 'lucide-react'

interface LogsToolProps {
  onClick?: () => void
}

const LogsTool: React.FC<LogsToolProps> = ({ onClick }) => {
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
        <FileText size={48} strokeWidth={1.5} />
      </div>
      <span className="text-sm font-medium text-theme-p">
        Logs
      </span>
    </div>
  )
}

LogsTool.Data = {
  id: 'logs-tool',
  nom: 'Logs',
  component: LogsTool
}

export default LogsTool 