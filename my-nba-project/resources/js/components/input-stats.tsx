import { GameRosterStats, Roster } from "@/types";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

interface RosterWithStat extends Roster {
    game_team_stats: GameRosterStats;
}

export default function StatInput({ game, homeTeamRosters, awayTeamRosters }: { game: number, homeTeamRosters: RosterWithStat[], awayTeamRosters: RosterWithStat[] }) {
    const { data, setData, patch, reset } = useForm<{
        stat: string;
        game_id: number | null;
        roster_id: number | null;
        minutes_played: number;
        points: number;
        rebounds: number;
        assists: number;
        steals: number;
        blocks: number;
        turnovers: number;
        fouls: number;
    }>({
        stat: "points",
        game_id: game,
        roster_id: null,
        minutes_played: 0,
        points: 0,
        rebounds: 0,
        assists: 0,
        steals: 0,
        blocks: 0,
        turnovers: 0,
        fouls: 0,
    });

    const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

    function handlePlayerSelect(rosterId: number, team: string) {
        setData("roster_id", rosterId);
        setSelectedTeam(team);
    }

    function handleStatChange(stat: keyof typeof data, increment: number = 1) {
        if (stat === "points") {
            setData("points", Math.max((data.points ?? 0) + increment, 0));
        } else {
            setData(stat, Math.max((isNaN(Number(data[stat])) ? 0 : Number(data[stat])) + 1, 0));
        }
    }

    function handleSubmit() {
        if (!data.game_id || !data.roster_id) return alert("Please select a game and a player!");

        patch(route("admin.game.update-roster-stats"), {
            onSuccess: () => {
                alert("Player stats updated successfully!");
                reset();
                setSelectedTeam(null);
            },
            onError: (error) => {
                console.error("Error updating player stats:", error);
                alert("Failed to update player stats. Please try again.");
            },
        });
    }

    return (
        <div className="mt-6 p-4 border rounded-lg bg-gray-100">
            <h2 className="text-xl font-bold mb-4">Update Player Stats</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="font-medium mb-1">Select Home Team Player:</p>
                    <select className="border p-2 w-full mb-2" value={selectedTeam === "home" ? data.roster_id ?? "" : ""} onChange={(e) => handlePlayerSelect(Number(e.target.value), "home")}>
                        <option value="">Select Player</option>
                        {homeTeamRosters.map(roster => (
                            <option key={roster.id} value={roster.id}>{roster.player.first_name} {roster.player.last_name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <p className="font-medium mb-1">Select Away Team Player:</p>
                    <select className="border p-2 w-full mb-2" value={selectedTeam === "away" ? data.roster_id ?? "" : ""} onChange={(e) => handlePlayerSelect(Number(e.target.value), "away")}>
                        <option value="">Select Player</option>
                        {awayTeamRosters.map(roster => (
                            <option key={roster.id} value={roster.id}>{roster.player.first_name} {roster.player.last_name}</option>
                        ))}
                    </select>
                </div>
            </div>

            <p className="font-medium mb-1">Select a Stat to Update:</p>
            <select className="border p-2 w-full mb-2" onChange={(e) => setData("stat", e.target.value)}>
                {["points", "assists", "rebounds", "steals", "blocks", "turnovers", "fouls"].map(stat => (
                    <option key={stat} value={stat}>{stat.charAt(0).toUpperCase() + stat.slice(1)}</option>
                ))}
            </select>

            {data.stat === "points" ? (
                <div className="flex space-x-2 mb-2">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700" onClick={() => handleStatChange("points", 1)}>+1 Point</button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 active:bg-blue-800" onClick={() => handleStatChange("points", 2)}>+2 Points</button>
                    <button className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 active:bg-blue-900" onClick={() => handleStatChange("points", 3)}>+3 Points</button>
                </div>
            ) : (
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700" onClick={() => handleStatChange(data.stat as keyof typeof data)}>+1 {data.stat}</button>
            )}

            <p className="font-medium mb-1">Enter Minutes Played:</p>
            <input type="number" className="border p-2 w-full mb-2" value={data.minutes_played} onChange={(e) => setData("minutes_played", Number(e.target.value))} placeholder="Minutes played"/>

            <button className="px-4 py-2 bg-green-500 text-white rounded w-full mt-2 hover:bg-green-600" onClick={handleSubmit}>Submit Stat</button>
        </div>
    );
}
