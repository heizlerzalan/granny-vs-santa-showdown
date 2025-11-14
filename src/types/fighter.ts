export type FighterType = 
  | "granny" 
  | "santa" 
  | "levente" 
  | "mucsy-laci" 
  | "heizler-zalan" 
  | "szabo-agoston" 
  | "simai-botond" 
  | "fortnite" 
  | "thanos" 
  | "tota-oliver" 
  | "jakab-istvan"
  | "kovacs-david"
  | "pal-greta"
  | "fazekas-eszter"
  | "custom"
  | "ko"
  | "nadler-balazs"
  | "nadler-somogyi-laura"
  | "teki-teknos"
  | "kenvo"
  | "bata-botond"
  | "bennet"
  | "budai-imre"
  | "sulyok-csanad"
  | "csonno-balint"
  | "kovari-daniella"
  | "nemecz-levente"
  | "rampasek-attila"
  | "barath-barnabas"
  | "koban-laci"
  | "pinter-zsombor"
  | "koronczai"
  | "bocskay-tanarano"
  | "gyurik-pal"
  | "cseh-balazs"
  | "albrecht-laszlo"
  | "bery-balogh"
  | "keresztes-kornel"
  | "szabo-zoard"
  | "zsonyi"
  | "papszicsu"
  | "krein-sebastyen"
  | "lubrincz-gergo";

export type FighterClass = "Female" | "Tank" | "Sigma" | "Damage" | "Fast" | "Balanced";

export interface Fighter {
  id: FighterType;
  name: string;
  image: string;
  color: string;
  maxHealth: number;
  strength: number;
  attackSpeed: number;
  specialStats?: string;
  class?: FighterClass;
}
