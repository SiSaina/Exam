<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Basketball\StoreTeamRequest;
use App\Models\Basketball\Team;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminTeamController extends Controller
{
    public function index()
    {
        return Inertia::render('admin/team/index');
    }
    
    public function createTeam()
    {
        return Inertia::render('admin/team/create');
    }
    public function storeTeam(StoreTeamRequest $request): RedirectResponse
    {
        $validatedData = $request->validated();
        Team::create($validatedData);
        return to_route('admin.team')->with('success', 'Team created successfully.');
    }
}
