import { createContext } from 'react';

type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: Number;
  url: string;
};

type PlayerContextDate = {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  play:(episode: Episode) => void;
  setPlayingState:(state: boolean) => void;
  togglePlay: () => void;
};

export const PlayerContext = createContext({} as PlayerContextDate);