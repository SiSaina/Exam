import GameTimer from "@/components/game-timer";
import StatInput from "@/components/input-stats";
import AdminLayout from "@/layouts/admin-layout";
import { type BreadcrumbItem, Game, GameRosterStats, Roster, Team } from '@/types';
import { Head, usePage } from "@inertiajs/react";
import { useState } from "react";

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'index', href: '/admin/game' },
    { title: 'Start Game', href: '/admin/game/start' },
];
interface RosterWithStats extends Roster {
    game_team_stats: GameRosterStats;
}
export default function StartGame() {
    const { game, rosters } = usePage<{ game: Game, rosters: RosterWithStats[], teams: Team[] }>().props;
    const [gameDuration, setGameDuration] = useState(() => {
        const validDuration = parseInt(game.duration, 10) || 0;
        return validDuration;
    });

    const homeTeamRosters = rosters.filter(roster => roster.team.id === game.home_team.id);
    const awayTeamRosters = rosters.filter(roster => roster.team.id === game.away_team.id);

    return (
        <>
            <AdminLayout breadcrumbs={breadcrumbs}>
                <Head title={`Game: ${game.name}`} />
                <div className="max-w-5xl mx-auto mt-10">
                    <h1 className="text-3xl font-bold mb-4">{game.name}</h1>
                    <p className="text-lg text-gray-600">{game.date} | {game.time}</p>
                    <p className="text-lg">{game.home_team.name} vs {game.away_team.name}</p>
                    <GameTimer duration={gameDuration} onUpdate={(newDuration) => setGameDuration(newDuration)} />
                    <StatInput homeTeamRosters={homeTeamRosters} awayTeamRosters={awayTeamRosters} />

                    <div className="grid grid-rows-2 gap-8 mt-6">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">{game.home_team.name}</h2>
                            <table className="min-w-full border-collapse border">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="border p-2 w-[200px]">Player</th>
                                        <th className="border p-2 w-[80px]">Jersey</th>
                                        <th className="border p-2 w-[120px]">Position</th>
                                        <th className="border p-2 w-[80px]">Points</th>
                                        <th className="border p-2 w-[80px]">Assists</th>
                                        <th className="border p-2 w-[80px]">Rebounds</th>
                                        <th className="border p-2 w-[80px]">Steals</th>
                                        <th className="border p-2 w-[80px]">Blocks</th>
                                        <th className="border p-2 w-[80px]">Turnovers</th>
                                        <th className="border p-2 w-[80px]">Fouls</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {homeTeamRosters.map(roster => (
                                        <tr key={roster.player.id} className="border text-center">
                                            <td className="border p-2 w-[200px]">{roster.player.first_name} {roster.player.last_name}</td>
                                            <td className="border p-2 w-[80px]">{roster.jersey_number}</td>
                                            <td className="border p-2 w-[120px]">{roster.position}</td>
                                            <td className="border p-2 w-[80px]">{roster.game_team_stats?.points || 0}</td>
                                            <td className="border p-2 w-[80px]">{roster.game_team_stats?.assists || 0}</td>
                                            <td className="border p-2 w-[80px]">{roster.game_team_stats?.rebounds || 0}</td>
                                            <td className="border p-2 w-[80px]">{roster.game_team_stats?.steals || 0}</td>
                                            <td className="border p-2 w-[80px]">{roster.game_team_stats?.blocks || 0}</td>
                                            <td className="border p-2 w-[80px]">{roster.game_team_stats?.turnovers || 0}</td>
                                            <td className="border p-2 w-[80px]">{roster.game_team_stats?.fouls || 0}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">{game.away_team.name}</h2>
                            <table className="min-w-full border-collapse border">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="border p-2 w-[200px]">Player</th>
                                        <th className="border p-2 w-[80px]">Jersey</th>
                                        <th className="border p-2 w-[120px]">Position</th>
                                        <th className="border p-2 w-[80px]">Points</th>
                                        <th className="border p-2 w-[80px]">Assists</th>
                                        <th className="border p-2 w-[80px]">Rebounds</th>
                                        <th className="border p-2 w-[80px]">Steals</th>
                                        <th className="border p-2 w-[80px]">Blocks</th>
                                        <th className="border p-2 w-[80px]">Turnovers</th>
                                        <th className="border p-2 w-[80px]">Fouls</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {awayTeamRosters.map(roster => (
                                        <tr key={roster.player.id} className="border text-center">
                                            <td className="border p-2 w-[200px]">{roster.player.first_name} {roster.player.last_name}</td>
                                            <td className="border p-2 w-[80px]">{roster.jersey_number}</td>
                                            <td className="border p-2 w-[120px]">{roster.position}</td>
                                            <td className="border p-2 w-[80px]">{roster.game_team_stats?.points || 0}</td>
                                            <td className="border p-2 w-[80px]">{roster.game_team_stats?.assists || 0}</td>
                                            <td className="border p-2 w-[80px]">{roster.game_team_stats?.rebounds || 0}</td>
                                            <td className="border p-2 w-[80px]">{roster.game_team_stats?.steals || 0}</td>
                                            <td className="border p-2 w-[80px]">{roster.game_team_stats?.blocks || 0}</td>
                                            <td className="border p-2 w-[80px]">{roster.game_team_stats?.turnovers || 0}</td>
                                            <td className="border p-2 w-[80px]">{roster.game_team_stats?.fouls || 0}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}
