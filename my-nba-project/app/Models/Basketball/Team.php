<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    /** @use HasFactory<\Database\Factories\TeamFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'slug_two',
        'logo_url',
        'stadium',
        'city',
        'conference'
    ];

    public function rosters()
    {
        return $this->hasMany(Roster::class);
    }
    public function teamCoaches()
    {
        return $this->hasMany(TeamCoach::class);
    }
    public function homeGames()
    {
        return $this->hasMany(Game::class, 'home_team_id');
    }
    public function awayGames()
    {
        return $this->hasMany(Game::class, 'away_team_id');
    }
    public function gameTeamStats()
    {
        return $this->hasMany(GameTeamStats::class);
    }
    public function championships()
    {
        return $this->hasMany(Championship::class);
    }
}
