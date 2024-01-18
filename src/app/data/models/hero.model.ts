export interface Hero {
  id: string;
  name: string;
  description: string;
  descriptionlong: string;
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
  image: Image;
}

export interface Image {
  url: string;
}
