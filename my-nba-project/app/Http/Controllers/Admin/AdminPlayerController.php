<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminPlayerController extends Controller
{
    public function index()
    {
        return Inertia::render('admin/player/index');
    }

    public function createPlayer()
    {
        return Inertia::render('admin/player/create-player');
    }
    public function createRoster()
    {
        return Inertia::render('admin/player/create-roster');
    }
    public function createTeam()
    {
        return Inertia::render('admin/player/create-team');
    }
    public function createTeamCoach()
    {
        return Inertia::render('admin/player/create-team-coach');
    }

    public function edit($id)
    {
        return inertia('admin/player/edit', ['id' => $id]);
    }

    public function show($id)
    {
        return inertia('admin/player/show', ['id' => $id]);
    }
}
