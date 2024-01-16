export interface Hero {
  id: string;
  name: string;
  slug: string;
  description: string;
  descriptionlong: string;
  powerstats: Powerstats;
  biography: Biography;
  appearance: Appearance;
  image: Image;
}

export interface Powerstats {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
}

export interface Biography {
  fullname: string;
  alteregos: string;
  aliases: string[];
  placeofbirth: string;
  firstappearance: string;
  publisher: string;
  alignment: string;
}

export interface Appearance {
  gender: string;
  race: string;
  height: string[];
  weight: string[];
  eyecolor: string;
  haircolor: string;
}

export interface Image {
  url: string;
}
