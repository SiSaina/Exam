<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Game\StoreGameRequest;
use App\Http\Requests\Game\StoreGameRosterStatsRequest;
use App\Http\Requests\Game\UpdateGameRosterStatsRequest;
use App\Models\Basketball\Roster;
use App\Models\Basketball\Team;
use App\Models\Game\Game;
use App\Models\Game\GameRosterStats;
use App\Models\Game\WeekGame;
use App\Models\Statistic\Season;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function Laravel\Prompts\alert;

class AdminGameController extends Controller
{
    public function createGame()
    {
        return Inertia::render('admin/game/create', [
            'teams' => Team::all(),
            'seasons' => Season::all()
        ]);
    }
    public function storeGame(StoreGameRequest $request)
    {
        $validatedData = $request->validated();
        $season = Season::findOrFail($validatedData['season_id']);
        $game = Game::create($validatedData);
        $weekNumber = max(1, ceil((strtotime($game->date) - strtotime($season->start_date)) / (7 * 24 * 60 * 60)));
        WeekGame::create([
            'name' => "Week {$weekNumber}",
            'game_id' => $game->id,
            'season_id' => $season->id,
        ]);

        return redirect()->route('admin.game')->with('success', 'Game and WeekGame created successfully!');
    }
    public function startGame($id)
    {
        $game = Game::with(['homeTeam', 'awayTeam'])->findOrFail($id);
        $teamIds = [$game->home_team_id, $game->away_team_id];
        $rosters = Roster::whereIn('team_id', $teamIds)
            ->with(['player', 'team', 'season', 'gameRosterStats'])
            ->get();
        foreach ($rosters as $roster) {
            GameRosterStats::firstOrCreate(
                ['roster_id' => $roster->id, 'game_id' => $game->id],
                ['points' => 0, 'assists' => 0, 'rebounds' => 0, 'steals' => 0, 'blocks' => 0, 'turnovers' => 0, 'fouls' => 0]
            );
        }
        return Inertia::render('admin/game/start', [
            'game' => $game,
            'rosters' => $rosters,
            'teams' => Team::whereIn('id', $teamIds)->get(),
        ]);
    }
    public function updateGameRosterStats(UpdateGameRosterStatsRequest $request)
    {
        $validatedData = $request->validated();
        dd($validatedData);
        $RosterStats->update($validatedData);
    }
    public function edit($id)
    {
        return Inertia::render('admin/game/edit', ['id' => $id]);
    }

    public function show($id)
    {
        return Inertia::render('admin/game/show', ['id' => $id]);
    }
    public function deleteGame($id)
    {
        $game = Game::findOrFail($id);
        if ($game->status === 'in_progress') {
            return redirect()->back()->with('error', 'Cannot delete a game that is in progress.');
        }

        $game->delete();
        return redirect()->route('admin.game')->with('success', 'Game deleted successfully!');
    }
}
