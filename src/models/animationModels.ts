export interface animationMap_model {
  name: string;
  duration: number;
}

export interface animtaion_model {
  x?: number;
  y?: number;
  opacity?: number;
  borderRight?: number;
  borderBottom?: number;
  display?: string;
  bgColor?: string;
}

export interface scrollAnimationDatas_model {
  [key: string]: {
    ref: React.RefObject<HTMLDivElement | HTMLButtonElement | null>;
    animation: animtaion_model[];
  };
}
