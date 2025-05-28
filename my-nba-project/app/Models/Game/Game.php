<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    /** @use HasFactory<\Database\Factories\GameFactory> */
    use HasFactory;

    protected $fillable = [
        'date',
        'time',
        'home_team_id',
        'away_team_id',
        'home_team_point',
        'away_team_point'
    ];

    public function homeTeam()
    {
        return $this->belongsTo(Team::class, 'home_team_id');
    }
    public function awayTeam()
    {
        return $this->belongsTo(Team::class, 'away_team_id');
    }
    public function weekGames()
    {
        return $this->hasMany(WeekGame::class);
    }
    public function gameTeamStats()
    {
        return $this->hasMany(GameTeamStats::class);
    }
    public function gameRosterStats()
    {
        return $this->hasMany(GameRosterStats::class);
    }
}
