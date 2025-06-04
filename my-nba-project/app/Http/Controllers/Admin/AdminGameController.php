<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Game\StoreGameRequest;
use App\Models\Basketball\Team;
use App\Models\Game\Game;
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
    public function edit($id)
    {
        return Inertia::render('admin/game/edit', ['id' => $id]);
    }

    public function show($id)
    {
        return Inertia::render('admin/game/show', ['id' => $id]);
    }
}
