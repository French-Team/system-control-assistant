'use client'

import React, { useEffect, useState } from 'react'
import * as MiniOutils from './Mini-outils'

interface MiniOutil {
  id: string
  nom: string
  component: React.ComponentType<any>
}

type OutilModule = {
  default: React.FC<any> & { Data: MiniOutil }
}

const ListerOutils: React.FC = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Récupération des données de chaque outil
  const miniOutils = Object.values(MiniOutils)
    .map((module: any) => module.Data as MiniOutil)
    .filter(Boolean)

  if (!mounted) {
    return (
      <div className="lister-outils-container bg-block-bg rounded-xl p-6">
        <h2 className="text-theme-h2 text-xl font-bold mb-6">Outils Système</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
          {miniOutils.map((outil) => (
            <div 
              key={outil.id}
              className="mini-outil-card w-32 h-32 bg-white dark:bg-gray-800 rounded-xl 
                        shadow-lg hover:shadow-xl transition-all duration-200 
                        flex flex-col items-center justify-center
                        border border-gray-200 dark:border-gray-700
                        p-4"
            >
              <div className="icon-container mb-2 text-theme-p opacity-50" />
              <span className="text-sm font-medium text-theme-p opacity-50">
                {outil.nom}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="lister-outils-container bg-block-bg rounded-xl p-6">
      <h2 className="text-theme-h2 text-xl font-bold mb-6">Outils Système</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
        {miniOutils.map((outil) => {
          const OutilComponent = outil.component
          return <OutilComponent key={outil.id} />
        })}
      </div>
    </div>
  )
}

export default ListerOutils 