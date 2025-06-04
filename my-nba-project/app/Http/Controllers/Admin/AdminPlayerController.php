<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Basketball\StorePlayerRequest;
use App\Http\Requests\Basketball\StoreCoachRequest;
use App\Http\Requests\Basketball\StoreRosterRequest;
use App\Http\Requests\Basketball\StoreTeamCoachRequest;
use App\Http\Requests\Basketball\StoreTeamRequest;
use App\Models\Basketball\Coach;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use App\Models\Basketball\Player;
use App\Models\Basketball\Roster;
use App\Models\Basketball\Team;
use App\Models\Basketball\TeamCoach;
use App\Models\Statistic\Season;

class AdminPlayerController extends Controller
{
    public function createPlayer()
    {
        return Inertia::render('admin/player/create');
    }
    public function createCoach()
    {
        return Inertia::render('admin/coach/create');
    }
    public function createRoster()
    {
        return Inertia::render('admin/roster/create', [
            'teams' => Team::all(),
            'players' => Player::all(),
            'seasons' => Season::all(),
        ]);
    }
    public function createTeamCoach()
    {
        return Inertia::render('admin/team-coach/create', [
            'teams' => Team::all(),
            'coaches' => Coach::all(),
            'seasons' => Season::all(),
        ]);
    }
    public function storePlayer(StorePlayerRequest $request): RedirectResponse
    {
        $validatedData = $request->validated();
        Player::create($validatedData);

        return to_route('admin.player')->with('success', 'Player created successfully.');
    }
    public function storeCoach(StoreCoachRequest $request): RedirectResponse
    {
        $validatedData = $request->validated();
        Coach::create($validatedData);

        return to_route('admin.player')->with('success', 'Coach created successfully.');
    }
    public function storeRoster(StoreRosterRequest $request): RedirectResponse
    {
        $validatedData = $request->validated();
        Roster::create($validatedData);
        return to_route('admin.player')->with('success', 'Roster created successfully.');
    }
    public function storeTeamCoach(StoreTeamCoachRequest $request): RedirectResponse
    {
        $validatedData = $request->validated();
        TeamCoach::create($validatedData);
        return to_route('admin.player')->with('success', 'Team coach created successfully.');
    }
}
