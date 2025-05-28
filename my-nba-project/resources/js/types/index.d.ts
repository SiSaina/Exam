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
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
}

export interface Role {
    id: number;
    name: string;
}

export interface UserRole {
    user_id: number;
    role_id: number;
}

export interface News {
  id: number;
  title: string;
  mainContent: string;
  subContent: string;
  publishDate: string;
  author: string;
  images: string[];
  video?: string;
}

export interface Team {
  id: number;
  name: string;
  slugOne: string;     // e.g. "BOS"
  slugTwo: string;     // e.g. "Celtics"
  logo: string;
  city: string;
  stadium: string;
  conference: string;
  divisions: string;
  foundYear: number;
}

export interface Player {
  id: number;
  firstName: string;
  lastName: string;
  teamId: number;
  image: string;
  position: string;
  birthDate: string;
  nationality: string;
  height: number;
  weight: number;
  college: string;
  draftYear: number;
  status: string;
}

export interface Coach {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  nationality: string;
  image: string;
}

export interface TeamCoach {
  teamId: number;
  coachId: number;
  seasonId: number;
  status: string;
}

export interface Roster {
  playerId: number;
  teamId: number;
  seasonId: number;
  jerseyNumber: number;
  status: string;
}

export interface WeekGame {
  name: string;
  gameId: number;
}

export interface Game {
  id: number;
  seasonId: number;
  gameDate: string;
  homeTeamId: number;
  awayTeamId: number;
  homeTeamScore: number;
  awayTeamScore: number;
  arena: string;
  city: string;
  attendances: number;
}

export interface GameStat {
  id: number;
  gameId: number;
  playerId: number;
  teamId: number;
  minutesPlayed: number;
  points: number;
  rebounds: number;
  assists: number;
  blocks: number;
  steals: number;
  turnovers: number;
  fouls: number;
}

// Statistics Module
export interface TeamSeasonStat {
  id: number;
  teamId: number;
  seasonId: number;
  gamesPlayed: number;
  wins: number;
  losses: number;
  pointsScored: number;
  pointsConceded: number;
  goalDifference: number;
  points: number;
}

export interface SeasonAward {
  id: number;
  awardName: string;
  seasonId: number;
  playerId: number;
  value: string;
}

export interface Season {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  championship: string;
}