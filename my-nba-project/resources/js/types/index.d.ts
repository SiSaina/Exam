import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
  user: User;
}

export interface BreadcrumbItem {
  title: string;
  href: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export interface NavItem {
  title: string;
  href: string;
  icon?: LucideIcon | null;
  isActive?: boolean;
  children?: NavItem[];
}

export interface SharedData {
  name: string;
  quote: { message: string; author: string };
  auth: Auth;
  ziggy: Config & { location: string };
  sidebarOpen: boolean;
  [key: string]: unknown;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Role {
  id: number;
  name: string;
}

export interface News {
  id: number;
  title: string;
  main_content: string;
  sub_content: string;
  publish_date: string;
  author: User;
  images: NewsImage[];
  video?: string;
}
export interface NewsImage {
  id: number;
  news: News;
  url: string;
}

export interface Team {
  id: number;
  name: string;
  slug: string;
  slug_two: string;
  logo_url: string;
  stadium: string;
  city: string;
  conference: string;
}

export interface Player {
  id: number;
  first_name: string;
  last_name: string;
  position: string;
  birth_date?: string;
  nationality?: string;
  height: number;
  weight: number;
  image_url?: string;
  college?: string;
  draftYear?: number;
  status: string;
}

export interface Coach {
  id: number;
  first_name: string;
  last_name: string;
  birth_date?: string;
  nationality?: string;
  image_url?: string;
}

export interface TeamCoach {
  team: Team;
  coach: Coach;
  season: Season;
  position: string;
}

export interface Roster {
  player: Player;
  team: Team;
  season: Season;
  jersey_number: number;
  position: string;
}

export interface WeekGame {
  name: string;
  game: Game;
  season: Season;
}

export interface Game {
  id: number;
  name: string;
  date: string;
  time: string;
  homeTeam: Team;
  awayTeam: Team;
  homeTeamScore: number;
  awayTeamScore: number;
}

export interface GameRosterStats {
  id: number;
  game: Game;
  player: Player;
  minutes_played: number;
  points: number;
  assists: number;
  rebounds: number;
  steals: number;
  blocks: number;
  turnovers: number;
  fouls: number;
}
export interface GameTeamStats {
  id: number;
  game: Game;
  Team: Team;
  minutes_played: number;
  points: number;
  assists: number;
  rebounds: number;
  steals: number;
  blocks: number;
  turnovers: number;
  fouls: number;
}
// Statistics Module
export interface SeasonAward {
  id: number;
  name: string;
  season: Season;
  player: Player;
}
export interface Championship {
  id: number;
  season: Season;
  team: Team;
}
export interface Championship {
  id: number;
  championship: Team;
  season: Season;
}
export interface Season {
  id: number;
  name: string;
  type: string;
  start_date: string;
  end_date: string;
}
export interface SeasonTeamStats {
  id: number;
  season: Season;
  game_team_stats: GameTeamStats;
  wins: number;
  losses: number;
}