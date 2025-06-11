<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Game\Game;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function game()
    {
         return Inertia::render('admin/game', [
            'games' => Game::with(['homeTeam', 'awayTeam'])->get(),
         ]);
    }
    public function player()
    {
        return Inertia::render('admin/player');
    }
    public function team()
    {
        return Inertia::render('admin/team');
    }
    public function schedule()
    {
        return Inertia::render('admin/schedule');
    }
    public function news()
    {
        return Inertia::render('admin/news');
    }
    public function statistic()
    {
        return Inertia::render('admin/statistic');
    }
    public function user()
    {
        return Inertia::render('admin/user');
    }
}
