export interface Shot {
  type: string;
  duration: string;
  description: string;
}

export interface Dialogue {
  character: string;
  line: string;
  timestamp: string;
}

export interface Scene {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  shots: Shot[];
  dialogue: Dialogue[];
  duration: string;
  location: string;
}

export interface Film {
  id: string;
  title: string;
  director: string;
  year: number;
  synopsis: string;
  scenes: Scene[];
}