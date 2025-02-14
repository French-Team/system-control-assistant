import { FC, ComponentType } from "react";

export interface OutilProps {
  onClick?: () => void;
}

export interface MiniOutil {
  id: string;
  nom: string;
  component: ComponentType<OutilProps>;
}

export type OutilComponent = FC<OutilProps> & {
  Data: MiniOutil;
};
